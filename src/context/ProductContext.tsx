import React, { createContext, useState, useEffect } from 'react';
import { FormType, IProduct } from '../interfaces/IProduct';
import { AddProduct, DeleteProduct, GetAllProducts, UpdateProduct } from '../service/Product';
import { useNavigate } from 'react-router-dom';

interface IProductContext {
    products: IProduct[];
    loading: boolean;
    error: string | null;
    onDelete: (id: string | number) => Promise<void>;
    onSubmitUpdate: (product: FormType, id: string | number) => Promise<void>;
    onAdd: (product: IProduct) => Promise<void>;
}

export const ProductCT = createContext<IProductContext | undefined>(undefined);

const ProductContext: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const productData = await GetAllProducts();
                setProducts(productData);
                setError(null); 
            } catch (error) {
                setError('Lỗi khi lấy danh sách sản phẩm');
                console.error('Lỗi khi lấy sản phẩm:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const onDelete = async (id: string | number) => {
        const confirmed = window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?');
        if (!confirmed) return; 

        try {
            await DeleteProduct(id);
            setProducts(products.filter(product => product.id !== id));
            setError(null); 
        } catch (error) {
            setError('Lỗi khi xóa sản phẩm');
            console.error('Lỗi khi xóa sản phẩm:', error);
        }
    };

   

    const onSubmitUpdate = async (product: FormType, id: string | number) => {
        try {
            const updatedProduct = await UpdateProduct(id, product);
            setProducts(products.map(p => (p.id === id ? updatedProduct : p)));
            setError(null); 
            console.log(updatedProduct)
            alert('Cập nhật sản phẩm thành công');
            navigate('/admin/products');
        } catch (error) {
            setError('Lỗi khi cập nhật sản phẩm');
            console.error('Lỗi khi cập nhật sản phẩm:', error);
        }
    };

    const onAdd = async (product: IProduct) => {
        try {
            const newProduct = await AddProduct(product);
            setProducts([...products, newProduct]);
            setError(null); 
            console.log(newProduct)
            alert('Thêm sản phẩm thành công');
            navigate('/admin/products');
        } catch (error) {
            setError('Lỗi khi thêm sản phẩm');
            console.error('Lỗi khi thêm sản phẩm:', error);
        }
    };

    return (
        <ProductCT.Provider value={{ products, loading, error, onDelete, onSubmitUpdate, onAdd }}>
            {children}
            {error && <div className="text-red-500">{error}</div>}
        </ProductCT.Provider>
    );
};

export default ProductContext;
    