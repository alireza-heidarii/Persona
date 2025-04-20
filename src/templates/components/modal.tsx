'use client'

import React, { FC, useEffect, useState } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setIsVisible(true);
        } else {
            setIsVisible(false);
            const timer = setTimeout(() => {
                document.body.style.overflow = 'auto';
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const handleClose = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen && !isVisible) return null;

    return (
        <div
            className={`fixed inset-0 h-screen bg-black bg-opacity-50 flex justify-center items-center z-[9999] 
                transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleClose}
        >
            <div
                className={`bg-white py-6 px-1 rounded-lg shadow-lg w-1/2 max-md:w-[95%] max-h-[90vh] 
                    overflow-x-hidden overflow-y-auto transition-all duration-300 
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
                <div className="relative h-full">
                    <button
                        className="absolute top-[-20px] right-[5px] text-gray-500 text-[30px] hover:text-gray-700 transition-colors"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;