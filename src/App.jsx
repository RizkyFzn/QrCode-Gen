import QRCode from 'qrcode';
import { useState } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [qrcode, setQrcode] = useState('');

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 100,
        margin: 1,
        color: {
          dark: '#000',
        },
      },
      (err, url) => {
        if (err) console.log(err);
        console.log(url);
        setQrcode(url);
      }
    );
  };

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <input type="text" placeholder="http://www.google.com" value={url} onChange={(e) => setUrl(e.target.value)} />
      <button onClick={GenerateQRCode}>Generate</button>
      {qrcode && (
        <>
          <img src={qrcode} alt="" />
          <a href={qrcode} download="qrcode.png">
            Download
          </a>
        </>
      )}
    </div>
  );
}

export default App;
