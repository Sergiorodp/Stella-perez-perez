import Button from "../../components/boton";
import Home from "../../pages";
import Styles from '../../styles/homeMain.module.css'
import { colors } from  '../../components/appLayout/index'

export default function MainHome(){
    return(
        <>
        <section>
            
            <div className = {Styles.mainContainer}>
                <div className = {Styles.textContainer}>
                    <div className = {Styles.contentCOntainer}>
                        <h1>Contadora 
                            Publica</h1>
                        <h2>Asesoría nivel contable, tributario, laboral y financiero</h2>
                        <div className = {Styles.buttonContainer}>
                            <Button 
                            nombre = {'Contacto'} 
                            url = '/' 
                            background = {colors.black}
                            color = {colors.primary}/>
                            <Button
                            nombre = {'Empezemos'}
                            url = {'/'}
                            background = {colors.grey}
                            />
                        </div>

                    </div>
                </div>
                <div className = {Styles.imageContainer}>
                    <div className = {Styles.cuadroFigure}>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}