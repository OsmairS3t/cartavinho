import Link from "next/link"

export default function Header() {
    return (
        <div className='flex justify-center bg-blue-200'>
            <Link href='menu' className='hover:bg-blue-100 px-4'>Menu</Link>
            <Link href='carta' className='hover:bg-blue-100 px-4'>Carta de Vinhos</Link>
            <Link href='cartavinho' className='hover:bg-blue-100 px-4'>Carta de Vinhos (anterior)</Link>
        </div>
    )
}