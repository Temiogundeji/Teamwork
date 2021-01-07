import jwt from 'jsonwebtoken';

/**
 * @param {string} email
 * @return {boolean} 
 */

 const isEmailValid = (email) => {
     const regExp = /\S+@\S+\.\S+/;
     return regExp.test(email);
 }

 /**
  * @param {string} password
  * @returns {boolean}
  */

  const isPasswordValid = (password) => {
      const isValid = (password === '' || password.length < 8) ? false : true;
      return isValid;
  } 

  const isEmpty = (input) => {
    if (input === undefined || input === '') {
      return true;
    }
    if (input.replace(/\s/g, '').length) {
      return false;
    } return true;
  };
  
  /**
     * empty helper method
     * @param {string, integer} input
     * @returns {Boolean} True or False
     */
  const emptyFields = (input) => {
    if (input === undefined || input === '') {
      return true;
    }
  };

  const generateToken = (email, role_id, id, first_name, last_name) => {
    const token = jwt.sign({
      user_id:id,
      role_id,
      first_name,
      last_name,
      email
    }, 
    process.env.SECRET_KEY,
    { expiresIn: '1d' });
    return token;
  }
  
  export {
    isEmailValid,
    isPasswordValid,
    isEmpty,
    emptyFields,
    generateToken
  };