import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductCT } from '../../../context/ProductContext';
import { ColorCT } from '../../../context/ColorContext';
import { SizeCT } from '../../../context/SizeContext';
import { BrandCT } from '../../../context/BrandContext';
import { CategoryCT } from '../../../context/CategoryContext';
import NewProduct from '../Home/NewProduct';
import Notification from '../Notification';
import { IProduct } from '../../../interfaces/IProduct';
import { useCart } from '../../../context/CartContext';

const ProductDetailUser: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { products } = useContext(ProductCT)!;
  const { colors } = useContext(ColorCT)!;
  const { sizes } = useContext(SizeCT)!;
  const { brands } = useContext(BrandCT)!;
  const { categories } = useContext(CategoryCT)!;
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1); // State for quantity selection

  const product = products.find((p: IProduct) => p.id === id || p.id === Number(id));
  if (!product) {
    return <p className="text-red-500">Sản phẩm không tồn tại</p>;
  }

  const getBrandName = (brandId: string | undefined) => {
    const brand = brands.find(b => b.id === brandId);
    return brand ? brand.name : 'Thương hiệu không xác định';
  };

  const getColorNames = () => {
    return product.colorIds.map(colorId => {
      const color = colors.find(c => c.id === colorId);
      return color ? color.name : 'Màu sắc không xác định';
    });
  };

  const getSizeNames = () => {
    return product.sizes.map(sizeId => {
      const size = sizes.find(s => s.id === sizeId);
      return size ? size.name : 'Kích cỡ không xác định';
    });
  };

  const category = categories.find(c => c.id === product.category)?.name || 'Không xác định';

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      setNotification('Vui lòng chọn màu sắc và kích cỡ');
      return;
    }

    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.sale ? product.pricenew : product.price,
      color: selectedColor,
      size: selectedSize,
      quantity: quantity, // Use selected quantity
      imageUrl: product.imageUrls[0],
    };

    addToCart(cartItem);
    setNotification(`Đã thêm vào giỏ hàng: ${product.name}, Màu: ${selectedColor}, Kích cỡ: ${selectedSize}`);
  };

  const handleBuyNow = () => {
    handleAddToCart(); // Add the product to the cart
    setTimeout(() => {
      navigate('/cart'); // Redirect to the cart page after adding
    }, 1000);
  };

  return (
    <div className="mt-20 max-w-6xl mx-auto p-6 rounded-lg md:mt-40">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col items-center space-y-4 md:w-1/2">
          <div className="w-full h-96 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
            <img src={product.imageUrls[selectedImage]} alt={product.name} className="object-contain h-full" />
          </div>
          <div className="flex space-x-2 overflow-x-auto">
            {product.imageUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={product.name}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${index === selectedImage ? 'border-2 border-gray-800' : ''}`}
              />
            ))}
          </div>
        </div>

        <div className="space-y-6 md:w-1/2 md:pl-8">
          <h3 className="text-3xl font-semibold text-gray-900">{product.name}</h3>
          <p className="text-gray-700 text-sm leading-relaxed">{product.description}</p>

          <div className="text-xl font-semibold">
            <p className="text-gray-900">Giá: <span className="text-green-500">{product.price}đ</span></p>
            {product.sale && (
              <>
                <p className="text-red-600 line-through">Giá gốc: {product.price}đ</p>
                <p className="text-red-500 font-bold">Giá khuyến mãi: {product.pricenew}đ</p>
              </>
            )}
          </div>

          <div className="space-y-2">
            <p className="text-lg font-semibold">Danh mục: <span className="text-blue-600">{category}</span></p>
            <p className="text-lg font-semibold">Thương hiệu: {getBrandName(product.brandId)}</p>

            <p className="text-lg font-semibold">Màu sắc:</p>
            <div className="flex space-x-2">
              {getColorNames().map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`border rounded-lg py-2 px-4 text-gray-700 ${selectedColor === color ? 'bg-gray-300' : 'hover:bg-gray-200'}`}
                >
                  {color}
                </button>
              ))}
            </div>

            <p className="text-lg font-semibold">Kích cỡ:</p>
            <div className="grid grid-cols-3 gap-2">
              {getSizeNames().map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={`border rounded-lg py-2 text-gray-700 ${selectedSize === size ? 'bg-gray-300' : 'hover:bg-gray-200'}`}
                >
                  {size}
                </button>
              ))}
            </div>

            <p className="text-lg font-semibold">Tồn kho: {product.stock}</p>

            <div className="flex items-center space-x-2">
              <label className="text-lg font-semibold">Số lượng:</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="border p-2 rounded-md w-16"
                min="1"
                max={product.stock}
              />
            </div>
          </div>

          <div className="flex space-x-4 mt-4">
            <button
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition duration-200"
            >
              Thêm vào giỏ hàng
            </button>
            <button
              onClick={handleBuyNow}
              className="w-full border border-gray-400 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition duration-200"
            >
              Mua ngay
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-4">Đánh giá</h3>
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map((review, index) => (
            <div key={index} className="border-b py-4">
              <p className="font-semibold">{review.user.name} - <span className="text-yellow-500">{review.rating} sao</span></p>
              <p className="text-gray-600">{review.comment}</p>
              <p className="text-gray-500 text-sm">{new Date(review.createdAt).toLocaleDateString()}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">Chưa có đánh giá</p>
        )}
      </div>
<NewProduct/>
      {notification && (
        <Notification message={notification} onClose={() => setNotification(null)} />
      )}
    </div>
  );
};

export default ProductDetailUser;
