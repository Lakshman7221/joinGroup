import React, {useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector} from 'react-redux';
import { IoMdClose } from "react-icons/io";
import {getAllEmployes, updateEmploye} from "../redux/slices/Employe_Slice"
import { useNavigate, useParams } from 'react-router-dom';

const JoinUserModel = () => {

    const navigate = useNavigate()
    const {id} = useParams()
    const dispatch = useDispatch()
    const {allEmployes} = useSelector(state=> state.Employe_Slice)

    // find user ----------------------

    const findUser = allEmployes?.find(user=> user._id === id)

    // input data-------------------

    const [input, setInput]= useState({
        fullname:findUser?.fullname,
        email:findUser?.email,
        phone:findUser?.phone,
        age:findUser?.age,
        location:findUser?.location,
    })
    const {fullname, email, phone, age, location} = input;

    const inputHandler = (e)=>{
        const{name, value} =e.target 
        setInput({...input, [name]:value})
    }

    // formData ----------------------

    const formData = new FormData()
    formData.append("fullname", fullname)
    formData.append("email", email)
    formData.append("phone", phone)
    formData.append("age", age)
    formData.append("location", location)

    // submit data ------------------

    const submitHandler = async(e)=>{
        e.preventDefault()
        await dispatch(updateEmploye({id, formData}))
        await dispatch(getAllEmployes())
        navigate(-1)
    }

  return (
    <Wrapper>
            <section className='d-flex justify-content-center align-items-center vh-100'>
                <div className='Card' >
                        <div className='d-flex py-2 justify-content-between align-items-center'>
                        <div className='fs-3'>Update details</div>
                           <div onClick={()=> navigate("/dashboard")} className='btn m-0 mb-2'>
                                <IoMdClose size={30} color="#3aaea1"/>
                            </div>
                        </div>
                        <div className='py-3'>
                            <div>
                                <input className='w-100' value={fullname} name="fullname" onChange={inputHandler} type="text" placeholder='Full Name' />
                            </div>
                            <div>
                                <input className='w-100' type="text" value={email} name="email" onChange={inputHandler} placeholder='Email' />
                            </div>
                            <div>
                                <input className='w-100' type="text" value={phone} name="phone" onChange={inputHandler} placeholder='Phone' />
                            </div>
                            <div>
                                <input className='w-100' type="text" value={age} name="age" onChange={inputHandler} placeholder='age' />
                            </div>
                            <div>
                                <input className='w-100' type="text" value={location} name="location" onChange={inputHandler} placeholder='Location' />
                            </div>
                        </div>
                        <div>
                            <button onClick={submitHandler} className='btn btn-info btn-lg w-100'>Update</button>
                        </div>
                        <div>
                        <p className='py-4'>Lorem ipsum dolor eprehenderit inventore, commodi consectetur mollitia quaerat sit esse eaque.
                      </p>
                        </div> 
                </div>
            </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
position:absolute;
background-color:rgba(0, 0, 0, 0.8);
height:100vh;
width:100vw;
top:0;
left:0;
.Card{
    width:400px;
    background-color:#fff;
    padding:20px 30px;
    border-radius:20px;
}
 
input[type="text"]{
        background-color:#ecf9f6;
        border:none;
        padding:8px 15px;
        border-radius:10px;
        outline:none;
        letter-spacing: 0px; 
        margin-bottom:10px;
        color:#3aaea1;
        font-weight:bold;
    }
    ::placeholder {
    color:#3aaea1;
    letter-spacing:0px;
    }
}
`
export default JoinUserModel