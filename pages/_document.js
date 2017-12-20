import Document, { Head } from 'next/document'

import Footer from '../components/Footer';

export default class MyDocument extends Document {
  render () {
    const { html } = this.props;
    return (
      <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/static/favicon.ico" />
        <meta name="viewport" content='width=device-width,minimum-scale=1' />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.1/css/bulma.min.css" />
      </Head>
      <body>
        <div id='__next' dangerouslySetInnerHTML={{ __html: html }} />
        <Footer name="Alexander Lloyd" />
      </body>
      </html>
    )
  }
}
