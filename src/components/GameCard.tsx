import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Game } from '../types';

interface Props {
  game: Game;
  onPress?: () => void;
}

const GameCard: React.FC<Props> = ({ game, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.title}>{game.courtName}</Text>
      <Text style={styles.info}>
        {game.dateTime.toLocaleDateString()} at{' '}
        {game.dateTime.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </Text>
      <Text style={styles.info}>
        Players: {game.currentPlayers}/{game.playersNeeded}
      </Text>
      <Text style={styles.info}>Organized by: {game.organizer}</Text>
      <View style={styles.progressBar}>
        <View
          style={[
            styles.progressFill,
            { width: `${(game.currentPlayers / game.playersNeeded) * 100}%` },
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2A2A2A',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  title: {
    color: '#FF6B35',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    color: '#999',
    fontSize: 14,
    marginBottom: 5,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#1A1A1A',
    borderRadius: 4,
    marginTop: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FF6B35',
    borderRadius: 4,
  },
});

export default GameCard;
