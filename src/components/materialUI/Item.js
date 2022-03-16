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
        alt={features.name}
        height="140"
        image={features.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {features.name}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="Favoritos">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Compartir">
          <ShareIcon />
        </IconButton>
        <ItemCount stock={features.id} initial="1" toAdd={toAdd} />
      </CardActions>
    </Card>
  );
};
