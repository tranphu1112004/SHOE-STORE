import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { IVoucher } from '../interfaces/IOder';
import { GetAllVoucher, CreateVoucher, UpdateVoucher, DeleteVoucher } from '../service/Voucher';

type Props = {
    children: ReactNode;
};

interface IVoucherContext {
    vouchers: IVoucher[];
    onAddVoucher: (code: string, discountPercentage: number, minimumSpend: number, expiryDate: string, isActive: boolean) => Promise<void>;
    onUpdateVoucher: (id: string, code: string, discountPercentage: number, minimumSpend: number, expiryDate: string, isActive: boolean) => Promise<void>;
    onDeleteVoucher: (id: string) => Promise<void>;
}

const VoucherContext = createContext<IVoucherContext | undefined>(undefined);

export const useVoucherContext = () => {
    const context = useContext(VoucherContext);
    if (!context) {
        throw new Error("useVoucherContext phải được sử dụng trong VoucherProvider");
    }
    return context;
};

const VoucherProvider: React.FC<Props> = ({ children }) => {
    const [vouchers, setVouchers] = useState<IVoucher[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const voucherData = await GetAllVoucher();
                setVouchers(voucherData);
            } catch (error) {
                console.error( error);
            }
        })();
    }, []);

    const onAddVoucher = async (code: string, discountPercentage: number, minimumSpend: number, expiryDate: string, isActive: boolean) => {
        try {
            const newVoucher = await CreateVoucher({ code, discountPercentage, minimumSpend, expiryDate, isActive });
            setVouchers([...vouchers, newVoucher]);
            alert('Thêm voucher thành công');
        } catch (error) {
            console.error(error);
            alert('Thêm voucher thất bại');
        }
    };

    const onUpdateVoucher = async (id: string, code: string, discountPercentage: number, minimumSpend: number, expiryDate: string, isActive: boolean) => {
        try {
            const updatedVoucher = await UpdateVoucher(id, { code, discountPercentage, minimumSpend, expiryDate, isActive });
            setVouchers(vouchers.map(voucher => voucher.id === id ? updatedVoucher : voucher));
            alert('Cập nhật voucher thành công');
        } catch (error) {
            console.error( error);
            alert('Cập nhật voucher thất bại');
        }
    };

    const onDeleteVoucher = async (id: string) => {
        try {
            await DeleteVoucher(id);
            setVouchers(vouchers.filter(voucher => voucher.id !== id));
            alert('Xóa voucher thành công');
        } catch (error) {
            console.error(error);
            alert('Xóa voucher thất bại');
        }
    };

    return (
        <VoucherContext.Provider value={{ vouchers, onAddVoucher, onUpdateVoucher, onDeleteVoucher }}>
            {children}
        </VoucherContext.Provider>
    );
};

export default VoucherProvider; 
