import "./App.css";
import QRCodeImage from "/image-qr-code.png";

function App() {
  return (
    <main className="container">
      <figure className="card">
        <img
          alt="QR Code to Frontend Mentor"
          className="qr-image"
          src={QRCodeImage}
        />

        <figcaption className="container-desc">
          <h1 className="title">
            Improve your front-end skills by building projects
          </h1>
          <p className="desc">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </figcaption>
      </figure>
    </main>
  );
}

export default App;
