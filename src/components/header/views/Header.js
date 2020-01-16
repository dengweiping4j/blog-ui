import React, {Component} from 'react';
import styles from './Header.less';
import totalImg from '../../public/images/total.jpg';
import {connect} from "dva";

@connect((state) => ({
    header: state.header
}))
class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'header/getUserInfo',
            payload: {
                userId: 'admin'
            }
        });
    }

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
                        paddingTop: '80px',
                        marginLeft: 'auto',
                        marginRight: '60px'
                    }}>
                        <img src={totalImg} style={{width: '100px', height: '100px', borderRadius: '50%'}}
                        />
                        <div>
                            <p style={{marginTop: '10px'}}><a>{userInfo.userName}</a></p>
                            <p style={{marginTop: '10px'}}>不断重构代码，不断重构自我</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;