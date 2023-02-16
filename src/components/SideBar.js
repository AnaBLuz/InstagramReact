import Usuario from "./Usuario"
import Sugestoes from "./Sugestoes"

export default function SideBar(){
    return(
    <>
      <Usuario usuarioimg = "assets/img/catanacomics.svg"
              usuarionome = "catanacomics" /> 
      <Sugestoes />
      
      <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
          Hashtags • Idioma
       </div>
       
       <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
       </div>
    </>
    )
}