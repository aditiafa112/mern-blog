import React from 'react'
import { RegisterBg } from '../../../assets'
import './blogitem.scss'

const BlogItem = () => {
    return (
        <div className='blog-item'>
            <img className='image-thumb' src={RegisterBg} alt="" />
            <div className='content-detail'>
                <p className='title'>Title Blog</p>
                <p className='author'>Author - Date Post</p>
                <p className='body'>Lorep ipsup dolor </p>
            </div>
            
        </div>
    )
}

export default BlogItem
