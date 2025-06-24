import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pictureCarousel from "../data/pictureCarousel";
import style from "./Carousel.module.css"

export default function PicCarousel() {
    return(
        <div>
            <Carousel className={style} autoPlay infiniteLoop interval={3000} showThumbs={false} >
                {
                    pictureCarousel.map((image)=> (<img  className={style.crsl} src={image.img_url} alt={image.id}/>
                    ))}
            </Carousel>
        </div>
    )
};