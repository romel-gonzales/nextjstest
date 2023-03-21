import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import NextLink from 'next/link'
import { Link, Typography, Grid, CardMedia, List, ListItem, Card, Button } from '@material-ui/core'
import useStyles from '../../utils/styles'

export default function ProductScreen ({ products }) {
  const router = useRouter()
  const { id } = router.query
  const classes = useStyles()
  const product = products.find(x => x.id === Number(id))
  return (
    <Layout>
      <div className={classes.section}>
        <NextLink href='/' passHref>
          <Link>
            <Typography>Back to products</Typography>
          </Link>
        </NextLink>
        <Grid container spacing={1}>
            <Grid item md={6} xs={12}>
                <CardMedia
                    component="img"
                    image={product.thumbnail}
                    title={product.title}
                    height='600'
                >
                </CardMedia>
            </Grid>
            <Grid item md={3} xs={12}>
                <List>
                    <ListItem>
                        <Typography component="h5" variant="h5">Product: {product.title}</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>Brand: {product.brand}</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>Description: {product.description}</Typography>
                    </ListItem>
                </List>
            </Grid>
            <Grid item md={3} xs={12}>
                <Card>
                    <List>
                        <ListItem>
                            <Grid container>
                                <Grid item xs={3}>
                                    <Typography>
                                        Price
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
                                        ${product.price}
                                </Grid>
                            </Grid>
                        </ListItem>
                        <ListItem>
                            <Button fullWidth variant="contained" color="primary">
                                Add to Cart
                            </Button>
                        </ListItem>
                    </List>
                </Card>
            </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export async function getServerSideProps (ctx) {
  const { params } = ctx
  const { id } = params
  console.log(`getServerSideProps: ${id}`)
  const response = await fetch('http://localhost:3000/api/products')
  const data = await response.json()
  return {
    props: {
      products: data.products
    }
  }
}
