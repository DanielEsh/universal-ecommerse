import { Dropdown } from 'ui'
import { Menu } from 'ui/src/components/dropdown/Menu'

export const HeaderUser = () => {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <div className="flex items-center gap-4 rounded-md py-2 px-4">
          <div className="h-[48px] w-[48px] rounded-full bg-primary-500"></div>
          <div>
            <div>User fullname</div>
            <div>User role</div>
          </div>
        </div>
      </Dropdown.Trigger>

      <Dropdown.Content>
        <Menu className="w-[200px]">
          <Menu.Item>Профиль</Menu.Item>
          <Menu.Item>Уведомления</Menu.Item>
          <Menu.Item>Заказы</Menu.Item>
        </Menu>
      </Dropdown.Content>
    </Dropdown>
  )
}
