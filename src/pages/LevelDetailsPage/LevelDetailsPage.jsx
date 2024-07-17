import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function LevelDetailsPage() {
  const [levelsData, setLevelsData] = useState(null);
  const { levelId } = useParams();

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

  // العثور على كائن المستوى استنادًا إلى levelId
  const level = levelsData.find(level => level.level.toLowerCase() === levelId.toLowerCase());

  if (!level) {
    return <div>Level not found!</div>;
  }

  return (
    <Container>
      <h2 className="mt-5 mb-4">{level.level}</h2>
      <TransitionGroup className="sub-levels-list">
        {level.subLevels.map(subLevel => (
          <CSSTransition key={subLevel.title} classNames="fade" timeout={500}>
            <Col xs={12} md={6} lg={4} key={subLevel.title}>
              <Card className="h-100 level-card">
                <Card.Body>
                  <Card.Title>
                    <Link to={`/levels/${level.level.toLowerCase()}/${subLevel.link}`} className="text-decoration-none stretched-link">
                      {subLevel.title} - {subLevel.description}
                    </Link>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Container>
  );
}

export default LevelDetailsPage;
