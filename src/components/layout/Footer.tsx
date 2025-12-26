import { Link } from "react-router-dom";
import { Mail, Instagram } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Solutions", href: "/solutions" },
    { name: "Use Cases", href: "/use-cases" },
    { name: "Pricing", href: "/pricing" },
  ],
  resources: [
    { name: "Contact", href: "/contact" },
    { name: "Book a Call", href: "/contact" },
  ],
};

const INSTAGRAM_URL = "https://www.instagram.com/neroflow.ai/";
const GMAIL_COMPOSE_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=neroflow.ai@gmail.com";

const socialLinks = [
  { icon: Instagram, href: INSTAGRAM_URL, label: "Instagram" },
  { icon: Mail, href: GMAIL_COMPOSE_URL, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="container-wide mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-lg">
                  N
                </span>
              </div>
              <span className="font-display font-semibold text-lg text-foreground">
                Neroflow<span className="text-primary">.ai</span>
              </span>
            </a>

            <p className="text-muted-foreground text-sm max-w-md mb-4">
              Strategic automation partner for modern businesses. We design and
              implement automation systems that deliver measurable business
              outcomes.
            </p>
            <p className="text-primary font-display text-sm italic">
              "where business meet automation"
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Get Started
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4">
            <div className="hidden sm:block" />

            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Neroflow Consulting. All rights
              reserved.
            </p>

            {/* <div className="flex items-center justify-center sm:justify-end gap-6 text-sm">
              <Link
                to="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
