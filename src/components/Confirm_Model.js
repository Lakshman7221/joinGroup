import React from 'react'
import styled from 'styled-components'
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useDispatch} from 'react-redux';
import { deleteEmploye, getAllEmployes} from '../redux/slices/Employe_Slice';
import { useNavigate, useParams } from 'react-router-dom';

const ConfirmModel = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const deleteHandler = ()=>{
        dispatch(deleteEmploye(id));
        dispatch(getAllEmployes());
        navigate(-1)
    }
  return (
    <Wrapper>
            <section className='d-flex justify-content-center align-items-start vh-100'>
                <div className='Card'>
                <div className=''>
                    <div className='text-center w-100'>
                    <IoIosInformationCircleOutline size={60} color="orange" />    
                    <h3 className='pt-1'> Are you sure?</h3>
                    <div className='lead pb-3 fs-6'> You will not able to recover this user..</div>
                    </div>
                </div>
                <div className='d-flex justify-content-between px-3 pb-3' >
                    <button onClick={()=> navigate(-1)} className='btn btn-dark btn-sm'> Cancel </button>
                    <button onClick={deleteHandler} className='btn btn-danger btn-sm'> Yes, delete it! </button>
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
    margin-top:100px;
    padding:10px 10px;
    width:350px;
    background-color:#fff;
    border-radius:7px;
}
`
export default ConfirmModel