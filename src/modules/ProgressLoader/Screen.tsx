/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */

import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useLoader from './hooks/useLoader';

/**
 * 3. Buatlah sebuah progress bar yang akan otomatis berjalan hingga 100% tetapi jika di tekan
 *    (hold) animasi progress bar tersebut akan berhenti dan ketika di lepas holdnya akan jalan kembali
 */
function ProgressLoaderScreen() {
  const { progress, isLoading, start, stop, restart } = useLoader();

  useEffect(start, []);

  return (
    <View style={styles.container}>
      <View style={styles.informationContainer}>
        <Text style={{ textAlign: 'center', fontSize: 11 }}>
          *Hold press to stop the Loader, release to start the Loader again
        </Text>
      </View>
      <TouchableOpacity
        onPressOut={start}
        onLongPress={stop}
        style={styles.loaderHandler}>
        <View style={styles.loaderContainer}>
          <View
            style={{
              height: 5,
              width: `${progress}%`,
              backgroundColor:
                !isLoading && progress < 100 ? '#E69B00' : '#089EC7'
            }}
          />
        </View>
      </TouchableOpacity>
      <Text>Loading {progress < 100 ? `${progress}%..` : 'completed!'}</Text>
      {progress === 100 && <Button onPress={restart} title="Restart" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 10
  },
  loaderHandler: {
    height: 40,
    width: '100%',
    justifyContent: 'center'
  },
  loaderContainer: {
    width: '100%',
    backgroundColor: '#ddd',
    height: 5,
    borderRadius: 8
  },
  informationContainer: {
    marginBottom: 10
  }
});

export default ProgressLoaderScreen;
