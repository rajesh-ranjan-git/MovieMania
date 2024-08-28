import * as React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Star from "@mui/icons-material/Star";
import ShareIcon from "@mui/icons-material/Share";

export default function MovieCard(movie) {
  const { Poster, Title, Type, Year, imdbID } = movie.movie;

  return (
    <Card sx={{ maxWidth: 300 }} className="my-4 relative">
      <CardMedia component="img" height="194" image={Poster} alt="movie_img" />
      <CardContent className="mb-8">
        <Typography gutterBottom variant="h5" component="div">
          {Title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="h-10 overflow-hidden capitalize"
        >
          <strong>Type</strong> : {Type}
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
          <strong>Year</strong> : {Year}
        </Typography>
        <IconButton aria-label="share">
          <Star />
        </IconButton>
      </CardActions>
    </Card>
  );
}
