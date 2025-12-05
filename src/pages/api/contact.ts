import type { NextApiRequest, NextApiResponse } from "next";

type SuccessResponse = { ok: true };
type ErrorResponse = { error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const FORMSUBMIT_EMAIL = process.env.FORMSUBMIT_EMAIL;
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  // 🔐 Make sure all env vars exist
  if (!FORMSUBMIT_EMAIL || !TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error("Missing env vars:", {
      FORMSUBMIT_EMAIL: !!FORMSUBMIT_EMAIL,
      TELEGRAM_BOT_TOKEN: !!TELEGRAM_BOT_TOKEN,
      TELEGRAM_CHAT_ID: !!TELEGRAM_CHAT_ID,
    });
    return res.status(500).json({ error: "Server env not configured" });
  }

  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    // 1) Send email via FormSubmit
    try {
      const formsubmitRes = await fetch(
        `https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );

      if (!formsubmitRes.ok) {
        const text = await formsubmitRes.text();
        console.error("FormSubmit error:", text);
      }
    } catch (err) {
      console.error("FormSubmit request failed:", err);
    }

    // 2) Send Telegram notification
    try {
      const telegramRes = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: `📩 New contact form submission:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          }),
        }
      );

      if (!telegramRes.ok) {
        const text = await telegramRes.text();
        console.error("Telegram error:", text);
      }
    } catch (err) {
      console.error("Telegram request failed:", err);
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Unexpected server error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
