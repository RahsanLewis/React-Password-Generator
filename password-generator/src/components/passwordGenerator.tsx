import React, { useState } from 'react';
import PasswordOptions from './passwordOptions';
import generatePassword from './generatePassword';

function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [options, setOptions] = useState({
    IncludeUppercase: true,
    IncludeLowercase: true,
    IncludeNumbers: true,
    IncludeSymbols: true,
    PasswordLength: 8,
  });

  const handleGeneratePassword = () => {
    const generatedPassword = generatePassword(options);
    setPassword(generatedPassword);
    console.log('Password generated:', generatedPassword);
  };

  return (
    <div className="flex space-x-10 justify-center pt-20">
      <div className="bg-gray-200 shadow-lg rounded-lg p-5 w-96 h-48 flex flex-col items-center space-y-10 border border-gray">
        <button
          onClick={handleGeneratePassword}
          className="px-4 py-2 w-48 h-12 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none border border-gray">
          Generate Password
        </button>
        <div className="bg-white shadow-lg rounded-lg w-64 h-24 flex items-center justify-center border border-gray">
          <p className="text-lg text-black font-semibold">{password}</p>
        </div>
      </div>
      <div className="bg-gray-200 text-black shadow-lg rounded-lg p-5 w-96 h-68 flex flex-col items-center space-y-10 border border-gray">
        <PasswordOptions options={options} setOptions={setOptions} />
      </div>
    </div>
  ); 
}

export default PasswordGenerator;