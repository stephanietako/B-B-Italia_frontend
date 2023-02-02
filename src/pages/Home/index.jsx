import React from "react";
// Componenets
import Contact from "../../components/Contact";
import HomeSection from "../../components/HomeSection";
import Blocs from "../../components/Blocs";
import About from "../../components/About";
import ImgSlider from "../../components/ImgSlider";
import IconsContacts from "../../components/IconsContacts";
import NavBar from "../../components/Navbar";
// Styles
import styles from "./styles.module.scss";
// Logos
import logo from "../../assets/logo/bb-logo-noir.webp";
import logost from "../../assets/logo/bb.webp";
import arclineaLogo from "../../assets/logo/arclinea-logo.webp";
import maxaltoLogo from "../../assets/logo/maxalto-logo-crop.webp";
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
// Images Slide Home
import home1 from "../../assets/images/home1.webp";
import home2 from "../../assets/images/home2.webp";
import home3 from "../../assets/images/home3.webp";
import home4 from "../../assets/images/home4.webp";

const HomePage = () => {
  // Projects section data images
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
  // Showroom section data images
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
  // Home section data images
  const SliderDataHome = [
    {
      image: home1,
    },
    {
      image: home2,
    },
    {
      image: home3,
    },
    {
      image: home4,
    },
  ];

  return (
    <>
      <NavBar />
      <IconsContacts />
      <section id="welcome">
        <div className={styles.sections}>
          <HomeSection slides={SliderDataHome} />
        </div>
      </section>
      <section id="about">
        <div className={styles.sections}>
          <About
            text={
              "Tropézien depuis 25 ans, Christophe Papa vient de l’univers du luxe et de la mode.\nCe sont les figures historiques tel Le Corbusier ou Charlotte Perriand, qui lui ont donné l’envie d’aller plus loin.\nLa rencontre avec un acteur majeur du design italien en France lui a permis de concrétiser, il ouvre en 2016 le 1er showroom monomarque B&B Italia en France."
            }
            textmobile={
              " Tropézien depuis 25 ans, Christophe Papa vient de l’univers du luxe, de la mode. Le Corbusier, Charlotte Perriand lui ont donné l’envie d’aller plus loin. La rencontre avec un acteur majeur du design italien en France lui a permis de concrétiser. 2016 1er showroom monomarque B&B Italia en France."
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
              "Né en 1966 de la vision entrepreneuriale de Piero Ambrogio Busnelli, le Groupe a bâti son succès sur sa capacité à représenter la culture contemporaine à travers le design, la décoration et l’architecture et à anticiper les tendances en cherchant constamment à répondre aux évolutions des goûts et des styles de vie.\nDepuis, la célèbre marque italienne de mobilier contemporain n’a eu de cesse de créer les meubles design les plus innovants, emblématiques et intemporels, de développer une recherche et développement inégalée, un savoir-faire industriel et une qualité Made in Italy qui font de B&B Italia l'une des premières entreprises de design au monde.\nDesign Holding est un hub de design unique par sa taille et son envergure internationale, intégrant des marques emblématiques telles que B&B Italia, Maxalto, Azucena, Arclinea, Flos, Louis Poulsen, Fendi Casa, Menu, by Lassen et Lumens."
            }
            textmobile={
              " Né en 1966 de la vision entrepreneuriale de Piero Ambrogio Busnelli, le Groupe a bâti son succès sur sa capacité à représenter la culture contemporaine à travers le design, la décoration et l’architecture, et à anticiper les tendances en cherchant constamment à répondre aux évolutions des goûts et des styles de vie."
            }
            img={vue}
            alt="B and B Italia"
            logo={logost}
            altLogo="logo B and B Italia"
            link="https://www.bebitalia.com/en-us/"
          />
        </div>
      </section>
      <section id="maxalto">
        <div className={styles.sections}>
          <Blocs
            text={
              "Fondée en 1975 aux côtés de B&B Italia, Maxalto a rapidement développé une identité personnelle dans la production spécialisée de meubles artisanaux. La recherche des plus hauts standards de qualité, en termes de matériaux et de fabrication, est l'objectif d'excellence inhérent au nom même de la marque. En effet, Maxalto dérive des termes dialectaux vénitiens massa alto, qui signifient le plus haut.\nLes recherches de la marque sur la forme se tournent vers le passé, avec une revisitation des styles classiques.\nAfra et Tobia Scarpa ont été ses premiers interprètes, concevant une série de meubles en bois grâce à l'utilisation de processus de production rares et anciens typiques de l'ébénisterie et de la fabrication de luth. Le résultat a été extrêmement saisissant, dans son effet sculptural, comme en témoignent la chaise Africa (collection Artona) et la collection New Harmony."
            }
            textmobile={
              " Fondée en 1975 aux côtés de B&B, Maxalto a rapidement développé une identité propre dans la production spécialisée de meubles artisanaux grâce à l'utilisation de processus de production anciens typiques de l'ébénisterie.\nMaxalto dérive des termes dialectaux vénitiens massa alto, qui signifient le plus haut."
            }
            img={maxalto}
            alt="Maxalto"
            logo={maxaltoLogo}
            altLogo="logo maxalto"
            link="https://www.maxalto.com/en/"
          />
        </div>
      </section>
      <section id="arclinea">
        <div className={styles.sections}>
          <Blocs
            text={
              "Arclinea, fabricant majeur de cuisine en Italie depuis 1925, rejoint le groupe B&B Italia en 2016.\nCe partenariat stratégique repose sur des valeurs communes de conception, d'innovation et de qualité, sur une même approche de la production et de l'industrie axée sur l'excellence.Pour Arclinea, contribuer à améliorer la qualité de vie est le véritable engagement qui a guidé les choix entrepreneuriaux faits au fil du temps et qui s'est concrétisé dans tous les domaines d'intervention.\nDepuis toujours, Arclinea traite la complexité du projet en cherchant à concilier la précision technique et la fonctionnalité, l'innovation des formes et celle des espaces, en choisissant de travailler depuis des années Antonio Citterio, pour produire non seulement des équipements et des meubles, mais également des architectures de vie.\nChaque innovation anticipe l'évolution des espaces à cuisiner."
            }
            textmobile={
              " Arclinea, le fabricant majeur de cuisine en Italie depuis 1925, rejoint le groupe B&B Italia en 2016.\nCe partenariat stratégique repose sur des valeurs communes de conception, d'innovation et de qualité, et sur une approche commune de la production et de l'industrie axée sur l'excellence, la durabilité et le design."
            }
            img={arclinea}
            alt="Arclinea"
            logo={arclineaLogo}
            altLogo="logo arclinea"
            link="https://www.arclinea.com/eng/"
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
            address={
              "avenue FOCH \n 83990 \n Saint-Tropez \n Accès direct par le Parking Foch "
            }
            phone={<a href="tel:+33494457720">04 94 45 77 20</a>}
            mail={
              <a href="mailto:contact@bebsttropez.fr">contact@bebsttropez.fr</a>
            }
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;
