import React, { useState } from 'react';
export default function Usuario(props){
  const [usuarioImage, setusuarioImage] = useState(props.usuarioimg);
  const [usuarioNome, setusuarioNome] = useState(props.usuarionome);
 
    return(
        <div class="usuario">
          <img src={usuarioImage} data-test="profile-image" onClick={() => {const novaimg = prompt("Digite o link da nova foto de perfil");
                                                   if (novaimg !== "") {
                                                    setusuarioImage(novaimg)}}}
            alt="imagem de perfil"/>
          <div class="texto" >
            <span>
              <strong data-test="name">{usuarioNome}</strong>
              <ion-icon name="pencil"  data-test="edit-name" onClick={() => {const novoNome = prompt("Digite um novo nome");
                                                      if (novoNome !== "") {
                                                        setusuarioNome(novoNome);
                                                      }}}>
              </ion-icon>
            </span>
          </div>
        </div>
    )
}

