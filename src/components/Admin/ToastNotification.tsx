// src/components/ToastNotification.tsx
import React, { useEffect } from 'react';

interface ToastNotificationProps {
    message: string;
    onClose: () => void;
}

const ToastNotification: React.FC<ToastNotificationProps> = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000); // Đóng toast sau 3 giây

        return () => clearTimeout(timer); // Dọn dẹp timer khi component unmount
    }, [onClose]);

    return (
        <div className="fixed right-5 top-5 bg-green-500 text-white p-4 rounded shadow-md z-50">
            {message}
        </div>
    );
};

export default ToastNotification;
