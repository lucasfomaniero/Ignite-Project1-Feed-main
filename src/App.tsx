import { Header } from "./components/Header"
import { Post, PostProps } from "./components/Post"
import "./fonts/CormorantGaramond-Regular.ttf"
import style from './App.module.css'
import { Sidebar } from "./components/Sidebar"
import { Feed } from "./components/Feed"
import * as uuid from 'uuid';
import { ContentType } from "./model/IContentType"
import { useState } from "react"
import { IComment } from './model/IComment';
import { IPost } from "./model/IPost"


interface IAuthor {
  avatarUrl: string;
  name: string;
  role: string;
}

const fixedPosts: IPost[] = [
  {
    id: uuid.v4(),
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/25959443?v=4',
      name: 'Lucas Maniero',
      role: 'Software Developer'
    },
    publishedAt: new Date('2024-05-20 20:48'),
    content: [
      {type: 'paragraph', content: 'Hoje comecei a explorar o Tailwind CSS, e devo dizer que estou impressionado com a eficiência que ele traz para o desenvolvimento front-end. '},
      {type: 'paragraph', content: 'Para quem ainda não conhece, Tailwind é um framework CSS utilitário que permite criar designs diretamente no HTML através de classes pré-definidas. '},
      {type: 'paragraph', content: 'Isso elimina a necessidade de escrever CSS customizado para cada elemento, agilizando muito o processo.'},
    ],
    comments: [
      {
        id: uuid.v4(),
        imageURL: '',
        name: 'Maria Silva',
        commentedAt: 'Há 2 horas',
        text: 'Eu adoro Tailwind! Uso em todos os meus projetos. A curva de aprendizado é rápida e a produtividade aumenta muito.'
      },
      {
        id: uuid.v4(),
        imageURL: '',
        name: 'Maria Silva',
        commentedAt: 'Há 2 horas',
        text: 'Concordo plenamente. A customização que ele permite é excelente. E os plugins adicionais são muito úteis.'
      },
      {
        id: uuid.v4(),
        imageURL: '',
        name: 'Ana Costa',
        commentedAt: 'Há 2 horas',
        text: 'Também estou começando com Tailwind. Achei um pouco confuso no início, mas depois de alguns tutoriais, fica bem mais fácil.'
      },
    ],
  },
  {
    id: uuid.v4(),
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/25959443?v=4',
      name: 'Lucas Maniero',
      role: 'Software Developer'
    },
    publishedAt: new Date('2024-01-23 20:48'),
    content: [
      {type: 'paragraph', content: 'Hoje comecei a explorar o Tailwind CSS, e devo dizer que estou impressionado com a eficiência que ele traz para o desenvolvimento front-end. '},
      {type: 'paragraph', content: 'Para quem ainda não conhece, Tailwind é um framework CSS utilitário que permite criar designs diretamente no HTML através de classes pré-definidas. '},
      {type: 'paragraph', content: 'Isso elimina a necessidade de escrever CSS customizado para cada elemento, agilizando muito o processo.'},
    ],
    comments: [
      {
        id: uuid.v4(),
        imageURL: '',
        name: 'Maria Silva',
        commentedAt: 'Há 2 horas',
        text: 'Eu adoro Tailwind! Uso em todos os meus projetos. A curva de aprendizado é rápida e a produtividade aumenta muito.'
      },
      {
        id: uuid.v4(),
        imageURL: '',
        name: 'Maria Silva',
        commentedAt: 'Há 2 horas',
        text: 'Concordo plenamente. A customização que ele permite é excelente. E os plugins adicionais são muito úteis.'
      },
      {
        id: uuid.v4(),
        imageURL: '',
        name: 'Ana Costa',
        commentedAt: 'Há 2 horas',
        text: 'Também estou começando com Tailwind. Achei um pouco confuso no início, mas depois de alguns tutoriais, fica bem mais fácil.'
      },
    ],
  },
] 

function App() {
  
  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <Feed>
         {fixedPosts.map( post => {
          return <Post key={post.id} id={post.id} author={post.author} publishedAt={post.publishedAt} content={post.content} comments={post.comments}/>
         })}
        </Feed>
        
      </div>
    </div>
    
  )
}

export default App
