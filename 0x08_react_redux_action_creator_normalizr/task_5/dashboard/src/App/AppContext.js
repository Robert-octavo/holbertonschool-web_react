/*
    Define a default user object, containing email, password, and isLoggedIn
    Define a default logOut function
    Create a React context containing a user object and a logOut function. Set both default values using the previously created elements
*/
import { createContext } from 'react';

const user = {
  email: '',
  password: '',
  isLoggedIn: false
}

const logOut = () => {}


const AppContext = createContext({
  user: user,
  logOut: logOut
});

export { user, logOut };
export default AppContext;
