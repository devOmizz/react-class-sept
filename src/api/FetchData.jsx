import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function FetchData(props) {

    const[product, setproduct]= useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(reponse => reponse.json())
        .then(data => {
            console.log(data);
            setproduct(data)
        })
        .catch('Failed to fetch')       
        
    },[]) 
  return (
    <div>
        <div className='d-flex flex-wrap justify-content-centern'>
        {product.map((item)=>{
            return (
                <div className="card" style={{width: '18rem'}} key={item.id}>
                    <img src={item.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href={`/product/${item.id}`} className="btn btn-primary">view</a>
                    </div>
                </div>
            )
        })}
        </div>

    </div>
  )
}

export default FetchData