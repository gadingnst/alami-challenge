import React, { useEffect } from 'react';
import { Text, View, NativeModules } from 'react-native';

const DeviceInfo = NativeModules.DeviceInfo;

/**
 * 1. Ambil device id dari mobile device menggunakan bridging native Android dan di IOS
 *    (tanpa menggunakan library)
 */
function DeviceInformationScreen() {
  useEffect(() => {
    DeviceInfo.getUniqueID().then((deviceID: string) => {
      console.log('Current Device Unqiue ID: ' + deviceID);
    });
  });

  return (
    <View>
      <Text>From Device Information Screen</Text>
    </View>
  );
}

export default DeviceInformationScreen;
