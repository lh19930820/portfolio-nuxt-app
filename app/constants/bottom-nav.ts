import IconHome from '@/components/icons/IconHome.vue'
import IconUser from '@/components/icons/IconUser.vue'
import IconDownload from '@/components/icons/IconDownload.vue'

export const BOTTOM_NAV = [
    {
        label: 'Home',
        href: '/',
        icon: IconHome,
        class: 'text-gray-400 hover:text-white'
    },
    {
        label: 'About',
        href: '/about',
        icon: IconUser,
        class: 'text-gray-400 hover:text-white'
    },
    {
        label: 'CV',
        href: '/assets/files/cv-hien-le__frontend.pdf',
        icon: IconDownload,
        download: true,
        class: 'text-purple-400 hover:text-white'
    }
]