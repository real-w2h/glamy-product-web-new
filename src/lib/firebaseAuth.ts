import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Check if all required Firebase environment variables are present
const requiredEnvVars = [
  'NEXT_PUBLIC_FIREBASE_API_KEY',
  'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
  'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
  'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
  'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
  'NEXT_PUBLIC_FIREBASE_APP_ID',
];

const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

// Your web app's Firebase configuration
const firebaseConfig = missingEnvVars.length > 0 ? {
  // Use dummy configuration to prevent errors when env vars are missing
  apiKey: "dummy-api-key-replace-with-real-key",
  authDomain: "dummy-project.firebaseapp.com",
  projectId: "dummy-project",
  storageBucket: "dummy-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:dummy-app-id",
} : {
  // Use real configuration from environment variables
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

if (missingEnvVars.length > 0) {
  console.warn('⚠️ Firebase configuration missing. Please set up the following environment variables:', missingEnvVars);
  console.warn('Create a .env.local file with your Firebase project credentials.');
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Export a flag to check if Firebase is properly configured
export const isFirebaseConfigured = missingEnvVars.length === 0; 