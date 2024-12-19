// components/WaitlistModal.tsx
import React, { useState } from 'react';
import Image from 'next/image';

interface WaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission, e.g., send email to server
        console.log('Email:', email);
        // Reset email state and close modal
        setEmail('');
        onClose();
    };

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? 'block' : 'hidden'
                }`}
        >
            <div className="bg-black rounded-xl shadow-2xl p-8 w-full max-w-4xl md:max-w-2xl">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-3xl font-bold text-white">Join the Waitlist</h2>
                        <h3 className="text-xl font-bold text-white">Be the first to experience the future!</h3>
                    </div>
                    <Image
                        src="/images/clara_logo.png"
                        alt="Logo"
                        width={150}
                        height={150}
                    />
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-700 rounded-lg px-4 py-3 w-full mb-6 bg-black text-white"
                        required
                    />
                    <div className="flex justify-end flex-col md:flex-row">
                        <button
                            type="button"
                            onClick={onClose}
                            className="mb-4 md:mb-0 md:mr-4 px-6 py-3 bg-gray-700 text-white rounded-lg"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg"
                        >
                            Join
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default WaitlistModal;