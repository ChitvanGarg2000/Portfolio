import { IoLogoLinkedin, IoCall } from "react-icons/io5";
import { RiWhatsappFill, RiInstagramFill, RiTelegramFill } from "react-icons/ri";

const data = {
    "navigations": [
        {
            "name": "About us",
            "link": "#about"
        },
        {
            "name": "Skills",
            "link": "#skills"
        },
        {
            "name": "Experience",
            "link": "#experience"
        },
        {
            "name": "Contact",
            "link": "#contact"
        }
    ],
    "socialLinks": [
        {
            "name": "linked in",
            "link": "https://www.linkedin.com/in/chitvan-garg-2a44b11aa/",
            "icon": <IoLogoLinkedin size={24}  className='text-grey hover:text-yellow-theme' />
        },
        {
            "name": "call",
            "link": "tel:+91-8882331568",
            "icon": <IoCall size={24}  className='text-grey hover:text-yellow-theme' />
        },
        {
            "name": "whatsApp",
            "link": "https://wa.me/+91-8882331568",
            "icon": <RiWhatsappFill size={24}  className='text-grey hover:text-yellow-theme' />
        },
        {
            "name": "instagram",
            "link": "https://www.instagram.com/chitvangarg50/",
            "icon": <RiInstagramFill size={24}  className='text-grey hover:text-yellow-theme' />
        }, 
        {
            "name": "telegram",
            "link": "https://t.me/chitvanGarg",
            "icon": <RiTelegramFill size={24}  className='text-grey hover:text-yellow-theme' />
        }
    ],
    "profiles": [
        "Frontend Developer", "MERN Developer", "React Developer", "Javascript Developer"
    ]
}

export default data