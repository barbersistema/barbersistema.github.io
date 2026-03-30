// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyDmRNuNwNCsJUomjBZkTGb6czCiEvZ0xO4",
    authDomain: "reactnative-mapsapp-488012.firebaseapp.com",
    projectId: "reactnative-mapsapp-488012",
    storageBucket: "reactnative-mapsapp-488012.firebasestorage.app",
    messagingSenderId: "135444762282",
    appId: "1:135444762282:web:8766842f893bf41efecad3"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/favicon.ico'
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});
