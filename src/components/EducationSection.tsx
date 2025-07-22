'use client';

import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, Star, BookOpen, Users, Trophy } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function EducationSection() {

    const education = [
        {
            type: 'degree',
            institution: 'Jamia Millia Islamia',
            degree: 'Master of Computer Applications',
            field: 'Computer Science',
            location: 'New Delhi',
            period: '2021 - 2023',
            gpa: '8.95/10.0',
            color: 'bg-gradient-to-br from-yellow-theme to-amber-500'
        },
        {
            type: 'degree',
            institution: 'CCS University',
            degree: 'Bachelor of Science',
            field: 'General',
            location: 'Meerut, Uttar Pradesh',
            period: '2018 - 2021',
            gpa: '7.5/10.0',
            color: 'bg-gradient-to-br from-yellow-theme to-amber-500'
        }
    ];

    const certifications = [
        {
            name: 'AWS Certified Solutions Architect',
            issuer: 'Amazon Web Services',
            date: '2023',
            level: 'Professional',
            color: 'bg-gradient-to-br from-yellow-theme to-amber-500'
        },
        {
            name: 'Google Cloud Professional Developer',
            issuer: 'Google Cloud',
            date: '2023',
            level: 'Professional',
            color: 'bg-gradient-to-br from-amber-400 to-orange-400'
        },
        {
            name: 'Meta React Developer',
            issuer: 'Meta',
            date: '2022',
            level: 'Professional',
            color: 'bg-gradient-to-br from-yellow-500 to-yellow-600'
        },
        {
            name: 'MongoDB Certified Developer',
            issuer: 'MongoDB',
            date: '2022',
            level: 'Associate',
            color: 'bg-gradient-to-br from-amber-500 to-amber-600'
        },
        {
            name: 'Docker Certified Associate',
            issuer: 'Docker',
            date: '2021',
            level: 'Associate',
            color: 'bg-gradient-to-br from-yellow-theme to-orange-400'
        },
        {
            name: 'Kubernetes Administrator',
            issuer: 'CNCF',
            date: '2021',
            level: 'Certified',
            color: 'bg-gradient-to-br from-amber-400 to-yellow-500'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="education" className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-theme/10 to-amber-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-amber-500/10 to-orange-400/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-300/5 to-amber-300/5 rounded-full blur-3xl"></div>
            </div>


            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-3 mb-6"
            >

                <GraduationCap size={32} className="text-yellow-600 mr-3" />
                <h2 className='text-2xl font-bold light:text-primary dark:text-white'>Education</h2>
            </motion.div>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className='w-full flex justify-center max-w-7xl mx-auto gap-4 flex-wrap sm:flex-nowrap'
            >
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ y: -10, rotateY: 5 }}
                        className="relative group basis-full sm:basis-1/2"
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <Card className={`h-full overflow-hidden border-2 hover:border-yellow-theme/40 transition-all duration-300 bg-gradient-to-br ${edu.color} backdrop-blur-sm`}>
                            <CardHeader className="relative">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                            className="w-8 h-8 bg-white rounded-full flex justify-center items-center"
                                        >

                                            <GraduationCap size={24} className="text-yellow-600" />

                                        </motion.div>
                                        <div>
                                            <CardTitle className="text-lg">{edu.degree}</CardTitle>
                                            <CardDescription className="text-yellow-700 font-medium">
                                                {edu.field}
                                            </CardDescription>
                                        </div>
                                    </div>
                                    <Badge variant="secondary" className="bg-white text-yellow-800 align-middle">
                                        {edu.gpa}
                                    </Badge>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-black-foreground mt-2">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        {edu.period}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin size={14} />
                                        {edu.location}
                                    </div>
                                </div>
                            </CardHeader>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>



        </section>
    );
}