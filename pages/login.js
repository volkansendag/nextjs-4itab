import Layout from "../components/layout"

function Login() {
    return <div>Login</div>
}

export default About

Login.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}