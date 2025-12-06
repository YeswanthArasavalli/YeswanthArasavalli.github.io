"use client";

import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjknoaap";

export default function Contact() {
  const whatsappNumberDisplay = "Yeswanth";
  // wa.me number should NOT have +
  const whatsappNumber = "918500251322";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Optional: add subject for Formspree
    formData.append("_subject", "New portfolio contact");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (res.ok) {
        setIsSuccess(true);
        form.reset();
      } else {
        const data = await res.json().catch(() => null);
        const msg =
          data?.errors?.[0]?.message ||
          "Something went wrong while sending your message. Please try again.";
        setError(msg);
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Layout>
      <div className="min-h-[calc(100vh-200px)] bg-gradient-to-b from-background via-background/80 to-muted/30">
        <main className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <section className="mb-12 text-center space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1 text-xs font-medium text-muted-foreground mb-4">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-3 w-3 text-primary" />
                </span>
                Open to freelance opportunities and collaborations
              </div>

              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                Let&apos;s work together
              </h1>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Have a project in mind or want to collaborate? Share a few
                details and you&apos;ll get a response within 24 hours.
              </p>
            </section>

            <div className="grid gap-10 md:grid-cols-[1.2fr,1fr] items-start">
              {/* Form */}
              <section className="rounded-2xl border border-border bg-card/80 p-6 md:p-8 shadow-soft backdrop-blur">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Name
                      </label>
                      <Input name="name" placeholder="Your name" required maxLength={100} />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Email
                      </label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        maxLength={255}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project, timeline, or questions..."
                      rows={6}
                      required
                      maxLength={1000}
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>

                  {isSuccess && (
                    <p className="text-xs text-emerald-500 text-center">
                      Thanks for reaching out! Your message has been sent.
                    </p>
                  )}

                  {error && (
                    <p className="text-xs text-red-500 text-center">{error}</p>
                  )}

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, your message will be securely
                    delivered to my inbox.
                  </p>
                </form>
              </section>

              {/* Contact Info */}
              <section className="space-y-6">
                <div className="rounded-2xl border border-border bg-card/60 p-6">
                  <h2 className="mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-[0.18em]">
                    Contact details
                  </h2>

                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <Mail className="h-4 w-4 text-primary" />
                      <a
                        href="mailto:yeswanthdatalabs@gmail.com"
                        className="font-medium hover:text-primary transition-colors"
                      >
                        yeswanthdatalabs@gmail.com
                      </a>
                    </div>

                    <div className="flex items-start gap-3">
                      <MessageCircle className="h-4 w-4 text-primary" />
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:text-primary transition-colors"
                      >
                        Chat on WhatsApp ({whatsappNumberDisplay})
                      </a>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-primary" />
                      <p className="font-medium">India (IST)</p>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="h-4 w-4 text-primary" />
                      <p className="font-medium">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
