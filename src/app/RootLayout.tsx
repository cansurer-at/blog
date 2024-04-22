import { useEffect } from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

const metadata = {
  title: "My Coding Blog",
  description: "Explore tutorials, tips, and insights on coding, web development, and software engineering. Dive into the world of programming with me!",
  keywords: ["coding", "web development", "software engineering", "programming", "next.js", "react"],
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if (metadata.title) {
      document.title = String(metadata.title);
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description || ''} />
        <meta name="keywords" content={metadata.keywords?.join(', ') || ''} />
        {metadata.title && <title>{String(metadata.title)}</title>}
      </Head>
      <div className={inter.className}>
        {/* Header */}
        <Header/>
        <main className="container mx-auto px-4 py-8">
          <div className=" rounded-lg shadow-md p-6">
            {children}
          </div>
        </main>

       <Footer/>
       
      </div>
    </>
  );
};

export default Layout;
