// import navStyle from '../../../styles/NavStyle/Nav.module.css'
import styles from './styles'
import Link from 'next/link'
import { createRef } from 'react'

const lineUp = createRef()
const LineDown = createRef()
const itemsContainer = createRef()
const listItems = createRef()

export default function NavBar({bodyRef}){
    
    var visible = false

    const show = () =>{
        visible = !visible
        if(visible){
            // console.log('abierto')
            document.body.classList.add("body-overflow")
            lineUp.current.classList.add("moverLeft")
            LineDown.current.classList.add("moverRight")
            itemsContainer.current.classList.add("opciones-open")
            listItems.current.classList.add("listItems-open")
        }else{
            // console.log('cerrado')
            document.body.classList.remove("body-overflow")
            lineUp.current.classList.remove("moverLeft")
            LineDown.current.classList.remove("moverRight")
            itemsContainer.current.classList.remove("opciones-open")
            listItems.current.classList.remove("listItems-open")
        }
    }

    return(
        <>
        <div className= "mainNavContainer">
            <div className= "navItemsContainer">
                <h2>Stella Perez</h2>
                
                <div className = "opciones" ref = {itemsContainer} onClick = {show}>
                    <ul className = "listItems" ref = {listItems}>
                        <li> <Link href='/'> Inicio </Link></li>    
                        <li><Link href='/api/hello'>Sobre mí</Link></li>
                        <li><Link href='https://vercel.com/dashboard/integrations'>Servicios</Link></li>
                        <li><Link href='https://vercel.com/dashboard/integrations'>Contacto</Link></li>
                    </ul>
                </div>

                <div className = "lines-nav-container">
                    <div className = "lines-block" onClick = {show}>
                        <div className = "line-one line-div " ref = {lineUp} ></div>
                        <div className = "line-two line-div" ></div>
                        <div className = "line-tree line-div " ref={LineDown} ></div>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{styles}
        </style>
        </>
    )
}