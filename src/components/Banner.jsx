function Banner({ title, image }) {

    return (
        <section className="banner" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})` }}>
            <h1 className="banner__title">{title}</h1>
        </section>
    )
}

export default Banner
