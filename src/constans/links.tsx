import { IoHome } from "react-icons/io5";

const scrollOpions = {
    spy:true,
    smooth: true,
    offset:-100,
    duration:700,
    scrollBehavior: 'smooth'
}
export const links = [

    {
        name: 'About Me',
        href: '/',
        to:'about',
        spy:scrollOpions.spy,
        smooth:scrollOpions.smooth,
        offset:scrollOpions.offset,
        duration:scrollOpions.duration,
    },
    {
        name: 'Projects',
        href: '/',
        to: 'projects',
        spy:scrollOpions.spy,
        smooth:scrollOpions.smooth,
        offset:scrollOpions.offset,
        duration:scrollOpions.duration,
    },
    {
        name: 'Contact',
        href: '/',
        to:'contacts',
        spy:scrollOpions.spy,
        smooth:scrollOpions.smooth,
        offset:scrollOpions.offset,
        duration:scrollOpions.duration,
    },
]