import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Sectors", href: "/sectors" },
    { name: "Future Plans", href: "/future-plans" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'backdrop-glass border-b border-white/10 shadow-elevated' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <span className={`text-2xl font-heading font-bold transition-colors duration-300 ${
                isScrolled ? 'text-primary' : 'text-white'
              } group-hover:text-accent`}>
                Hour-Glass
              </span>
            </NavLink>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `relative font-body font-medium transition-all duration-300 px-3 py-2 rounded-lg group ${
                      isActive
                        ? `${isScrolled ? 'text-accent' : 'text-accent'} bg-accent/10`
                        : `${isScrolled ? 'text-foreground hover:text-accent' : 'text-white/90 hover:text-accent'} hover:bg-accent/5`
                    }`
                  }
                >
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden md:block">
            <Button variant="accent" size="default" className="hover-lift pulse-glow">
              <Sparkles className="mr-2 h-4 w-4" />
              Get Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `block px-3 py-2 font-body font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-accent bg-accent/10"
                        : "text-foreground hover:text-accent hover:bg-accent/5"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="px-3 py-2">
                <Button variant="accent" size="sm" className="w-full">
                  Get Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;