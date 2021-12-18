import "./MonsterPage.css";
import { useState,useEffect} from "react";
import { Container, Card, ListGroupItem,ListGroup} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const getMonster=async(id)=>{
  const response= await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data =await response.json()
  return (data)
}
const MonsterPage = () => {
    const params=useParams();
    const[monster,setMonster]=useState({id:"", name:"", username:"",email:"",phone:"",website:""})
    const[loading,setLoading]=useState(true)
    useEffect(()=>{
      setLoading(true)
      getMonster(params.monsterID).then(data=>{
          setMonster(data)
          setLoading(false)
      })
      console.log();
    },[params.monsterID])
  return (
    <Container className='monsterPage'>
      <Card className='monsterProfile'> 
      { loading
      ?
      <h1>please wait I am loading...</h1>
      :<div>
        <img src={"https://robohash.org/" + monster.username} alt="monster profile"/>
        <Card.Body>
          <Card.Title>{monster.name}</Card.Title>
          <Card.Text>
              {monster.email}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{monster.username}</ListGroupItem>
          <ListGroupItem>{monster.phone}</ListGroupItem>
          <ListGroupItem>{monster.website}</ListGroupItem>
        </ListGroup>
        <Link to="/monsters">Back to Monster List</Link>
        </div>
      }
      </Card>
    </Container>
  );
};

export default MonsterPage;
