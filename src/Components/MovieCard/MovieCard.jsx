import * as React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Chip,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Star from "@mui/icons-material/Star";
import ShareIcon from "@mui/icons-material/Share";

export default function MovieCard(movie) {
  const { title, director, genre, rating, runtime, language, production } =
    movie.movie;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image="src\assets\video.png"
        alt="Paella dish"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Directed By : {director}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Genre :
          <Chip label={genre} />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Language : {language}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Production : {production}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          Duration : {runtime} mins
        </Typography>
        <IconButton aria-label="share">
          <Star />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          Rating : {rating}
        </Typography>
      </CardActions>
    </Card>
  );
}
