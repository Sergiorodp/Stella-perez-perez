// import navStyle from '../../../styles/NavStyle/Nav.module.css'
import styles from './styles'
import Link from 'next/link'
import { createRef } from 'react'
import Button from "../../components/boton";
import { colors } from  '../../components/appLayout/index'

const lineUp = createRef()
const LineDown = createRef()
const itemsContainer = createRef()
const listItems = createRef()
const back = createRef()

export function Blur({inScreen}){
    if(inScreen){
        try{
            back.current.classList.remove("blur")
        }catch{
            console.log('nonblur')
        }  
    }else{
        try{
            back.current.classList.add("blur")
        }catch{
            console.log('nonblur')
        }
    }
}

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
        <div className= "mainNavContainer" ref = {back}>
            <div className= "navItemsContainer">
                <h2>Stella Perez</h2>
                <div className = "button-contact-nav">
                <Button
                    nombre = {'Contacto'} 
                    url = '/' 
                    background = {colors.black}
                    color = {colors.primary}
                    height = {"3px"}/>
                </div>
                
                <div className = "opciones" ref = {itemsContainer} onClick = {show}>
                    <ul className = "listItems" ref = {listItems}>
                        <li> 
                        <a href='#Home' tittle = "Home Page"><div>Inicio</div></a>
                        </li>    
                        <li>
                            <a href = "#sobreMi" tittle = "About me"><div>Sobre mí</div></a>
                            </li>
                        <li>
                            <Link href='/api/hello'> 
                                <a title = "Servicios"><div>Servicios</div></a>
                            </Link>
                        </li>
                        <li><Link href='/contacto'> 
                        <a title = "Contacto"><div>Contacto</div></a></Link></li>
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