import React, { Dispatch, SetStateAction } from 'react';

interface CheckboxOptions {
  IncludeUppercase: boolean;
  IncludeLowercase: boolean;
  IncludeNumbers: boolean;
  IncludeSymbols: boolean;
}

interface Options extends CheckboxOptions {
  PasswordLength: number;
}

interface PasswordOptionsProps {
  options: Options;
  setOptions: Dispatch<SetStateAction<Options>>;
}

const PasswordOptions: React.FC<PasswordOptionsProps> = ({ options, setOptions }) => {
  const checkboxOptions = Object.keys(options).filter((option) => option !== 'PasswordLength');

  const handleChange = (option: keyof CheckboxOptions) => {
    setOptions((prevOptions) => ({ ...prevOptions, [option]: !prevOptions[option] }));
  };

  const handlePasswordLengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPasswordLength = Number(event.target.value);
    setOptions((prevOptions) => ({ ...prevOptions, PasswordLength: newPasswordLength }));
  };

  const formatOptionName = (name: string) => {
    return name.replace(/([A-Z])/g, ' $1').trim();
  };

  return (
    <div className="flex flex-col space-y-4">
      {checkboxOptions.map((option) => (
        <label key={option} className="flex justify-between items-center space-x-2">
          <span className="text-lg text-black">{formatOptionName(option)}</span>
          <input
            type="checkbox"
            checked={options[option as keyof CheckboxOptions]}
            onChange={() => handleChange(option as keyof CheckboxOptions)}
          />
        </label>
      ))}
      <div className="flex justify-between items-center space-x-2">
        <span className="text-lg text-black">Password Length</span>
        <div className="flex items-center space-x-2" style={{ width: '150px' }}>
          <input
            type="range"
            min="8"
            max="16"
            value={options.PasswordLength}
            onChange={handlePasswordLengthChange}
          />
          <span>{options.PasswordLength}</span>
        </div>
      </div>
    </div>
  );
}

export default PasswordOptions;
