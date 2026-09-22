import { useState } from "react";
import arrowUp from "../assets/icon-arrow-up.svg"

function Collapse({ title, description }) {
    const [open, setOpen] = useState(false)

    return (
        <section className={open ? "collapse collapse--open" : "collapse"}>
            <h2 className="collapse__title">
                <button className="collapse__button" type="button" onClick={() => setOpen(!open)}>{title}
                    <img className="collapse__arrow" src={arrowUp} alt="" />
                </button>
            </h2>
            <div className="collapse__content">{description}</div>
        </section>
    )
}

export default Collapse
