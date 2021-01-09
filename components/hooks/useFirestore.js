import { projectFirestore, timestamp } from '../../firebase/config';
export const useFirestore = (collection, ingredients, contact) => {
  projectFirestore.collection(collection).add({
    ingredients: ingredients.list,
    price: ingredients.price.toFixed(2),
    createdAt: timestamp(),
    contact: {
      name: contact.name,
      email: contact.email,
      city: contact.city,
      street: contact.street,
      zipcode: contact.zipcode,
    },
  });
};
