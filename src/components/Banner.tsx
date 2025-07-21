'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { FaFileDownload } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import navigations from '../data/navigations'
import Link from 'next/link';
import { IMAGE_URLS, DOC_URLS } from '../constants/urls'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import ContactForm from './contactForm';
import MailLoader from "./MailLoader"
import { ToastContainer } from "react-toastify"
import { FaChevronCircleDown } from "react-icons/fa";

function Banner() {
    const [currentText, setCurrentText] = useState<string>('');
    const [isDeleting, setIsDeleting] = useState<boolean>(false)
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [mailError, setMailError] = useState<string>('')
    const profiles: string[] = [
        'Software Engineer',
        'Full Stack Developer',
        'Javascript Specialist',
        'Problem Solver'
    ];

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = DOC_URLS.resume;
        link.setAttribute('download', 'Chitvan_Garg_CV.pdf');
        document.body.appendChild(link);
        link.click();
        link.remove();
    };

    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            const current = profiles[currentIndex];

            if (!isDeleting) {
                if (currentText.length < current.length) {
                    setCurrentText(current.substring(0, currentText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (currentText.length > 0) {
                    setCurrentText(current.substring(0, currentText.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % profiles.length);
                }
            }
        }, isDeleting ? 50 : 150);

        return () => clearTimeout(timeout);
    }, [currentText, currentIndex, isDeleting, profiles]);

    if (isLoading) {
        return <>
            <MailLoader type={mailError === '' ? "error" : "success"} message={mailError === '' ? "Successfully sent" : mailError} position="top-right" />
            <ToastContainer />
        </>
    }


    return (
        <>
            <div className='flex justify-between pt-16'>
                <div className='info w-full sm:w-1/2'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-4xl sm:text-6xl lg:text-7xl mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            Hi, I'm{' '}
                            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                                Chitvan Garg
                            </span>
                        </motion.h1>

                        <motion.div
                            className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground mb-8 h-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            I'm a{' '}
                            <span className="border-r-2 border-primary pr-1 text-yellow-theme">
                                {currentText}
                            </span>
                        </motion.div>

                        <motion.p
                            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            I am a seasoned full-stack software engineer with over
                            2 years of professional experience, specializing in Frontend development.
                            My expertise lies in crafting robust and scalable React based web applications.
                        </motion.p>
                    </motion.div>
                    <div className='flex'>
                        <Dialog>
                            <DialogTrigger>
                                <Button className='cursor-pointer bg-yellow-theme flex items-center'>
                                    Get in touch<MdMail size={12} style={{ color: "#fff" }} />
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <ContactForm isLoading setLoading={setLoading} mailError={mailError} setMailError={setMailError} />
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>

                        <Button className='cursor-pointer flex items-center ml-2' onClick={handleDownload}>
                            Resume <FaFileDownload size={12} style={{ color: "#fff" }} />
                        </Button>
                    </div>
                    <div className='hidden sm:flex gap-4 items-center mt-8'>
                        {navigations.socialLinks.map(({ link, icon }) => <Link href={link}>{icon}</Link>)}
                    </div>
                </div>
                <div className='hidden w-2/5 sm:flex justify-center items-center'>
                    <div className='banner-image flex justify-center items-center'>
                        <div className='banner-cover flex py-4'>
                            <Image src={IMAGE_URLS.bannerImage} alt='banner-image' width={320} height={350} />
                        </div>
                    </div>
                </div>
            </div>
            <motion.button
                onClick={scrollToAbout}
                className="w-full py-10 flex justify-center rounded-full transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                whileHover={{ y: -5 }}
            >
                <FaChevronCircleDown size={24} className="animate-bounce hover:text-yellow-theme" />
            </motion.button>
        </>
    )
}

export default Banner