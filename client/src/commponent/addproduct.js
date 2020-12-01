import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Modal, Button } from 'antd';
import React, { useState } from "react";

Addproduct= ()=>{
 const  [showModal,setshowModal]=useState(false);
 const showModal = () => {
    setshowModa(showModal(true))
  };

  handleOk = e => {
    console.log(e);
    setshowModa(showModal(false))
  };

  handleCancel = e => {
    console.log(e);
    setshowModa(showModal(false))
  };

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <Upload {...props}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Modal>
      </>
    );
    }
    export default Addproduct; 

