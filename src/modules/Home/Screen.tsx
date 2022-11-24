import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootScreensList, RootStackParamsList } from '@/types/navigator';

type Props = NativeStackScreenProps<RootStackParamsList, 'Home'>;

/**
 * 1. Ambil device id dari mobile device menggunakan bridging native Android dan di IOS (tanpa menggunakan library)
 * 2. Buatlah suatu component keranjang dengan menggunakan react hook dan harus 1 render
 *    ketika berganti value (misal menambah atau mengurang item)
 * 3. Buatlah sebuah progress bar yang akan otomatis berjalan hingga 100% tetapi jika di tekan
 *    (hold) animasi progress bar tersebut akan berhenti dan ketika di lepas holdnya akan jalan kembali
 *
 * Notes:
 * 1. Untuk UI di buat bebas yang bisa mencover semua case di atas
 * 2. Buatlah guide how to install dan jalankan aplikasi tersebut
 */
function HomeScreen(props: Props) {
  const { navigation } = props;

  const handleNavigate = (screen: RootScreensList) => () => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Alami Test Challenge</Text>
        <View style={styles.titleDivider} />
      </View>
      <Button
        title="Challenge 1: Device ID Information"
        onPress={handleNavigate('DeviceInformation')}
      />
      <Button
        title="Challenge 2: Cart Component with Hooks"
        onPress={handleNavigate('Cart')}
      />
      <Button
        title="Challenge 3: Pausable Progress Loader"
        onPress={handleNavigate('ProgressLoader')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 2,
    fontWeight: '700',
    color: '#089EC7'
  },
  titleDivider: {
    height: 3,
    marginHorizontal: 35,
    backgroundColor: '#089EC7'
  },
  titleContainer: {
    marginBottom: 40
  },
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
});

export default HomeScreen;
