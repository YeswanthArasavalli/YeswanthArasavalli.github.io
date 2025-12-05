import { Link } from "react-router-dom";
import { Mail, MessageCircle, Linkedin, Github, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Top grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="space-y-4">
                <span className="text-xl font-bold text-gradient">
                  Yeswanth Arasavalli
                </span>
                <p className="text-sm text-white">
                  Data Analyst &amp; AI Explorer
                  <br />
                  helping businesses transform data into actionable insights.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Quick Links</h4>
              <nav className="flex flex-col gap-2">
                <Link
                  to="/about"
                  className="text-sm text-white hover:text-primary transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/services"
                  className="text-sm text-white hover:text-primary transition-colors"
                >
                  Services
                </Link>
                <Link
                  to="/blog"
                  className="text-sm text-white hover:text-primary transition-colors"
                >
                  Blog
                </Link>
                <Link
                  to="/contact"
                  className="text-sm text-white hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Contact</h4>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:yeswanthdatalabs@gmail.com"
                  className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  yeswanthdatalabs@gmail.com
                </a>
                <a
                  href="https://wa.me/+918500251322"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
                <div className="flex items-center gap-2 text-sm text-white">
                  <MapPin className="h-4 w-4" />
                  India (IST)
                </div>
                <div className="flex items-center gap-2 text-sm text-white">
                  <Clock className="h-4 w-4" />
                  Mon-Fri, 9AM-6PM IST
                </div>
              </div>
