import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/footer';
import Header from '../components/header';
import Layout from '../components/layout';

export default function Home() {
  return (
    <>
      <section className="px features">
        <div className="container">
          <div className="grid grid-col-2">
            <div className="col p-4">
              <i className="text-primary icon-filter mb-0" />
              <h4 className="mb-2">Filter and visualize your data</h4>
              <p>In 4Decision for PrestaShop, you will find a lot of reports that are ready to use and let you filter and visualize your data according to your needs. These will give you the most commonly sought-after statistics like bestsellers, sales margins, etc. When that is not enough, you can also create your reports from scratch to give you answers to more specific and complex questions.</p>
            </div>
            <div className="col p-4">
              <i className="text-primary icon-settings mb-0" />
              <h4 className="mb-2">Easy to create reports</h4>
              <p>In the tool, your data is structured in a way that makes it easy even for inexperienced users to create the reports they need. When you have gotten familiar with the tool you can also use more advanced functionality like defining your calculated measures and KPIs.                          </p>
            </div>
            <div className="col p-4">
              <i className="text-primary icon-data mb-0" />
              <h4 className="mb-2">Enhanced ecommerce data</h4>
              <p>Do you want to know which sizes or colors your customers prefer? Do you want to know which campaigns were most successful? Do you want to know how price changes have affected your sales and profits? These are just a few examples of information you can get, and you can decide how you want it presented and visualized: per product, per month, in tables, charts, KPIs, etc. You will also find detailed level information, like the email addresses of customers who bought a specific product.</p>
            </div>
            <div className="col p-4">
              <i className="text-primary icon-cloud mb-0" />
              <h4 className="mb-2">Cloud-based solution</h4>
              <p>4Decision is an external Cloud-based solution where your data is stored in a data warehouse separate from your online shop. This means that however complex queries you make will not affect the performance of your shop. It also means that we can build up historical data over time that is not available in your PrestaShop database. For instance, will we save daily snapshots of the number of items in stock, so that you can track stock changes over time?</p>
            </div>
          </div>
        </div>
      </section>
      <section className="banner bg">
        <div className="logo">
          <img className="img-fluid" src="assets/images/logo-border.svg" />
        </div>
        <div className="container">
          <div className="w-75 mx-auto">
            <div className="image">
              <img className="d-block img-fluid" src="assets/images/mockup.png" alt="4Decision" />
            </div>
          </div>
        </div>
      </section>
      <section className="px">
        <div className="container">
          <div className="grid grid-col-3 grid-gap-4">
            <div className="col">
              <h2 className="mb-2">How we fetch <br />your data</h2>
              <p>There are two ways of making your data available for analysis in 4Decision:</p>
            </div>
            <div className="col">
              <div className="flex-1 mb-2">
                <div className="number mr-0">1</div>
                <h4>Database access</h4>
              </div>
              <p>This is the most efficient way of fetching your data and is preferable for medium or large shops. For this, we need access to your Prestashop MySQL database so you need to provide us the IP address or hostname of the MySQL server and login credentials.</p>
              <p>Also, the firewall needs to allow our IP address. If you don’t have these details you should be able to get them from your hosting provider.</p>
            </div>
            <div className="col">
              <div className="flex-1 mb-2">
                <div className="number mr-0">2</div>
                <h4>PrestaShop Web Service / API</h4>
              </div>
              <p>With this option, we don't need direct access to the database. Instead, you will create an API key for us that allows us to fetch the data by the web service. This method is most suitable for small shops (less than 100 products or 10 orders per day).</p>
            </div>
          </div>
        </div>
      </section>
      <section className="px px-lg bg">
        <div className="container">
          <div className="text-center">
            <header className="mb-4">
              <h2>Sign up for a <strong>free 3 months</strong> trial</h2>
            </header>
            <ul className="grid grid-col-3 grid-gap-4">
              <li>
                <i className="icon-form icon-lg text-secondary" />
                <p>Fill out the form below and we will contact you as soon as possible to help you set up the integration and create a free trial account for you</p>
              </li>
              <li>
                <i className="icon-mail icon-lg text-secondary" />
                <p>After your account has been configured we will also offer you a free personal introduction to give you a quick start</p>
              </li>
              <li>
                <i className="icon-payment icon-lg text-secondary" />
                <p>After the three months have passed you may continue to use the tool for the regular monthly fee of €49</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="contact-form">
        <div className="container">
          <div className="w-50 mx-auto bg-white">
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
        </div>
      </section>
    </>
  )
}


Home.getLayout = function getLayout(page) {
  return (
    <Layout showIntro={true}>
      {page}
    </Layout>
  )
}