import React, { useState } from 'react';
import { useContact } from '../../../context/ContactContext'; // Use the correct hook
import { IContact } from '../../../interfaces/IUser'; // Ensure this points to the correct interface file
import { ToastContainer, toast } from 'react-toastify'; // Import toast components
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const ContactPage: React.FC = () => {
    const { submitContact, loading, error } = useContact();
    const [formData, setFormData] = useState<IContact>({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await submitContact(formData);

        if (result) { // Assuming submitContact returns true on success
            toast.success('Gửi thành công!'); // Show success toast
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                address: '',
                message: '',
            }); // Reset form after submission
        } else {
            toast.error('Gửi không thành công!'); // Show error toast if needed
        }
    };

    return (
        <div className="container mx-auto px-4 py-14 mt-10 lg:mt-28">
            {error && <p className="text-red-500 text-center">{error}</p>}
            
            {/* Toast container for notifications */}
            <ToastContainer 
                position="top-right" 
                autoClose={2000} 
                hideProgressBar={false} 
                newestOnTop={false} 
                closeOnClick 
                rtl={false} 
                pauseOnFocusLoss 
                draggable 
                pauseOnHover 
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Info */}
                <div className="space-y-4">
                    <h2 className="text-gray-800 font-medium font-protest-strike text-3xl text-center lg:text-left">THÔNG TIN LIÊN HỆ</h2>
                    <div className="flex items-center">
                        <i className="fas fa-map-marker-alt text-gray-800 mr-4"></i>
                        <span>Đường P. Trịnh Văn Bô, Xuân Phương, Nam Từ Liêm, Hà Nội, Việt Nam</span>
                    </div>
                    <div className="flex items-center">
                        <i className="fas fa-phone text-gray-800 mr-4"></i>
                        <span>0961162906</span>
                    </div>
                    <div className="flex items-center">
                        <i className="fas fa-envelope text-gray-800 mr-4"></i>
                        <span>tranphu11124@gmail.com</span>
                    </div>
                    {/* Social Media Icons */}
                    <div className="flex space-x-4 mt-4">
                        <a href="#"><i className="fab fa-facebook-f text-2xl text-gray-800"></i></a>
                        <a href="#"><i className="fab fa-instagram text-2xl text-gray-800"></i></a>
                        <a href="#"><i className="fab fa-twitter text-2xl text-gray-800"></i></a>
                        <a href="#"><i className="fab fa-pinterest text-2xl text-gray-800"></i></a>
                        <a href="#"><i className="fas fa-rss text-2xl text-gray-800"></i></a>
                    </div>
                </div>

                {/* Contact Form */}
                <div>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="fullName" // Adjusted to match IContact
                            placeholder="Họ và tên"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="border p-2 w-full rounded"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border p-2 w-full rounded"
                            required
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Số điện thoại"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border p-2 w-full rounded"
                            required
                        />
                        <input
                            type="text"
                            name="address"
                            placeholder="Địa chỉ"
                            value={formData.address}
                            onChange={handleChange}
                            className="border p-2 w-full rounded"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Lời nhắn"
                            value={formData.message}
                            onChange={handleChange}
                            className="border p-2 w-full rounded col-span-2"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-black text-white font-bold py-2 px-6 rounded col-span-2"
                            disabled={loading}
                        >
                            {loading ? 'Gửi...' : 'GỬI'}
                        </button>
                    </form>
                </div>
            </div>

            {/* Google Map Embed Section */}
            <div className="mt-12">
                <iframe
                    src="https://www.google.com/maps/embed?pb=..."
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="rounded-lg"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactPage;
