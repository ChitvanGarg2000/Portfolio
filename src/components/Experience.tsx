import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent } from './ui/card'
import experience from '../data/experience.json';
import { ExternalLink } from 'lucide-react';
import DOMPurify from 'dompurify';
import Link from 'next/link';

const Experience = () => {
    return (
        <>
            <div className='section-info mt-8'>
                <h2 className='text-2xl font-bold light:text-primary dark:text-white mb-6 flex items-center'>Professional Experience</h2>
                <p className="text-gray-600 text-lg leading-relaxed">With over 2+ years of experience in front-end development, I have worked on diverse web projects, specializing in performance optimization, UI/UX enhancements, and scalable architectures.</p>
            </div>
            <div className='flex items-center flex-wrap sm:flex-nowrap gap-8 sm:gap-12'>
                {experience.map(({ role, link, company, description, duration }) => {
                    return <div className='w-full'>
                        <div className="mt-10 space-y-12 light:text-primary dark:text-white">
                            <div className="relative pl-10 border-l-2 border-yellow-theme pb-6">
                                <div className="absolute -left-[10px] top-0 w-5 h-5 rounded-full bg-yellow-theme ring-4 ring-[#f0e6ff]"></div>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>{role}</CardTitle>
                                        <CardDescription>
                                            <Link href={link} className='flex items-center hover:text-yellow-theme'>
                                                {company} <span className='ml-1'><ExternalLink className='hover:text-yellow-theme' size={12}/></span>
                                            </Link>
                                            </CardDescription>
                                        <CardAction className='text-right text-[14px] sm:text-[16px] hover:text-yellow-theme'>{duration}</CardAction>
                                    </CardHeader>
                                    <CardContent className='max-h-[340px] overflow-y-auto'>
                                        <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(description)}} />
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                }
                )}
            </div>
        </>

    )
}

export default Experience