import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import { IconWrapper, IconWithClass } from '../ui/IconComponent';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <IconWithClass icon={FaShoppingBag} className="text-2xl text-primary" />
              <span className="ml-2 text-xl font-bold">GadgetHeaven</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your go-to destination for the latest and greatest gadgets. Discover cutting-edge technology at competitive prices.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<IconWrapper icon={FaFacebook} />} href="https://facebook.com" />
              <SocialIcon icon={<IconWrapper icon={FaTwitter} />} href="https://twitter.com" />
              <SocialIcon icon={<IconWrapper icon={FaInstagram} />} href="https://instagram.com" />
              <SocialIcon icon={<IconWrapper icon={FaLinkedin} />} href="https://linkedin.com" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/dashboard" label="Dashboard" />
              <FooterLink href="/stats" label="Stats" />
            </ul>
          </div>
          
          {/* Categories */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <FooterLink href="/#computers" label="Computers" />
              <FooterLink href="/#phones" label="Phones" />
              <FooterLink href="/#smartwatches" label="Smart Watches" />
              <FooterLink href="/#chargers" label="Chargers" />
              <FooterLink href="/#powerbanks" label="Power Banks" />
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">123 Tech Street</p>
              <p className="mb-2">DHAKA,BANGLADESH</p>
              <p className="mb-2">Email: mdsami812000@gmail.com</p>
              <p>Phone: +x xxxxxxxx</p>
            </address>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {currentYear} GadgetHeaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

type SocialIconProps = {
  icon: React.ReactNode;
  href: string;
};

const SocialIcon = ({ icon, href }: SocialIconProps) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors duration-200"
  >
    {icon}
  </a>
);

type FooterLinkProps = {
  href: string;
  label: string;
};

const FooterLink = ({ href, label }: FooterLinkProps) => (
  <li>
    <Link 
      to={href} 
      className="text-gray-400 hover:text-primary transition-colors duration-200"
    >
      {label}
    </Link>
  </li>
);

export default Footer;