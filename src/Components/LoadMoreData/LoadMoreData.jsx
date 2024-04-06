import React, { useEffect, useState } from "react";
import "./LoadMoreData.css";

const LoadMoreData = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [loadData, setLoadData] = useState(0);
  const [loading, setLoading] = useState(false);
  const [msgError, setMsgError] = useState(null);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          loadData === 0 ? 0 : loadData * 20
        }`
      );
      const data = await response.json();

      console.log(data);
      if (data && data.products && data.products.length)
        setDataProducts([...dataProducts, ...data.products]);

      setLoading(false);
    } catch (e) {
      setMsgError(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [loadData]);

  useEffect(() => {
    setDisableButton(dataProducts.length === 100 ? true : false);
  }, [dataProducts]);

  if (loading)
    return <div className="container">Loading Data ! Please Wait...</div>;

  if (msgError) return <div className="container">{msgError}</div>;

  return (
    <div className="container" id="loadMoreData">
      <h2>5.Load More Data</h2>
      <div className="products-row">
        {dataProducts.map((d, i) => (
          <div className="product-card" key={i}>
            <div className="img-card">
              <img src={d.thumbnail} alt={d.brand} />
            </div>
            <div className="title">{d.brand}</div>
            <div className="desc">{d.description}</div>
          </div>
        ))}
      </div>
      <button
        className="load-more-btn"
        onClick={() => setLoadData(loadData + 1)}
        disabled={disableButton}
      >
        Load More
      </button>
      {disableButton ? (
        <div className="warn-btn">You reached 100 products!</div>
      ) : null}
    </div>
  );
};

export default LoadMoreData;
