import React from 'react'
import "./UrlForm.css"
const UrlForm = () => {
    return (
        <div className='urlForm'>
            <form>
                <h2>SORTEN Your URL</h2>
                <div className="urlInput">
                    <input type="text" placeholder='enter your long url' />
                    <button>Submit</button>
                </div>
            </form>
        </div>

    )
}

export default UrlForm