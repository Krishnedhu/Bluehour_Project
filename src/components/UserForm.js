import React,{useState} from 'react'
import  axios  from 'axios'
import {Container, Button} from 'react-bootstrap'

function UserForm() {
 const url ="https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"

 const [data, setData] = useState({
   first : "",
   last : "",
   address : "",
   created : "",
   balance : "",
   email : ""
 })

 function submit(e){
   e.preventDefault();
   axios.post(url,{
    first : data.first,
    last : data.last,
    address : data.address,
    created : data.created,
    balance : data.balance,
    email : data.email
   })
   .then(res => {
     console.log(res.data)
   })
   }
    function add(e) {
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
   }

  return (
    <div>
        <form onSubmit={(e)=> submit(e)}className='mt-4'>
          <Container className='pt-4' style={{width:"500px", backgroundColor : "#b2d1f7", borderRadius:"12px"}}>
            <input className='form-control' onChange={(e) => add(e)} id="first" value={data.first} placeholder="first" type="text"></input><br />
            <input className='form-control' onChange={(e) => add(e)} id="last" value={data.last} placeholder="last" type="text"></input><br />
            <input className='form-control' onChange={(e) => add(e)} id="address" value={data.address} placeholder="address" type="text"></input><br />
            <input className='form-control' onChange={(e) => add(e)} id="created" value={data.created} placeholder="date" type="date"></input><br />
            <input className='form-control' onChange={(e) => add(e)}id="balance" value={data.balance} placeholder="balance" type="text"></input><br />
            <input className='form-control' onChange={(e) => add(e)} id="email" value={data.email} placeholder="email" type="email"></input><br />
            <Button variant="primary">Submit</Button>

          </Container>
        </form>
        </div>
  )
}

export default UserForm