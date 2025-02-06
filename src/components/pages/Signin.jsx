const Signin = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Section (Form) */}
        <div className="flex flex-col justify-center items-center bg-blue-300 p-6 md:w-1/2">
          <h2 className="text-xl font-bold mb-4 text-white">Sign In</h2>
          <form className="w-full max-w-sm">
            <div className="mb-4">
              <label htmlFor="email" className="block text-white mb-1">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-white mb-1">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Sign In
            </button>
          </form>
        </div>

        {/* Right Section (Message or Additional Content) */}
        <div className="flex justify-center items-center bg-red-600 text-white p-6 md:w-1/2">
          <h2 className="text-lg font-semibold">Hello! Welcome Back</h2>
        </div>
      </div>
    </div>
  );
};

export default Signin;
