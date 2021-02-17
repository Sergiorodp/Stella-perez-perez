
import styles from '../styles/Home.module.css'

// Componentes
import Layout from '../components/layout/index'
import Button from '../components/boton/index'
import MainHome from '../sections/Home/index'
import SobreMi from '../sections/sobreMi/index'

const tittle = 'Stella Perez | Contadora'

export default function Home() {
  return (
      <Layout tittle = {tittle}>

        {/* <div className={styles.content}>
          <div className = {styles.centerMainPage}>
            <h3>Contadora Publica</h3>
            <p>Asesoría nivel contable, tributario, laboral y financiero</p>
            <Button url = {'/contacto'} nombre = {'Contactame'}/>
           
          </div>
        </div> */}

        <MainHome/>
        <SobreMi/>

      </Layout>
  )
}
