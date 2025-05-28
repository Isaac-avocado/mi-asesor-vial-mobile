import Constants from "expo-constants";
import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth, initializeAuth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from "react-native";

// Configuración de Firebase para móvil (usa variables de entorno o valores directos)
const firebaseConfig = {
  apiKey: Constants.expoConfig?.extra?.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: Constants.expoConfig?.extra?.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: Constants.expoConfig?.extra?.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: Constants.expoConfig?.extra?.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: Constants.expoConfig?.extra?.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: Constants.expoConfig?.extra?.EXPO_PUBLIC_FIREBASE_APP_ID,
};

console.log('Firebase config loaded:', firebaseConfig);

let app: FirebaseApp;
let auth: Auth | undefined;
let db: Firestore | undefined;
let storage: FirebaseStorage | undefined;

if (
  !firebaseConfig.apiKey ||
  !firebaseConfig.authDomain ||
  !firebaseConfig.projectId
) {
  console.warn(
    'La configuración de Firebase falta o está incompleta. Por favor, revisa tus variables de entorno.'
  );
}

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
  if (Platform.OS === "web") {
    // Expo Go/web: usa getAuth
    auth = getAuth(app);
  } else {
    // Build nativo: usa initializeAuth con persistencia nativa
    const { getReactNativePersistence } = require('firebase/auth');
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
  }
  db = getFirestore(app);
  storage = getStorage(app);
} else {
  app = getApps()[0];
  try {
    auth = getAuth(app);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error al obtener Auth', error.stack);
    } else {
      console.error('Error al obtener Auth', error);
    }
    auth = undefined;
  }
  try {
    db = getFirestore(app);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error al obtener Firestore', error.stack);
    } else {
      console.error('Error al obtener Firestore', error);
    }
    db = undefined;
  }
  try {
    storage = getStorage(app);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error al obtener Storage', error.stack);
    } else {
      console.error('Error al obtener Storage', error);
    }
    storage = undefined;
  }
}

export { app, auth, db, storage };
