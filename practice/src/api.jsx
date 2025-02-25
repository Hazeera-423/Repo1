import React,{useState,useEffect} from "react";

const Api = ()=>{
 const [products,setproducts]=useState([])

 
    useEffect(()=>{
        fetch("https://dummyjson.com/products/2")
        .then( (response)=>response.json())
        .then(data=>setproducts(data))
       .catch((error)=>console.error(error))
    },[])
    return(
        
            
            
                <div>
                    <h1>Products List</h1>
                    <h1>{products.title}</h1>
                    <p>{products.description}</p>
                    </div>
            
        
           
            
               
        
        

    )
}
export default Api