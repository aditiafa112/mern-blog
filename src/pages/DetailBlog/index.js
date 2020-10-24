import React from 'react'
import { RegisterBg } from '../../assets'
import './detailblog.scss'
import {Gap, Link} from "../../components"
import {useHistory} from "react-router-dom"

const DetailBlog = () => {
    const history = useHistory();
    return (
        <div className='detail-blog-wrapper'>
            <img className='img-cover' src={RegisterBg} alt={RegisterBg} />
            <p className='blog-title'>Title Blog</p>
            <p className='blog-author'>Author - Date Post</p>
            <p className='blog-content'>Lorep ipsup dolor </p>
            <Gap height={20} />
            <Link title="Kembali ke home" onClick={() => history.push("/")} />
        </div>
    )
}

export default DetailBlog
