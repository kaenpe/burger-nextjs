import { projectFirestore, timestamp } from '../../firebase/config';

export const useFirestore = (collection, ingredients) => {
  projectFirestore
    .collection(collection)
    .add({
      ingredients: ingredients.list,
      price: ingredients.price.toFixed(2),
      createdAt: timestamp(),
    })
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });
};
