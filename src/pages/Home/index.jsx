// import React, { useRef } from "react";
import React from "react";
import Blocs from "../../components/Blocs";
import About from "../../components/About";
import ImgSlider from "../../components/ImgSlider";
import Welcome from "../../components/Welcome";
// Styles
import styles from "./styles.module.scss";
// Logos
import logo from "../../assets/logo/bb-logo-noir.png";
import logost from "../../assets/logo/bb.png";
import arclineaLogo from "../../assets/logo/arclinea-logo.png";
import maxaltoLogo from "../../assets/logo/maxalto-logo.png";
// Gif
import welcomeGif from "../../assets/gif/slidebnb.gif";
// Images
import arclinea from "../../assets/images/arclinea.webp";
import maxalto from "../../assets/images/maxalto.webp";
import christophe from "../../assets/images/christophe.webp";
// Images Slide Projects
import slide1 from "../../assets/images/slide1.webp";
import slide2 from "../../assets/images/slide2.webp";
import slide3 from "../../assets/images/slide3.webp";
import slide4 from "../../assets/images/slide4.webp";
import vue from "../../assets/images/vue.webp";
// Images Slide Showroom
import showroom1 from "../../assets/images/showroom1.webp";
import showroom2 from "../../assets/images/showroom2.webp";
import showroom3 from "../../assets/images/showroom3.webp";
import showroom4 from "../../assets/images/showroom4.webp";
// Components
// import Test from "../Test";
import ScrollToTop from "../../components/ScrollToTop";
import Contact from "../../components/Contact";

const HomePage = () => {
  const SliderDataProjects = [
    {
      image: slide1,
    },
    {
      image: slide2,
    },
    {
      image: slide3,
    },
    {
      image: slide4,
    },
  ];

  const SliderDataShowroom = [
    {
      image: showroom1,
    },
    {
      image: showroom2,
    },
    {
      image: showroom3,
    },
    {
      image: showroom4,
    },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.__container}>
        <ScrollToTop />
        <section id="welcome">
          <div className={styles.sections}>
            <Welcome />
            <div className={styles.__gif_content}>
              <img src={welcomeGif} alt={"Showroom à Saint-Tropez"} />
            </div>
          </div>
        </section>
        <section id="about">
          <div className={styles.sections}>
            <About
              text={
                "Tropézien depuis 25 ans, Christophe Papa vient de l’univers du luxe et de la mode.  \nCe sont les figures historiques:\nLe Corbusier, Charlotte Perriand, Florence Knoll, Eliel et Eero Saarinen, Alvar Aalto, Walter Gropius et Ludwig Mies van der Rohe; qui lui ont donné l’envie d’aller plus loin.\nLa rencontre avec un acteur majeur du design italien en France lui a permis de concrétiser, il ouvre en 2016 le 1er  showroom monomarque B&B Italia en France."
              }
              img={christophe}
              alt="Christophe"
              logo={logo}
              altLogo="logo B and B Italia"
            />
          </div>
        </section>
        <section id="showroom">
          <div className={styles.sections}>
            <ImgSlider slides={SliderDataShowroom} />
          </div>
        </section>
        <section id="bandb">
          <div className={styles.sections}>
            <Blocs
              text={
                "Né en 1966 de la vision entrepreneuriale de Piero Ambrogio Busnelli.\nLe Groupe a bâti son succès sur sa capacité à représenter la culture contemporaine à travers le design, la décoration et l’architecture et à anticiper les tendances en cherchant constamment à répondre aux évolutions des goûts et des styles de vie.\nDepuis la célèbre marque italienne de mobilier contemporain n’a eu de cesse de créer les meubles design les plus innovants, emblématiques et intemporels, de développer une recherche et développement inégalée, un savoir-faire industriel et une qualité Made in Italy qui font de B&B Italia l`une des premières entreprises de design au monde. \nDesign Holding est un hub de design unique par sa taille et son envergure internationale, intégrant des marques emblématiques telles que B&B Italia, Maxalto, Azucena, Arclinea, Flos, Louis Poulsen, Fendi Casa, Menu, by Lassen et Lumens."
              }
              img={vue}
              alt="B and B Italia"
              logo={logost}
              altLogo="logo B and B Italia"
              link="https://www.google.com/"
            />
          </div>
        </section>
        <section id="maxalto">
          <div className={styles.sections}>
            <Blocs
              text={
                "Fondée en 1975 aux côtés de B&B Italia, Maxalto a rapidement développé une identité personnelle dans la production spécialisée de meubles artisanaux.\nLa recherche des plus hauts standards de qualité en termes de matériaux et de fabrication est l'objectif d'excellence inhérent au nom même de la marque.\nEn effet, Maxalto dérive des termes dialectaux vénitiens massa alto, qui signifient le plus haut."
              }
              img={maxalto}
              alt="Maxalto"
              logo={maxaltoLogo}
              altLogo="maxalto"
            />
          </div>
        </section>
        <section id="arclinea">
          <div className={styles.sections}>
            <Blocs
              text={
                "Arclinea, fabricant majeur de cuisine en Italie depuis 1925, rejoint le groupe B&B Italia en 2016.\nCe partenariat stratégique repose sur des valeurs communes de conception, d'innovation et de qualité, et sur une approche commune de la production et de l'industrie axée sur l'excellence.\nL'objectif d'Arclinea est de produire des projets qui durent, capables de générer à chaque fois la cuisine souhaitée.  \n Car si la perfection peut exister sur le papier, elle n'existe que lorsque le projet répond pleinement à toutes les exigences qui lui sont faites : une synthèse de valeurs conjuguées."
              }
              img={arclinea}
              alt="Arclinea"
              logo={arclineaLogo}
              altLogo="arclinea"
            />
          </div>
        </section>
        <section id="projects">
          <div className={styles.sections}>
            <ImgSlider slides={SliderDataProjects} />
          </div>
        </section>
        <section id="contact">
          <div className={styles.sections}>
            <Contact
              text={
                "avenue FOCH \n 83990 Saint-Tropez \n Accès direct par le Parking Foch "
              }
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
