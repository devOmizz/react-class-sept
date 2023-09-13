import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductSingle(props) {
  const [product, setProduct] = useState({}); // Initialize with an empty object
  const { id } = useParams();

  useEffect(() => {
    const data = props.myData;
    const foundProduct = data.find((item) => item.id === Number(id));

    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      // Handle case where product is not found, e.g., redirect or display an error message.
      console.log(`Product with ID ${id} not found.`);
    }
  }, [id, props.myData]);

  // Render the product details or a loading message
  return (
    <div>
      {product.title ? (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <img src={product.image} alt="" />
          {/* Add more product details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductSingle;

