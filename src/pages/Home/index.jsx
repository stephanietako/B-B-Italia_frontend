// Componenets
import Contact from "../../components/Contact";
import HomeSection from "../../components/HomeSection";
import Blocs from "../../components/Blocs";
import About from "../../components/About";
import ImgSlider from "../../components/ImgSlider";
import IconsContacts from "../../components/IconsContacts";
import Navbar from "../../components/Navbar";
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
import vue from "../../assets/images/vue.webp";
// Images Slide Projects
import slide1bis from "../../assets/images/slide1bis.webp";
import slide2bis from "../../assets/images/slide2bis.webp";
import slide1 from "../../assets/images/slide1.webp";
import slide2 from "../../assets/images/slide2.webp";
import slide3 from "../../assets/images/slide3.webp";
import slide4 from "../../assets/images/slide4.webp";
import capon from "../../assets/images/capon.webp";
import capon1 from "../../assets/images/capon1.webp";
import capon2 from "../../assets/images/capon2.webp";
import capon3 from "../../assets/images/capon3.webp";
import capon4 from "../../assets/images/capon4.webp";
import capon7 from "../../assets/images/capon7.webp";
import capon5 from "../../assets/images/e5bis.webp";
import capon6 from "../../assets/images/e6bis.webp";
// Images Slide Showroom
import s1 from "../../assets/images/s1.webp";
import s2 from "../../assets/images/s2.webp";
import s3 from "../../assets/images/s3.webp";
import s4 from "../../assets/images/s4.webp";
import s5 from "../../assets/images/s5.webp";
import s6 from "../../assets/images/s6.webp";
import s7 from "../../assets/images/s7.webp";
import s8 from "../../assets/images/s8.webp";
import s9 from "../../assets/images/s9.webp";
import s10 from "../../assets/images/s10.webp";
import s11 from "../../assets/images/s11.webp";
import s12 from "../../assets/images/s12.webp";
import s13 from "../../assets/images/s13.webp";
import s14 from "../../assets/images/s14.webp";
import s15 from "../../assets/images/s15.webp";
import s16 from "../../assets/images/s16.webp";
// Images Slide Home
import home1 from "../../assets/images/home1.webp";
import home2 from "../../assets/images/home2.webp";
import home3 from "../../assets/images/home3.webp";
import home4 from "../../assets/images/home4.webp";

