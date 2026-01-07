import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Court } from '../types';

const MapScreen: React.FC = () => {
  const [courts, setCourts] = useState<Court[]>([]);
  const [selectedCourt, setSelectedCourt] = useState<Court | null>(null);
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    requestLocationPermission();
    loadMockCourts();
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'HoopConnect needs access to your location to find nearby courts',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission granted');
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const loadMockCourts = () => {
    // Mock data for demonstration
    const mockCourts: Court[] = [
      {
        id: '1',
        name: 'Downtown Basketball Court',
        latitude: 37.78825,
        longitude: -122.4324,
        address: '123 Main St, San Francisco, CA',
        rating: 4.5,
      },
      {
        id: '2',
        name: 'Riverside Park Courts',
        latitude: 37.79,
        longitude: -122.44,
        address: '456 Park Ave, San Francisco, CA',
        rating: 4.2,
      },
      {
        id: '3',
        name: 'Mission District Court',
        latitude: 37.76,
        longitude: -122.42,
        address: '789 Mission St, San Francisco, CA',
        rating: 4.8,
      },
    ];
    setCourts(mockCourts);
  };

  const handleMarkerPress = (court: Court) => {
    setSelectedCourt(court);
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        {courts.map((court) => (
          <Marker
            key={court.id}
            coordinate={{
              latitude: court.latitude,
              longitude: court.longitude,
            }}
            title={court.name}
            description={court.address}
            onPress={() => handleMarkerPress(court)}
          />
        ))}
      </MapView>

      {selectedCourt && (
        <View style={styles.courtInfo}>
          <Text style={styles.courtName}>{selectedCourt.name}</Text>
          <Text style={styles.courtAddress}>{selectedCourt.address}</Text>
          {selectedCourt.rating && (
            <Text style={styles.courtRating}>
              ⭐ {selectedCourt.rating.toFixed(1)}
            </Text>
          )}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => Alert.alert('Navigate', 'Navigation feature coming soon!')}
            >
              <Text style={styles.actionButtonText}>Navigate</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionButton, styles.secondaryButton]}
              onPress={() => Alert.alert('Details', 'Court details coming soon!')}
            >
              <Text style={styles.actionButtonText}>View Details</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setSelectedCourt(null)}
          >
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  courtInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#2A2A2A',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  courtName: {
    color: '#FF6B35',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  courtAddress: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 5,
  },
  courtRating: {
    color: '#FFD700',
    fontSize: 16,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  actionButton: {
    backgroundColor: '#FF6B35',
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  secondaryButton: {
    backgroundColor: '#4A4A4A',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    padding: 5,
  },
  closeButtonText: {
    color: '#999',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default MapScreen;
