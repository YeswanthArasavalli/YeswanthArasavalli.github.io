import { Link } from "react-router-dom";
import { Mail, MessageCircle, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top row */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-white">
              Data Analyst &amp; AI Explorer
              <br />
              helping businesses transform data into actionable insights.
            </p>
          </div>

          <nav className="flex gap-4 text-sm">
            <Link to="/about" className="text-white hover:text-primary">
              About
            </Link>
            <Link to="/services" className="text-white hover:text-primary">
              Services
            </Link>
            <Link to="/blog" className="text-white hover:text-primary">
              Blog
            </Link>
            <Link to="/contact" className="text-white hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>

        {/* Bottom row */}
        <div className="mt-6 pt-4 border-t border-border flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white">
            © {new Date().getFullYear()} Yeswanth Arasavalli. All rights reserved.
          </p>

          <div className="flex gap-4 justify-start md:justify-end">
            <a
              href="mailto:yeswanthdatalabs@gmail.com"
              className="flex items-center gap-2 text-sm text-white hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
            <a
              href="https://wa.me/+918500251322"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href="https://github.com/YeswanthArasavalli"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/yeswanth-arasavalli/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
