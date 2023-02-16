import React, { useState } from 'react';

export default function Post(props) {
  const [Coracaoicon, setCoracaoicon] = useState("heart-outline")
  const [Salvoicon, setSalvoicon] = useState("bookmark-outline")
  const [Likequant, setLikequant] = useState(props.Likequant)

function marcarLike(){
    if (Coracaoicon === "heart-outline") {
      setCoracaoicon("heart") 
      setLikequant(Likequant + 1)
      
      
    } else {
      setCoracaoicon("heart-outline")
      setLikequant(Likequant - 1)
      
    }
  }
  function clickFoto() {
    if (Coracaoicon === "heart-outline") {
      setCoracaoicon("heart") 
      setLikequant(Likequant + 1)      
    }
  }
function marcarSalvo(){
  if (Salvoicon === "bookmark-outline") {
    setSalvoicon("bookmark")

  } else {
    setSalvoicon("bookmark-outline")

  }

}

return (

    <div className="post" data-test="post">
          <div className="topo">
            <div className="usuario">
            <img src={props.usuarioImg} alt={props.usuario} />
                {props.usuario}
            </div>
            <div className="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>
    
          <div className="conteudo">
            <img src={props.postimg} alt={props.postimg} onClick={clickFoto} data-test="post-image"/>
          </div>
    
          <div className="fundo">
            <div className="acoes">
              <div>
                <ion-icon onClick={marcarLike} name={Coracaoicon} class={Coracaoicon} data-test="like-post"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon onClick={marcarSalvo} name={Salvoicon} className ={Salvoicon} data-test="save-post"></ion-icon>
              </div>
            </div>
    
            <div className="curtidas">
              <img src={props.likeimg} alt={props.likenome}/>
              <div className="texto">
                Curtido por <strong>{props.likenome}</strong> e <strong data-test="likes-number">outras {Likequant} pessoas</strong>
              </div>
            </div>
          </div>
        </div>)



}
