import "./Modal.css";

const Modal = ({ showModal, handleDisplayModal, header, body, footer }) => {
  return (
    <>
      {showModal && (
        <div className="modal-popup-container">
          <div className="box-modal-poup">
            <div className="close-modal-btn" onClick={handleDisplayModal}>
              X
            </div>
            <div className="header-modal">{header}</div>
            <div className="body-modal">{body}</div>
            <div className="footer-modal">{footer}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
