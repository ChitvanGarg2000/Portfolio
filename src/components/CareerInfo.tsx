import React, { ReactElement } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FaBriefcase } from "react-icons/fa6";
import { School } from "lucide-react";
import { GrProjects } from "react-icons/gr";
import Experience from './Experience';

const CareerInfo = () => {
    const tabs = [{
        name: "Experience",
        icon: <FaBriefcase size={12}/>,
        component: <Experience />
    }, {
        name: "Education",
        icon: <School size={12}/>,
        component: null
    }, {
        name: "Projects",
        icon: <GrProjects size={12}/>,
        component: null
    }]
    return (
        <div className='career-section flex justify-center pt-12' id="experience">
            <Tabs defaultValue="Experience" className="w-full">
                <div className='flex w-full justify-center'>
                    <TabsList>
                        {tabs.map(({ name, icon }: { name: string, icon: ReactElement }) => <TabsTrigger value={name} className='data-[state=active]:bg-yellow-theme data-[state=active]:text-white flex items-center'>{icon} <span className='ml-1'>{name}</span></TabsTrigger>)}
                    </TabsList>
                </div>
                {tabs.map(({ name, component }: { name: string, component: ReactElement | null }) => <TabsContent value={name}>{component}</TabsContent>)}
            </Tabs>
        </div>
    )
}

export default CareerInfo