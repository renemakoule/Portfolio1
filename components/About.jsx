import DevImg from "./DevImg"
import Image from "next/image"
import { Tabs, TabsContent, TabsTrigger, TabsList } from "./ui/tabs"
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from "lucide-react"


const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Philippe Emmanuel PENDA',

    },
    {
        icon: <PhoneCall size={20} />,
        text: '+237 691 84 69 46',

    },
    {
        icon: <MailIcon size={20} />,
        text: 'emmanuelpenda12@gmail.com',

    },
    {
        icon: <GraduationCap size={20} />,
        text: 'BACHELORS:MANAGEMENT SCIENCES-ECONOMY',

    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Douala-CM',

    }
]

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'Bachelors of science-economy',
                years: '2009-2011',
            },
            {
                university: 'DEUG of economy',
                years: '2007-2008',
            },
            {
                university: 'Certificate of continuing training in Sage SAARI and Commercial Management',
            },
            {
                university: 'Certificate on Carrying out year-end accounting (online certification)',
            },
            {
                university: 'Certificate in Procurement and Logistics (online certification)',
            },
        ]
    },

    {
        title: 'experience',
        data: [
            {
                company: 'CONTAINER TERMINAL MANAGEMENT (CTM / RTC)',
                role: 'Accountant',
                years: '2020 - current',
            },
            {
                company: 'DOUALA INTERNATIONAL TERMINAL (DIT)',
                role: 'Accountant',
                years: '2013 - 2019',
            }
        ]
    }

]

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'Accounting standards and procedures'
            },
            {
                name: 'Processing of accounting and financial information'
            },
            {
                name: 'Administrative and accounting management'
            },
            {
                name: 'Accounting Audit'
            },
            {
                name: 'Internal Control'
            },
            {
                name: 'Cash Management'
            }
            
        ]
    },

    {
        title: 'tools',
        data: [
            {
                name: 'SAARI ACCOUNTING',
            },
            {
                name: 'SAARI COMMERCIAL MANAGEMENT',
            },
            {
                name: 'SAGE X3',
            },
            {
                name: 'IRIS FINANCE under AS400',
            },
            {
                name: 'GESIM.PROMETHEE',
            },
            {
                name: 'IPAKI',
            },
            {
                name: ' XRT',
            },
            {
                name: ' NAVIS N4 BILLING',
            },
            {
                name: 'EXCEL',
            }
        ]
    }

]

