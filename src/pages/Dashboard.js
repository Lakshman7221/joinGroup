import React from 'react'
import Table from "../components/Table"
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const {singlePage, allEmployes} = useSelector(state=> state.Employe_Slice)

  return (
    <div>  
          <Table singlePage={singlePage} allEmployes={allEmployes} />   
    </div>
  )
}

export default Dashboard