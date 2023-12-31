import './globals.css'
import { Inter } from 'next/font/google'
import AuthProvider from '@/components/AuthProvider/AuthProvider'
import BlogpageContextProvider from "@/context/BlogpageContext"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SnapBites',
  description: 'Microblogging and Social network platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"/>
      </head>
      <body className={`bg-black ${inter.className}`}>
      <AuthProvider>
        <BlogpageContextProvider>
          {children}
        </BlogpageContextProvider>
      </AuthProvider>
      </body>
    </html>
  )
}
