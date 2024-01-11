import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const RoomCard = ({ room }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="170"
        image={room.imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {room.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {room.description}
        </Typography>
        <Typography   style={{ color: 'green', fontSize: '16px', fontWeight: 'bold' }}>
        Price: ${room.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"  >Update</Button>
        <Button style ={{size:"small" , color:'red'}}>Delete</Button>
      </CardActions>
    </Card>
  );
}
 export default RoomCard;