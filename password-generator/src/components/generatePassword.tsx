interface PasswordOptions {
    IncludeUppercase: boolean;
    IncludeLowercase: boolean;
    IncludeNumbers: boolean;
    IncludeSymbols: boolean;
    PasswordLength: number;
  }
  
  function generatePassword(options: PasswordOptions) {
    try {
      let characters = '';
      if (options.IncludeUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      if (options.IncludeLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
      if (options.IncludeNumbers) characters += '0123456789';
      if (options.IncludeSymbols) characters += '!@#$%^&*_=+-/';
  
      if (characters.length === 0) {
        return 'Select at least one option';
      }
  
      let generatedPassword = '';
  
      for (let i = 0; i < options.PasswordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        generatedPassword += characters[randomIndex];
      }
  
      return generatedPassword;
    } catch (error) {
      console.error('Error while generating password:', error);
      return 'Error occurred while generating the password';
    }
  }
  
  export default generatePassword;
  