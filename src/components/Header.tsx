import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Manufacturing', href: '/manufacturing' },
    { name: 'Branches', href: '/branches' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>Hotline: +94 11 123 4567</span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Head Office: Borelasgamuwa</span>
            </div>
          </div>
          <div className="text-xs">
            19+ Years of Trust | 8+ Outlets | 100+ Employees
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary to-ayur-sage p-2 rounded-lg">
              <span className="text-primary-foreground font-bold text-xl">SHG</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg text-primary">Hela Osu</h1>
              <p className="text-xs text-muted-foreground">Ayurvedic Products</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) 
                    ? 'text-primary border-b-2 border-primary pb-1' 
                    : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button size="sm" className="bg-gradient-to-r from-ayur-gold to-accent text-accent-foreground hover:shadow-lg">
              Order Online
            </Button>
            <Button variant="outline" size="sm">
              Find Branch
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary px-2 py-1 ${
                    isActive(item.href) ? 'text-primary bg-secondary rounded' : 'text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-3 border-t border-border">
                <Button size="sm" className="bg-gradient-to-r from-ayur-gold to-accent text-accent-foreground">
                  Order Online
                </Button>
                <Button variant="outline" size="sm">
                  Find Branch
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;