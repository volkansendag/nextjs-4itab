import Layout from "../components/layout"

function Register() {
    return <div>Register</div>
}

export default Register

Register.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}