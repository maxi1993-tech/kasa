/**
 * Bannière de l'Accueil et d'À propos : affiche une image en fond et un titre.
 * @param {Object} props
 * @param {React.ReactNode} props.title - titre de la bannière
 * @param {string} props.image - adresse de l'image de fond
 * @param {string} [props.page] - "about" : voile plus léger et titre masqué
 * @returns {JSX.Element}
 */
function Banner({ title, image, page }) {

    return (
        <section className={page === "about" ? "banner banner--about" : "banner"} style={{ backgroundImage: `url(${image})` }}>
            <h1 className={page === "about" ? "banner__title sr-only" : "banner__title"}>{title}</h1>
        </section>
    )
}

export default Banner
