import Image from 'next/image'
import styles from './styles.module.css'

function Home() {
    return(
        <div className={styles.container}>
            <Image
                className={styles.imgsize}
                src="/assets/pagina1.png"
                width={707}
                height={1000}
                alt="Picture of the author"
            />
            <Image
                className={styles.imgsize}
                src="/assets/pagina2.png"
                width={707}
                height={1000}
                alt="Picture of the author"
            />
        </div>
    )
}
export default Home

