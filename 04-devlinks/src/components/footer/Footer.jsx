import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer>
      <p> Feito com ❤️ por <a href={props.devLink} target="_blank">
        {props.devName}
        </a>
        </p>
    </footer>
  );
};

export default Footer;
