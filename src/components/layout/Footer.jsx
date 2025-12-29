import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { socialLinks as socialData } from '../../data/social';

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, url: socialData.github, label: 'GitHub' },
    { icon: FaLinkedin, url: socialData.linkedin, label: 'LinkedIn' },
    { icon: FaEnvelope, url: `mailto:${socialData.email}`, label: 'Email' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-secondary/60 backdrop-blur-sm border-t border-dark-accent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Lucas Stone's Portfolio</h3>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Education', 'Projects', 'Skills', 'Contact'].map((link) => (
                <Link
                  key={link}
                  to={link.toLowerCase() === 'home' ? 'hero' : link.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-64}
                  className="block text-gray-400 hover:text-primary-500 cursor-pointer transition-colors text-sm"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-400 hover:text-primary-500 transition-colors transform hover:scale-110 duration-300"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-dark-accent text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Lucas Stone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
