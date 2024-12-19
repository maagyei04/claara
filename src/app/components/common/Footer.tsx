import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p>&copy; {new Date().getFullYear()} Claara Inc. All rights reserved.</p>
                </div>
            </div>
            <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-400">
                    <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a href="#" className="hover:text-gray-400">
                    <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a href="#" className="hover:text-gray-400">
                    <i className="fab fa-instagram fa-2x"></i>
                </a>
            </div>
        </footer >
    );
};

export default Footer;