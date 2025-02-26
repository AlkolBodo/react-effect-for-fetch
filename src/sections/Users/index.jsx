import {useEffect, useState} from 'react'
import UserList from './components/UsersList'

const URL = "https://boolean-api-server.fly.dev/thegrevling/contact"

export default function UsersSection() {

  const [data, setData] = useState([])
  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(setData)
  }, [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className='scroll-container'>
        <UserList data={data} />
      </div>
    </section>
  )
}


