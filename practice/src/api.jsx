import React,{useState,useEffect} from "react";

const Api = ()=>{
 const [products,setproducts]=useState([])
 const [loading,setLoading]=useState(true)
 
    useEffect(()=>{
        fetch("https://dummyjson.com/products/2")
        .then( (response)=>response.json())
        .then(data=>setproducts(data))
       .catch((error)=>console.error(error))
    },[])
    return(
        <div>
            {loading ? (<p>Loading...</p>)
            :(
                <div>
                    <h1>{products.title}</h1>
                    <p>{products.description}</p>
                    </div>
            )
        }
           
            
               
        
        </div>

    )
}
export default Api