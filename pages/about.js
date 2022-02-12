import Layout from "../components/layout"

function About() {
    return <div>About</div>
}

export default About

About.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}