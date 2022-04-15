import React, { useEffect } from "react";
import { useState } from "react";
// import { Link } from "@mui/material";
import axios from "axios";
import { Carousel } from "bootstrap";
import { Link } from "react-router-dom";


const Page = () => {
  // state

  var [data, setData] = useState([]);

  // useEffect
  useEffect(() => {
    loadDataFromApi();
    console.log("page reload in productsssss");
  }, []);

  // load API
  const loadDataFromApi = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response.data);

      setData((data = response.data));
    });
  };

  // main program
  return (
    <div>
      {/* ...............Latest Product........... */}

      <div>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12 mb-5">
              <h1
                className="display-6 fw-bolder text-center"
                style={{ color: "red" }}
              >
                <Link to="/contact"> Latest Products</Link>
              </h1>

              <hr style={{ color: "red" }} />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="buttons d-flex justify-content-center mb-5 pb-5">
              <button className="btn btn-outline-danger me-2">All</button>
              <button className="btn btn-outline-danger me-2">
                Men's Clothing
              </button>
              <button className="btn btn-outline-danger me-2">
                Women's Clothing
              </button>
              <button className="btn btn-outline-danger me-2">Jewelery</button>
              <button className="btn btn-outline-danger me-2">
                Electronic
              </button>
            </div>

            {/*  */}
          </div>
        </div>
      </div>

      {/* ..........carousel ......................... */}
      <div style={{ marginTop: "-100px" }}>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          {/* Indicators */}
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#myCarousel" data-slide-to={1} />
            <li data-target="#myCarousel" data-slide-to={2} />
          </ol>
          {/* Wrapper for slides */}
          <div className="carousel-inner">
            <div className="item ">
              {data.map((product, key) => {
                return (
                  <button>
                    {/* <> */}
                    <img
                      src={product.image}
                      alt=""
                      height="200px"
                      width="200px"
                      style={{ border: "solid 5px" }}
                    />
                    <br />
                    <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                    <h3>${product.price}</h3>

                    <Link
                      key={key}
                      to={`/products/${product.id}`}
                      style={{ color: "white" }}
                      className="btn btn-secondary ms-2 px-3 py-2"
                    >
                      View Details
                    </Link>
                  </button>
                );

                //  <h3>{value.title}</h3>

                // <div className="carousel-caption">
                //   <h3>{value.title}</h3>
                //   <p>{value.price}</p>
                // </div>
              })}
            </div>
            {/* mapping  ends */}
          </div>
        </div>
      </div>


{/* ..........nwwwwwwww */}


      {/* .....main end...... */}
    </div>
  );
};

export default Page;
