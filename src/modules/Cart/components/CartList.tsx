import React, { memo } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import useCarts from '../hooks/useCarts';
import CartItem from './CartItem';

function CartList() {
  const { data, loading, handleDelete, handleUpdateQty } = useCarts();

  const renderCartList = () => {
    if (loading) {
      return (
        <View style={styles.loaderContainer}>
          <ActivityIndicator />
          <Text style={styles.loaderText}>Loading...</Text>
        </View>
      );
    }
    return data.map(itm => (
      <CartItem
        key={itm?.id}
        {...itm}
        onDelete={handleDelete}
        onChangeQty={handleUpdateQty}
        style={styles.cartItem}
      />
    ));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.title}>
        <Text>My Carts ({data.length})</Text>
      </View>
      {renderCartList()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingHorizontal: 20
  },
  loaderContainer: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loaderText: {
    paddingVertical: 10
  },
  cartItem: {
    marginBottom: 15
  },
  title: {
    marginBottom: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  }
});

export default memo(CartList);
