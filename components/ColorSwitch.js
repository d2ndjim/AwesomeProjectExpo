import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const ColorPaletteSwitch = ({ colorName }) => {
  const [value, setValue] = useState(false);
  return (
    <View style={styles.switch}>
      <Text style={styles.header}>{colorName}</Text>
      <View>
        <Switch value={value} onValueChange={setValue} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  switch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 5,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    marginBottom: 20,
  },
});

export default ColorPaletteSwitch;
