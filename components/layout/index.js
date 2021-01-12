import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Nav from '../navbar/index'

export default function Layout({children, tittle}){
    return(

        <>
            <div className={styles.container}>
                <Head>
                    <title>{tittle}</title>
                    {/* <link rel="icon" href="/favicon.ico" /> */}
                </Head>

                <div className = {styles.pageContainer}>
                    <nav>
                        <Nav/>
                    </nav>
                    <main className={styles.main}>
                        {children}
                    </main>

                    <footer className={styles.footer}>
                    <p>Powered by stella perez</p>
                    </footer>
                </div>
            </div>
        </>
    )
}