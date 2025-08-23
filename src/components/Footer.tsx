import { Link } from "react-router-dom";
import { Mail, MapPin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold text-agribiz-blue">
                Inovasi Agribiz
              </span>
            </div>
            
            <Link 
              to="/faq" 
              className="text-primary hover:text-primary-light transition-colors mb-6 inline-block"
            >
              FAQ (Frequently Asked Questions)
            </Link>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              CONTACT US
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Jl. Anggrek No.6, Pontianak City, West Kalimantan
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:helpdesk@earthqualizer.org"
                  className="text-primary hover:text-primary-light transition-colors"
                >
                  helpdesk@earthqualizer.org
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © Copyright{" "}
            <span className="font-semibold text-agribiz-blue">
              Agribiz - Corporate Profile
            </span>
            . All Rights Reserved
          </p>
          
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Link
              to="/privacy"
              className="text-primary hover:text-primary-light transition-colors text-sm"
            >
              Privacy & Policy
            </Link>
            
            <Button
              onClick={scrollToTop}
              size="sm"
              className="bg-primary hover:bg-primary-dark text-white rounded-full w-10 h-10 p-0"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;