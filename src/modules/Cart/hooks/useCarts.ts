import { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { randomNumber } from '@/modules/Cart/utils/random';
import { type Props as CartItemProps } from '@/modules/Cart/components/CartItem';

type CartData = CartItemProps[];

function useCarts() {
  const [data, setData] = useState<CartData>([]);
  const [loading, setLoading] = useState(true);

  const handleDelete = useCallback(
    (id: number) => {
      const deleteItem = () => {
        const newItems = [...data].filter(itm => itm?.id !== id);
        setData(newItems);
        /** Do update to the API */
      };

      Alert.alert('Delete Item', 'Are you sure want to delete this item?', [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Sure!',
          onPress: deleteItem
        }
      ]);
    },
    [data]
  );

  const handleUpdateQty = useCallback(
    (id: number, qty: number) => {
      const newItems = [...data];
      const idxToUpdate = data.findIndex(itm => itm?.id === id);
      if (idxToUpdate > -1) {
        newItems[idxToUpdate] = {
          ...data[idxToUpdate],
          qty
        };
        setData(newItems);
        /** Do update to the API */
      }
    },
    [data]
  );

  useEffect(() => {
    /** Simulation request API */
    setTimeout(() => {
      let intialItems: CartData = [];
      for (let i = 0; i < 5; i++) {
        intialItems.push({
          id: i + 1,
          name: `Product ${i + 1}`,
          qty: randomNumber(1, 20),
          price: parseInt(`${randomNumber(10, 50)}000`, 10),
          stock: randomNumber(30, 40)
        });
      }
      setData(intialItems);
      setLoading(false);
    }, 1500);
  }, []);

  return {
    data,
    loading,
    handleDelete,
    handleUpdateQty
  };
}

export default useCarts;
