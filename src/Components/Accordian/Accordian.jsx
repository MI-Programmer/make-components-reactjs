import React, { useState } from "react";
import data from "./data";
import "./Accordian.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [multiSelected, setMultiSelected] = useState(
    Array(data.length).fill(null)
  );
  const [selectedMode, setSelectedMode] = useState("single");

  function handleSelectedMode() {
    setSelectedMode(selectedMode === "single" ? "multi" : "single");
  }

  function handleSingleSelection(id) {
    setSelected(selected === id ? null : id);
  }

  function handleMultiSelection(id, i) {
    let cpyMultiSelected = [...multiSelected];

    cpyMultiSelected[i] === id
      ? (cpyMultiSelected[i] = null)
      : (cpyMultiSelected[i] = id);
    setMultiSelected(cpyMultiSelected);
  }

  return (
    <div className="accordian" id="accordian">
      <div className="main">
        <h2>2.Accordian</h2>
        <button className="btn-multi-selection" onClick={handleSelectedMode}>
          Enable Multi Selection
        </button>
        {data && data.length ? (
          data.map((dataItem, i) => (
            <div className="box" key={dataItem.id}>
              <div
                className="title"
                onClick={
                  selectedMode === "single"
                    ? () => handleSingleSelection(dataItem.id)
                    : () => handleMultiSelection(dataItem.id, i)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>
                  {selectedMode === "single"
                    ? selected === dataItem.id
                      ? "-"
                      : "+"
                    : multiSelected[i] === dataItem.id
                    ? "-"
                    : "+"}
                </span>
              </div>
              {selectedMode === "single" ? (
                selected === dataItem.id ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null
              ) : multiSelected[i] === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>The data file has been found, but it appears to be empty.</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
