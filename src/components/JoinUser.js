import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { IoLogoTwitter } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn, FaGooglePlusG } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { createEmploye, getAllEmployes} from '../redux/slices/Employe_Slice';
import { useNavigate } from 'react-router-dom';

const JoinUser = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // input data ---------------------

    const [input, setInput]= useState({
        fullname:"Temp01", email:"abc@gmail.com", phone:"957213285", age:"26", location:"Hyderabad"
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
        await dispatch(createEmploye(formData))
        await dispatch(getAllEmployes())
        // setInput({ fullname:"", email:"", phone:"", age:"", location:""})
        
    }

  return (
    <Wrapper>
            <section className='d-flex justify-content-center align-item-center vh-100 flex-wrap'>
                <div className='flexleft d-flex align-items-center text-center justify-content-center'>
                    <div>
                        <div className='heading'>Welcome Back</div>
                        <p>To Keep connect with us please join with your personal info..</p>
                        <div onClick={()=> navigate("/dashboard")} className='Button'>Dashboard</div>
                    </div>
                </div>
                <div className='flexright p-5 m-0 nowrap vh-100 d-flex align-items-center justify-content-center' >
                      <div>
                        <div className='joinOurGrop py-3' >Join our group</div>
                        <div>
                            <IoLogoTwitter size={20} className='ms-3'/>
                            <TiSocialFacebook size={25} className='ms-3'/>
                            <FaLinkedinIn size={20} className='ms-3'/>
                            <FaGooglePlusG size={25} className='ms-3'/>
                        </div>
                        <div className='pt-3'>use email or phone for registration</div>
                        <div className='py-3'>
                            <div>
                                <input className="w-50" value={fullname} name="fullname" onChange={inputHandler} type="text" placeholder='Full Name' />
                            </div>
                            <div>
                                <input type="text" value={email} name="email" onChange={inputHandler} placeholder='Email' />
                            </div>
                            <div>
                                <input type="text" value={phone} name="phone" onChange={inputHandler} placeholder='Phone' />
                            </div>
                            <div>
                                <input type="text" value={age} name="age" onChange={inputHandler} placeholder='age' />
                            </div>
                            <div>
                                <input type="text" value={location} name="location" onChange={inputHandler} placeholder='Location' />
                            </div>
                        </div>
                        <div>
                            <button onClick={submitHandler} className='btn btn-dark w-25 btn-lg'>Join</button>
                        </div>
                        <div>
                        <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis hic cupiditate sunt iusto velit nisi? Sapiente ea voluptatem ducimus enim doloribus reprehenderit inventore, commodi consectetur mollitia quaerat sit esse eaque.
                      </p>
                        </div>
                      </div>  
                </div>
            </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
background-color:#3aaea1;
.flexleft{
    background-color:#3aaea1;
    padding:50px;
    flex-grow:1;
    width:250px;
    .heading{
        font-weight:700;
        font-size:45px;
        color:#fff;
    }
    p{
        font-weight:normal;
        margin:0px 0px 40px 0px;
        font-size:20px;
        color:#fff;
    }
    .Button{
        background-color:#fff;
        opacity:100%;
        padding:16px;
        border-radius:30px;
        font-size:18px;
        font-weight:bold;
        width:50%;
        margin:auto;
        cursor:pointer;
        transition:all .5s;
        &:hover{
            opacity:50%;
            transition:all .5s;
        }
        
    }
}
.flexright{
    background-color:#fff;
    flex-grow:2;
    width:320px;
    input[type="text"]{
        background-color:#ecf9f6;
        border:none;
        padding:8px 15px;
        width:50%;
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
.joinOurGrop{
        font-weight:400;
        font-size:45px;
        color:#3aaea1;
}

 
}
`
export default JoinUser