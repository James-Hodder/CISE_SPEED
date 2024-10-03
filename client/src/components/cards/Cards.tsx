// Card.tsx
import React from 'react';
import { Card as MuiCard, CardContent, Typography } from '@mui/material';
import './card.css'; // Ensure this file is present

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FunctionComponent<CardProps> = ({ title, content }) => {
  return (
    <MuiCard className="Cards"> {/* Using 'Cards' class */}
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
