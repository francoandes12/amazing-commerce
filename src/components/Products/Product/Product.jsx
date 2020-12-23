import React from 'react'
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  IconButton
} from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import useStyles from './styles'
const Product = ({ product, handleAddToCart }) => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant='h5' gutterBottom>
            {product.name}
          </Typography>
          <Typography variant='h5'>
            {product.price.formatted_with_code}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant='body2'
          color='textSecondary'
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton
          aria-label='Add to cart'
          onClick={() => handleAddToCart(product.id, 1)}>
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Product
