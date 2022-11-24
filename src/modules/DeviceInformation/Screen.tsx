import React from 'react';
import { Text, View } from 'react-native';

/**
 * 1. Ambil device id dari mobile device menggunakan bridging native Android dan di IOS
 *    (tanpa menggunakan library)
 */
function DeviceInformationScreen() {
  return (
    <View>
      <Text>From Device Information Screen</Text>
    </View>
  );
}

export default DeviceInformationScreen;
