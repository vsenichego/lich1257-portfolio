// Map of links to display in the main navigation.
const mainLinks = [{
        name: 'projects',
        href: '/projects',
        key: 1
    },
    {
        name: 'contact',
        // href: '/contact',
        key: 2
    },
    {
        name: 'about',
        href: '/about',
        key: 3
    },
];

// Map of links to display in the project-chapters navigation.
const chaptersLinks = [{
        name: 'light',
        href: '/projects/light',
        icon: '#',
        key: '',
        src: '/preview/1.jpg'
    },
    {
        name: 'generative_visuals',
        href: '/projects/generative',
        icon: '#',
        key: '',
        src: '/preview/2.jpg'
    },
    {
        name: '3d_visuals',
        href: '/projects/3d',
        icon: '#',
        key: '',
        src: '/preview/3.jpg'
    },
    {
        name: 'photos',
        href: '/projects/photos',
        icon: '#',
        key: '',
        src: '/preview/4.jpg'
    },
    {
        name: 'collaborations',
        href: '/projects/collabs',
        icon: '#',
        key: '',
        src: '/preview/5.jpg'
    },
];

const contactLinks = [{
        name: 'instagram',
        href: 'https://www.instagram.com/lich_b1257_12',
        key: 1
    },
    {
        name: 'behance',
        href: 'https://www.behance.net/lich1257_12',
        key: 2
    },
    {
        name: 'telegram',
        href: 'https://t.me/sliva_club',
        key: 3
    },
]

export {
    mainLinks,
    chaptersLinks,
    contactLinks
}