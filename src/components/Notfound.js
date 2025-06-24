import "./Notfound.css"
import notfound from "../blogapp-asset/images/ma_golden.png"

function Notfound() {
    return(
        <div className="notfound-page">
        <h1 className="title">ไม่พบหน้าเว็บนี้ โฮ่ง โฮ่ง!</h1>
        <img src={notfound} alt="Not Found"/>
        </div>
    );
}

export default Notfound;