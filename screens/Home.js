import React, { useState, useCallback, useEffect } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }) => {
  const [colorPalettes, setColorPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleFetchPalettes = useCallback(async () => {
    const response = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    if (response.ok) {
      const palettes = await response.json();
      setColorPalettes(palettes);
    }
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await handleFetchPalettes().then(() => setIsRefreshing(false));
  }, [handleFetchPalettes]);

  useEffect(() => {
    handleFetchPalettes();
  }, [handleFetchPalettes]);

  return (
    <FlatList
      style={styles.list}
      data={colorPalettes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PalettePreview
          handlePress={() => navigation.navigate('ColorPalette', item)}
          palette={item}
        />
      )}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => navigation.navigate('ColorPaletteModal')}
        >
          <Text style={styles.add}>Add a color Scheme</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  add: {
    color: '#6FBABB',
    marginBottom: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Home;
