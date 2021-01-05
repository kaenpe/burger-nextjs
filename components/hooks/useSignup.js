import { projectAuth } from '../../firebase/config';

export const useSignup = (email, password) => {
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
};
