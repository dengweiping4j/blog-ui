import React from 'react';
import {connect} from 'dva';
import MyMenu from "../../../components/menu/myMenu";
import Header from "../../../components/header/views/Header";
import ArticleList from "../../../components/article/ArticleList";

function IndexPage() {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div style={{margin: '10px 40px'}}>
                <MyMenu/>
            </div>
            <div style={{margin: '0px 80px'}}>
                <ArticleList/>
            </div>
            <div style={{
                width: '100%',
                height: '200px',
                paddingTop: '100px',
                textAlign: 'center',
                marginTop: '50px',
                backgroundColor: '#508B93'
            }}>
                <a href={'https://blog.csdn.net/qq_27574367'} style={{color: '#000'}}>©️2020 版权所有｜weipingdeng@qq.com</a>
            </div>
        </div>

    );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
