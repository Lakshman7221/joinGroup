import React from 'react'

const From = () => {
    var a = ["a", "b", "c", "d", "e", "f", "g"]
  let num = "123456"
  const res1 = Array.from(num) 
  const res2 = Array.from(num, Number) 
  const res3 = Array.from(num,String) 
  const res4 = Array.from(Array(6), (ele, index)=>{return index}) 
  
  console.clear()
  console.log("res1", res1) //  ['1', '2', '3', '4', '5', '6']
  console.log("res2", res2) // [1, 2, 3, 4, 5, 6]
  console.log("res3", res3) //  ['1', '2', '3', '4', '5', '6']
  console.log("res4", res4) // [0, 1, 2, 3, 4, 5]

  return (
    <div>
        <h1>Hellow</h1>
    </div>
  )
}

export default From