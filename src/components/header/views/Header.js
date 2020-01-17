import React, {Component} from 'react';
import styles from './Header.less';
import totalImg from '../../public/images/total.jpg';
import {connect} from "dva";
import {Button, Icon} from "antd";
import UploadModel from "../../../modules/upload/views/UploadModel";

@connect((state) => ({
    header: state.header
}))
class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'header/getUserInfo',
            payload: {
                userId: 'admin'
            }
        });
    }

    showModel = () => {
        this.setState({
            visible: true
        });
    }

    handleOk = e => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const {userInfo = {}} = this.props.header;
        return (
            <div style={{width: '100%', height: '300px'}} className={styles.head}>
                <div style={{display: 'flex', flexDirection: 'row', width: '100%', textAlign: 'center'}}>
                    <div style={{width: '100%', position: 'absolute'}}>
                        <p style={{fontSize: '30px', paddingTop: '100px'}}>个人技术博客</p>
                    </div>
                    <div style={{
                        textAlign: 'center',
                        paddingTop: '50px',
                        marginLeft: 'auto',
                        marginRight: '60px'
                    }}>
                        <img src={totalImg} style={{width: '100px', height: '100px', borderRadius: '50%'}}
                        />
                        <div>
                            <p style={{marginTop: '5px'}}><a>{userInfo.userName}</a></p>
                            <p style={{marginTop: '5px'}}>不断重构代码，不断重构自我</p>
                        </div>
                        <div style={{marginTop: '40px'}}>
                            <Button onClick={this.showModel}>
                                <Icon type="upload"/> 导入文档
                            </Button>
                        </div>
                    </div>
                </div>
                <UploadModel visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}/>
            </div>
        )
    }
}

export default Header;