import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  cardView: {
    width: '100%',
    height: 96,
    backgroundColor: '#121219',
    marginTop: 4,
  },
  cardContantView: {
    width: '90%',
    height: 57,
    marginTop: 20,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18.2,
    color: 'rgba(221, 185, 55, 1)',
    marginLeft: 16,
  },
  cardSubTitle: {
    fontWeight: '400',
    marginLeft: 3,
    color: 'rgba(89, 89, 89, 1)',
  },

  time: {
    position: 'absolute',
    bottom: 10,
    left: 13,
  },
  cardTitleRow: {
    flexDirection: 'row',
  },
});
