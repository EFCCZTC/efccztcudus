import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: 'Home', href: '#home' },
    { 
      label: 'About Us', 
      href: '#about',
      dropdown: [
        { label: 'Our Mission', href: '#mission' },
        { label: 'Our Vision', href: '#vision' },
        { label: 'Core Values', href: '#values' }
      ]
    },
    { 
      label: 'Leadership', 
      href: '#leadership',
      dropdown: [
        { label: 'Current Leadership', href: '#current-leadership' },
        { label: 'Past Leadership', href: '#past-leadership' }
      ]
    },
    { label: 'Our Patrons & Staff Advisers', href: '#patrons' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Report Corruption', href: '#report' },
    { label: 'Resources', href: '#resources' },
    { label: 'Verify Certificate', href: '#verify' },
    { label: 'Join Us', href: '#join' },
    { label: 'Our Custodians & Network', href: '#network' },
    { label: 'News & Updates', href: '#news' },
    { label: 'Contact Us', href: '#contact' }
  ];

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-soft' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-max section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
              <span className="text-white font-bold text-xl">EFCC</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-accent">EFCC-ZTC UDUS</h1>
              <p className="text-sm text-muted-foreground">Zero Tolerance Club</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative">
                {item.dropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="flex items-center text-foreground hover:text-primary transition-colors duration-200">
                      {item.label}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-elegant py-2 z-50">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-foreground hover:bg-secondary hover:text-primary transition-colors duration-200"
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className="flex items-center justify-between w-full py-2 text-left text-foreground hover:text-primary transition-colors duration-200"
                      >
                        {item.label}
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            openDropdown === item.label ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      {openDropdown === item.label && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <a
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              className="block py-1 text-muted-foreground hover:text-primary transition-colors duration-200"
                            >
                              {dropdownItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block py-2 text-foreground hover:text-primary transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;