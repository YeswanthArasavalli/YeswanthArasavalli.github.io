import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  const whatsappNumber = "+916303321322";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const [isSubmitting, setIsSubmitting] = useState(false);

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
              {/* Form (FormSubmit) */}
              <section className="rounded-2xl border border-border bg-card/80 p-6 md:p-8 shadow-soft backdrop-blur">
                <form
                  action="https://formsubmit.co/yeswanthdatalabs@gmail.com"
                  method="POST"
                  className="space-y-6"
                >
                  {/* FormSubmit config */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_subject"
                    value="New portfolio contact"
                  />
                  <input
                    type="hidden"
                    name="_template"
                    value="table"
                  />
                  {/* optional redirect after submit */}
                  <input
                    type="hidden"
                    name="_next"
                    value="https://yeswanth-projects.vercel.app/contact"
                  />

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        maxLength={100}
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        maxLength={255}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-foreground"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project, collaboration, or question"
                      required
                      maxLength={150}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, timeline, or questions..."
                      rows={6}
                      required
                      maxLength={1000}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, your message will be securely
                    delivered to my inbox.
                  </p>
                </form>
              </section>

              {/* Contact info */}
              <section className="space-y-6">
                <div className="rounded-2xl border border-border bg-card/60 p-6">
                  <h2 className="mb-4 text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                    Contact details
                  </h2>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 rounded-lg bg-primary/10 p-2">
                        <Mail className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                          Email
                        </p>
                        <a
                          href="mailto:yeswanthdatalabs@gmail.com"
                          className="font-medium hover:text-primary transition-colors"
                        >
                          yeswanthdatalabs@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 rounded-lg bg-primary/10 p-2">
                        <MessageCircle className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                          WhatsApp
                        </p>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:text-primary transition-colors"
                        >
                          Chat on WhatsApp
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 rounded-lg bg-primary/10 p-2">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                          Location
                        </p>
                        <p className="font-medium">India (IST)</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 rounded-lg bg-primary/10 p-2">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                          Response time
                        </p>
                        <p className="font-medium">Within 24 hours</p>
                      </div>
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
