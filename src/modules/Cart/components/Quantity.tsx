import React, { memo, useCallback, useMemo, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

interface Props {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}

function Quantity(props: Props) {
  const { value, onChange, min = 0, max = 9999 } = props;

  const toolColor = useCallback(
    (statement: boolean) => (statement ? '#ddd' : 'blue'),
    []
  );

  const triggerChanges = useCallback(
    (val: number) => {
      setEditableQuantity(val);
      onChange(val);
    },
    [onChange]
  );

  const initialValue = useMemo(() => {
    let newValue = min;
    if (value > min && value < max) {
      newValue = value;
    } else if (value > max) {
      newValue = max;
    }
    return newValue;
  }, [min, value, max]);

  const [editableQuantity, setEditableQuantity] = useState(initialValue);

  const onDecrease = useCallback(() => {
    if (value > min) {
      const newValue = value - 1;
      triggerChanges(newValue);
    }
  }, [value, min, triggerChanges]);

  const onIncrease = useCallback(() => {
    if (value < max) {
      const newValue = value + 1;
      triggerChanges(newValue);
    }
  }, [value, max, triggerChanges]);

  const onChangeQuantity = useCallback(() => {
    let newValue = editableQuantity;
    if (editableQuantity < min) {
      newValue = min;
    } else if (editableQuantity > max) {
      newValue = max;
    }
    triggerChanges(newValue);
  }, [editableQuantity, max, min, triggerChanges]);

  const onEdit = useCallback((passed: string) => {
    const passedQuantity = parseInt(passed, 10);
    let newValue = passedQuantity;
    if (isNaN(passedQuantity)) {
      newValue = 0;
    }
    setEditableQuantity(newValue);
  }, []);

  return (
    <View style={styles.quantity}>
      <TouchableOpacity onPress={onDecrease}>
        <Text style={[styles.textToolQty, { color: toolColor(value === min) }]}>
          -
        </Text>
      </TouchableOpacity>
      <TextInput
        value={editableQuantity.toString()}
        editable
        maxLength={4}
        keyboardType="numeric"
        style={styles.inputQty}
        onChangeText={onEdit}
        onEndEditing={onChangeQuantity}
        onBlur={onChangeQuantity}
      />
      <TouchableOpacity onPress={onIncrease}>
        <Text style={[styles.textToolQty, { color: toolColor(value === max) }]}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  quantity: {
    maxWidth: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputQty: {
    textAlign: 'center',
    minWidth: 20,
    padding: 0
  },
  textToolQty: {
    fontSize: 20,
    marginHorizontal: 5,
    fontWeight: '700'
  }
});

export default memo(Quantity);
