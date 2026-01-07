# HoopConnect 🏀

> A mobile app connecting basketball players to nearby courts and pickup games

## Overview

HoopConnect is a cross-platform mobile application that helps basketball players:
- 🗺️ Find nearby courts and pickup games
- 🎯 Create and join runs with other hoopers
- 💬 Chat and build local and national basketball community
- 📍 Discover Hot Zones with active games

## Target Audience

Basketball players of all skill levels seeking reliable pickup games in their area.

## Tech Stack

### Mobile
- **React Native** - Cross-platform iOS & Android development
- **TypeScript** - Type-safe development

### Backend & Services
- **Firebase / Supabase** - Authentication, real-time database, storage
- **Google Maps SDK** - GPS and court discovery
- **RevenueCat** - In-app subscriptions and billing

### Key Features
- Real-time messaging with <1s latency
- Live player count updates
- Push notifications

## MVP Features (Phase 1-3)

### Phase 1: Foundation
- ✅ User accounts with email/Google/Apple login
- ✅ Profile system (handle, city, skill level, positions)
- ✅ Interactive map with nearby courts
- ✅ Court details (address, amenities, hours)
- ✅ Search & filter functionality

### Phase 2: Sessions & Community
- 🎮 Create/join runs with real-time updates
- 🔥 Hot Zones map view
- 💬 Group chat per session
- 👥 Friend/follow system
- ⭐ Post-game ratings (1-5 stars)

### Phase 3: Monetization & Growth
- 💰 Premium subscriptions ($4.99-$9.99/month)
- 🚀 Host Pro tier ($19.99/month)
- 📊 Analytics & insights
- 🔔 Smart push notifications

## Subscription Tiers

### Free Tier
- View map and browse courts
- See upcoming runs (read-only)
- Join public runs

### Premium Tier ($4.99-$9.99/month)
- Create and host runs
- Advanced filters
- Group chat & DMs
- Hot Zones access
- Smart notifications
- Rate courts & players

### Host Pro Tier ($19.99/month)
- Bulk session creation
- Host messaging
- Host analytics
- Priority support

## Project Structure

```
hoopconnect/
├── src/
│   ├── components/     # Reusable UI components
│   ├── screens/        # App screens
│   ├── services/       # API & Firebase services
│   ├── utils/          # Helper functions
│   ├── navigation/     # Navigation config
│   └── assets/         # Images, fonts, etc.
├── android/            # Android-specific code
├── ios/                # iOS-specific code
├── .env                # Environment variables
└── package.json        # Dependencies
```

## Key Success Metrics

### Engagement
- 1,000 daily active users by week 4
- 100 new games created per week

### Quality
- 60% attendance rate (RSVPs that show up)
- 90% confirmed games have 6+ players
- Avg sportsmanship rating: 4.3+ stars

### Monetization
- 10% free-to-premium conversion in first 30 days
- <15% monthly churn rate

### Technical
- Chat latency: <1 second
- Push notification delivery: 95%+
- App crash rate: <0.5%

## Development Strategy

### Host-First Approach
Focus on tools for run organizers (trainers, gym owners, community hosts) to create reliable, quality games. Players will follow once supply is reliable.

### No-Show Prevention
- Require minimum RSVPs before confirming games
- 24-hour reminders
- Auto-defer if player count drops

### Gamification
- 🏅 Ironman badges (10 consecutive sessions)
- 👑 Floor General (high sportsmanship)
- 🔥 Attendance streaks

## Getting Started

### Prerequisites
- Node.js 16+
- React Native CLI
- iOS Simulator (Mac) or Android Studio
- Firebase/Supabase account
- Google Maps API key

### Installation

```bash
# Clone the repository
git clone https://github.com/phalbert2024/hoopconnect.git
cd hoopconnect

# Install dependencies
npm install

# Install iOS dependencies (Mac only)
cd ios && pod install && cd ..

# Configure environment
cp .env.example .env
# Edit .env with your Firebase and Google Maps credentials

# Run on iOS
npm run ios

# Run on Android
npm run android
```

## Environment Variables

```env
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_domain
FIREBASE_PROJECT_ID=your_project_id
GOOGLE_MAPS_API_KEY=your_maps_key
```

## Implementation Timeline

- **Weeks 1-4**: Phase 1 - Auth, map, courts, search
- **Weeks 5-10**: Phase 2 - Sessions, real-time updates, chat, community
- **Weeks 11-16**: Phase 3 - Subscriptions, notifications, moderation, analytics

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact & Support

For questions or support, please open an issue or contact the development team.

---

**Built with ❤️ for the basketball community**
