import React from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: <IconBrandGithub size={24} stroke={1.5} />,
      href: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: <IconBrandLinkedin size={24} stroke={1.5} />,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      icon: <IconBrandX size={24} stroke={1.5} />,
      href: "https://twitter.com/yourusername",
      label: "Twitter",
    },
    {
      icon: <IconMail size={24} stroke={1.5} />,
      href: "mailto:your.email@example.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-black text-white py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-lg">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>

          <div className="flex items-center space-x-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors duration-200"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
