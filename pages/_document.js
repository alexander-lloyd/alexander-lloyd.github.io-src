import Document, { Head } from 'next/document'

export default class MyDocument extends Document {
  render () {
    const { html } = this.props;
    return (
      <html>
      <Head>
        <link rel="icon" href="/static/favicon.ico" />
        <meta name='viewport' content='width=device-width,minimum-scale=1' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto' />
      </Head>
      <body>
      <div id='__next' dangerouslySetInnerHTML={{ __html: html }} />
      </body>
      </html>
    )
  }
}