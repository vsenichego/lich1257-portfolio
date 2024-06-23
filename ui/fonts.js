import { Exo } from 'next/font/google'
import localFont from 'next/font/local'

export const clacon2 = localFont({
    src: '../public/fonts/clacon2.woff2',
    display: 'swap',
})

export const pixeloperator = localFont({
    src: '../public/fonts/PixelOperator.ttf',
    display: 'swap',
})

export const exo = Exo({
    subsets: ['latin'],
    variable: '--font-exo',
    display: 'swap',
});