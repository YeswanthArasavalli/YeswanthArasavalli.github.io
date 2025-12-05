import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    // 1) Send email via FormSubmit
    try {
      const formsubmitRes = await fetch(
        `https://formsubmit.co/ajax/${process.env.FORMSUBMIT_EMAIL}`,
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
        console.error("FormSubmit error:", await formsubmitRes.text());
      }
    } catch (err) {
      console.error("FormSubmit request failed:", err);
    }

    // 2) Send Telegram notification
    try {
      const telegramRes = await fetch(
        `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: process.env.TELEGRAM_CHAT_ID,
            text: `📩 New contact form submission:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          }),
        }
      );

      if (!telegramRes.ok) {
        console.error("Telegram error:", await telegramRes.text());
      }
    } catch (err) {
      console.error("Telegram request failed:", err);
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}
