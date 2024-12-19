import React, { ReactNode } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { FaWhatsapp } from 'react-icons/fa';

type LayoutProps = {
    children: ReactNode;
};

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="main-layout relative">
            <Header />
            <div className="main-content">
                <main>{children}</main>
            </div>
            <Footer />
            <a
                href="https://wa.me/0541190955"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-3 hover:bg-green-600 transition-colors"
            >
                <FaWhatsapp size={30} />
            </a>
        </div>
    );
};

export default MainLayout;