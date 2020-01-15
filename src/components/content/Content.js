import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import SimpleFactory from '../public/md/简单工厂模式.md';
import CodeBlock from "../public/CodeBlock";
import HeadingBlock from "../public/HeadingBlock";


class Content extends Component {
    state = {};

    test = () => {
        alert('测试');
    }

    render() {
        const {title = '无标题'} = this.props;
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>{title}</h1>
                <ReactMarkdown
                    source={SimpleFactory}
                    escapeHtml={false}
                    renderers={{
                        code: CodeBlock,
                        heading: HeadingBlock
                    }}
                />
            </div>
        )
    }
}

export default Content;
