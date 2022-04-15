import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const Products = (props) => {
  const { id } = useParams();
  console.log(" Id", id);
  var [product, setProduct] = useState([]);

  // useEffect
  useEffect(() => {
    loadDataFromApi();
    console.log("page reload");
  }, []);

  // load API
  const loadDataFromApi = () => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      console.log(response.data);
      setProduct((product = response.data));
      setProduct((product = response.data.find((i) => i.id === id)));
    });
  };

  return (
    <div>
      <div
        className="col-md-6"
        style={{ marginLeft: "100px", marginTop: "100px" }}
      >
        <img
          src={product.image}
          alt={product.title}
          height="400px"
          width="400px"
        />
      </div>
      {/* ....details */}
      <div style={{ marginLeft: "700px", marginTop: "-400px" }}>
        <div className="col-md-10">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <button className="btn btn-outline-dark px-4 py-2">
            Add to Cart
          </button>
          <NavLink to="" className="btn btn-dark ms-2 px-3 py-2">
            Go to Cart
          </NavLink>
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default Products;
