import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Plot & Place | See what comes next',description:'Discover Nigerian property, explore dream-home concepts and plan your next investment.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
