import React, { useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';
import Quantity from './Quantity';

export interface Props {
  id: number;
  name: string;
  price: number;
  qty: number;
  stock: number;
  style?: StyleProp<ViewStyle>;
  onDelete?: (id: number) => void;
  onChangeQty?: (id: number, qty: number) => void;
}

function CartItem(props: Props) {
  const {
    id,
    name,
    price,
    stock,
    onDelete,
    onChangeQty,
    style,
    qty = 0
  } = props;
  const [quantity, setQuantity] = useState(qty);

  const handleChange = (value: number) => {
    setQuantity(value);
    onChangeQty?.(id, value);
  };

  return (
    <View style={[styles.cartItem, style]}>
      <View style={styles.img} />
      <View style={styles.detail}>
        <Text>{name}</Text>
        <Text>Rp. {price}</Text>
        <View style={styles.tools}>
          <TouchableOpacity onPress={() => onDelete?.(id)}>
            <Text style={styles.delete}>Delete</Text>
          </TouchableOpacity>
          <Quantity
            value={quantity}
            min={1}
            max={stock}
            onChange={handleChange}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 8,
    width: '100%',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8
  },
  img: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: '#ccc'
  },
  detail: {
    flex: 1,
    padding: 8,
    paddingTop: 12,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'flex-start'
  },
  tools: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%'
  },
  delete: {
    fontSize: 11,
    color: 'red',
    paddingBottom: 10
  }
});

export default CartItem;
