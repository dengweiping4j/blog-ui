import React, {Component} from 'react';
import {Menu, Icon} from 'antd';

const {SubMenu} = Menu;

class MyMenu extends Component {
    state = {
        current: 'home',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <div>
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key="home">
                        <Icon type="home"/>
                        首页
                    </Menu.Item>
                    <Menu.Item key="Java">
                        <Icon type="code"/>
                        Java
                    </Menu.Item>
                    <Menu.Item key="html">
                        <Icon type="html5"/>
                        Html
                    </Menu.Item>
                    <SubMenu
                        title={
                            <span className="submenu-title-wrapper">
              <Icon type="setting"/>
              系统设置
            </span>
                        }
                    >
                        <Menu.ItemGroup title="用户管理">
                            <Menu.Item key="setting:1">基本信息</Menu.Item>
                            <Menu.Item key="setting:2">密码管理</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="系统管理">
                            <Menu.Item key="setting:3">权限管理</Menu.Item>
                            <Menu.Item key="setting:4">操作日志</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}

export default MyMenu;
