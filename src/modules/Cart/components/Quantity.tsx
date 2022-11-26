import React, { memo, useCallback, useMemo, useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

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
      <Button color={toolColor(value === min)} title="-" onPress={onDecrease} />
      <TextInput
        value={editableQuantity.toString()}
        editable
        maxLength={4}
        keyboardType="numeric"
        onChangeText={onEdit}
        onEndEditing={onChangeQuantity}
        onBlur={onChangeQuantity}
      />
      <Button color={toolColor(value === max)} title="+" onPress={onIncrease} />
    </View>
  );
}

const styles = StyleSheet.create({
  quantity: {
    maxWidth: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default memo(Quantity);
