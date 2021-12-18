import { useState, useEffect } from "react";
import { Container, Col, Row, InputGroup, FormControl } from "react-bootstrap";
import { MonsterCard } from "..";
import { Link, Outlet } from "react-router-dom";

const MonsterList = () => {
  const [monsterList, setMonsterList] = useState([]);
  const [filter, setFilter] = useState("");
  const getMonster = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setMonsterList(data));
  };
  useEffect(() => {
    document.title = "My Monster List";
    getMonster();
  }, []);

  return (
    <Container className="mt-4">
      <Row className="mt-4">
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Monster name"
              aria-label="Monster name"
              onChange={(e) => setFilter(e.target.value)}
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>
      <Outlet />
      <Row className="mt-4" >
        {monsterList.filter((monster) =>
          monster.name.toLowerCase().includes(filter.toLowerCase())
        ).length === 0 ? (
          <div className="Loading">
            <h1>We couldn't find your monster... sorry</h1>
            <img
              src="https://image.freepik.com/free-vector/cartoon-scared-blue-monster-with-round-eyes-illustration_1284-64081.jpg"
              border="0"
              alt="loading monster"
            />
          </div>
        ) : (
          monsterList
            .filter((monster) =>
              monster.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map((monster) => (
              <Col key={monster.id} xs={3} className="mt-4">
                <Link to={`/monsters/${monster.id}`}>
                  <MonsterCard
                    name={monster.name}
                    address={monster.email}
                    image={"https://robohash.org/" + monster.username}
                  />
                </Link>
              </Col>
            ))
        )}
      </Row>
    </Container>
  );
};

export default MonsterList;
