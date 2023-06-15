// import React, { useState } from 'react';

// function SignIn() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     try {
//       e.preventDefault();
//       // Handle sign in logic here
//       console.log('Sign In:', email, password);
//       // Reset form fields
//       setEmail('');
//       setPassword('');
//     } catch (error) {
//       console.error('Error while signing in:', error);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <h2 className="mb-4 text-2xl font-bold text-gray-800">Sign In</h2>
//       <form className="w-full max-w-sm" onSubmit={handleSubmit}>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
//         />
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
//         />
//         <button
//           className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           type="submit"
//         >
//           Sign In
//         </button>
//       </form>
//     </div>
//   );
// }

// export default SignIn;