const About = () => {
    const getDate = (arr, title) => {
        return arr.find((item)=> item.title === title)
    }

  return (
    <section className='xl:h-[660px] pb-12 xl:py-2'>
        <div className="container mx-auto">
            <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>About me</h2>
            <div className='flex flex-col xl:flex-row'>
            {/**image */}
            <div className='hidden xl:flex flex-1 relative ml-10 rounded-full'>
            <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark
                                w-[365px] h-[365px] bg-no-repeat relative
            ' imgSrc='/avatar.jpg' />
             </div>
        {/**tabs */}
              <div className='flex-1'>
                <Tabs defaultValue='personal'>
                    <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none border-b-blue-400'>
                        <TabsTrigger className='w-full xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                        <TabsTrigger className='w-full xl:w-auto' value='qualifications'>Qualifications</TabsTrigger>
                        <TabsTrigger className='w-full xl:w-auto' value='skill'>Skills</TabsTrigger>
                    </TabsList>
                    {/**Tabs content */}
                    <div className='text-lg mt-12 xl:mt-8'>

                        {/**Personal */}
                        <TabsContent value='personal'>
                            <div className='text-center xl:text-left'>
                                <h3 className='h3 mb-4'>Unmatched Service Quality</h3>
                                <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                                Autonomous and enthusiastic, 
                                I master accounting tools and seek to take on new challenges within a dynamic organization.
                                </p>
                                {/** icons */}
                                <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                    {infoData.map((item, index) => {
                                        return (
                                            <div key={index} className='flex items-center gap-x-4 mx-auto xl:mx-0'>
                                            <div className='text-primary'>{item.icon}</div>
                                            <div>{item.text}</div>
                                        </div>
                                        ) 
                                    })}
                                </div>
                                {/** languages */}
                                <div className='flex flex-col gap-y-2'>
                                    <div className='text-primary'>Language Skill</div>
                                    <div className="border-b border-border"></div>
                                    <div>French, English(beginner)</div>
                                </div>
                            </div>
                        </TabsContent>

                        {/** qualification */}
                        <TabsContent value='qualifications'>
                            <div>
                                <h3 className='h3 mb-8 text-center xl:text-left'>My Awesome Journey</h3>
                                {/** experience and education wrapper */}
                                <div className='grid md:grid-cols-2 gap-y-8'>
                                    {/**experience */}
                                    <div className='flex flex-col gap-y-6'>
                                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                            <Briefcase />
                                            <h4 className='capitalize font-medium'>
                                                {getDate(qualificationData, 'experience').title}
                                            </h4>
                                        </div>
                                        {/**List */}
                                        <div className='flex flex-col gap-y-8'>
                                            {getDate(qualificationData, 'experience').data.map((item, index) => {
                                                const {company, role, years} = item
                                                return(
                                                    <div key={index} className='flex gap-x-8 group'>
                                                        <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                            <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                        </div>

                                                        <div>
                                                            <div className='font-semibold text-xl leading-none mb-2'>{company}</div>
                                                            <div className='text-lg leading-none text-muted-foreground mb-4'>{role}</div>
                                                            <div className='text-base font-medium'>{years}</div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    {/**education */}
                                    <div className='flex flex-col gap-y-6'>
                                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                            <GraduationCap size={28} />
                                            <h4 className='capitalize font-medium'>
                                                {getDate(qualificationData, 'education').title}
                                            </h4>
                                        </div>
                                        {/**List */}
                                        <div className='flex flex-col gap-y-8'>
                                            {getDate(qualificationData, 'education').data.map((item, index) => {
                                                const {university, qualification, years} = item
                                                return(
                                                    <div key={index} className='flex gap-x-8 group'>
                                                        <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                            <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                        </div>

                                                        <div>
                                                            <div className='font-semibold text-xl leading-none mb-2'>{university}</div>
                                                            <div className='text-lg leading-none text-muted-foreground mb-4'>{qualification}</div>
                                                            <div className='text-base font-medium'>{years}</div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </TabsContent>

                        {/** skills */}
                        <TabsContent value='skill'>
                            <div className='text-center xl:text-left'>
                              <h3 className='h3 mb-8'>What I Use Everyday</h3>
                              {/**skills */}
                              <div className='mb-16'>
                                <h4 className='text-xl font-semibold mb-2'>Skills</h4>
                                <div className='border-b border-border mb-4'></div>
                                {/***skill list */}
                                <div>
                                    {getDate(skillData, 'skills').data.map((item, index) => {
                                        const {name} = item
                                        return(
                                            <div key={index} className='w-2/4 text-center xl:text-left mx-auto xl:mx-0'>
                                                <div className='font-medium'>{name}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                              </div>
                              {/**tools */}
                              <div>
                                <h4 className='text-xl font-semibold mb-2 xl:text-left'>Tools</h4>
                                <div className='border-b border-border mb-4'></div>
                                {/**tool list */}
                                <div>
                                    {getDate(skillData, 'tools').data.map((item, index) => {
                                        const {name} = item
                                        return(
                                            <div key={index} className='w-2/4 text-center xl:text-left mx-auto xl:mx-0'>
                                                <div className='font-medium'>{name}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                              </div>
                            </div>
                        </TabsContent>

                    </div>
                </Tabs>
              </div>
        </div>
        </div>

    </section>
  )
}

export default About