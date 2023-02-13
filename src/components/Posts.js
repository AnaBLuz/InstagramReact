import Post from "./Post"

export default function Posts(){
    return(
        <div class="posts">
          <Post imgUsuario="assets/img/meowed.svg" usuario="meowed" 
          imgConteudo="assets/img/gato-telefone.svg" altConteudo="gato-telefone" 
          curtidasImg="assets/img/respondeai.svg" curtidasAlt="respondeai"
          curtidasNome="respondeai" curtidasQuantidade="outras 101.523 pessoas" />

          <Post imgUsuario="assets/img/barked.svg" usuario="barked" 
          imgConteudo="assets/img/dog.svg" altConteudo="dog" 
          curtidasImg="assets/img/adorable_animals.svg" curtidasAlt="adorable_animals" 
          curtidasNome="adorable_animals" curtidasQuantidade="outras 99.159 pessoas" />

          <Post imgUsuario="assets/img/barked.svg" usuario="barked" 
          imgConteudo="assets/img/dog.svg" altConteudo="dog" 
          curtidasImg="assets/img/adorable_animals.svg" curtidasAlt="adorable_animals" 
          curtidasNome="adorable_animals" curtidasQuantidade="outras 99.159 pessoas" />
          
        </div>
    )
}