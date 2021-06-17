import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  chatCard: {
    width: '89%',
    height: 48,
    marginTop: 16,
    marginLeft: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  chatTitle: {
    marginLeft: 17,
    fontWeight: '600',
    fontSize: 14,
    color: 'rgba(221, 185, 55, 1)',
  },
  chatSubTitle: {
    marginLeft: 17,
    marginTop: 7,
    fontWeight: '400',
    fontSize: 14,
    color: 'rgba(255,255,255,1)',
  },
  time: {
    color: 'rgba(89,89,89,1)',
    fontSize: 10,
    fontWeight: '600',
    marginTop: 28,
  },
  CardhrLine: {
    width: '89%',
    height: 2,
    backgroundColor: '#343434',
    marginTop: 25,
    marginBottom: 9,
    alignSelf: 'flex-end',
  },
});
