
import {useRouter} from 'next/router'
import Layout from '../../components/Layout'
import NextLink from 'next/link'
import {Link, Typography} from '@material-ui/core'

export default function ProductScreen({products}){
    const router = useRouter()
    const {id} = router.query
    console.log(products)
    const product = products.find(x => x.id === Number(id))
    return(
        <Layout>
            <NextLink href="/" passHref>
                <Link>
                    <Typography>Back to products</Typography>
                </Link>
            </NextLink>
            <h3>{product.title}</h3>
        </Layout>
    )
}

export async function getServerSideProps(ctx){
    const {params} = ctx
    const {id} = params
    console.log(`getServerSideProps: ${id}`)
    const response = await fetch('http://localhost:3000/api/products')
    const data = await response.json()
    return {
        props: {
            products: data.products
        }
    }
}