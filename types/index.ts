import { IconType } from "react-icons"
import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";
export interface ISkillCard{
    icon:IconType
    title:string
    descr:string
    style:string
}

export interface IProjectCard{
    title:string
    descr:string
    tags:string[]
    image:StaticImageData
    githubLink?:string
    siteLink?:string
}

export interface ILink{
    link:string
    title:string
    
}
export interface ISocial{
    link:string
    icon:LucideIcon
    name:string
}


