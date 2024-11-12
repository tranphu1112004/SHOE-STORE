import React, { createContext, useState, useEffect } from 'react';
import { IContent } from '../interfaces/IContent';
import { AddContent, DeleteContent, GetAllContent, UpdateContent } from '../service/Content';
import ToastNotification from '../components/Admin/ToastNotification'; // Assuming you have a toast notification component
import { useNavigate } from 'react-router-dom';

interface IContentContext {
    contents: IContent[];
    loading: boolean;
    error: string | null;
    onDelete: (id: string | number) => Promise<void>;
    onSubmitUpdate: (content: IContent, id: string | number) => Promise<void>;
    onAdd: (content: IContent) => Promise<void>;
}

export const ContentCT = createContext<IContentContext | undefined>(undefined);

const ContentContext: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [contents, setContents] = useState<IContent[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [notification, setNotification] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchContents = async () => {
            setLoading(true);
            try {
                const contentData = await GetAllContent();
                setContents(contentData);
                setError(null);
            } catch (error) {
                setError('Lỗi khi lấy danh sách nội dung');
                console.error('Lỗi khi lấy nội dung:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchContents();
    }, []);

    const onDelete = async (id: string | number) => {
        const confirmed = window.confirm('Bạn có chắc chắn muốn xóa nội dung này không?');
        if (!confirmed) return;

        try {
            await DeleteContent(id);
            setContents(contents.filter(content => content.id !== id));
            setNotification('Xóa nội dung thành công');
        } catch (error) {
            setNotification('Lỗi khi xóa nội dung');
            console.error('Lỗi khi xóa nội dung:', error);
        }
    };

    const onSubmitUpdate = async (content: IContent, id: string | number) => {
        try {
            const updatedContent = await UpdateContent(id, content);
            setContents(contents.map(c => (c.id === id ? updatedContent : c)));
            setNotification('Cập nhật nội dung thành công');
            navigate('/admin/contents');
        } catch (error) {
            setNotification('Lỗi khi cập nhật nội dung');
            console.error('Lỗi khi cập nhật nội dung:', error);
        }
    };

    const onAdd = async (content: IContent) => {
        try {
            const newContent = await AddContent(content);
            setContents([...contents, newContent]);
            setNotification('Thêm nội dung thành công');
            navigate('/admin/contents');
        } catch (error) {
            setNotification('Lỗi khi thêm nội dung');
            console.error('Lỗi khi thêm nội dung:', error);
        }
    };

    return (
        <ContentCT.Provider value={{ contents, loading, error, onDelete, onSubmitUpdate, onAdd }}>
            {children}
            {notification && (
                <ToastNotification
                    message={notification}
                    onClose={() => setNotification(null)}
                />
            )}
            {error && <div className="text-red-500">{error}</div>}
        </ContentCT.Provider>
    );
};

export default ContentContext;
