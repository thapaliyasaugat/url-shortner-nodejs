import React from 'react'
import "./UrlList.css"
const UrlList = () => {
    const data = [
        { id: 1, name: "Anomgddfkdfdfkndfkdfndfkdnfdkfffffffffffffffdfdfdfddfgbbbgdfjndfsdsusgat fjifjdsfjf fduffdoffodfsdffodsfodsfossofsf", age: "gfgfgfgfgfgfgfgfgfgfgfgfgfggfgfgfgfgfgfgfgfgfgffgffd ddffdfdf19", gender: "Male" },
        { id: 1, name: "Meghgddfkdfdfkndfkdfndfkdnfdkfffffffffffffffdfdfdfddfgbbbgdfjndfsdsusgat fjifjdsfjf fduffdoffodfsdffodsfodsfossofsfa", age: "gfgfgfgfgfgfgfgfgfgfgfgfgfggfgfgfgfgfgfgfgfgfgffgffd ddffdfdf19", gender: "Female" },
        // { id: 1, name: "Subhgddfkdfdfkndfkdfndfkdnfdkfffffffffffffffdfdfdfddfgbbbgdfjndfsdsusgat fjifjdsfjf fduffdoffodfsdffodsfodsfossofsfam", age: "gfgfgfgfgfgfgfgfgfgfgfgfgfggfgfgfgfgfgfgfgfgfgffgffd ddffdfdf25", gender: "Male" },
        // { id: 1, name: "Subhgddfkdfdfkndfkdfndfkdnfdkfffffffffffffffdfdfdfddfgbbbgdfjndfsdsusgat fjifjdsfjf fduffdoffodfsdffodsfodsfossofsfam", age: "gfgfgfgfgfgfgfgfgfgfgfgfgfggfgfgfgfgfgfgfgfgfgffgffd ddffdfdf25", gender: "Male" },
        // { id: 1, name: "Meghgddfkdfdfkndfkdfndfkdnfdkfffffffffffffffdfdfdfddfgbbbgdfjndfsdsusgat fjifjdsfjf fduffdoffodfsdffodsfodsfossofsfa", age: "gfgfgfgfgfgfgfgfgfgfgfgfgfggfgfgfgfgfgfgfgfgfgffgffd ddffdfdf19", gender: "Female" },
        // { id: 1, name: "Subhgddfkdfdfkndfkdfndfkdnfdkfffffffffffffffdfdfdfddfgbbbgdfjndfsdsusgat fjifjdsfjf fduffdoffodfsdffodsfodsfossofsfam", age: "gfgfgfgfgfgfgfgfgfgfgfgfgfggfgfgfgfgfgfgfgfgfgffgffd ddffdfdf25", gender: "Male" },
        // { id: 1, name: "Subhgddfkdfdfkndfkdfndfkdnfdkfffffffffffffffdfdfdfddfgbbbgdfjndfsdsusgat fjifjdsfjf fduffdoffodfsdffodsfodsfossofsfam", age: "gfgfgfgfgfgfgfgfgfgfgfgfgfggfgfgfgfgfgfgfgfgfgffgffd ddffdfdf25", gender: "Male" },
        // { id: 1, name: "Meghgddfkdfdfkndfkdfndfkdnfdkfffffffffffffffdfdfdfddfgbbbgdfjndfsdsusgat fjifjdsfjf fduffdoffodfsdffodsfodsfossofsfa", age: "gfgfgfgfgfgfgfgfgfgfgfgfgfggfgfgfgfgfgfgfgfgfgffgffd ddffdfdf19", gender: "Female" },
        // { id: 1, name: "Subhgddfkdfdfkndfkdfndfkdnfdkfffffffffffffffdfdfdfddfgbbbgdfjndfsdsusgat fjifjdsfjf fduffdoffodfsdffodsfodsfossofsfam", age: "gfgfgfgfgfgfgfgfgfgfgfgfgfggfgfgfgfgfgfgfgfgfgffgffd ddffdfdf25", gender: "Male" },
        // { id: 1, name: "Subhgddfkdfdfkndfkdfndfkdnfdkfffffffffffffffdfdfdfddfgbbbgdfjndfsdsusgat fjifjdsfjf fduffdoffodfsdffodsfodsfossofsfam", age: "gfgfgfgfgfgfgfgfgfgfgfgfgfggfgfgfgfgfgfgfgfgfgffgffd ddffdfdf25", gender: "Male" },
        // { id: 1, name: "Meghgddfkdfdfkndfkdfndfkdnfdkfffffffffffffffdfdfdfddfgbbbgdfjndfsdsusgat fjifjdsfjf fduffdoffodfsdffodsfodsfossofsfa", age: "gfgfgfgfgfgfgfgfgfgfgfgfgfggfgfgfgfgfgfgfgfgfgffgffd ddffdfdf19", gender: "Female" },
        // { id: 1, name: "Subhgddfkdfdfkndfkdfndfkdnfdkfffffffffffffffdfdfdfddfgbbbgdfjndfsdsusgat fjifjdsfjf fduffdoffodfsdffodsfodsfossofsfam", age: "gfgfgfgfgfgfgfgfgfgfgfgfgfggfgfgfgfgfgfgfgfgfgffgffd ddffdfdf25", gender: "Male" },
        // { id: 1, name: "Subhgddfkdfdfkndfkdfndfkdnfdkfffffffffffffffdfdfdfddfgbbbgdfjndfsdsusgat fjifjdsfjf fduffdoffodfsdffodsfodsfossofsfam", age: "gfgfgfgfgfgfgfgfgfgfgfgfgfggfgfgfgfgfgfgfgfgfgffgffd ddffdfdf25", gender: "Male" },
        // { id: 1, name: "Meghgddfkdfdfkndfkdfndfkdnfdkfffffffffffffffdfdfdfddfgbbbgdfjndfsdsusgat fjifjdsfjf fduffdoffodfsdffodsfodsfossofsfa", age: "gfgfgfgfgfgfgfgfgfgfgfgfgfggfgfgfgfgfgfgfgfgfgffgffd ddffdfdf19", gender: "Female" },
        // { id: 1, name: "Subhgddfkdfdfkndfkdfndfkdnfdkfffffffffffffffdfdfdfddfgbbbgdfjndfsdsusgat fjifjdsfjf fduffdoffodfsdffodsfodsfossofsfam", age: "gfgfgfgfgfgfgfgfgfgfgfgfgfggfgfgfgfgfgfgfgfgfgffgffd ddffdfdf25", gender: "Male" },
        // { id: 1, name: "Subhgddfkdfdfkndfkdfndfkdnfdkfffffffffffffffdfdfdfddfgbbbgdfjndfsdsusgat fjifjdsfjf fduffdoffodfsdffodsfodsfossofsfam", age: "gfgfgfgfgfgfgfgfgfgfgfgfgfggfgfgfgfgfgfgfgfgfgffgffd ddffdfdf25", gender: "Male" },
        // { id: 1, name: "Meghgddfkdfdfkndfkdfndfkdnfdkfffffffffffffffdfdfdfddfgbbbgdfjndfsdsusgat fjifjdsfjf fduffdoffodfsdffodsfodsfossofsfa", age: "gfgfgfgfgfgfgfgfgfgfgfgfgfggfgfgfgfgfgfgfgfgfgffgffd ddffdfdf19", gender: "Female" },
        // { id: 1, name: "Subhgddfkdfdfkndfkdfndfkdnfdkfffffffffffffffdfdfdfddfgbbbgdfjndfsdsusgat fjifjdsfjf fduffdoffodfsdffodsfodsfossofsfam", age: "gfgfgfgfgfgfgfgfgfgfgfgfgfggfgfgfgfgfgfgfgfgfgffgffd ddffdfdf25", gender: "Male" },
        // { id: 1, name: "Subhgddfkdfdfkndfkdfndfkdnfdkfffffffffffffffdfdfdfddfgbbbgdfjndfsdsusgat fjifjdsfjf fduffdoffodfsdffodsfodsfossofsfam", age: "gfgfgfgfgfgfgfgfgfgfgfgfgfggfgfgfgfgfgfgfgfgfgffgffd ddffdfdf25", gender: "Male" },
        // { id: 1, name: "Meghgddfkdfdfkndfkdfndfkdnfdkfffffffffffffffdfdfdfddfgbbbgdfjndfsdsusgat fjifjdsfjf fduffdoffodfsdffodsfodsfossofsfa", age: "gfgfgfgfgfgfgfgfgfgfgfgfgfggfgfgfgfgfgfgfgfgfgffgffd ddffdfdf19", gender: "Female" },
        // { id: 1, name: "Subhgddfkdfdfkndfkdfndfkdnfdkfffffffffffffffdfdfdfddfgbbbgdfjndfsdsusgat fjifjdsfjf fduffdoffodfsdffodsfodsfossofsfam", age: "gfgfgfgfgfgfgfgfgfgfgfgfgfggfgfgfgfgfgfgfgfgfgffgffd ddffdfdf25", gender: "Male" },
        { id: 1, name: "Subhgddfkdfdfkndfkdfndfkdnfdkfffffffffffffffdfdfdfddfgbbbgdfjndfsdsusgat fjifjdsfjf fduffdoffodfsdffodsfodsfossofsfam", age: "gfgfgfgfgfgfgfgfgfgfgfgfgfggfgfgfgfgfgfgfgfgfgffgffd ddffdfdf25", gender: "Male" },
    ]
    return (
        <div className='urlList'>
            <div className="urlTable">
                <table>
                    <tr>
                        <th>Id</th>
                        <th>LongUrl</th>
                        <th>ShortUrl</th>
                        <th>shorten_at</th>
                        <th>Delete</th>
                    </tr>
                    {data.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.age}</td>
                                <td>{val.gender}</td>
                                <td style={{ color: "green", textAlign: "center" }}><i class="fa fa-trash"></i></td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>

    )
}

export default UrlList