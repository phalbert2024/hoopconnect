/**
 * HoopConnect - Basketball Court Finder App
 * Main App Component
 */

import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1A1A1A" />
      <AppNavigator />
    </>
  );
};

export default App;
