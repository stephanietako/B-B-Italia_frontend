import styles from "./styles.module.scss";
import at from "../../assets/icon/at.svg";
import phone from "../../assets/icon/phone.svg";
import instagram from "../../assets/icon/instagram.svg";
import { v4 as uuidv4 } from "uuid";
// Translation component
import Translation from "../../components/Translation";

const IconsContacts = () => {
  const contactLinks = [
    { logo: phone, alt: "Phone symbol", link: "tel:+33494457720" },
    { logo: at, alt: "Mail symbol", link: "mailto:contact@bebsttropez.fr" },
    {
      logo: instagram,
      alt: "Instagram symbol",
      link: "https://www.instagram.com/bebitalia_sttropez/?hl=fr",
    },
  ];
  return (
    <>
      <div className={styles.icons_contacts}>
        <div className={styles.__icons}>
          <ul>
            {contactLinks.map(({ logo, alt, link } = contactLinks) => (
              <li key={uuidv4()}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img src={logo} alt={alt} />
                </a>
              </li>
            ))}
          </ul>
          <Translation />
        </div>
      </div>
    </>
  );
};
export default IconsContacts;

// https://faq.whatsapp.com/425247423114725/?locale=fr_FR&cms_platform=iphone
// Lien wa : https://wa.me/15551234567
