import Link from "next/link"
import { Button } from "./ui/button"
import { Download, Send } from "lucide-react"

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine
}from 'react-icons/ri'

import DevImg from "./DevImg"
import Badge from "./Badge"
import Socials from "./Socials"
import Image from "next/image"


const Hero = () => {
  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
        <div className="container mx-auto">
        <div className='flex justify-between gap-x-8'>
            {/* text */}
            <div className='flex max-w-[650px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
                <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>Senior Accountant</div>
                <h1 className='h1 mb-4'>{/*Minato.ai is an innovative application dedicated to content creation for stars and influencers.*/}
                    Hi, my name is Philippe Emmanuel PENDA
                </h1>
                <p className='subtitle max-w-[790px] mx-auto xl:mx-0'>
                Brief description of my professional profile, my experiences and my desire to unlock new challenges.
                </p>
                    {/** buttons */}
                    <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                        <Link href="mailto:emmanuelpenda12@gmail.com">
                        <Button variant='secondary' className='gap-x-2'>Contact me <Send size={18}/></Button>
                        </Link>
                        <Link href='/CV.pdf'>
                          <Button className='gap-x-2 animate-bounce'>Get Cv <Download size={18}/></Button>
                        </Link>
                        
                    </div>
                    {/**social */}
                    <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconStyles='text-foreground text-[15px] hover:text-primary
                    transition-all'
                     />
            </div>
            {/* images */}
            <div className='hidden xl:flex relative'>
                {/**badge 1 */}
                <Badge
                containerStyles='absolute top-[10%] -left-[10rem]'
                 icon={<RiBriefcase4Fill />} endCountNum={11} badgeText='years of experience' />
                 {/**badge 2 */}
            <Badge
                containerStyles='absolute top-[60%] -left-[7rem]'
                 icon={<RiTodoFill />} endCountNum={4} endCountText='' badgeText='Finished Projects' />
                 {/**badge 3 */}
            <Badge
                containerStyles='absolute top-[35%] -right-1'
                 icon={<RiTeamFill />} endCountNum={9} endCountText='K' badgeText='Happy Clients' />
                <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark
                w-[500px] h-[500px] bg-no-repeat absolute -bottom-15 -right-2
                '></div>
            
                

                <DevImg containerStyles='bg-hero_shape w-[400px] h-[362px] bg-no-repeat relative bg-top -left-20'
                imgSrc='/avatar4.jpg'
                 />
            </div>
            {/* icons */}
            <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
                <RiArrowDownSLine className='text-3xl text-primary' />
            </div>
        </div>
        </div>
    </section>
  )
}

export default Hero