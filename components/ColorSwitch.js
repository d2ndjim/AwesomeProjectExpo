import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const ColorPaletteSwitch = ({ item, selectedColors, handleValueChange }) => {
  return (
    <View style={styles.switch}>
      <Text style={styles.header}>{item.colorName}</Text>
      <Switch
        value={
          !!selectedColors.find((color) => color.colorName === item.colorName)
        }
        onValueChange={(selected) => {
          handleValueChange(selected, item);
        }}
      />
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
