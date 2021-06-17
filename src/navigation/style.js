import {StyleSheet, Platform} from 'react-native';
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 50 : 20;
const APPBAR_MARGIN = Platform.OS === 'ios' ? 76 : 20;
const HR_LINE = Platform.OS === 'ios' ? 177 : 123;
export const style = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
  },
  container: {
    marginHorizontal: 18,
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
    top: 177,
  },
  //HOME TAB STYLE
  main2: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
  },
  headerView2: {
    marginTop: APPBAR_MARGIN,
    width: '100%',
    height: 33,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLogo2: {
    width: 144,
    height: 33,
  },
  iconRow2: {
    flexDirection: 'row',
  },
  searchIcon2: {
    marginRight: 21,
    marginTop: 10,
  },
  logoIcon2: {
    marginTop: 4,
  },
  tabImage2: {
    marginTop: -4,
    marginLeft: 13,
  },
  barImage2: {
    marginLeft: 18,
  },
  hrLine2: {
    width: '100%',
    height: 2,
    backgroundColor: '#343434',
    position: 'absolute',
    top: HR_LINE,
  },
});
