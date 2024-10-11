import React, { useState } from 'react';

const UserAuth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login form submitted', formData);
    } else {
      console.log('Signup form submitted', formData);
    }
  };

  return (
    <div className="bg-[#080D18] min-h-screen flex flex-col items-center justify-center ">
        <div  className='text-3xl text-white font-bold my-10' >
            <h1>Hii User!</h1>
        </div>
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg ">
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`mr-4 text-lg font-semibold py-2 px-6 rounded-md ${
              isLogin ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`text-lg font-semibold py-2 px-6 rounded-md ${
              isLogin ?  'bg-gray-700 text-gray-300' : 'bg-blue-600 text-white'
            }`}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 mt-1 text-gray-900 rounded-md bg-gray-100 focus:outline-none"
                required={!isLogin} 
              />
            </div>
          )}

          <div>
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mt-1 text-gray-900 rounded-md bg-gray-100 focus:outline-none"
              required
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-gray-300">Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 mt-1 text-gray-900 rounded-md bg-gray-100 focus:outline-none"
                required={!isLogin} 
              />
            </div>
          )}

          <div>
            <label className="block text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 mt-1 text-gray-900 rounded-md bg-gray-100 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserAuth;
