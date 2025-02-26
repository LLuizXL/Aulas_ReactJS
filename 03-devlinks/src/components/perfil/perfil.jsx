
import styles from "./perfil.module.css"; //Importando folha de estilo

const Perfil = ({children, fotoPerfil}) => {
  return (
    <div id={styles.perfil}>
      <img src={fotoPerfil} alt="Perfil" />
      <p>{children}</p>
    </div>
  );
};

export default Perfil;
