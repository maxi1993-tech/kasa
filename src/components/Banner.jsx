function Banner({ title, image, page }) {

    return (
        <section className={page === "about" ? "banner banner--about" : "banner"} style={{ backgroundImage: `url(${image})` }}>
            <h1 className={page === "about" ? "banner__title sr-only" : "banner__title"}>{title}</h1>
        </section>
    )
}

export default Banner
