import { t } from 'i18next'
import Link from 'next/link'

import Container from '@components/global/container'

import Icons from '../../global/icons'
import { buttonVariants } from '../../ui/button'

interface NavbarProps {
  preview?: boolean
  name?: string
}

const Navbar: React.FC<NavbarProps> = ({ preview = false, name = 'Intelligence Fit' }) => {
  return (
    <header className='px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50'>
      <Container reverse>
        <div className='flex items-center justify-between h-full mx-auto md:max-w-screen-xl'>
          <div className='flex items-start'>
            {preview ? (
              <div className='flex items-center gap-2'>
                <Icons.logo className='w-8 h-8' />
                <span className='text-lg font-medium'>{name}</span>
              </div>
            ) : (
              <Link href='/' className='flex items-center gap-2'>
                <Icons.logo className='w-8 h-8' />
                <span className='text-lg font-medium'>{name}</span>
              </Link>
            )}
          </div>
          {!preview && (
            <>
              <nav className='hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <ul className='flex items-center justify-center gap-8'>
                  <Link href='#' className='hover:text-foreground/80 text-sm'>
                    {t('header.about-us')}
                  </Link>
                  <Link href='#' className='hover:text-foreground/80 text-sm'>
                    {t('header.services')}
                  </Link>
                  <Link href='#' className='hover:text-foreground/80 text-sm'>
                    {t('header.testimonials')}
                  </Link>
                </ul>
              </nav>
              <div className='flex items-center gap-4'>
                <Link href='/sign-up' className={buttonVariants({ size: 'sm', className: 'hidden md:flex' })}>
                  {t('header.language')}
                </Link>
              </div>
            </>
          )}
        </div>
      </Container>
    </header>
  )
}

export default Navbar
