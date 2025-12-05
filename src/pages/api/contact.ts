// src/pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjknoaap";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Just log the method while debugging
  console.log("[/api/contact] method =", req.method);

  if (req.method !== "POST") {
    // Don't break the app, just say it's not allowed
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body ?? {};

    const params = new URLSearchParams();
    if (name) params.append("name", String(name));
    if (email) params.append("email", String(email));
    if (message) params.append("message", String(message));
    params.append("_subject", "New portfolio contact");

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
      const messageFromFs =
        data?.errors?.[0]?.message || "Failed to send message via Formspree.";
      return res.status(400).json({ ok: false, message: messageFromFs });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return res
      .status(500)
      .json({ ok: false, message: "Server error while sending message." });
  }
}
