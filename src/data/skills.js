import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoRedux } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";

const skills = {
    "skillCategories": [
        {
            "title": "Frontend",
            "skills": [
                {
                    "icon": FaReact,
                    "name": "React/Next.js",
                    "level": 95
                },
                {   "icon": BiLogoTypescript,
                    "name": "TypeScript",
                    "level": 90
                },
                {
                    "icon": BiLogoRedux,
                    "name": "Redux/toolkit",
                    "level": 80
                },
                {
                    "icon": SiTailwindcss,
                    "name": "Tailwind CSS",
                    "level": 88
                },

            ]
        },
        {
            "title": "Backend",
            "skills": [
                {
                    "icon": FaNodeJs,
                    "name": "Node.js",
                    "level": 85
                },
                {
                    "icon": SiExpress,
                    "name": "Express.js",
                    "level": 80
                },
                {
                    "icon": SiMongodb,
                    "name": "MongoDB",
                    "level": 75
                },
                {
                    "icon": DiRedis,
                    "name": "Redis",
                    "level": 50
                }
            ]
        },
        {
            "title": "Tools & Others",
            "skills": [
                {
                    "icon": FaGitAlt,
                    "name": "Git/GitHub",
                    "level": 95
                },
                {
                    "icon": FaAws,
                    "name": "AWS",
                    "level": 65
                },
                {
                    "icon": FaDocker,
                    "name": "Docker",
                    "level": 60
                },
                {
                    "icon": GrGraphQl,
                    "name": "GraphQL", 
                    "level": 50
                }
            ]
        }
    ],
    "technologies": [
    "Weather Forecast App", 
    "Connect me (Social media app)", 
    "Hospital Management System", 
    "Expense Trancker"
  ]
}

export default skills;