import React from 'react'
import './upload.scss'
import { LoginBg } from '../../../assets'

const Upload = () => {
    return (
        <div className='upload'>
            <img className='preview' src={LoginBg} alt={LoginBg} />
            <input type="file" />
        </div>
    )
}

export default Upload
