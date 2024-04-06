import React, { useState } from "react";
import Modal from "./Modal";

const ModalTest = () => {
  const [showModal, setShowModal] = useState(false);

  function handleDisplayModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="modalTest" id="modalTest">
      <h2>6.Modal Pupup</h2>
      <button
        className="modal-btn"
        onClick={handleDisplayModal}
        style={{ display: "block", margin: "20px auto 40px" }}
      >
        Open Model Popup
      </button>
      <Modal
        showModal={showModal}
        handleDisplayModal={handleDisplayModal}
        header={<h1>Customized Title</h1>}
        body={<p>Customized Body</p>}
        footer={<h3>Customized Footer</h3>}
      />
    </div>
  );
};

export default ModalTest;
