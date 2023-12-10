import React, { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { deleteEmploye, getAllEmployes, perPage, showModel, updateEmploye } from "../redux/slices/Employe_Slice";
import { useDispatch} from "react-redux";
import Pagination from "../components/Pagenation"

const Cart = ({singlePage, allEmployes}) => {

const navigate = useNavigate()
const dispatch = useDispatch()

const pageHandler = (pageNum)=>{
  dispatch(perPage(pageNum)) 
}

  return (
    <div className="container">
      <section className="d-flex justify-content-center my-3">
        <div className="text-center">
        <h3>All Users </h3>
        <p className="w-75 m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eius, unde ut enim doloribus ipsa cupiditate, tenetur illo sunt vel sequi obcaecati libero perferendis nostrum exercitationem hic quam rem in.
        Molestias magni fu explicabo, corrupti illum iusto?</p>
        </div>
      </section>
      <section className="container px-3 d-flex justify-content-between align-items-center" style={{backgroundColor:"#ccf2ff"}}>
        <div onClick={()=> navigate("/")} className="btn text-gray py-2 bolder fs-6"><IoMdArrowRoundBack size={30}/></div>
        <section className="d-flex justify-content-center">
            <Pagination users={allEmployes} pageHandler={pageHandler}/>   
      </section>
      </section>

      
      <table className="table">
        <thead>
          <tr>
            <th className="col-md-1 px-4  text-black-50">S.No</th>
            <th className="col-md-2  text-black-50">Full Name</th>
            <th className="col-md-2  text-black-50">Email</th>
            <th className="col-md-1  text-black-50">Phone</th>
            <th className="col-md-2  text-black-50">Age</th>
            <th className="col-md-2  text-black-50">Location</th>
            <th className="col-md-1  text-black-50">Remove</th>
          </tr>
        </thead>
        <tbody>
               {
                singlePage && singlePage.map((user, index)=>{
                  const{fullname, _id, email, phone, location, age} = user;
                  return(
                    <tr>
                      <td className="col-md-1  px-4">{_id.slice(-3)}</td>
                      <td className="col-md-1">{fullname}</td>
                      <td className="col-md-2">{email}</td>
                      <td className="col-md-2">{phone}</td>
                      <td className="col-md-1">{age}</td>
                      <td className="col-md-2">{location}</td>
                      <td className="col-md-1">
                        <div className="d-flex gap-3">
                        <Link to={`/${_id}`}>
                        <button className="btn m-0 p-0">
                          <MdDelete onClick={()=>dispatch(showModel(false))} size={18} color="#3aaea1"/>
                        </button>
                        </Link>
                        <Link to={`/update/${_id}`} className="btn m-0 p-0 ">
                          <FaEdit size={18} color="#3aaea1"/>
                        </Link>
                        </div>
                        </td>
                  </tr>
                  )
                })
               }    
        </tbody>
      </table>
    
    </div>
  );
};

export default Cart;
