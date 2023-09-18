import React, { useContext, useState } from 'react'
import { Productcontext } from '../../Context';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


export default function Addproduct() {
   
    const navigate = useNavigate ()
    const { productss, setProductss} = useContext(Productcontext)

    const [name, setName] = useState( ''); 
    const [type, setType] = useState( ''); 
    const [price, setPrice] = useState( ''); 
    const [description, setDescription] = useState( ''); 
    const [image, setImage] = useState(''); 

    const handleSubmit = (e) => {
        const productId = uuidv4()
        setProductss((item) => (item = [...productss,{name:name, type:type ,price:price , description:description ,image:image, id:productss.length+1}]))
        console.log();
        alert("item added succes fully")
        navigate('/ViewProduct')




   
    }

  return (
    <section>
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-6">
                <h2 className="text-center">Add Product</h2>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <label htmlFor="Name">Name</label>
                    <input type="text" name="Name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />

                    <label htmlFor="Category">Category</label>
                    <input type="text" name="Category" className="form-control" value={type} onChange={(e) => setType(e.target.value)} />

                    <label htmlFor="Price">Price</label>
                    <input type="text" name="Price" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />

                    <label htmlFor="Description">Description</label>
                    <input type="text" name="Description" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />

                    <label htmlFor="Image">Image URL</label>
                    <input type="text" name="Image" className="form-control" value={image} onChange={(e) => setImage(e.target.value)} />

                    <button type="submit" className="btn btn-success mt-4">Submit</button>
                </form>
            </div>
        </div>
    </div>
</section>
  )
}
