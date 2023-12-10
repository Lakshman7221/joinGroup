import axios from "axios"



// create data ---

const createEmploye = async(formData)=>{
    return await axios.post("http://localhost:5000/api/employe/", formData).then(res=> console.log("suceessfully sent data to DB.."));
}
const getAllEmployes = async()=>{
    const res = await axios.get("http://localhost:5000/api/employe/")
    return res.data;
}
const updateEmploye = async({id, formData})=>{
    const res = await axios.put(`http://localhost:5000/api/employe/update/${id}`, formData)
    return res.data;
}
const deleteEmploye = async(_id)=>{
    const res = await axios.delete(`http://localhost:5000/api/employe/${_id}`)
    return res.data;
}


const EmployeServices={
    createEmploye,
    getAllEmployes,
    updateEmploye,
    deleteEmploye,
}

export default EmployeServices
