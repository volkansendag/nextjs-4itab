import Layout from "../components/layout"

function Register() {
    return  <div className="w-50 mx-auto bg-white">
                    <form className="grid grid-gap-2 p-4">
                        <div className="field">
                            <input type="text" id="fullname" name="fullname" placeholder=" " required />
                            <label className="floating" htmlFor="fullname">Name of your shop</label>
                        </div>
                        <div className="field">
                            <input type="text" id="fullname" name="fullname" placeholder=" " required />
                            <label className="floating" htmlFor="fullname">URL of your shop</label>
                        </div>
                        <div className="field">
                            <input type="text" id="fullname" name="fullname" placeholder=" " required />
                            <label className="floating" htmlFor="fullname">Your name</label>
                        </div>
                        <div className="field">
                            <input type="text" id="fullname" name="fullname" placeholder=" " required />
                            <label className="floating" htmlFor="fullname">Your email address</label>
                        </div>
                        <div className="field">
                            <input type="text" id="fullname" name="fullname" placeholder="ex. Azure, AWS, at a PrestaShop hosting partner named X" required />
                            <label className="floating" htmlFor="fullname">Where is your shop hosted?</label>
                        </div>
                        <div className="field">
                            <input type="text" id="fullname" name="fullname" placeholder="ex. Myself, our PrestaShop hosting partner named X" required />
                            <label className="floating" htmlFor="fullname">Who has installed and configured your shop?</label>
                        </div>
                        <div className="field">
                            <textarea rows={3} id="comments" name="comments" placeholder=" " defaultValue={""} />
                            <label className="floating" htmlFor="comments">Additional comments</label>
                        </div>
                        <div className="field">
                            <button className="btn" type="submit">Create account</button>
                        </div>
                    </form>
                    <div className="p-4 text-center">
                        <h2>Questions?</h2>
                        <p>Send an email to us at <a className="text-primary text-underline" href="mailto:info@4itab.com">info@4itab.com</a></p>
                    </div>
                </div>
}

export default Register

Register.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}