import { Menu, X } from "lucide-react";
import { Button } from "../components/Button";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuopen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }  z-50`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
          PM <span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">{link.label}</a>
            ))}
          </div>
        </div>

        {/* cta btn */}
        <div>
          <Button size="sm" className="hidden md:block">Contact Me</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setIsMobileMenuopen((prev) => !prev)}>
          {isMobileMenuOpen ? <X size={24}/> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && <div className="md:hidden glass-strong animate-fade-in">
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <a href={link.href} key={index} 
            onClick={() => setIsMobileMenuopen(false)}
            className="text-lg text-mutated-foreground hover:text-foreground">
              {link.label}
              </a>
          ))}
          <Button  className="hidden md:block">Contact Me</Button>
        </div>
      </div>}

    </header>
  )
}