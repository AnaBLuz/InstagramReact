import Post from "./Post"

const posts =[
    {   
        usuario : "meowed",
        usuarioImg : "assets/img/meowed.svg",
        likenome : "respondeai",
        postimg : "assets/img/gato-telefone.svg",
        likeimg : "assets/img/respondeai.svg",
        Likequant: 101523,   
    },
    {   
        usuario : "barked",
        usuarioImg : "assets/img/barked.svg",
        likenome : "adorable_animals",
        postimg : "assets/img/dog.svg",
        likeimg : "assets/img/adorable_animals.svg",
        Likequant: 101523,   
    },
    {   
        usuario : "meowed2",
        usuarioImg : "assets/img/meowed.svg",
        likenome : "respondeai",
        postimg : "assets/img/gato-telefone.svg",
        likeimg : "assets/img/respondeai.svg",
        Likequant: 551523,   
    },
]

export default function Posts(){
    return(<div className="posts">
        {posts.map((prop) =>(
            <Post   key={prop.usuario}
                    usuario={prop.usuario}
                    usuarioImg={prop.usuarioImg}
                    postimg={prop.postimg}
                    likenome={prop.likenome}
                    likeimg={prop.likeimg}
                    Likequant={prop.Likequant}  
            />
        ))}
  </div>
)
}