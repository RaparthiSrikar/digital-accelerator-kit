import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import title from "../assets/title.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <img src={title} alt="Logo" className="h-10 w-40 inline-block mr-2" />
            </h3>
            <p className="text-sm opacity-80">
              Empowering your Digital Growth with 5+ years of experience.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Website Design</li>
              <li>Digital Marketing</li>
              <li>SEO Services</li>
              <li>E-commerce</li>
              <li>Branding</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>hr@digital-itsolutions.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>1st Floor, IT Tower, Nalgonda, Telangana, 508001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2024 Digital IT & Media Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
