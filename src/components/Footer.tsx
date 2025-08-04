import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Hour-Glass</h3>
            <p className="font-body text-sm opacity-90">
              Professional project planning consulting delivering clarity, integrity, 
              precision, and prevention to protect your time, cost, and reputation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <a href="/about" className="opacity-90 hover:opacity-100 transition-opacity">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="opacity-90 hover:opacity-100 transition-opacity">
                  Services
                </a>
              </li>
              <li>
                <a href="/sectors" className="opacity-90 hover:opacity-100 transition-opacity">
                  Sectors
                </a>
              </li>
              <li>
                <a href="/contact" className="opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 font-body text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 opacity-90" />
                <span className="opacity-90">+27 (0) 81 591 6549</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 opacity-90" />
                <span className="opacity-90">info@hour-glass.co.za</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 opacity-90" />
                <span className="opacity-90">Johannesburg, South Africa</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="font-body text-sm opacity-80">
            © 2024 Hour-Glass. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;