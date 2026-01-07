# HoopConnect - Developer Setup Guide

**Date:** January 6, 2026, 11:00 PM EST  
**Repository:** https://github.com/phalbert2024/hoopconnect  
**Project Owner:** Preston (Beyond Business Consulting)

---

## 📦 What Has Been Completed

### Repository Setup
✅ **GitHub Repository Created**: `phalbert2024/hoopconnect`  
✅ **Repository Type**: Public  
✅ **License**: MIT License  
✅ **Branches**: 2 (main + copilot/setup-firebase-auth-navigation)  
✅ **Commits**: 3 commits with proper documentation

### Documentation Files Created

#### 1. **README.md** (190 lines)
Comprehensive project overview including:
- Project description with basketball emoji 🏀
- Complete tech stack specifications
- MVP features broken down by Phase 1, 2, and 3
- Subscription tier details (Free, Premium $4.99-9.99, Host Pro $19.99)
- Project folder structure
- Key success metrics and KPIs
- Installation instructions
- Environment variable setup
- 16-week implementation timeline
- Getting started guide

#### 2. **DOCS.md** (298 lines)
Technical specifications with detailed Q&A including:
- Platform & user base (90%+ mobile)
- Core terminology ("runs" = basketball pickup games)
- Location & privacy features
  - Tier 1: Hot Spots (aggregate activity)
  - Tier 2: MyCrew (friend location sharing)
- Court discovery filtering logic (rec centers, outdoor courts, paid facilities)
- Run management (multiple concurrent runs per court)
- Player attendance tracking (manual check-in, future GPS auto-check-in)
- Subscription feature breakdown by tier
- Hot Zones vs available runs explanation
- Messaging system (text-only for Tier 1-2, photos for Tier 3)
- Moderation strategy (AI filters + human oversight)
- Host messaging capabilities (Tier 3 only)
- Marketing strategy (social media, leagues, word-of-mouth)
- Neo-brutalism design system specifications
- Architecture decisions (Firebase recommended, RevenueCat for billing)
- Developer resources and links

#### 3. **LICENSE**
MIT License for open source development

#### 4. **.gitignore**
Node.js template to ignore:
- node_modules/
- Build artifacts
- Environment files
- OS-specific files

### 🤖 GitHub Copilot AI Integration

**Status**: 🟡 ACTIVE  
**Pull Request**: "[WIP] Set up Firebase authentication and navigation structure"  
**Branch**: `copilot/setup-firebase-auth-navigation`  
**Tasks**: 13 tasks in progress

**What Copilot is Doing**:
- Generating initial React Native + TypeScript project structure
- Setting up Firebase authentication flows
- Creating navigation architecture
- Implementing basic component structure
- Configuring environment files

**How to Access**:
1. Go to Pull Requests tab in the repository
2. Look for the PR from "Copilot"
3. Review the generated code when ready
4. Merge or provide feedback

---

## 🛠️ What YOU Need to Do

### Immediate Actions (Week 1)

#### 1. Clone the Repository
```bash
git clone https://github.com/phalbert2024/hoopconnect.git
cd hoopconnect
```

#### 2. Review All Documentation
- [ ] Read README.md thoroughly
- [ ] Review DOCS.md for all technical Q&A
- [ ] Check the GitHub Copilot pull request
- [ ] Understand the 3-tier subscription model

#### 3. Set Up Development Environment

