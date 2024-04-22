import Layout from "@/app/RootLayout";
import Slider from "@/components/Slider";
import '../styles/globals.css';

const HomePage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-6">Welcome to My Coding Blog</h1>
        
        <Slider />

        <div className="mt-8">
          <p className="text-lg">
            Explore tutorials, tips, and insights on coding, web development, and software engineering.
            Dive into the world of programming with me!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;