import React, { useEffect, useState } from 'react';
import { Text, View, NativeModules, Platform } from 'react-native';

const DeviceUniqueID = NativeModules.DeviceUniqueID;

/**
 * 1. Ambil device id dari mobile device menggunakan bridging native Android dan di IOS
 *    (tanpa menggunakan library)
 */
function DeviceInformationScreen() {
  const [uniqueID, setUniqueID] = useState(null);

  useEffect(() => {
    DeviceUniqueID.get(setUniqueID);
  }, []);

  return (
    <View>
      <Text>Current Device Unique ID in ({Platform.OS})</Text>
      <Text>{uniqueID}</Text>
    </View>
  );
}

export default DeviceInformationScreen;
