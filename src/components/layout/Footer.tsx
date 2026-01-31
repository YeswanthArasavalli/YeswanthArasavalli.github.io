import { Link } from "react-router-dom";
import { Mail, MessageCircle, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">Yeswanth Arasavalli</h3>
            <p className="text-sm text-white/90 max-w-md">
              Analytics, dashboards, and applied machine learning solutions for
              real business and operational problems.
            </p>
          </div>

          <nav className="flex flex-wrap gap-4 text-sm">
            <Link to="/projects" className="hover:text-primary transition-colors">
              Projects
            </Link>
            <Link to="/services" className="hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        {/* Bottom row */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/80">
            © {new Date().getFullYear()} Yeswanth Arasavalli. All rights reserved.
          </p>

          <div className="flex gap-4 items-center">
            <a
              href="mailto:yeswantharasavalli@gmail.com"
              className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>

            <a
              href="https://wa.me/916303321322"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>

            <a
              href="https://github.com/YeswanthArasavalli"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/yeswanth-arasavalli/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
