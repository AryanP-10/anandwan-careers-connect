
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "For Job Seekers", path: "/job-seekers" },
    { name: "For Employers", path: "/employers" },
    { name: "About Anandwan", path: "/about" },
  ];

  return (
    <nav className="bg-white border-b border-anandwan-100 shadow-sm py-4 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-2xl text-anandwan-600">
              Anandwan Careers Connect
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-anandwan-800 hover:text-anandwan-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-anandwan-500 hover:bg-anandwan-600">
              Sign In
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="text-anandwan-800 hover:text-anandwan-500 transition-colors text-lg"
                      onClick={closeMenu}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button className="bg-anandwan-500 hover:bg-anandwan-600 mt-4 w-full">
                    Sign In
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
