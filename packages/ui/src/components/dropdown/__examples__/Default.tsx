import { Dropdown } from '../Dropdown'
import { Menu } from '../Menu'

const Default = () => {
    return (
        <Dropdown>
            <Dropdown.Trigger>
                <div className="flex items-center gap-4 rounded-md hover:bg-gray-200 py-2 px-4 transition-colors ease-linear duration-150">
                    <div className="w-[48px] h-[48px] rounded-full bg-primary-500"></div>
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