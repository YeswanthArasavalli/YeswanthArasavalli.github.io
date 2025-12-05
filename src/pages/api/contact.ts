// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjknoaap";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  try {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(req.body ?? {})) {
      if (value !== undefined && value !== null) {
        params.append(key, String(value));
      }
    }

    const fsRes = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: params.toString(),
    });

    if (!fsRes.ok) {
      const data = await fsRes.json().catch(() => null);
      const message =
        data?.errors?.[0]?.message || "Failed to send message via Formspree.";
      return res.status(400).json({ ok: false, message });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return res
      .status(500)
      .json({ ok: false, message: "Server error while sending message." });
  }
}
