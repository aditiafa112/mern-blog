import React from 'react'
import { Input, Button, Upload, Gap } from '../../components'
import TextArea from '../../components/atoms/TextArea'
import './createblog.scss'

const CreateBlog = () => {
    return (
        <div className='blog-post'>
            <p className='title'>Create New Blog Post</p>
            <Input label="Post Title" />
            <Upload />
            <TextArea />
            <Gap height={20} />
            <div className='button-action'>
                <Button title="Save" />
            </div>
        </div>
    )
}

export default CreateBlog
