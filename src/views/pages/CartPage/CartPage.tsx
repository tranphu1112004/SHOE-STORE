import React from 'react';
import { useCart } from '../../../context/CartContext';
import BestSellingProducts from '../Home/bestSellingProducts';

const CartPage = () => {
  const { cart, getTotalPrice, removeItem, updateQuantity } = useCart();

  const handleRemove = (id, color, size) => {
    removeItem(id, color, size);
  };

  const handleQuantityChange = (id, color, size, quantity) => {
    updateQuantity(id, color, size, quantity);
  };

  return (
    <div>

        <div className="container mx-auto p-4 mt-40 flex">
          {/* Cart Items Section */}
          <div className="w-2/3 pr-8">
            <h2 className="text-2xl font-bold mb-4">Giỏ hàng</h2>
            <ul>
              {cart.map((item) => (
                <li key={`${item.id}-${item.color}-${item.size}`} className="flex items-center mb-6">
                  <img src={item.imageUrl} alt={item.name} className="w-24 h-28 mr-4" />
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-500">Size: {item.size}</p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => handleRemove(item.id, item.color, item.size)}
                        className="text-gray-500 hover:text-red-600 mr-4"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.color, item.size, item.quantity - 1)}
                        className="px-2"
                      >
                        -
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.color, item.size, item.quantity + 1)}
                        className="px-2"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p className="text-lg font-semibold ml-auto">{item.price} VNĐ</p>
                </li>
              ))}
            </ul>
          </div>
    
          {/* Summary Section */}
          <div className="w-1/3">
            <h2 className="text-2xl font-bold mb-4">Hoá đơn</h2>
            <div className="border-b pb-4 mb-4">
              <div className="flex justify-between mb-2">
                <span>Tạm tính</span>
                <span>{getTotalPrice()} VNĐ</span>
              </div>
              <div className="flex justify-between">
                <span>Chi phí vận chuyển</span>
                <span>30,000 VNĐ</span>
              </div>
            </div>
            <div className="flex justify-between text-lg font-semibold mb-8">
              <span>Số tiền phải thanh toán</span>
              <span>{getTotalPrice() + 30000} VNĐ</span>
            </div>
            <button className="w-full bg-black text-white py-2 rounded-full mb-4 hover:bg-gray-800">
              Thanh toán
            </button>
          </div>
        </div>
          <BestSellingProducts/>
    </div>
  );
};

export default CartPage;
