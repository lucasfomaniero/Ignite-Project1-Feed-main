import { PencilLine } from 'phosphor-react'
import style from './Sidebar.module.css'
export function Sidebar() {
    return (
    <aside className={style.container}>
        <img className={style.sidebarCover} src="https://images.unsplash.com/photo-1525498128493-380d1990a112?q=50&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Background image" />
        <div className={style.profile}>
            <img className={style.profileImage} src="https://github.com/lucasfomaniero.png" alt="User Profile Image" />
            <strong>Lucas Maniero</strong>
            <span>Software Developer</span>    
        </div>
        <footer>
            <a className={style.footerButton} href='#'>
                <PencilLine size={20}/>
                Edite seu perfil
            </a>
        </footer>
        
    </aside>
    )
}