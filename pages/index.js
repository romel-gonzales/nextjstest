import Layout from '../components/Layout'
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@material-ui/core'
import NextLink from 'next/link'

export default function Home (data) {
  //console.log(data.products)
  return (
    <Layout>
      <h1>Products</h1>
      <Grid container spacing={5}>
        {data.products.map(product => (
          <Grid item md={2} key={product.id}>
            <Card>
              <NextLink href={`/product/${product.id}`}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    image={product.thumbnail}
                    title={product.title}
                    height='120'
                  ></CardMedia>
                  <CardContent>
                    <Typography>{product.title}</Typography>
                  </CardContent>
                </CardActionArea>
              </NextLink>
              <CardActions>
                <Typography>${product.price}</Typography>
                <Button size='small' color='primary'>
                  Agregar a carrito
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}

export async function getServerSideProps () {
  const response = await fetch('http://localhost:3000/api/products')
  const products = await response.json()
  return {
    props: {
      products: products.products
    }
  }
}
