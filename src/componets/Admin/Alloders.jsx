// AllOrders.js
import React, { useContext } from 'react';
import { Productcontext } from '../../Context';
import AdmiNav from './AdmiNav';


export default function Alloders() {
    const {login} = useContext(Productcontext)
  return (
    <>
    <AdmiNav/>
    <div className='mt-5 container'>
      <h2 className='fw-bold' style={{textAlign:'center'}}>All Orders</h2>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Order ID</th>
            <th scope='col'>Name</th>
            <th scope='col'>Owner</th>
            <th scope='col'>Description</th>
            <th scope='col'>Price</th>
            <th scope='col'>Type</th>
            <th scope='col'>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {login.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.product.name}</td>
              <td>{product.username}</td>
              <td>{product.product.description}</td>
              <td>${product.product.price}</td>
              <td>{product.product.type}</td>
              <td>{product.product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}
