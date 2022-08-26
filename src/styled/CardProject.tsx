import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type projet = {
    name: string;
    description: string;
    img: string;
    github: string;
    link: string;
}

interface Props {
    projet: projet;
}

export default function CardProject({ projet }: Props) {
  return (
    <Card sx={{ maxWidth: '50%', backgroundColor: 'transparent', boxShadow: 'none' }}>
      <CardMedia
      sx={{boxShadow: 'solid 2px 2px 2px 2px rgba(0,0,0,0.75)'}}
        component="img"
        alt={projet.name}
        //height="200"
        image={require(`../assets/screens/${projet.img}`)}
      />
      <CardContent style={{backgroundColor: 'transparent'}}>
        <Typography variant="h5" component="div">
          {projet.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
