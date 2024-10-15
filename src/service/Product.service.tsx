import instance from "../config/axios"
import { FormType } from "../interface/Product"

export const GetAllProduct = async() => {
    try{
        const {data} = await instance.get('products')
        return data
    }catch(err){
        console.log(err)
    }
}

export const GetProduct = async(id:string|number) => {
    try{
        const {data} = await instance.get(`products/${id}`)
        return data
    }catch(err){
        console.log(err)
    }
}

export const AddProduct = async(formData:FormType) => {
    try{
        const {data} = await instance.post('products',formData)
        return data
    }catch(err){
        console.log(err)
    }
}

export const EditProduct = async(formData:FormType, id:string|number) => {
    try{
        const {data} = await instance.put(`products/${id}`,formData)
        return data
    }catch(err){
        console.log(err)
    }
}


export const DeleteProduct = async(id:string|number) => {
    try{
        const {data} = await instance.delete(`products/${id}`)
        return data
    }catch(err){
        console.log(err)
    }
}