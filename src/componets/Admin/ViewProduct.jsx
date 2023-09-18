import React, { useContext } from "react";
import { Productcontext } from "../../Context";
import { useNavigate } from "react-router-dom";
import AdmiNav from "./AdmiNav";

export default function ViewPoduct() {
  const navigate = useNavigate();
  const { productss, setProductss } = useContext(Productcontext);

  const handleRemove = (Itemid) => {
    const RemoveProducts = productss.filter((item) => item.id !== Itemid);
    setProductss(RemoveProducts);
  };
  const handlEdit = (productId) => {
    navigate(`/EditProduct/${productId}`)

  }
  return (
    <>
    <AdmiNav/>
    <section>
      <div className="container">
        <div className="row mt-4">
          <div style={{ paddingLeft: "75%" }}>
            <button onClick={()=> navigate("/Addproducts")}  className="btn btn-primary">
              Add Products
            </button>
          </div> 
          
          
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Category</th>
              <th scope="col">Description</th>
              <th scope="col">Image</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* map here */}

            {productss.map((items, intex) => (
              <tr key={items.id}>
                <th scope="row">{intex + 1} </th>
                <td>{items.name} </td>
                <td>{items.type} </td>
                <td>{items.description} </td>
                <td>
                  <img
                    style={{ width: "50px", height: "50px" }}
                    alt=""
                    src={items.image}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-primary "
                    onClick={()=> handlEdit(items.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger mt-3"
                    onClick={() => handleRemove(items.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {/* map herr */}
          </tbody>
        </table>
      </div>
    </section>
    </>
  );
}
