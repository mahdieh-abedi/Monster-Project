import React from "react"
import './MonsterCard.css'
import { Card } from "react-bootstrap";

const MonsterCard=({name='', address='',image=''})=>{
    return(
        <Card className='monsterCard'>
            <img className='monsterImg' src={image} alt="monster profile"/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {address}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MonsterCard
