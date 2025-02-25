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
            {products.map((item)=>(
               <div key={item.id}>
                <h2>{item.title}</h2>
                {item.description}
               </div>
            ))}
        </div>

    )
}
export default Api