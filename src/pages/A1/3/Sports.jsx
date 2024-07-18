import React, { useState, useEffect } from 'react';
import { Card, Container, ListGroup } from 'react-bootstrap';

function SportsPage() {
  const [SportsData, setSportsData] = useState([]);

  useEffect(() => {
    const fetchSportsData = async () => {
      try {
        const response = await fetch('/sports.json'); // Adjust the path if necessary
        const data = await response.json();
        setSportsData(data);
      } catch (error) {
        console.error('Error fetching Sports data:', error);
      }
    };

    fetchSportsData();
  }, []);

  return (
    <Container className="mt-5">
      <h1>Sports</h1>
      {SportsData.map((topic, index) => (
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

export default SportsPage;
