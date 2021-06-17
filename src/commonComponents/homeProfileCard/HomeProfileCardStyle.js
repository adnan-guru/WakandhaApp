import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  card: {
    width: 83,
    height: 131,
    marginTop: 11,
    borderRadius: 7,
  },
  cardImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  profleImage: {
    position: 'absolute',
    top: 5,
    left: 5,
  },
  cardText: {
    fontWeight: '500',
    fontSize: 8,
    lineHeight: 10.4,
    color: '#FFFFFF',
    position: 'absolute',
    top: 106,
    left: 5,
  },
});
