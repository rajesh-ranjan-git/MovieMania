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
  const { title, description, genre, rating, year, image } = movie.movie;

  return (
    <Card sx={{ maxWidth: 300 }} className="my-4 relative">
      <CardMedia component="img" height="194" image={image} alt="movie_img" />
      <CardContent className="mb-8">
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="h-10 overflow-hidden"
        >
          <strong>Description</strong> : {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Genre</strong> : {genre}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className="absolute bottom-0">
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          Year : {year}
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
