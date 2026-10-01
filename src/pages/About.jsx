import Collapse from '../components/Collapse'
import Banner from '../components/Banner'
import imgBanner from '../assets/banner-about.webp'

/**
 * Textes des 4 Collapse d'À propos : un titre et une description par bloc.
 * @type {Object[]}
 */
const dataCollapses = [
    {
        title: "Fiabilité",
        description: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {
        title: "Respect",
        description: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        title: "Service",
        description: "Nos équipes se tiennent à votre disposition pour vous offrir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
        title: "Sécurité",
        description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les normes sont bien respectées. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
]

/**
 * Page À propos : affiche la bannière et un collapse par élément de dataCollapses.
 * @returns {JSX.Element}
 */
function About() {

    return (
        <>
            <Banner page="about" title="À propos" image={imgBanner} />
            <div className="about-collapses">
                {dataCollapses.map((collapse) => (
                    <Collapse key={collapse.title} title={collapse.title} description={collapse.description} />
                ))}
            </div>
        </>
    )
}
export default About
