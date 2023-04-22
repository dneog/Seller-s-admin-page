import React from 'react'

const ShowItem = ({tasks, setTasks}) => {
  
  const deleteHandler=(id)=> {
   const updateTasks= tasks.filter(task => task.productID !== id)
    setTasks(updateTasks)
  }

  return (
    
    <div>
   
   <h2>Products</h2>
   <ul>
  
    {tasks.map((task)=> (
      
     <div>
     
      <li>
        {task.price} - {task.name} <button onClick={()=> deleteHandler(task.productID)}>Delete Product</button>
      </li>
      </div>
      
      
    ))}

   </ul>
    
   
  
     
   </div>
  )
}

export default ShowItem