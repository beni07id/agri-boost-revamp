import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-lg bg-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold text-agribiz-blue">
              Inovasi Agribiz
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors ${
                isActive("/")
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                <span>Features</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/company-search">Company Search</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/features">Corporate Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/sra-summary">SRA Assessment</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/contact"
              className={`transition-colors ${
                isActive("/contact")
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              Contact
            </Link>

            <Link
              to="/faq"
              className={`transition-colors ${
                isActive("/faq")
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              FAQ
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  Account
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/company-search"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Company Search
              </Link>
              <Link
                to="/features"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                to="/contact"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/faq"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;