import Image from 'next/image'
import Link from 'next/link'

export default function CartaVinho() {
    
    return (
        <>
            <div className='bg-white opacity-30 hover:opacity-100 rounded p-2 m-2 absolute'>
                <Link href='/'>Volar</Link>
            </div>
            <div className='flex justify-center bg-black'>
                <Image 
                    src='/assets/carta.png' 
                    width={1414}
                    height={2000}
                    alt='Carta de Vinhos' 
                />
            </div>
        </>
    )
}