const HomePage = ({ lang, setLang }) => {
  // Projects section data images
  const SliderDataProjects = [
    {
      image: slide1bis,
    },
    {
      image: slide2bis,
    },
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
    {
      image: capon,
    },
    {
      image: capon1,
    },
    {
      image: capon2,
    },
    {
      image: capon3,
    },
    {
      image: capon4,
    },
    {
      image: capon5,
    },
    {
      image: capon6,
    },
    {
      image: capon7,
    },
  ];
  // Showroom section data images
  const SliderDataShowroom = [
    {
      image: s1,
    },
    {
      image: s2,
    },
    {
      image: s3,
    },
    {
      image: s4,
    },
    {
      image: s5,
    },
    {
      image: s6,
    },
    {
      image: s7,
    },
    {
      image: s8,
    },
    {
      image: s9,
    },
    {
      image: s10,
    },
    {
      image: s11,
    },
    {
      image: s12,
    },
    {
      image: s13,
    },
    {
      image: s14,
    },
    {
      image: s15,
    },
    {
      image: s16,
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
      <Navbar lang={lang} setLang={setLang} />
      <IconsContacts lang={lang} setLang={setLang} />
      <section id="welcome">
        <div className={styles.sections}>
          <HomeSection slides={SliderDataHome} />
        </div>
      </section>
      <section id="about">
        <div className={styles.sections}>
          <About
            text={
              lang === "fr"
                ? "Tropézien depuis 25 ans, Christophe Papa vient de l’univers du luxe et de la mode.\nCe sont les figures historiques tel que Le Corbusier ou Charlotte Perriand, qui lui ont donné l’envie d’aller plus loin.\nLa rencontre avec un acteur majeur du design italien en France lui a permis de concrétiser, il ouvre en 2016 le 1er showroom monomarque B&B Italia en France."
                : "Christophe Papa has been a Tropezian for 25 years and comes from the world of luxury and fashion. It is the historical figures such as Le Corbusier or Charlotte Perriand, who gave him the desire to go further. The meeting with a major actor of the Italian design in France allowed him to concretize, he opens in 2016 the 1st monobrand showroom B&B Italia in France."
            }
            textmobile={
              lang === "fr"
                ? " Tropézien depuis 25 ans, Christophe Papa vient de l’univers du luxe et de la mode. La rencontre avec un acteur majeur du design italien en France lui a permis de concrétiser, il ouvre en 2016 le 1er showroom monomarque B&B Italia en France."
                : "Tropezian for 25 years, Christophe Papa comes from the world of luxury and fashion. The meeting with a major player in Italian design in France allowed him to concretize, he opened in 2016 the 1st monobrand showroom B&B Italia in France."
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
          <ImgSlider slides={SliderDataShowroom} title="Showroom" />
        </div>
      </section>
      <section id="bandb">
        <div className={styles.sections}>
          <Blocs
            text={
              lang === "fr"
                ? "Né en 1966 de la vision entrepreneuriale de Piero Ambrogio Busnelli, le Groupe a bâti son succès sur sa capacité à représenter la culture contemporaine à travers le design, la décoration et l’architecture et à anticiper les tendances en cherchant constamment à répondre aux évolutions des goûts et des styles de vie.\nDepuis, la célèbre marque italienne de mobilier contemporain n’a eu de cesse de créer les meubles design les plus innovants, emblématiques et intemporels, de développer une recherche et développement inégalée, un savoir-faire industriel et une qualité Made in Italy qui font de B&B Italia l'une des premières entreprises de design au monde.\nDesign Holding est un hub de design unique par sa taille et son envergure internationale, intégrant des marques emblématiques telles que B&B Italia, Maxalto, Azucena, Arclinea, Flos, Louis Poulsen, Fendi Casa, Menu, by Lassen et Lumens."
                : "Born in 1966 from the entrepreneurial vision of Piero Ambrogio Busnelli, the Group has built its success on its ability to represent contemporary culture through design, decoration and architecture and to anticipate trends by constantly seeking to respond to changing tastes and lifestyles. Since then, the famous Italian brand of contemporary furniture has never ceased to create the most innovative, iconic and timeless design furniture, to develop unparalleled research and development, industrial know-how and Made in Italy quality that make B&B Italia one of the leading design companies in the world. Design Holding is a design hub unique in its size and international scope, integrating iconic brands such as B&B Italia, Maxalto, Azucena, Arclinea, Flos, Louis Poulsen, Fendi Casa, Menu, by Lassen and Lumens."
            }
            textmobile={
              lang === "fr"
                ? " Né en 1966 de la vision entrepreneuriale de Piero Ambrogio Busnelli, le Groupe a bâti son succès sur sa capacité à représenter la culture contemporaine à travers le design, la décoration et l’architecture, et à anticiper les tendances en cherchant constamment à répondre aux évolutions des goûts et des styles de vie."
                : "Born in 1966 from the entrepreneurial vision of Piero Ambrogio Busnelli, the Group has built its success on its ability to represent contemporary culture through design, decoration and architecture, and to anticipate trends by constantly seeking to respond to developments. tastes and lifestyles"
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
              lang === "fr"
                ? "Fondée en 1975 aux côtés de B&B Italia, Maxalto a rapidement développé une identité personnelle dans la production spécialisée de meubles artisanaux. La recherche des plus hauts standards de qualité, en termes de matériaux et de fabrication, est l'objectif d'excellence inhérent au nom même de la marque. En effet, Maxalto dérive des termes dialectaux vénitiens massa alto, qui signifient le plus haut.\nLes recherches de la marque sur la forme se tournent vers le passé, avec une revisitation des styles classiques.\nAfra et Tobia Scarpa ont été ses premiers interprètes, concevant une série de meubles en bois grâce à l'utilisation de processus de production rares et anciens typiques de l'ébénisterie et de la fabrication de luth. Le résultat a été extrêmement saisissant, dans son effet sculptural, comme en témoignent la chaise Africa (collection Artona) et la collection New Harmony."
                : "Founded in 1975 alongside B&B Italia, Maxalto quickly developed a personal identity in the specialized production of handcrafted furniture. The pursuit of the highest standards of quality, in terms of materials and workmanship, is the goal of excellence inherent in the brand name itself. In fact, Maxalto derives from the Venetian dialect term massa alto, which means the highest. The brand's research into form looks to the past, with a revisitation of classic styles. Afra and Tobia Scarpa were its first interpreters, designing a series of wooden furniture through the use of rare and ancient production processes typical of cabinet making and lute making. The result was extremely striking in its sculptural effect, as evidenced by the Africa chair (Artona collection) and the New Harmony collection."
            }
            textmobile={
              lang === "fr"
                ? " Fondée en 1975 aux côtés de B&B, Maxalto a rapidement développé une identité propre dans la production spécialisée de meubles artisanaux grâce à l'utilisation de processus de production anciens typiques de l'ébénisterie.\nMaxalto dérive des termes dialectaux vénitiens massa alto, qui signifient le plus haut."
                : "Founded in 1975 alongside B&B, Maxalto quickly developed an identity of its own in the specialized production of handcrafted furniture through the use of ancient production processes typical of cabinetmaking.\nMaxalto derives from the Venetian dialect terms massa alto, meaning the highest."
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
              lang === "fr"
                ? "Arclinea, fabricant majeur de cuisine en Italie depuis 1925, rejoint le groupe B&B Italia en 2016.\nCe partenariat stratégique repose sur des valeurs communes de conception, d'innovation et de qualité, sur une même approche de la production et de l'industrie axée sur l'excellence. Pour Arclinea, contribuer à améliorer la qualité de vie est le véritable engagement qui a guidé les choix entrepreneuriaux faits au fil du temps et qui s'est concrétisé dans tous les domaines d'intervention.\nDepuis toujours, Arclinea traite la complexité du projet en cherchant à concilier la précision technique et la fonctionnalité, l'innovation des formes et celle des espaces, en choisissant de travailler depuis des années Antonio Citterio, pour produire non seulement des équipements et des meubles, mais également des architectures de vie.\nChaque innovation anticipe l'évolution des espaces à cuisiner."
                : "Arclinea, a leading kitchen manufacturer in Italy since 1925, joined the B&B Italia group in 2016. This strategic partnership is based on shared values of design, innovation and quality, on the same approach to production and industry focused on excellence. For Arclinea, contributing to improving the quality of life is the true commitment that has guided the entrepreneurial choices made over time and that has been realized in all areas of intervention. Arclinea has always dealt with the complexity of the project, seeking to reconcile technical precision and functionality, innovation of form and space, choosing to work with Antonio Citterio for years to produce not only equipment and furniture, but also architecture for living.Each innovation anticipates the evolution of cooking spaces."
            }
            textmobile={
              lang === "fr"
                ? " Arclinea, le fabricant majeur de cuisine en Italie depuis 1925, rejoint le groupe B&B Italia en 2016. Ce partenariat stratégique repose sur des valeurs communes de conception, d'innovation et de qualité, et sur une approche commune de la production et de l'industrie axée sur l'excellence, la durabilité et le design."
                : "Arclinea, the leading kitchen manufacturer in Italy since 1925, joined the B&B Italia group in 2016. This strategic partnership is based on common values ​​of design, innovation and quality, and on a common approach to production and industry focused on excellence, sustainability and design."
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
          <ImgSlider slides={SliderDataProjects} title="Projets" />
        </div>
      </section>
      <section id="contact">
        <div className={styles.sections}>
          <Contact
            address={
              lang === "fr"
                ? "avenue FOCH \n 83990 \n Saint-Tropez \n Accès direct par le Parking Foch"
                : "avenue FOCH \n 83990 \n Saint-Tropez \n Direct access from Parking Foch"
            }
            phone={<a href="tel:+33494457720">04 94 45 77 20</a>}
            mail={
              <a href="mailto:contact@bebsttropez.fr">contact@bebsttropez.fr</a>
            }
            lang={lang}
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;
