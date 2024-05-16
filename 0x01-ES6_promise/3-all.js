import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
    try {
        const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
        const values = [];

        if ('body' in photo) {
            values.push(photo.body);
        }

        if ('firstName' in user && 'lastName' in user) {
            values.push(user.firstName, user.lastName);
        }

        console.log(values.join(' '));
    } catch {
        console.log('Signup system offline');
    }
}
