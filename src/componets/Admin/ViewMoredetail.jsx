import React, { useContext } from 'react';
import { MDBBadge, MDBContainer } from 'mdb-react-ui-kit';
import { Productcontext } from '../../Context';
import { useParams } from 'react-router-dom';

export default function ViewMoreDetail() {
  const { id } = useParams();
  const { login, productss } = useContext(Productcontext);

  // Find the user by id
  const user = login.find((user) => user.id === parseInt(id));

  if (!user) {
    return <div>User not found</div>;
  }

  // Find the product associated with the user
  const product = productss.find((product) => product.id === user.product.id);

  return (
    <MDBContainer className='mt-5'>
      <div className='d-flex align-items-center'>
        <img
          src='https://mdbootstrap.com/img/new/avatars/8.jpg'
          alt=''
          style={{ width: '45px', height: '45px' }}
          className='rounded-circle me-3'
        />
        <div>
          <h2 className='fw-bold mb-2'>{user.username}</h2>
          <p className='fw-normal mb-1'>{user.email}</p>
        </div>
      </div>

      <hr className='my-4' />

      <div>
        <h3 className='fw-bold'>User Details</h3>
        <ul className='list-unstyled'>
          <li>
            <strong>Phone:</strong> {user.phone}
          </li>
          <li>
            <strong>Gender:</strong> {user.gender}
          </li>
          <li>
            <strong>Address:</strong>{' '}
            {`${user.address.street}, ${user.address.city}, ${user.address.state} ${user.address.postalCode}, ${user.address.country}`}
          </li>
          <li>
            <strong>Date of Birth:</strong> {user.dateOfBirth}
          </li>
          <li>
            <strong>ID:</strong> <MDBBadge color='success' pill>{user.id}</MDBBadge>
          </li>
        </ul>
      </div>

      <hr className='my-4' />

      <div>
        <h3 className='fw-bold'>Order Details</h3>
        <ul className='list-unstyled'>
          <li>
            <strong>Name:</strong> {product.name}
          </li>
          <li>
            <strong>Description:</strong> {product.description}
          </li>
          <li>
            <strong>Price:</strong> ${product.price.toFixed(2)}
          </li>
          <li>
            <strong>Type:</strong> {product.type}
          </li>
          <li>
            <strong>Quantity:</strong> {product.quantity}
          </li>
          <li>
            <strong>Image:</strong> <img src={product.image} alt={product.name} style={{ width: '100px' }} />
          </li>
        </ul>
      </div>
    </MDBContainer>
  );
}
