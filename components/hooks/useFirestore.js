import { projectFirestore, timestamp } from '../../firebase/config';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
export const useFirestore = (collection, ingredients, contact) => {
  const { auth } = useContext(AuthContext);
  projectFirestore
    .collection(collection)
    .add({
      ingredients: ingredients.list,
      price: ingredients.price.toFixed(2),
      createdAt: timestamp(),
      contact: {
        name: contact.name,
        email: auth,
        city: contact.city,
        street: contact.street,
        zipcode: contact.zipcode,
      },
    })
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });
};
