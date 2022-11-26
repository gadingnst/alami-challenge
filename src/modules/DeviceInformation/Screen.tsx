import type { RootNativeModules } from '@/types/NativeModules';
import React, { useEffect, useState } from 'react';
import { Text, View, NativeModules, Platform, StyleSheet } from 'react-native';

const DeviceUniqueID: RootNativeModules['DeviceUniqueID'] =
  NativeModules.DeviceUniqueID;

/**
 * 1. Ambil device id dari mobile device menggunakan bridging native Android dan di IOS
 *    (tanpa menggunakan library)
 */
function DeviceInformationScreen() {
  const [uniqueID, setUniqueID] = useState('');

  useEffect(() => {
    if (Platform.OS === 'android' || Platform.OS === 'ios') {
      DeviceUniqueID.get(setUniqueID);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Current Device Unique ID (in {Platform.OS.toUpperCase()}):
      </Text>
      <Text>{uniqueID || 'Not Available.'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10
  }
});

export default DeviceInformationScreen;
