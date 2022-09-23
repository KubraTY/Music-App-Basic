import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, FlatList} from 'react-native';
import SongCard from './components/SongCard';
import music_data from './music_data.json';
import SearchBar from './components/SearchBar';

function App() {
  const [list, setList] = useState(music_data);
  const renderSong = ({item}) => <SongCard song={item} />;
  const renderSeparator = () => <View style={styles.separator} />;
  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filteredList);
  };
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeparator}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  separator: {
    width: '100%',
    backgroundColor: '#d4d4d4',
    height: 1,
  },
});
export default App;
