// import React, { useContext } from 'react';
// import { Productcontext } from '../Context';
// import { Products } from './Products';
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn,
//   MDBRow,
//   MDBCol,
// } from 'mdb-react-ui-kit';

// export default function Serch() {
//   const { serchTerm } = useContext(Productcontext);

//   return (
//     <div>
//       <div className="container mx-5">
//         <MDBRow>
//           {Products.filter((val) => {
//             if (!serchTerm) {
//               return true; // Include all items when the search term is empty
//             } else if (val.name.toLowerCase().includes(serchTerm.toLowerCase())) {
//               return true; // Include items that match the search term
//             }
//             return false; // Exclude items that don't match the search term
//           }).map((val) => (
//             <MDBCol md="4" key={val.id}>
//               <MDBCard className="mt-3">
//                 <MDBCardImage src={val.image} position="top" alt="..." />
//                 <MDBCardBody>
//                   <MDBCardTitle>{val.name} </MDBCardTitle>
//                   <MDBCardText>{val.description}</MDBCardText>
//                   <MDBCardTitle>₹{val.price} </MDBCardTitle>
//                   <MDBBtn>View</MDBBtn>
//                 </MDBCardBody>
//               </MDBCard>
//             </MDBCol>
//           ))}
//         </MDBRow>
//       </div>
//     </div>
//   );
// }
