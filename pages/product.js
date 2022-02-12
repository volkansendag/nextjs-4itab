import Layout from "../components/layout"

function Product() {
    return <div>Product</div>
}

export default Product

Product.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}