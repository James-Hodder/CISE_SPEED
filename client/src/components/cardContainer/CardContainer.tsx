// CardContainer.tsx
import React from 'react';
import Card from '../cards/Cards';
import { Container, Grid } from '@mui/material';

const CardContainer: React.FunctionComponent = () => {
  // Define an array of cards with titles and content
  const cards = [
    { title: 'Card 1', content: 'This is the content of Card 1.' },
    { title: 'Card 2', content: 'This is the content of Card 2.' },
    { title: 'Card 3', content: 'This is the content of Card 3.' },
    // Add more cards as needed
  ];

  return (
    <Container>
      <Grid container spacing={2}>
        {/* Map over the cards array and render the Card component for each */}
        {cards.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              title={card.title}
              content={card.content}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardContainer;
