import { Noto_Serif_Khmer, Poppins} from 'next/font/google'

export const poppins = Poppins({
    weight: ['400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})
export const font_base = Noto_Serif_Khmer({
    weight: ['400', '500', '600', '700', '800', '900'],
    style: ['normal'],
    subsets: ['khmer'],
    display: 'swap',
})