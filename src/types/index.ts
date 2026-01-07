export interface User {
  id: string;
  email: string;
  displayName?: string;
  photoURL?: string;
}

export interface Court {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  address: string;
  rating?: number;
}

export interface Game {
  id: string;
  courtId: string;
  courtName: string;
  dateTime: Date;
  playersNeeded: number;
  currentPlayers: number;
  organizer: string;
}
