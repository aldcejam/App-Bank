import Document, { Html, Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="favicon.png" type="image/png" />
                    {/* =============== Font Family =============== */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@100;400;700&display=swap" rel="stylesheet"></link>
                    {/* =============== Icons =============== */}
                    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    };
};