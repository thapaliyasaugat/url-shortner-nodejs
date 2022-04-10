import React, { useRef, useState } from 'react'
import "./UrlForm.css"
import axios from "axios"
const UrlForm = () => {
    const [message, setmessage] = useState('');
    const url = useRef();
    const submit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post("http://localhost:5000/shorten", {
                longUrl: url.current.value
            })
            console.log("result ", result)
            window.location.reload()
        } catch (err) {
            // console.log(err.response.data);
            setmessage(err.response.data)
        }
    }
    return (
        <div className='urlForm'>
            <form>
                <h2>SHORTEN Your URL</h2>
                <div className="urlInput">
                    <input ref={url} type="text" placeholder='enter your long url' />
                    <button onClick={submit}>Submit</button>
                </div>
                {message && <p>{message}</p>}
            </form>
        </div>

    )
}

export default UrlForm