import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './LevelsPage.css'; // ملف CSS للتأثيرات

function LevelsPage() {
  const [levelsData, setLevelsData] = useState(null);

  useEffect(() => {
    const fetchLevelsData = async () => {
      try {
        const response = await fetch('/levels.json'); // تعديل المسار إذا لزم الأمر
        const data = await response.json();
        setLevelsData(data);
      } catch (error) {
        console.error('Error fetching levels data:', error);
      }
    };

    fetchLevelsData();
  }, []);

  if (!levelsData) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="mt-5 mb-5">
       <div className="wrapper">
       <div className="main-content">
      <TransitionGroup className="levels-list">
        {levelsData.map(level => (
          <CSSTransition key={level.level} classNames="fade" timeout={500}>
            <Col sm={12} md={6} lg={4} className="mb-4">
              <Card className="level-card">
                <Card.Body>
                  <Card.Title>{level.level}</Card.Title>
                  {level.subLevels && (
                    <ul>
                      {level.subLevels.map(subLevel => (
                        <li key={subLevel.title}>
                          {subLevel.title} - {subLevel.description}
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link to={`/levels/${level.level.toLowerCase()}`}>
                    <Button variant="primary">View Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </CSSTransition>
        ))}
      </TransitionGroup>
      </div>
      </div>
    </Container>
  );
}

export default LevelsPage;
