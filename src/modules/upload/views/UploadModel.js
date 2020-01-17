import React, {Component} from "react";
import {Button, Icon, Input, Modal, Select, Upload, message} from "antd";
import {connect} from "dva";

const {TextArea} = Input;
const {Option} = Select;
const {Dragger} = Upload;

@connect((state) => ({
    upload: state.upload
}))
class UploadModel extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    uploadMdFile = (option) => {
        console.log("option", option);
        this.props.dispatch({
            type: 'upload/uploadMdFile',
            payload: {
                file: option.file
            }
        });
    }

    render() {
        const props = {
            action: '/upload/uploadMdFile',
            onChange: this.handleChange
        };

        return (
            <Modal
                title="导入文档"
                visible={this.props.visible}
                onOk={this.props.onOk}
                onCancel={this.props.onCancel}
                okText="确定"
                cancelText="取消"
            >
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{marginRight: '30px', width: '60px', marginTop: '5px'}}>文章标题</p>
                    <Input style={{width: '80%'}}/>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', marginTop: '5px'}}>
                    <p
                        style={{
                            marginRight: '30px',
                            width: '60px',
                            marginTop: '5px',
                            textAlignLast: 'justify',
                            textAlign: 'justify',
                            textJustify: 'distribute-all-lines'
                        }}
                    >
                        专栏
                    </p>
                    <Select defaultValue="Java" style={{width: '80%'}}>
                        <Option value="Java">Java</Option>
                        <Option value="React">React</Option>
                        <Option value="sql">数据库</Option>
                    </Select>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', marginTop: '5px'}}>
                    <p
                        style={{
                            marginRight: '30px', width: '60px', marginTop: '30px',
                            textAlignLast: 'justify',
                            textAlign: 'justify',
                            textJustify: 'distribute-all-lines'
                        }}
                    >
                        摘要
                    </p>
                    <TextArea style={{width: '80%'}} rows={4}/>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px'}}>
                    <p style={{marginRight: '30px', marginTop: '60px', width: '60px'}}>上传文件</p>
                    <div style={{width: '80%'}}>
                        <Dragger {...props} accept={'.md'}>
                            <p className="ant-upload-drag-icon">
                                <Icon type="inbox"/>
                            </p>
                            <p className="ant-upload-text">点击或将文件拖到该区域以上传</p>
                            <p className="ant-upload-hint">
                                仅支持单个.md文件上传，请勿上传非法文件！
                            </p>
                        </Dragger>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default UploadModel;