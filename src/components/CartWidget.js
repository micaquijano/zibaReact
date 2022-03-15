import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export const CartWidget = ({ itemsCount }) => {
  return (
    <Badge color="secondary" badgeContent={itemsCount}>
      <ShoppingCartIcon />
    </Badge>
  );
};
