import Layout from "../components/layout"

function PrestaShop() {
    return <div>PrestaShop</div>
}

export default PrestaShop

PrestaShop.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}