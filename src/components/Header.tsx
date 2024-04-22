import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-500 py-4">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold">My Coding Blog</h1>
        <nav className="mt-4 flex flex-wrap justify-center">
          <Link
            className="text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 mt-2 md:mt-0 md:ml-4"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 mt-2 md:mt-0 md:ml-4"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 mt-2 md:mt-0 md:ml-4"
            href="/contact"
          >
            Contact
          </Link>
          {/* Add other links */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
