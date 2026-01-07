# HoopConnect Setup Guide

This guide will walk you through setting up the HoopConnect React Native application from scratch.

## Initial Setup Complete ✅

The following has been configured:

1. ✅ **React Native + TypeScript** - Project initialized with TypeScript support
2. ✅ **Folder Structure** - Organized into components, screens, services, navigation, types, and utils
3. ✅ **Firebase Authentication** - Service layer created for user authentication
4. ✅ **Google Maps Integration** - Map screen with location services
5. ✅ **React Navigation** - Stack navigation configured with 3 screens
6. ✅ **TypeScript Configuration** - Path aliases and strict type checking
7. ✅ **Build Configuration** - Android and iOS build files created

## What's Included

### Screens
- **LoginScreen** - Email/password authentication with sign in/sign up toggle
- **HomeScreen** - Dashboard showing upcoming games and user info
- **MapScreen** - Interactive map displaying basketball courts

### Components
- **Button** - Reusable button with loading states
- **GameCard** - Game information display component

### Services
- **FirebaseAuthService** - Complete authentication service with methods for:
  - Sign in with email/password
  - Sign up with email/password
  - Sign out
  - Password reset
  - Auth state listener

### Navigation
- **AppNavigator** - Stack-based navigation between Login, Home, and Map screens

## Next Steps for Development

### 1. Firebase Setup (Required)

To use authentication, you need to:

1. **Create Firebase Project:**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project"
   - Follow the wizard

2. **Enable Authentication:**
   - In Firebase Console, go to Authentication
   - Click "Get Started"
   - Enable "Email/Password" provider

3. **Add Firebase to Android:**
   ```bash
   # Download google-services.json from Firebase Console
   # Place it at: android/app/google-services.json
   ```

4. **Add Firebase to iOS:**
   ```bash
   # Download GoogleService-Info.plist from Firebase Console
   # Place it at: ios/GoogleService-Info.plist
   ```

5. **Configure Environment Variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your Firebase credentials
   ```

### 2. Google Maps Setup (Required)

1. **Get API Key:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create or select a project
   - Enable Maps SDK for Android and iOS
   - Create API key

2. **Add to Environment:**
   ```bash
   # Add to .env file
   GOOGLE_MAPS_API_KEY=your_key_here
   ```

3. **Update Android Manifest:**
   - The AndroidManifest.xml is already configured
   - Just ensure your API key is in .env

### 3. Install and Run

**For iOS:**
```bash
cd ios
pod install
cd ..
npm run ios
```

**For Android:**
```bash
npm run android
```

## Project Structure Explained

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx      # Custom button component
│   └── GameCard.tsx    # Game display card
│
├── screens/            # Main app screens
│   ├── LoginScreen.tsx     # Authentication screen
│   ├── HomeScreen.tsx      # Main dashboard
│   └── MapScreen.tsx       # Court finder map
│
├── navigation/         # Navigation setup
│   └── AppNavigator.tsx    # Stack navigator config
│
├── services/          # Business logic layer
│   └── FirebaseAuthService.ts  # Auth operations
│
├── types/            # TypeScript definitions
│   └── index.ts      # Shared type definitions
│
└── utils/           # Helper functions
    └── config.ts    # App configuration
```

## Development Workflow

1. **Start Metro Bundler:**
   ```bash
   npm start
   ```

2. **Run on Device/Emulator:**
   ```bash
   npm run ios     # For iOS
   npm run android # For Android
   ```

3. **Lint Code:**
   ```bash
   npm run lint
   ```

## Adding New Features

### Adding a New Screen

1. Create screen file in `src/screens/`
2. Add screen to `RootStackParamList` in `AppNavigator.tsx`
3. Add route to Stack.Navigator

### Adding a New Component

1. Create component file in `src/components/`
2. Export component
3. Import and use in screens

### Adding New Service

1. Create service file in `src/services/`
2. Implement service methods
3. Export service instance or functions

## Troubleshooting

### Metro Bundler Issues
```bash
npm start -- --reset-cache
```

### iOS Build Issues
```bash
cd ios
pod deintegrate
pod install
cd ..
```

### Android Build Issues
```bash
cd android
./gradlew clean
cd ..
```

### TypeScript Errors
```bash
npm run tsc --noEmit
```

## Features to Implement

The following features are planned but not yet implemented:

- [ ] Real-time messaging between players
- [ ] Game creation and management
- [ ] Court reviews and ratings
- [ ] User profiles with stats
- [ ] Push notifications
- [ ] Social features (friends, teams)
- [ ] Payment integration for premium features
- [ ] Court reservations

## Testing

Currently, the app has basic structure but no tests. To add tests:

1. Install testing dependencies:
   ```bash
   npm install --save-dev @testing-library/react-native @testing-library/jest-native
   ```

2. Create test files with `.test.tsx` extension

3. Run tests:
   ```bash
   npm test
   ```

## Resources

- [React Native Documentation](https://reactnative.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [React Navigation Documentation](https://reactnavigation.org/)
- [Google Maps Documentation](https://developers.google.com/maps)

## Support

If you encounter issues:
1. Check the [React Native troubleshooting guide](https://reactnative.dev/docs/troubleshooting)
2. Review Firebase setup documentation
3. Verify all environment variables are set correctly
4. Check that all dependencies are installed

---

Happy Coding! 🏀
