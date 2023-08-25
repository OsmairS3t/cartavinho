import Image from 'next/image'
import styles from './styles.module.css'

function Home() {
    return(
        <div className={styles.container}>
            <Image
                className={styles.imgsize}
                src="/assets/carta.png"
                width={707}
                height={1000}
                alt="Picture of the author"
            />
        </div>
    )
}
export default Home

