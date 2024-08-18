// authUtils.js

export const isAuthenticated = () => {
    // Simple check for the presence of a token in local storage
    const token = localStorage.getItem('authToken');
    return !!token;
  };
  
  export const signIn = (token) => {
    // Set token in local storage
    localStorage.setItem('authToken', token);
  };
  
  export const signOut = () => {
    // Remove token from local storage
    localStorage.removeItem('authToken');
  };
  