import React, { useEffect, useState } from "react";
import "./Search.css";

const Search = () => {
  const [dataUsers, setDataUsers] = useState([]);
  const [showListData, setShowListData] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  async function fetchDataUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      setDataUsers(data.users.map((item) => item.firstName));
      setLoading(false);
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  function filterDataUsers() {
    const input = inputSearch.trim();

    if (input.length) {
      const filterData = dataUsers.filter(
        (item) => item.toLowerCase().indexOf(input.toLowerCase()) > -1
      );

      setFilteredData(filterData);
      setShowListData(true);
    } else {
      setFilteredData([]);
      setShowListData(false);
    }
  }

  console.log(filteredData);

  useEffect(() => {
    fetchDataUsers();
  }, []);

  useEffect(() => {
    filterDataUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputSearch]);

  if (loading) return <h1>Loading Data...</h1>;

  return (
    <div className="searchContainer" id="searchUsers">
      <h2>8.Search Users</h2>
      {errorMsg ? (
        <h1>{errorMsg}</h1>
      ) : (
        <input
          type="text"
          placeholder="Search Users here..."
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
      )}
      {showListData && (
        <ul>
          {filteredData.map((item, id) => (
            <li key={id} onClick={() => setInputSearch(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
