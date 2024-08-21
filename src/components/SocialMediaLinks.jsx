import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const SocialMediaLinks = () => {
    const socialLinks = [
        { name: 'GitHub', icon: Github, url: 'https://github.com/FahdAzouz' },
        { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/fahd-azouz/' },
        { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/FahdAzouz' },
        { name: 'Email', icon: Mail, url: 'mailto:fahdstudies00@gmail.com' },
    ];

    return (
        <div className="flex space-x-4">
            {socialLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutrals-300 hover:text-primary transition-colors"
                    aria-label={link.name}
                >
                    <link.icon size={24} />
                </a>
            ))}
        </div>
    );
};

export default SocialMediaLinks;