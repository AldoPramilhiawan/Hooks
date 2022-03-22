import React, { useState } from "react";
import axios from "axios";
import Axios from "axios";

const Effect = () => {
  const [data, setData] = useState([]);
  const getNews = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=id&apiKey=35f2baec5f4644df90133cf1cdfed55d").then((response) => {
      setData(response.data.articles);
    });
  };
  return (
    <>
      <div className="container my-3">
        <button className="btn btn-primary" onClick={getNews}>
          Fetch News
        </button>
      </div>

      <div className="container">
        <div className="row">
          {
              data.map((value) => {
                  return(
                    <div className="col-4">
                    <div className="card" style={{width: "14rem"}}>
                      <img src={value.urlToImage} class="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{value.title}</h5>
                        <p className="card-text">{value.description}</p>
                        <a href="#" class="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>
                  )
              })
          }
        </div>
      </div>
    </>
  );
};
export default Effect;
