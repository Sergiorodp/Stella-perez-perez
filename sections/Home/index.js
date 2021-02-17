import Button from "../../components/boton";
import Home from "../../pages";
import Styles from '../../styles/homeMain.module.css'
import { colors } from  '../../components/appLayout/index'
import useNearScreen from '../../hooks/useNearScreen/index'
import { createRef, useEffect } from "react";
import { Blur } from "../../components/navbar/index";

const bloques = createRef()

export default function MainHome(){

    const nearBlur = useNearScreen({ externalRef : bloques, distance : 1})

    useEffect(()=>{
        Blur({ inScreen : nearBlur.isNearScreen})
        // padding(nearBlur.isNearScreen)
    },[nearBlur.isNearScreen])

    return(
        <>
        <section>
            
            <div  id = "Home" className = {Styles.mainContainer} ref = {bloques}>
                <div className = {Styles.textContainer}>
                    <div className = {Styles.contentCOntainer}>
                        <h1 >Contadora 
                            Publica</h1>
                        <h2>Asesoría nivel contable, tributario, laboral y financiero</h2>
                        <div className = {Styles.buttonContainer}>
                            <Button 
                            nombre = {'Contacto'} 
                            url = '/' 
                            background = {colors.black}
                            color = {colors.primary}
                            height = {"8px"}/>
                            <Button
                            nombre = {'Empezemos'}
                            url = {'/'}
                            background = {colors.grey}
                            height = {"8px"}
                            />
                        </div>

                    </div>
                </div>
                <div className = {Styles.imageContainer}>
                    <div className = {Styles.cuadroFigure}>
                        <img src = "images/flores y mac.png"
                        width="650" 
                        height="650"></img>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}