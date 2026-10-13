import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>TheGram</title>
        <meta name="description" content="Instagram clone with Next.js, React, Tailwind CSS and Firebase." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*Header*/}
      <Header />    
      {/*Feed*/}    
      {/*Modal*/}    

    </div>
  );
}
