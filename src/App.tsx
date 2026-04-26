import "./App.css";
import QRCodeImage from "./assets/image-qr-code.png";

function App() {
  return (
    <div className="container">
      <div className="card">
        <img src={QRCodeImage} alt="QR Code Image" className="qr-image" />
        <div className="container-desc">
          <h1 className="title">
            Improve your front-end skills by building projects
          </h1>
          <p className="desc">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
