import { FaExclamationTriangle } from "react-icons/fa";

const Error = ({ message = "Something went wrong!" }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md flex items-center gap-3 w-full max-w-md">
        <FaExclamationTriangle className="text-red-600" size={24} />
        <span className="text-lg font-medium">{message}</span>
      </div>
    </div>
  );
};

export default Error;
