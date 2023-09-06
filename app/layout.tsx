'use client'
import './index.css'
import Providers from '@/Redux/providers'
import { childrenProps} from '@/types'


const HomeLayout : React.FC<childrenProps> = ({children}) => {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/x-icon" />
        <meta name="description" content="Brand Colors" />
        <title>Brands Color</title>
      </head>
      <body className='flex'>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
export default HomeLayout
