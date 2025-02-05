import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='prose'>
            <div className="mt-6"><h1 >Pagina nu a fost gasita</h1></div>
            <div className="mt-4"><Link className="text-sky-600 hover:text-sky-400" href="/">Click aici pentru a merge catre prima pagina</Link></div>
        </div>
    )
}