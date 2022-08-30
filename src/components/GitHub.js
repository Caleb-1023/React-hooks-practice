import React, { useEffect, useState } from 'react'
import { Media } from 'react-bootstrap';
import axios from 'axios';
import ReactLoading from 'react-loading'

const GitHub = () => {
    const [data, setData] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getData()
    }, [])

    // Using Callbacks
    // const getData = () => {
    //     axios.get(`https://api.github.com/search/users?q=${searchTerm}`).then(res => {
    //         // console.log(res.data.items)
    //         setData(res.data.items)
    //         setIsLoading(false)
    //     })
    
    // }

    // Using Async / Await
    const getData = async () => {
        const res = await axios.get(`https://api.github.com/search/users?q=${searchTerm}`)
            // console.log(res.data.items)
            setData(res.data.items)
            setIsLoading(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        getData()
    }

    const listUsers = data.map(user => 
        <Media key={user.id}>
            <a href={user.html_url}>
                <img src={user.avatar_url} alt="Generic Placeholder" className='mr-3' width={64} height={64} />
            </a>
            <Media.Body>
                <h5>Login: {user.login}</h5>
                <p>Id: {user.id}</p>
            </Media.Body>
        </Media>
        )

  return (
    <>
        <h3>GitHub Users Results</h3>
        {/* { isLoading=== true && 
            <h4>Getting Data..</h4>
         } */}
        
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={e => {setSearchTerm(e.target.value)}} />
            <button type="submit">Search</button>
        </form>

        {isLoading === true ? (
            // <h4>Getting data...</h4>
            <ReactLoading type="spinningBubbles" color="#444" />
            ):(
                <></>
                )}
        {listUsers}
    </>
  )
}

export default GitHub