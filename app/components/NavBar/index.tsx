import Image from 'next/image'
import CardsImage from '../../CardsImage.png'
import Link from 'next/link'


export function Navbar() {
  return (
    <nav className="text-white w-full flex  items-center py-4">
      <div className="w-1/2">
        <Image src={CardsImage} alt='Cards image' height={40} width={40} className='bg-gradient-to-r from-gray-800 to-gray-200  stroke-slate-200' />
      </div>
      <div className="w-1/2">
        <ul className="flex items-center gap-10 justify-end">
          <li><Link href={"/"}>Home Page</Link></li>
          <li><Link href={"/cards"}>List Cards</Link></li>
          <li><Link href={"/about"}>About</Link></li>
          <li><Link href={"/contact"}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}