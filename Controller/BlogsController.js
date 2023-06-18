
import Table from "../Model/Table.js"

export const postData=async(req,res)=>{
    const data=req.body
    const result=await Table.create(data)
    res.json({
        status:'success',
        result
    
    })
}
export const getData=async(req,res)=>{
    const result=await Table.find();
    res.json({
        status:'success',
        result
    
    })
}

export const deleteData=async(req,res)=>{
    const id=req.params.id
    const result=await Table.findByIdAndDelete(id);
    res.json({
        status:'success',
        result
    
    });
    res.json({
        status:'fail',
        error:error.message,
    
    })
}