import React from 'react'
import "./Home.css"
import UrlForm from '../components/urlForm/UrlForm'
import UrlList from '../components/urlList/UrlList'

const Home = () => {
    return (
        <div className='home'>
            <UrlForm />
            <UrlList />
        </div>
    )
}

export default Home