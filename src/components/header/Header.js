import React, {Component} from 'react';
import styles from './Header.less';
import totalImg from '../public/images/total.jpg';
import Content from '../content/Content'

class Header extends Component {
    state = {};

    test2 = () => {
        console.log(Content.constructor);
    }

    render() {
        const userName = '非著名程序员';
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
                            <p style={{marginTop: '10px'}}><a>{userName}</a></p>
                            <p style={{marginTop: '10px'}} onClick={this.test2}>不断重构代码，不断重构自我</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
