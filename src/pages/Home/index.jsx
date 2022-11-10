import React from "react";
import logo from "../../assets/logo/bb-logo-noir.png";
import arclinea from "../../assets/logo/arclinea-logo.png";
import maxalto from "../../assets/logo/maxalto-logo.png";
import Banner from "../../components/Banner";
import Blocs from "../../components/Blocs";
import styles from "./styles.module.scss";
import images from "../../assets/images/leia.jpeg";
import About from "../../components/About";
import Headband from "../../components/Headband";
import at from "../../assets/icon/at.svg";
import phone from "../../assets/icon/phone.svg";
import instagram from "../../assets/icon/instagram.svg";
import ImgSlider from "../../components/ImgSlider";

//////////

import test from "../../assets/images/leia.jpeg";
import test_1 from "../../assets/images/leia.jpeg";
import test_2 from "../../assets/images/leia.jpeg";
import test_3 from "../../assets/images/leia.jpeg";

const HomePage = () => {
  const SliderData = [
    {
      image: images,
    },
    {
      image: test,
    },
    {
      image: test_1,
    },
    {
      image: test_2,
    },
    {
      image: test_3,
    },
  ];
  console.log(SliderData);
  return (
    <div className={styles.main}>
      <div className={styles.__container}>
        <div className={styles.__head}>
          <img src={logo} className={styles.__logo} alt="logo B and B Italia" />

          <ul>
            <li>
              <img src={phone} alt={"phone symbol"} />
            </li>
            <li>
              <img src={at} alt={"at symbol"} />
            </li>
            <li>
              <img src={instagram} alt={"instagram symbol"} />
            </li>
          </ul>
          <Headband />
        </div>
        <div className={styles.banner}>
          <Banner />
        </div>
        <>
          <section id="about">
            <About
              text="Tropézien depuis 25 ans, Christophe Papa vient de l’univers du luxe et de la mode. Ce sont les figures historiques; Le Corbusier, Charlotte Perriand, Florence Knoll, Eliel et Eero Saarinen, Alvar Aalto, Walter Gropius et Ludwig Mies van der Rohe; qui lui ont donné l’envie d’aller plus loin.
                La rencontre avec un acteur majeur du design italien en France lui a permis de concrétiser, il ouvre en 2016 le 1er  showroom monomarque B&B Italia en France."
              img={images}
              alt="c'est Christophe"
              logo={logo}
              altLogo="logo B and B Italia"
            />
          </section>
          <section id="bandb">
            <Blocs
              text="Né en 1966 de la vision entrepreneuriale de Piero Ambrogio Busnelli, le Groupe a bâti son succès sur sa capacité à représenter la culture contemporaine à travers le design, la décoration et l’architecture, et à anticiper les tendances en cherchant constamment à répondre aux évolutions des goûts et des styles de vie.Depuis la célèbre marque italienne de mobilier contemporain n’a eu de cesse de créer les meubles design les plus innovants, emblématiques et intemporels, de développer une recherche et développement inégalée, un savoir-faire industriel et une qualité Made in Italy qui font de B&B Italia l`une des premières entreprises de design au monde.
                Design Holding est un hub de design unique par sa taille et son envergure internationale, intégrant des marques emblématiques telles que B&B Italia, Maxalto, Azucena, Arclinea, Flos, Louis Poulsen, Fendi Casa, Menu, by Lassen et Lumens."
              img={images}
              alt="c'est Leia"
              logo={logo}
              altLogo="logo B and B Italia"
            />
          </section>
          <section id="maxalto">
            <Blocs
              text="Fondée en 1975 aux côtés de B&B Italia, Maxalto a rapidement développé une identité personnelle dans la production spécialisée de meubles artisanaux.
              La recherche des plus hauts standards de qualité en termes de matériaux et de fabrication est l'objectif d'excellence inhérent au nom même de la marque. 
              En effet, Maxalto dérive des termes dialectaux vénitiens massa alto, qui signifient le plus haut."
              img={images}
              alt="c'est Leia"
              logo={maxalto}
              altLogo="maxalto"
            />
          </section>
          <section id="arclinea">
            <Blocs
              text="Arclinea, fabricant majeur de cuisine en Italie depuis 1925, 
              rejoint le groupe B&B Italia en 2016.  
                    Ce partenariat stratégique repose sur des valeurs communes de conception, d'innovation et de qualité, et sur une approche commune de la production et de l'industrie axée sur l'excellence.
                    L'objectif d'Arclinea est de produire des projets qui durent, capables de générer à chaque fois la cuisine souhaitée. Car si la perfection peut exister sur le papier, elle n'existe que lorsque le projet répond pleinement à toutes les exigences qui lui sont faites : une synthèse de valeurs conjuguées."
              img={images}
              alt="c'est Leia"
              logo={arclinea}
              altLogo="arclinea"
            />
          </section>
          <section id="projects">
            <ImgSlider slides={SliderData} />
          </section>
          <section id="contact">
            <Blocs
              text={"This \n works"}
              img={images}
              alt="c'est Leia"
              logo={logo}
              altLogo="logo B and B Italia"
            />
          </section>
        </>
      </div>
    </div>
  );
};

export default HomePage;
