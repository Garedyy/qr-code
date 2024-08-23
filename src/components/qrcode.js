import "./qrcode.css";
import QR from "../assets/image-qr-code.png";

const Qrcode = () => {
    return(
        <div className="qrcode">
            <img src={QR}></img>                
            <h2>Improve your front-end skills by building projects</h2>
            <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
    )
}

export default Qrcode;