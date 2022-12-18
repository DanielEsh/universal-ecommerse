import { clsx } from 'clsx'
import LogoSvg from 'public/logo.svg'
import { useSidebar } from '@/src/shared/model'

export const SidebarLogo = () => {
  const isToggled = useSidebar()
  const classes = clsx({
    'py-6 px-12': isToggled,
    'py-2 px-2': !isToggled,
  })

  return (
    <div className={classes}>
      <LogoSvg />
    </div>
  )
}