**Required Software**:
- [ ] Node.js 16+ (https://nodejs.org/)
- [ ] React Native CLI
  ```bash
  npm install -g react-native-cli
  ```
- [ ] For iOS (Mac only):
  - [ ] Xcode from App Store
  - [ ] CocoaPods: `sudo gem install cocoapods`
- [ ] For Android:
  - [ ] Android Studio (https://developer.android.com/studio)
  - [ ] Android SDK and emulator

#### 4. Create External Service Accounts

**Firebase Setup** (CRITICAL):
1. [ ] Go to https://console.firebase.google.com/
2. [ ] Create new project: "HoopConnect"
3. [ ] Enable Authentication:
   - [ ] Email/Password
   - [ ] Google Sign-In
   - [ ] Apple Sign-In
4. [ ] Set up Firestore Database
5. [ ] Configure Storage for images (Tier 3 hosts)
6. [ ] Download configuration files:
   - [ ] `google-services.json` (Android)
   - [ ] `GoogleService-Info.plist` (iOS)

**Google Maps API**:
1. [ ] Go to https://console.cloud.google.com/
2. [ ] Create/select project
3. [ ] Enable Maps SDK for Android
4. [ ] Enable Maps SDK for iOS
5. [ ] Get API key
6. [ ] Restrict API key to your app bundle IDs

**RevenueCat** (for subscriptions):
1. [ ] Sign up at https://www.revenuecat.com/
2. [ ] Create new project
3. [ ] Configure products:
   - [ ] Premium Tier ($4.99-9.99/month)
   - [ ] Host Pro Tier ($19.99/month)
4. [ ] Get API keys

#### 5. Initialize React Native Project

**Option A: Use Copilot's Code** (Recommended)
1. [ ] Wait for Copilot PR to complete
2. [ ] Review and merge the PR
3. [ ] Pull the changes
4. [ ] Install dependencies: `npm install`

**Option B: Start from Scratch**
```bash
# Create React Native app with TypeScript
npx react-native init HoopConnect --template react-native-template-typescript

# Install core dependencies
npm install @react-navigation/native @react-navigation/stack
npm install react-native-maps
npm install @react-native-firebase/app @react-native-firebase/auth @react-native-firebase/firestore
npm install react-native-purchases

# Install additional dependencies
npm install react-native-screens react-native-safe-area-context
npm install @react-native-async-storage/async-storage
```

#### 6. Create Environment Configuration

Create `.env` file in root:
```env
# Firebase
FIREBASE_API_KEY=your_firebase_api_key_here
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id

# Google Maps
GOOGLE_MAPS_API_KEY_ANDROID=your_android_maps_key
GOOGLE_MAPS_API_KEY_IOS=your_ios_maps_key

# RevenueCat
REVENUECAT_API_KEY=your_revenuecat_key
```

**IMPORTANT**: Never commit `.env` to Git (already in .gitignore)

---

## 📝 Development Phases

### Phase 1: Foundation (Weeks 2-4)
**Goal**: Authentication, Map, Court Discovery

**Tasks**:
- [ ] Implement email/Google/Apple authentication
- [ ] Create user profile system (handle, city, skill level, positions)
- [ ] Integrate Google Maps SDK
- [ ] Build court discovery feature with GPS
- [ ] Add court detail pages (address, amenities, hours)
- [ ] Implement search and filter functionality
- [ ] Create onboarding flow
- [ ] Set up navigation structure

**Deliverables**:
- Users can sign up and create profiles
- Users can view nearby courts on a map
- Users can search for courts by location/amenities

### Phase 2: Sessions & Community (Weeks 5-10)
**Goal**: Run Creation, Real-time Updates, Messaging

**Tasks**:
- [ ] Build run creation flow (court, date/time, game type, skill level)
- [ ] Implement real-time player count updates (<1s latency)
- [ ] Create Hot Zones map view (Premium feature)
- [ ] Build group chat system per session
- [ ] Add 1:1 direct messaging
- [ ] Implement friend/follow system (MyCrew)
- [ ] Create rating system (1-5 stars for courts and players)
- [ ] Add session confirmation logic (minimum RSVP threshold)
- [ ] Build notification system basics

**Deliverables**:
- Premium users can create runs
- Free users can join runs
- Real-time chat functionality
- Hot Zones showing active courts

### Phase 3: Monetization & Growth (Weeks 11-16)
**Goal**: Subscriptions, Notifications, Analytics

**Tasks**:
- [ ] Integrate RevenueCat for subscriptions
- [ ] Implement feature gating (paywalls)
- [ ] Build smart push notification system
- [ ] Add Host Pro features (bulk session creation, analytics)
- [ ] Create moderation system (AI + human)
- [ ] Implement reporting and blocking
- [ ] Build analytics dashboard
- [ ] Add gamification (badges, streaks)
- [ ] Performance optimization
- [ ] Testing and bug fixes

**Deliverables**:
- Working subscription system
- Complete app with all features
- Ready for beta testing

---

## 📊 Success Metrics to Track

### Engagement
- [ ] 1,000 daily active users by week 4 of launch
- [ ] 100 new games created per week

### Quality
- [ ] 60%+ attendance rate (RSVPs who show up)
- [ ] 90%+ of confirmed games have 6+ players
- [ ] Average sportsmanship rating: 4.3+ stars

### Monetization
- [ ] 10% free-to-premium conversion in first 30 days
- [ ] <15% monthly churn rate

### Technical
- [ ] Chat latency: <1 second
- [ ] Push notification delivery: 95%+
- [ ] App crash rate: <0.5%

---

## 🎯 Critical Implementation Notes

### 1. Host-First Strategy
**Focus on empowering run organizers FIRST**:
- Make it easy for trainers, gym owners, and community leaders to create runs
- Players will follow once there's reliable supply of games
- Seed initial runs yourself if needed

### 2. No-Show Prevention
**This is CRITICAL for user trust**:
- Require minimum RSVPs before confirming a game (e.g., 8 for 5v5)
- Send 24-hour reminders
- Auto-defer game if player count drops below minimum
- Track attendance history

### 3. Court Information
**Display number of courts at each location**:
- If a rec center has 4 courts, show this prominently
- Allow multiple concurrent runs based on court availability
- Don't artificially limit overlapping runs

### 4. Privacy & Location
**Two-tier approach**:
- **Tier 1 (Free)**: Hot Spots show aggregate activity only
- **Tier 2 (Premium)**: MyCrew allows opt-in friend location sharing
- Never track exact locations without explicit consent

### 5. Neo-Brutalism Design
**Accessibility is KEY**:
- Color contrast: WCAG 4.5:1 minimum
- Button height: 44px minimum for mobile
- Bold borders, high contrast, flat design
- Generous whitespace
- Test on real devices

---

## 🔗 Important Links

- **Repository**: https://github.com/phalbert2024/hoopconnect
- **React Native Docs**: https://reactnative.dev/
- **Firebase for RN**: https://rnfirebase.io/
- **React Native Maps**: https://github.com/react-native-maps/react-native-maps
- **RevenueCat Docs**: https://docs.revenuecat.com/
- **WCAG Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/

---

## ❓ Questions or Issues?

### Communication
1. **Check DOCS.md first** - Most technical questions are answered there
2. **Create GitHub Issues** - For bugs or feature clarifications
3. **Review Pull Requests** - Check Copilot's generated code
4. **Contact Preston** - For business logic or feature priority questions

### Getting Unstuck
- Read the comprehensive documentation in README.md and DOCS.md
- Check the GitHub Copilot PR for initial code structure
- Search React Native documentation
- Look for similar apps' open source code for reference
- Ask specific technical questions with error messages

---

## 🎉 Final Notes

This repository is professionally set up with:
- ✅ Complete documentation
- ✅ Clear technical specifications
- ✅ Answered Q&A (15+ questions)
- ✅ Architecture recommendations
- ✅ Success metrics defined
- ✅ GitHub Copilot AI assistance active
- ✅ 16-week timeline

**You have everything you need to start building immediately.**

The foundation is solid. Now it's time to bring HoopConnect to life! 🏀

---

**Good luck, and let's build something amazing for the basketball community!**

_Last updated: January 6, 2026, 11:00 PM EST_
