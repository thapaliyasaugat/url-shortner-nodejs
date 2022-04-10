import React, { useEffect, useState } from 'react'
import "./UrlList.css"
import axios from "axios"
const UrlList = () => {
    const [urllist, setUrlList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            console.log("fetching")
            const data = await axios.get("http://localhost:5000/shorten/", {
                'Content-Type': 'applcation/json'
            });
            setUrlList(data.data)
            console.log(data.data)
        }
        fetchData();
    }, [])
    const deleteItem = async (key) => {
        await axios.delete(`http://localhost:5000/shorten/${key}`)
        alert("deleted sucessfully")
        window.location.reload()
    }
    return (
        <div className='urlList'>
            <div className="urlTable">
                <table>
                    <tr>
                        <th>Id</th>
                        <th>LongUrl</th>
                        <th>ShortUrl</th>
                        {/* <th>shortCode</th> */}
                        <th>Delete</th>
                    </tr>
                    {urllist.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.id}</td>
                                <td><a target="_blank" href={val.longurl}>{val.longurl}</a></td>
                                <td><a target="_blank" href={val.shorturl}>{val.shorturl}</a></td>
                                {/* <td>{val.shorturlCode}</td> */}
                                <td onClick={() => (deleteItem(val.id))} style={{ color: "green", textAlign: "center" }}><i class="fa fa-trash"></i></td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>

    )
}

export default UrlList