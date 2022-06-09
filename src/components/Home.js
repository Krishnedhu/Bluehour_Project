import React, { useEffect, useState } from 'react'
import {Row, Col} from 'react-bootstrap'
import UserCard from './UserCard';


function Home() {

  const [users, setUsers]=useState([])

    useEffect(() =>{
    const fetchData = async()=> {
      await fetch('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole')
      .then((res) => res.json())
      .then((data) => setUsers(data))
    }

    fetchData();

  },[])
  console.log("Data is", users)

    return (
    <Row>
        { users ? (
          users.map(item => (
            <Col sm={12} md={8} lg={6} xl={3}>
              <UserCard item={item} />
            </Col>
            ))

        ) : 'no data'}

    </Row>
  )
}

export default Home