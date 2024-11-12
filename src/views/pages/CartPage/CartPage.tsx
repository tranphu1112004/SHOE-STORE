import React from 'react';
import { useCart } from '../../../context/CartContext';

const CartPage: React.FC = () => {
    const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

    return (
        <div className="container mx-auto p-6 mt-32">
            <h2 className="text-3xl font-bold mb-6">Giỏ hàng</h2>
            <div className="flex flex-col md:flex-row">
                {/* Cart Items */}
                <div className="w-full md:w-3/5">
                    {cart.map((item) => (
                        <div key={item.product.id} className="flex items-center justify-between p-4 border-b">
                            <img src={item.product.imageUrls[0]} alt={item.product.name} className="w-24 h-24" />
                            <div className="flex-1 ml-4">
                                <h3 className="text-xl font-semibold">{item.product.name}</h3>
                                <p>Size: {item.product.sizes[0]}</p>
                                <p>Price: {item.product.price.toLocaleString()}₫</p>
                            </div>
                            <div className="flex items-center">
                                <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>-</button>
                                <span className="mx-2">{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>+</button>
                            </div>
                            <button onClick={() => removeFromCart(item.product.id)} className="text-red-500 ml-4">Remove</button>
                        </div>
                    ))}
                </div>

                {/* Summary */}
                <div className="w-full md:w-2/5 p-6 bg-gray-100 rounded-lg">
                    <h3 className="text-2xl font-semibold mb-4">Hoá đơn</h3>
                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>{getTotalPrice().toLocaleString()}₫</span>
                    </div>
                    <div className="flex justify-between mb-4">
                        <span>Chi phí vận chuyển</span>
                        <span>100,000₫</span>
                    </div>
                    <hr />
                    <div className="flex justify-between font-bold text-lg mt-4">
                        <span>Thanh toán</span>
                        <span>{(getTotalPrice() + 250000).toLocaleString()}₫</span>
                    </div>
                    <button className="w-full bg-black text-white py-3 mt-6 rounded-lg">Thanh Toán</button>
                    <button className="w-full border border-gray-400 text-gray-900 py-3 mt-2 rounded-lg">Member Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
