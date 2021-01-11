import Head from 'next/head'
import styles from '../styles/Home.module.css'

// Componentes
import Nav from '../components/navbar/index'
import Button from '../components/boton/index'
import SobreMi from '../sections/sobreMi/index'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stella Perez | Contadora</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className = {styles.pageContainer}>
        <nav>
            <Nav/>
        </nav>
        <main className={styles.main}>
          <div className={styles.content}>
            <div className = {styles.centerMainPage}>
              <h3>Contadora Publica</h3>
              <p>Asesoría nivel contable, tributario, laboral y financiero</p>
              <Button url = {'/api/hello'} nombre = {'Contactame'}/>
              {/* <Loader/> */}
            </div>
          </div>

          <SobreMi/>
          
        </main>

        <footer className={styles.footer}>
          <p>Powered by stella perez</p>
        </footer>

      </div>
    </div>
  )
}
