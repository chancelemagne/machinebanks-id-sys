import {Client, Account} from 'appwrite';

export const client = new Client()
    .setEndpoint(process.env.VITE_APPWRITE_ENDPOINT) // Replace with your Appwrite endpoint
    .setProject(process.env.VITE_APPWRITE_PROJECT_ID); // Replace with your project ID

export const account = new Account(client);

export async function isLoggedIn() {
    try {
        const user = await account.get();
        return user !== null;
    } catch (error) {
        return false;
    }
}