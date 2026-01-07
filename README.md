# HoopConnect 🏀

A mobile app connecting basketball players to nearby courts and pickup games. Built with React Native, TypeScript, Firebase, and Google Maps.

## Features

- 🔐 **Firebase Authentication** - Secure user authentication with email/password
- 🗺️ **Google Maps Integration** - Find nearby basketball courts on an interactive map
- 📱 **React Navigation** - Smooth navigation between screens
- 🎨 **Modern UI** - Clean, basketball-themed interface
- 📊 **TypeScript** - Type-safe development for better code quality
- 🏗️ **Well-Organized Structure** - Modular folder structure with components, screens, and services

## Tech Stack

- **React Native** - Cross-platform mobile framework
- **TypeScript** - Type-safe JavaScript
- **Firebase Authentication** - User authentication & management
- **Google Maps** - Location services & map display
- **React Navigation** - Navigation library for React Native

## Project Structure

```
hoopconnect/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Button.tsx
│   │   └── GameCard.tsx
│   ├── screens/          # App screens
│   │   ├── LoginScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   └── MapScreen.tsx
│   ├── navigation/       # Navigation configuration
│   │   └── AppNavigator.tsx
│   ├── services/         # Business logic & API services
│   │   └── FirebaseAuthService.ts
│   ├── types/           # TypeScript type definitions
│   │   └── index.ts
│   └── utils/           # Utility functions & config
│       └── config.ts
├── android/             # Android-specific code
├── ios/                 # iOS-specific code
├── App.tsx             # Root component
├── index.js            # Entry point
└── package.json        # Dependencies & scripts
```

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)
- Firebase project setup
- Google Maps API key

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Firebase

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication with Email/Password
3. Download `google-services.json` (Android) and `GoogleService-Info.plist` (iOS)
4. Place Android config in `android/app/google-services.json`
5. Place iOS config in `ios/GoogleService-Info.plist`

### 3. Configure Google Maps

1. Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Copy `.env.example` to `.env`
3. Add your Firebase and Google Maps credentials:

```env
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

### 4. iOS Setup

```bash
cd ios
pod install
cd ..
```

### 5. Run the App

**iOS:**
```bash
npm run ios
```

**Android:**
```bash
npm run android
```

## Available Scripts

- `npm start` - Start Metro bundler
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run lint` - Run ESLint
- `npm test` - Run tests

## Key Features Implementation

### Authentication
- Email/password authentication via Firebase
- Sign in and sign up flows
- Secure session management
- Sign out functionality

### Map Integration
- Interactive Google Maps
- Display nearby basketball courts
- Custom markers for courts
- Location permissions handling
- Court details and ratings

### Navigation
- Stack navigation for screen transitions
- Nested navigation support
- Custom header styling
- Deep linking ready

## Components

### Button Component
Reusable button component with loading states and variants.

### GameCard Component
Displays game information with progress bars showing player capacity.

## Screens

### LoginScreen
- Email/password input
- Toggle between sign in and sign up
- Form validation
- Loading states

### HomeScreen
- Welcome message with user email
- Upcoming games list
- Quick access to map
- Sign out functionality

### MapScreen
- Interactive Google Maps
- Court markers with details
- Location-based search
- Court information cards

## Services

### FirebaseAuthService
Centralized service for all authentication operations:
- `signInWithEmail(email, password)`
- `signUpWithEmail(email, password)`
- `signOut()`
- `getCurrentUser()`
- `onAuthStateChanged(callback)`
- `sendPasswordResetEmail(email)`

## Future Enhancements

- Real-time messaging between players
- Game scheduling and management
- Court reviews and ratings
- Player profiles and stats
- Freemium subscription model
- Push notifications
- Social features (friends, teams)
- In-app court reservations

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Support

For support, email support@hoopconnect.app or open an issue in the repository.

---

Built with ❤️ by the HoopConnect team

