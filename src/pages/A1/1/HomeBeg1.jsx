import React, { useState, useEffect } from 'react';
import { Card, Container, ListGroup } from 'react-bootstrap';

function HomePage() {
  const [HomeData, setHomeData] = useState([]);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await fetch('/home.json'); // Adjust the path if necessary
        const data = await response.json();
        setHomeData(data);
      } catch (error) {
        console.error('Error fetching Home data:', error);
      }
    };

    fetchHomeData();
  }, []);

  return (
    <Container className="mt-5">
      <h1>Home</h1>
      {HomeData.map((topic, index) => (
        <Card key={index} className="my-3">
          <Card.Header>{topic.title}</Card.Header>
          <Card.Body>
            {topic.topics.map((entry, entryIndex) => (
              <div key={entryIndex}>
                {entry.term && (
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <h5>{entry.term}</h5>
                      <p>{entry.definition}</p>
                      <p><strong>Example:</strong> {entry.example}</p>
                    </ListGroup.Item>
                  </ListGroup>
                )}
                {entry.text && (
                  <Card.Text>{entry.text}</Card.Text>
                )}
              </div>
            ))}
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default HomePage;