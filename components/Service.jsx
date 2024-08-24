import React from 'react'
import { GanttChartSquare, Blocks, Gem } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from './ui/card'
import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine
}from 'react-icons/ri'

const serviceData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'FIXED ASSETS AND INVENTORY ACCOUNTANT',
        description: ['Management of fixed assets (entry, integration, verification and monthly and annual reporting)', 'Analysis and regularization of general accounts'],
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'GENERAL ACCOUNTANT',
        description: ['Monitoring of cost and product subscriptions ', 'Management of fixed assets (entry, integration, verification and monthly and annual reporting)'],
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'ACCOUNTS PAYABLE ACCOUNTANT',
        description: ['Maintaining supplier accounts (verification of compliance, recording and payment of supplier invoices)', 'Lettering of supplier accounts and Analysis of accounts receivable'],
    },
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'ACCOUNTS RECEIVABLE ACCOUNTANT',
        description: ['Opening of customer accounts', 'Entering customer payments and account reconciliations', 'Analysis and regularization of customer accounts'],
    }
]

const Service = () => {
  return (
    <section className="mb-6 xl:mb-18">
        <div className="container mx-auto">
        <div className="ml-30 mb-20 xl:mb-48 mx-auto">
               <h2 className="text-4xl font-bold">My Services</h2>
                </div>

            {/**grid item */}
            <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
                {serviceData.map((item, index) => {
                    return <Card key={index} className='w-full max-w-[420px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative mt-20'>
                        <CardHeader className='text-primary absolute -top-[60px]'>
                            <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
                                {item.icon}
                            </div>
                        </CardHeader>
                        <CardContent className='text-center mt-12'>
                            <CardTitle className='mb-4'>{item.title}</CardTitle>
                            <CardDescription className='text-lg'>
                                 <ul className='list-disc pl-5'>
                                      {item.description.map((desc, index) => (
                                      <li key={index}>{desc}</li>
                                    ))}
                                </ul>
                            </CardDescription>

                        </CardContent>
                    </Card>
                })}
            </div>
        </div>
    </section>
  )
}

export default Service