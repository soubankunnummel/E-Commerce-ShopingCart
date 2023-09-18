// AllOrders.js
import React, { useContext } from 'react';
import { Productcontext } from '../../Context';


export default function Alloders() {
    const {productss} = useContext(Productcontext)
  return (
    <>
    <div className='mt-5 container'>
      <h2 className='fw-bold' style={{textAlign:'center'}}>All Orders</h2>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Order ID</th>
            <th scope='col'>Name</th>
            <th scope='col'>Description</th>
            <th scope='col'>Price</th>
            <th scope='col'>Type</th>
            <th scope='col'>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {productss.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>{product.type}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}
