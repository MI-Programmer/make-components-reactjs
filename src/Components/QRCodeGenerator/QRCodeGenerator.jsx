import React, { useState } from "react";
import "./QRCodeGenerator.css";
import QRCode from "qrcode.react";

const QRCodeGenerator = () => {
  const [input, setInput] = useState("");
  const [qrCode, setQRCode] = useState("");
  const [showQRCode, setShowQRCode] = useState(false);

  function handleShowQRCode(e) {
    e.preventDefault();
    setShowQRCode(false);
    setQRCode(input);
    setTimeout(() => {
      setShowQRCode(true);
    }, 100);
    setInput("");
  }

  return (
    <div className="qrCodeContainer" id="qrCodeGenerator">
      <h2>7.QR Code Generator</h2>
      <form>
        <input
          type="text"
          value={input}
          placeholder="Enter Your Text Here..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          disabled={input.trim() !== "" ? false : true}
          onClick={handleShowQRCode}
        >
          Generate
        </button>
      </form>
      {showQRCode && (
        <div className="qr">
          <QRCode value={qrCode} className="qrCodeImg" />
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
