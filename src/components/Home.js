import "./Home.css"
import PicCarousel from "./Carousel";
import Footer from "./Footer";

function Home() {

    return(
        <div>
            <PicCarousel />
            <div className="content-home">
                <h2>ทำไมคนถึงรักหมาเหมือนลูก?</h2>
                <p>เรารักหมาเหมือนลูก เพราะหมาคือส่วนผสมของความน่ารัก ความขี้อ้อน และความจริงใจที่หาไม่ได้จากที่ไหน!</p>
                <p>หมาเป็น “ลูก” ที่ไม่พูดแต่รักเราสุดหัวใจ แม้บางครั้งมันจะดื้อ จะซน แต่เราก็ยอมแพ้ทุกทีเพราะมันคือความสุขที่แท้จริงในชีวิตของเรา!</p>
            </div>
            <Footer />
        </div>
    );
}

export default Home;