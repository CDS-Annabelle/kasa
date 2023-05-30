import React from 'react'
import styles from './About.module.scss'
import image from '../../assets/images/aboutban.png'
import Aboutcard from '../../components/Aboutcard/Aboutcard'
import Topbanner from '../../components/Topbanner/Topbanner'

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className="home__banner">
                <Topbanner image={image} alt="bannière à propos de Kasa" />
            </div>

            <div className={styles.cardContainer}>
                <Aboutcard
                    title="Fiabilité"
                    text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
                />
                <Aboutcard
                    title="Respect"
                    text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                />
                <Aboutcard
                    title="Service"
                    text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                />
                <Aboutcard
                    title="Sécurité"
                    text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </div>
        </div>
    )
}

export default About
