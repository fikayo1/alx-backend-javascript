import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const Prom = Promise.all([uploadPhoto(), createUser()]);
  Prom.then((result) => {
    console.log(`${result[0].body} ${result[1].firstName} ${result[1].lastName}`);
  });
  Prom.catch(() => {
    console.log('Signup system offline');
  });
}
