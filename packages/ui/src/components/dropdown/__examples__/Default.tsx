import { Dropdown } from '../Dropdown'
import { Menu } from '../../menu/'

const Default = () => {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <div className="flex items-center gap-4 rounded-md py-2 px-4 transition-colors duration-150 ease-linear hover:bg-gray-200">
          <div className="bg-primary-500 h-[48px] w-[48px] rounded-full"></div>
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

export default Default
