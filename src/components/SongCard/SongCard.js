import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './SongCard.styles';

const SongCard = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.artist_pic} source={{uri: props.song.imageUrl}} />
      <View style={styles.inner_container}>
        <Text style={styles.song_title}>{props.song.title}</Text>
        <View style={styles.bottom_container}>
          <View style={styles.info_container}>
            <Text style={styles.artist_name}>{props.song.artist}</Text>
            <Text style={styles.production_year}>{props.song.year}</Text>
          </View>
          <View style={styles.soldout_container}>
            {props.song.isSoldOut && (
              <Text style={styles.soldout_title}>Tükendi</Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};
export default SongCard;
