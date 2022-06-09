import React from 'react'
import {Card, ListGroup,ListGroupItem} from 'react-bootstrap'
import Stack from '@mui/material/Stack';
import Avatar from 'react-avatar'


function UserCard ({item}) {
   
  
  return (
      
  <>
    <Card style={{backgroundColor:"#e4e6eb" }}className="my-3 p-3 rounded cards">
    <Stack direction="row" spacing={5}>
    <Avatar name={item.first+" "+item.last}size="50" textSizeRatio={1.10} round={true} color={['blue']} />
     </Stack>
     <Card.Body>
    <Card.Title>{item.first} {item.last}</Card.Title>
    </Card.Body>
    <ListGroup className="list-group-flush">
    <ListGroupItem><p><strong>Address:</strong></p>{item.address}</ListGroupItem>
    <ListGroupItem><p><strong>Created:</strong></p>{item.created}</ListGroupItem>
    <ListGroupItem><p><strong>Balance:</strong></p>{item.balance}</ListGroupItem>
    </ListGroup>
    <Card.Body>
    <Card.Link href="#">{item.email}</Card.Link>
   </Card.Body>
   </Card>
   </>
 )
}

export default UserCard