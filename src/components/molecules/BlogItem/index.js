import React from 'react'
import { RegisterBg } from '../../../assets'
import './blogitem.scss'
import {Button} from "../../../components"
import {useHistory} from "react-router-dom"
import { Gap } from '../../atoms'

const BlogItem = () => {
    const history = useHistory()
    return (
        <div className='blog-item'>
            <img className='image-thumb' src={RegisterBg} alt="" />
            <div className='content-detail'>
                <p className='title'>Title Blog</p>
                <p className='author'>Author - Date Post</p>
                <p className='body'>Lorep ipsup dolor </p>
                <Gap height={20} />
                <Button title="View Detail" onClick={() => history.push("/detail-blog")} />
            </div>
            
        </div>
    )
}

export default BlogItem
