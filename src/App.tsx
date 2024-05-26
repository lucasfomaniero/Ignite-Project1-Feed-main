import { Header } from "./components/Header"
import { Post } from "./components/Post"
import "./fonts/CormorantGaramond-Regular.ttf"
import style from './App.module.css'
import { Sidebar } from "./components/Sidebar"
import { Feed } from "./components/Feed"
function App() {

  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <Feed>
          <Post author="Lucas Maniero" content="Lorem ipsum sit amet"/>
          <Post author="Tiago Machado" content="Lorem ipsum sit amet"/>
          <Post author="Tiago Machado" content="Lorem ipsum sit amet"/>
          <Post author="Tiago Machado" content="Lorem ipsum sit amet"/>
          <Post author="Tiago Machado" content="Lorem ipsum sit amet"/>
          <Post author="Tiago Machado" content="Lorem ipsum sit amet"/>
        </Feed>
        
      </div>
    </div>
    
  )
}

export default App
