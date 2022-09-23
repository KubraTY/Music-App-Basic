import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  artist_pic: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inner_container: {
    padding: 10,
    flex: 1,
  },
  song_title: {
    fontWeight: '700',
    fontSize: 28,
  },
  info_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    flex: 0.7,
  },
  bottom_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  artist_name: {
    fontSize: 18,
  },
  production_year: {
    marginLeft: 10,
    color: 'gray',
    fontWeight: '700',
  },
  soldout_container: {},
  soldout_title: {
    borderRadius: 5,
    color: 'red',
    borderWidth: 0.4,
    borderColor: 'red',
    padding: 3,
    fontSize: 12,
  },
});
