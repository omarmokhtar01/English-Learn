import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function Bookish() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await fetch('/topicsA1-1.json'); // تعديل المسار إذا لزم الأمر
        const data = await response.json();
        setTopics(data);
      } catch (error) {
        console.error('Error fetching topics:', error);
      }
    };

    fetchTopics();
  }, []);

  return (
    <Container className="mt-5">
      <h1 className="mb-4">English Learning Topics</h1>
      <TransitionGroup className="topics-list">
        {topics.map((topic, index) => (
          <CSSTransition key={index} classNames="fade" timeout={500}>
            <Col xs={12} md={6} lg={4} key={index} className='mb-5'>
              <Card className="h-100 topic-card">
                <Card.Header>
                  <Link to={`/levels/beg-1/${topic.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-decoration-none stretched-link">
                    {topic.title}
                  </Link>
                </Card.Header>
              </Card>
            </Col>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Container>
  );
}

export default Bookish;
