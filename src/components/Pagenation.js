import React from 'react'

const Pagenation = ({users, pageHandler}) => {
  
    let pageNumbers = [];
    for(var i=1; i < Math.ceil(users?.length/10)+1; i++){
        pageNumbers.push(i)
    }

  return (
    <div>
     {
        pageNumbers && pageNumbers?.map((singleNum)=>{
            return <button onClick={()=>pageHandler(singleNum)} className="btn btn-outline-info btn-sm ms-1">{singleNum}</button>
        })
    } 
    </div>
  )


}

export default Pagenation


// slice:

// pageNumSetup:(state, action)=>{
  // state.singlePage = state.allEmployes.slice((action.payload*10)-10, action.payload*10)
// }