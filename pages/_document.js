import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          {/* <script dangerouslySetInnerHTML={ {__html: 
          `// Check that service workers are supported
            if ('serviceWorker' in navigator) {
                // Use the window load event to keep the page load performant
                // window.addEventListener('load', () => {
                    navigator.serviceWorker.register('/sw.js', { scope: '/' });
                // })
            }`
              }} /> */}
          {/* <script dangerouslySetInnerHTML={ {__html: `"use strict";
            if('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(function(registrations) {
                    for(let registration of registrations) {
                        registration.unregister()
                    }
                });
            }`
            }} /> */}
        </body>
      </Html>
    )
  }
}

export default MyDocument