// import React, { useState } from 'react';

// function ErrorFallback({ error }: { error: Error | null }) {
//   return (
//     <div>
//       <h2>An error occurred:</h2>
//       <pre style={{ color: 'red' }}>{error?.message}</pre>
//     </div>
//   );
// }

// function SignUp() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState<Error | null>(null);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       // Handle sign up logic here
//       console.log('Sign Up:', email, password);
//       // Reset form fields
//       setEmail('');
//       setPassword('');
//     } catch (error: any) {
//       console.error(error);
//       if (error instanceof Error) {
//         setError(error);
//       } else {
//         setError(new Error('An unexpected error occurred.'));
//       }
//     }
//   };

//   if (error) {
//     return <ErrorFallback error={error} />;
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <h2 className="mb-4 text-2xl font-bold text-gray-800">Sign Up</h2>
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
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// }``

// export default SignUp;
