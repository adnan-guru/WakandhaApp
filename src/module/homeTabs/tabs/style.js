import {StyleSheet, Platform} from 'react-native';
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 76 : 20;
const HR_LINE = Platform.OS === 'ios' ? 177 : 123;

export const style = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
  },
  headerView: {
    marginTop: APPBAR_HEIGHT,
    width: '100%',
    height: 33,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLogo: {
    width: 144,
    height: 33,
  },
  iconRow: {
    flexDirection: 'row',
  },
  searchIcon: {
    marginRight: 21,
    marginTop: 10,
  },
  logoIcon: {
    marginTop: 4,
  },
  tabImage: {
    marginTop: -4,
    marginLeft: 13,
  },
  barImage: {
    marginLeft: 18,
  },
  hrLine: {
    width: '100%',
    height: 2,
    backgroundColor: '#343434',
    position: 'absolute',
    top: HR_LINE,
  },
});
