
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-100/20 px-4">
      <div className="max-w-lg w-full bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-sm border border-navy-200/50 text-center">
        <h1 className="text-8xl font-bold text-navy-400 mb-4">404</h1>
        <p className="text-2xl text-navy-400 mb-6">Page not found</p>
        <p className="text-navy-400/70 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="button-primary flex items-center justify-center"
          >
            <Home size={18} className="mr-2" />
            Return Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="button-secondary flex items-center justify-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
