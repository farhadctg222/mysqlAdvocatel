import Link from "next/link";

const LegalLayout = () => {
  return (
    <div className="bg-pink-50 p-6">
      {/* Header */}
      <header className="bg-white shadow-md rounded-lg max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-4">
          AdvocateListBD.com
        </h1>

        <nav className="flex flex-wrap justify-center gap-6 text-lg font-medium">
          <Link
            href="/disclaimer"
            className="text-pink-700 hover:text-pink-900 hover:underline transition"
          >
            Disclaimer
          </Link>
          <Link
            href="/terms"
            className="text-pink-700 hover:text-pink-900 hover:underline transition"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-pink-700 hover:text-pink-900 hover:underline transition"
          >
            Privacy
          </Link>
          <Link
            href="/about"
            className="text-pink-700 hover:text-pink-900 hover:underline transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-pink-700 hover:text-pink-900 hover:underline transition"
          >
            Contact
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default LegalLayout;
