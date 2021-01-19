import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

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

  const generateToken = (email, id, first_name, last_name) => {
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

  const generateHash = (plainPassword) => {
    // const salt = bcrypt.genSaltSync();
    const salt = 10;
    const hashedPassword = bcrypt.hash(plainPassword, salt);
    return hashedPassword;
  }

  const comparePassword = (encodedPassword, password) => {
    const isMatched = bcrypt.compareSync(password, encodedPassword);
    return isMatched;
  }

  const checkIfEntityExists = (entityArr, userEmail) => {
    entityArr = [];
    for(let i=0; i < entityArr.length; i++){
      const user = entityArr[i];
      if(user.email === userEmail){
        return true;
      }
      return false;
    }
  }

  const convertTitlesToSlug = (title) => {
    const lowerCaseArticle = title.toLowerCase();
    return lowerCaseArticle.split(' ').join('-');
  }

  
  export {
    isEmailValid,
    isPasswordValid,
    isEmpty,
    emptyFields,
    generateToken,
    generateHash,
    comparePassword,
    convertTitlesToSlug,
    checkIfEntityExists
  };