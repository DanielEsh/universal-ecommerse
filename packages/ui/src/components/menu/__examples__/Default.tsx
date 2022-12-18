import { Menu } from '../Menu'

const Default = () => {
  return (
    <div>
      <Menu className="w-[200px]">
        <Menu.Item>Профиль</Menu.Item>
        <Menu.Item>Уведомления</Menu.Item>
        <Menu.Item>Заказы</Menu.Item>
      </Menu>
    </div>
  )
}

export default Default
