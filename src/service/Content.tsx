import instance from "../config/axios";
import { IContent } from "../interfaces/IContent";

export const GetAllContent = async():Promise<IContent[]> =>{
    try{
        const data = await instance.get(`/contents`);
        return data.data
    }catch(err){
        console.log(err)
        throw err
    }
}

export const GetContentById = async(id: string | number): Promise<IContent> =>{
    try{
        const data = await instance.get(`/contents/${id}`);
        return data.data
    }catch(err){
        console.log(err)
        throw err
    }
}

export const AddContent = async(content: IContent): Promise<IContent> =>{
    try{
        const data = await instance.post(`/contents`, content);
        return data.data
    }catch(err){
        console.log(err)
        throw err
    }
}

export const UpdateContent = async(id: string | number, content: IContent): Promise<IContent> =>{
    try{
        const data = await instance.put(`/contents/${id}`, content);
        return data.data
    }catch(err){
        console.log(err)
        throw err
    }
}

export const DeleteContent = async(id: string | number): Promise<void> =>{
    try{
        await instance.delete(`/contents/${id}`);
        console.log("Bạn có muốn xoá không: ", id)
    }catch(err){
        console.log(err)
        throw err
    }
}