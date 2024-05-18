import React, { useState, useEffect } from 'react';
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { delProduct, updateProduct, fetchPosts } from '../Features/PostSlice';
import { useNavigate } from 'react-router-dom';
 
import { IoIosAddCircle } from "react-icons/io";
 
 
const AdminPage = ({ userData }) => {
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
 
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const toggle = () => {
    setModal(!modal);
  };
 
  const handleEdit = (product) => {
    setSelectedProduct(product);
    setNewProductName(product.prodname);
    setNewProductPrice(product.prodprice);
    toggle(); // Open the modal when editing
  };
 
 
 
 
  const handleDelete = (prodid, prodname) => { // Renamed delProduct to handleDelete
    if (window.confirm(`Are you sure you want to delete ${prodname}`)) {
      axios.delete(`http://localhost:3002/delProduct/${prodid}`)
        .then((res) => {
          alert(res.data.message); // Alerting the success message
          dispatch(fetchPosts()); // Fetch updated products after deletion
        })
        .catch((error) => {
          console.error('Error deleting product:', error);
        });
    }
  };
 
  const handleUpdate = () => {
    const updatedProduct = {
      _id: selectedProduct._id,
      prodname: newProductName,
      prodprice: newProductPrice,
    };
 
    axios.post('http://localhost:3002/updateProduct', updatedProduct)
      .then((response) => {
        alert('Product updated successfully.');
        toggle(); // Close the modal after updating
        dispatch(fetchPosts()); // Fetch updated products
      })
      .catch((error) => {
        console.error('Error updating product:', error);
        alert('Error updating product.');
      });
  };
 
  useEffect(() => {
 
    axios.get("http://localhost:3002/products")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);
 
  return (
    <div>
      <h1>Admin Page</h1>
      <h3>
        Create New Product
        <IoIosAddCircle style={{ fontSize: '48px', cursor: 'pointer' }}
          onClick={() => navigate('/admincreate')} />
 
      </h3>
 
      <table className="table table-striped">
        <tbody>
          {products.map(product => (
            <tr key={product.prodid}>
              <td>
                <img src={product.prodimage} alt="Product" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
              </td>
              <td><b>Product Name:</b> {product.prodname}</td>
              <td><b>Product Price: </b>{product.prodprice}</td>
              <td>
                <>
                <Button color="primary" onClick={() => handleEdit(product)}>
                  <FiEdit />
                </Button>
                <Button color="danger" onClick={() => handleDelete(product._id, product.prodname)}> {/* Changed delProduct to handleDelete */}
                  <MdDelete />
                </Button>
                </>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
 
      <Modal isOpen={modal} toggle={toggle} centered>
        <ModalHeader>Edit Product</ModalHeader>
        <ModalBody>
        <Input
            id="prodname"
            name="prodname"
            type="text"
            value={newProductName}
            onChange={(e) => setNewProductName(e.target.value)}
          />
          <Input
            id="prodprice"
            name="prodprice"
            type="number"
            value={newProductPrice}
            onChange={(e) => setNewProductPrice(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary"  onClick={() => {
              handleUpdate();
              toggle();
            }}>Update
            </Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
 
export default AdminPage;