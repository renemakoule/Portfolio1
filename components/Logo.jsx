import Link from "next/link"
import Image from "next/image"

const Logo = () => {
  return (
    <Link href='/'>
      {/**<Image src="/logo.png" alt="logo" width={32} height={32} priority /> */}
        
        <h1 className='font-semibold'>P.E.P</h1>
    </Link>
  )
}

export default Logo