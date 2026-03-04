import { Building2, MapPin, Phone, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Our Clients", href: "#clients" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Civil Engineering",
    "Building Construction",
    "Road Construction",
    "Bridge Construction",
    "Estate Development",
    "Project Management",
  ];

  return (
    <footer className="bg-construction-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-8 h-8 text-accent" />
              <div>
                <div className="text-xl font-black">SUNO-SAMO</div>
                <div className="text-xs text-white/70 italic">Nigeria Limited</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              A forward-looking construction company with a proven track record 
              of successfully completed projects within the Nigerian business landscape.
            </p>
            <div className="text-sm text-white/70">
              RC No: 672952
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-white/70 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-5 h-5 shrink-0 text-accent" />
                <span>2, Ojogbo Street, Okpanam Road, Asaba, Delta State</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Phone className="w-5 h-5 shrink-0 text-accent" />
                <span>+234 XXX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Mail className="w-5 h-5 shrink-0 text-accent" />
                <span>info@sunosamo.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm text-center md:text-left">
            © {new Date().getFullYear()} SUNO-SAMO Nigeria Limited. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-white/10 hover:bg-accent text-white hover:text-accent-foreground px-4 py-2 rounded-md transition-colors text-sm font-medium"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
