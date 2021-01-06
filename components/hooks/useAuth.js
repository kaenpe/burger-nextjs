import { projectAuth } from '../../firebase/config';

export const useAuth = (email, password, type) => {
  if (type === 'signup')
    projectAuth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  else {
    projectAuth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('successfully signed in');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  }
};
