import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ProductSingle(props) {
    const[product, setProduct] = useState()


    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(reponse => reponse.json())
        .then(data => {
            console.log(data);
            setProduct(data)
        })
        .catch('Failed to fetch')       
        
    },[]) 

    const {id } = useParams()

    const checkProduct = product.find((item)=> item.id === id)
    console.log(typeof product);
    // const product = props.myData.find((item) => item.id === Number(id))
  return (
    <div>
        <p>{checkProduct.title}</p>
    </div>
  )
}

export default ProductSingle