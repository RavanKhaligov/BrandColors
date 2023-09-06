import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="w-full h-[80vh] flex items-center justify-center">
      <div>
        <h1 className="text-4xl font-semibold text-gray-800">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600 mt-2">The page you are looking for does not exist.</p>
        <Link href="/" className="mt-4 text-blue-500 hover:underline">
          Go back to the home page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
