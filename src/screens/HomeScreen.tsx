import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import FirebaseAuthService from '../services/FirebaseAuthService';
import { Game } from '../types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState<string>('');
  const [upcomingGames, setUpcomingGames] = useState<Game[]>([]);

  useEffect(() => {
    const user = FirebaseAuthService.getCurrentUser();
    if (user) {
      setUserEmail(user.email || '');
    }

    // Mock data for demonstration
    setUpcomingGames([
      {
        id: '1',
        courtId: 'court1',
        courtName: 'Downtown Basketball Court',
        dateTime: new Date(Date.now() + 86400000),
        playersNeeded: 10,
        currentPlayers: 6,
        organizer: 'John Doe',
      },
      {
        id: '2',
        courtId: 'court2',
        courtName: 'Riverside Park Courts',
        dateTime: new Date(Date.now() + 172800000),
        playersNeeded: 8,
        currentPlayers: 4,
        organizer: 'Jane Smith',
      },
    ]);
  }, []);

  const handleSignOut = async () => {
    try {
      await FirebaseAuthService.signOut();
      navigation.navigate('Login');
    } catch {
      Alert.alert('Error', 'Failed to sign out');
    }
  };

  const handleFindCourts = () => {
    navigation.navigate('Map');
  };

  const renderGameItem = ({ item }: { item: Game }) => (
    <View style={styles.gameCard}>
      <Text style={styles.gameTitle}>{item.courtName}</Text>
      <Text style={styles.gameInfo}>
        {item.dateTime.toLocaleDateString()} at{' '}
        {item.dateTime.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </Text>
      <Text style={styles.gameInfo}>
        Players: {item.currentPlayers}/{item.playersNeeded}
      </Text>
      <Text style={styles.gameInfo}>Organized by: {item.organizer}</Text>
      <TouchableOpacity style={styles.joinButton}>
        <Text style={styles.joinButtonText}>Join Game</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome, {userEmail}!</Text>
        <TouchableOpacity onPress={handleSignOut}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.findCourtsButton} onPress={handleFindCourts}>
        <Text style={styles.findCourtsButtonText}>🏀 Find Courts Near Me</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Upcoming Games</Text>

      <FlatList
        data={upcomingGames}
        renderItem={renderGameItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No upcoming games</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#2A2A2A',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signOutText: {
    color: '#FF6B35',
    fontSize: 14,
  },
  findCourtsButton: {
    backgroundColor: '#FF6B35',
    margin: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  findCourtsButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  gameCard: {
    backgroundColor: '#2A2A2A',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  gameTitle: {
    color: '#FF6B35',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  gameInfo: {
    color: '#999',
    fontSize: 14,
    marginBottom: 5,
  },
  joinButton: {
    backgroundColor: '#FF6B35',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  joinButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  emptyText: {
    color: '#999',
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
  },
});

export default HomeScreen;
