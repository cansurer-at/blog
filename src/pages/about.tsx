import Layout from "@/app/RootLayout";

const about = () => {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen">
        <div className="container mx-auto px-4 py-8 flex-grow">
          <h1 className="text-3xl font-semibold mb-4">About Me</h1>
          <p className="text-lg mb-4">
            Welcome to the About page! Here you can learn more about me and my
            coding journey.
          </p>
          <p className="text-lg">
            I love coding, exploring new technologies, and sharing my knowledge
            with others.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default about;
