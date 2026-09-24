import arrowLeft from '../assets/arrow-slideshow-left.svg'
import arrowRight from '../assets/arrow-slideshow-right.svg'
import { useState } from 'react'

function Slideshow({ pictures }) {

    const [index, setIndex] = useState(0)

    function handleSlideshowRight() {

        if (index === pictures.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    function handleSlideshowLeft() {

        if (index === 0) {
            setIndex(pictures.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    return (
        <div className="slideshow">
            <img className="slideshow__img" src={pictures[index]} alt="" />

            {pictures.length !== 1 && (
                <>
                    <button className="slideshow__left" type="button" onClick={handleSlideshowLeft}><img src={arrowLeft} alt="Image précédente" /></button>
                    <button className="slideshow__right" type="button" onClick={handleSlideshowRight}><img src={arrowRight} alt="Image suivante" /></button>
                    <span className="slideshow__count">{index + 1}/{pictures.length}</span>
                </>
            )}
        </div>
    )
}

export default Slideshow
