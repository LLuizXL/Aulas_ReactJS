import "./App.css";
import foto from "./img/avatar.webp";
import foto2 from "./img/cat_thinking.png";
import foto3 from "./img/they_shall_not_pass.jpg"

import Perfil from "./components/perfil/perfil";
import Switch from "./components/switch/Switch";
import Links from "./components/links/Links";
import SocialLinks from "./components/socialLinks/SocialLinks";
import Rodape from "./components/rodape/Rodape";
import { useState } from "react";

const App = () => {
  const [isLight, setIsLight] = useState(true); // Variavel da Foto atual, no caso, a foto atual será considera como a foto2 (padrão), como se a foto 2 fosse 'true'.

  const troca = () => {
    setIsLight(!isLight); //Caso o tema estiver claro, a foto 1 será utilizada, se não, é trocado para a foto 2.
  }

  return (
    
    <div id="App" className={isLight ? "light" : ""
    }>

    <div id="container">
       <Perfil fotoPerfil={isLight ? foto2 : foto}> @LLuizG </Perfil>  
      <Switch
      troca={troca} 
      isLight={isLight}
      />
       <div id="links">

      <ul>
        <Links link={"https://github.com/LLuizXL"}> Github </Links>
        <Links link={"https://instagram.com"}> Instagram </Links>
        <Links link={"https://github.com/LLuizXL"}> Portfolio </Links>
        <Links link={"https://github.com/lluizxl/ProjectNPSLM1"}> Projetos </Links>
      </ul>
       </div>

      <div id="socialLinks">
        <SocialLinks
         icon={"logo-github"}
         link={"https://github.com/LLuizXL"}
         />        
        <SocialLinks 
        icon={"logo-youtube"}
        link={"https://youtube.com"}
        />
        <SocialLinks 
        icon={"logo-linkedin"}
        link={"https://linkedin.com"}
        />
        <SocialLinks
         icon={"logo-instagram"}
         link={"https://instagram.com/mxllocudi"}
         />
      </div>

      <Rodape>@LLuizXL</Rodape>
    </div>
         </div>
  );
};

export default App;
