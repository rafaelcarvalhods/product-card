import { Menu as AntdMenu } from 'antd';

const Menu = () => (
    <AntdMenu mode="horizontal">
        <AntdMenu.Item key="home">
            Home
        </AntdMenu.Item>
        <AntdMenu.Item key="team">
            Team
        </AntdMenu.Item>
        <AntdMenu.Item key="about-us">
            About Us
        </AntdMenu.Item>
        <AntdMenu.Item key="contact">
            Contacts
        </AntdMenu.Item>
    </AntdMenu>
)

export default Menu;