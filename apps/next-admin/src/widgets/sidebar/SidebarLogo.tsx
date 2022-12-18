import { clsx } from 'clsx'
import LogoSvg from 'public/logo.svg'
import { useMainStore } from '@/src/shared/model'

export const SidebarLogo = () => {
  const sideBarIsToggled = useMainStore()

  const classes = clsx({
    'py-6 px-12': sideBarIsToggled,
    'py-2 px-2': !sideBarIsToggled,
  })

  return (
    <div className={classes}>
      <LogoSvg />
    </div>
  )
}
