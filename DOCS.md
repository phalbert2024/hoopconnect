# HoopConnect Technical Documentation

> Complete technical specifications, architecture decisions, and developer Q&A

## Table of Contents
- [Platform & User Base](#platform--user-base)
- [Core Terminology](#core-terminology)
- [Location & Privacy](#location--privacy)
- [Court Discovery](#court-discovery)
- [Run Management](#run-management)
- [Player Attendance](#player-attendance)
- [Subscription Features](#subscription-features)
- [Messaging & Moderation](#messaging--moderation)
- [Marketing Strategy](#marketing-strategy)
- [Design System](#design-system)

---

## Platform & User Base

### Q: Is it safe to say that over 90% of users would be accessing this application from their smartphone?
**A:** Yes. The app is primarily designed for mobile-first usage.

---

## Core Terminology

### Q: Could the term "runs" be misleading? Is it basketball slang?
**A:** "Runs" is basketball slang for pickup games/sessions. It's commonly understood by basketball players and won't be confused with jogging runs.

---

## Location & Privacy

### Q: Privacy toggle for location sharing - is this the court location or current GPS location?
**A:** There are two subscription-dependent features:

#### Tier 1 (Free)
- Users can see Hot Spots (courts with high activity) based on how many app users are at that location
- General visibility without exposing individual user locations

#### Tier 2 (Premium)
- **MyCrew Feature**: Squad/friend system where users can see each other's current locations
- Allows friends to coordinate and meet up at courts

---

## Court Discovery

### Q: Are there filters applied to court results? Would we exclude any results?
**A:** Yes, we target specific court types:

**Included Courts:**
- Recreation centers
- Outdoor public courts
- Paid facilities (gyms, indoor courts)

**Filtering Logic:**
- Courts must have publicly accessible basketball facilities
- Hours of operation should be displayed
- Amenities (parking, lights, restrooms) are important metadata

---

## Run Management

### Q: How many runs can happen concurrently at a court?
**A:** Multiple runs can be scheduled at the same court if:

1. **Court Count Logic**: If a rec center has 4 courts, this info should be displayed in the court details
2. **No Artificial Limits**: The system doesn't prevent overlapping runs
3. **User Responsibility**: Players can see existing runs and schedule accordingly

**Court vs Game Type:**
- Half-court games: 2 games could run simultaneously on 1 court
- Full-court games: 1 game per court
- The app doesn't enforce these rules - it's up to users

---

## Player Attendance

### Q: How often does a player's location get pinged? Does it track attendance automatically?
**A:** Player attendance options:

1. **Manual Check-in**: Players manually check in when they arrive
2. **Automatic GPS Check-in** (Future feature): Could auto-detect when player arrives at court

**Important:** We DON'T track:
- Mid-game departures
- Substitutions
- Individual player movements during games

**Philosophy:** "We don't dig deep on how players manage themselves while hooping. We're just giving them location and population assistance."

---

## Subscription Features

### Q: Who creates runs if no one pays for premium?
**A:** Run creation strategy:

- **Free users**: CANNOT create runs
- **Premium Tier (Tier 2)**: CAN create regular runs
- **Host Pro Tier (Tier 3)**: Can create:
  - Tournaments
  - Community events (food drives, job fairs, donations)
  - Tryouts
  - Team practices

**Initial Seeding:** Admins/founders will seed initial runs to demonstrate value and create initial supply.

---

## Hot Zones Feature

### Q: Are Hot Zones the same as seeing available runs?
**A:** Hot Zones are different:

**Available Runs (Free Tier):**
- See scheduled games with specific times
- Read-only access to run details

**Hot Zones (Premium Tier):**
- Real-time activity indicators
- Shows courts with active/upcoming runs
- Cluster view of high-activity areas
- Updated based on current player count at locations

---

## Messaging & Moderation

### Q: Are messages strictly text, or will images be allowed?
**A:** Message types by tier:

**Tier 1 & 2 (Free & Premium):**
- Text-only messages
- Group chat per session
- 1:1 direct messages

**Tier 3 (Host Pro):**
- Can add photos for:
  - Event promotion
  - Team rosters
  - Tournament brackets
  - Venue photos

### Q: Will there be admins to moderate or automated filters?
**A:** Multi-layered moderation:

1. **AI-powered filters**: Automated detection of profanity and bad behavior
2. **Human moderation**: Admin oversight for reported content
3. **Community reporting**: User-driven reporting system
4. **Ban system**: Repeat offenders can be banned

---

## Host Messaging

### Q: What does "Host messaging" mean?
**A:** Host messaging is a Tier 3 feature:

- **Purpose**: Keeps players informed about events they posted
- **Use cases**:
  - Send updates about game time changes
  - Weather cancellations
  - Venue changes
  - Post-event summaries

**Community Tab:** Separate from host messaging, available to all tiers for general chat.

---

## Marketing Strategy

### Q: How would you market the service once completed?
**A:** Multi-channel approach:

1. **Social Media**: Facebook & Instagram advertising
2. **Basketball Leagues**: Partner with local leagues and organizations
3. **Word of Mouth**: Referral program and community growth
4. **On-site Marketing**: Flyers at courts and gyms
5. **Influencer Partnerships**: Local basketball personalities

---

## Design System

### Q: What is "neo-brutalism style"?
**A:** Neo-brutalism is a modern design trend featuring:

**Characteristics:**
- Bold, thick borders
- High contrast colors
- Flat design with hard shadows
- Prominent typography
- Minimalist but striking

**Accessibility Requirements:**
- Color contrast must meet WCAG 4.5:1 standard
- Buttons minimum 44px height for mobile
- Generous whitespace to avoid overwhelming users
- Clear visual hierarchy

**Example Components:**
- Thick black borders on cards
- Bright accent colors (orange, blue, yellow)
- Bold sans-serif fonts
- Hard drop shadows instead of soft blurs

---

## Architecture Decisions

### Firebase vs Supabase
**Recommendation**: Firebase
- Better mobile SDK support
- Real-time database optimized for <1s latency
- Better documentation for React Native
- Authentication providers built-in

### RevenueCat vs Native Billing
**Recommendation**: RevenueCat
- Cross-platform subscription management
- Built-in analytics
- Easier to implement trials and promotions
- Better webhook support

---

## Next Steps for Developers

1. **Week 1**: Set up development environment
   - Firebase project creation
   - Google Maps API setup
   - React Native project initialization

2. **Week 1**: Create design mockups in Figma
   - Onboarding flow
   - Map interface
   - Run detail pages
   - Chat interface

3. **Weeks 2-4**: Build Phase 1
   - Authentication flows
   - Map integration
   - Court discovery
   - Search functionality

4. **Weeks 5-10**: Build Phase 2
   - Run creation/joining
   - Real-time updates
   - Messaging system
   - Community features

5. **Weeks 11-16**: Build Phase 3
   - Subscription integration
   - Push notifications
   - Moderation tools
   - Analytics dashboard

---

## Important Implementation Notes

### Court Information
- Courts must include number of courts at each location
- If a rec center has 4 courts, display this in court details
- Allow multiple concurrent runs based on court availability

### Privacy & Safety
- Never track exact player locations without consent
- Location sharing is opt-in via MyCrew feature
- Hot Zones show aggregate data, not individual users

### Quality Over Quantity
- Focus on reliable, high-quality games
- Host-first strategy: empower organizers first
- No-show prevention is critical for user trust

### Gamification Strategy
- Reward consistency, not just skill
- Ironman badges for attendance streaks
- Floor General for sportsmanship
- Make reliability visible and valued

---

## Developer Resources

- [React Native Documentation](https://reactnative.dev/)
- [Firebase for React Native](https://rnfirebase.io/)
- [React Native Maps](https://github.com/react-native-maps/react-native-maps)
- [RevenueCat Documentation](https://docs.revenuecat.com/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Last Updated:** January 2026  
**Maintained by:** HoopConnect Development Team
