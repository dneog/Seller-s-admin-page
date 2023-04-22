import React from 'react'
import './InputForm.css'
const InputForm = ({tasks, setTasks}) => {
    const submitHandler=(event)=> {
        event.preventDefault();

        const newTasks= {
          productID: event.target.productID.value,
          price: event.target.price.value,
          name: event.target.name.value,
        }

        console.log(newTasks)
      
        setTasks([...tasks, newTasks])
    }

  return (
   <form onSubmit={submitHandler} >
    <label htmlFor="">Product ID : </label>
    <input type="number" name="productID" id=""  />
    <label htmlFor="">Selling Price : </label>
    <input type="number" name="price" id=""  />
    <label htmlFor="">Product Name :</label>
    <input type="text" name="name" id="" />
    <button type='submit'>Add Product</button>

   </form>
  )
}

export default InputForm