import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { ItemCount } from "../ItemCount";

export const Item = ({ features, toAdd }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={features.title}
        height="140"
        image={features.url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {features.title}
        </Typography>
      </CardContent>
      <CardActions>
        <ItemCount stock={features.id} initial="1" toAdd={toAdd} />
      </CardActions>
      <CardActions>
        <IconButton aria-label="Favoritos">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Compartir">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
