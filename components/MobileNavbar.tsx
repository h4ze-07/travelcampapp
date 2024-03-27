import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import Button from "./Button"


const MobileNavbar = () => {
  return (
    <div className="fixed bg-white top-[0px] pt-[80px] left-0 flex flex-col gap-8 items-center w-full lg:hidden h-dvh z-[-1] transition-all">
            <ul className='flex flex-col gap-[20px]'>
                {NAV_LINKS.map(l => (
                    <Link key={l.key} href={l.href}
                    className='regular-16 cursor-pointer flexCenter pb-1.5 text-gray-50 transition-all hover:font-bold'
                    >{l.label}</Link>
                ))}
            </ul>
            
            <Button type='button' text='Login' icon='/user.svg' variant='btn_dark_green' />
    </div>
  )
}

export default MobileNavbar