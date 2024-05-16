import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((itmes) => {
      const values = [];
      for (const item of itmes) {
        if ('body' in item) {
          values.push(item.body);
        } else if ('firstName' in item && 'lastName' in item) {
          values.push(item.firstName);
          values.push(item.lastName);
        }
      }
      console.log(values.join(' '));
    });
}
