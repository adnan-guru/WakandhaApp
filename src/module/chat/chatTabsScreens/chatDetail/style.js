import {StyleSheet, Platform} from 'react-native';
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 3;
export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    width: '100%',
    height: 109,
    backgroundColor: 'rgba(18,18,18,1)',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backArroeIcon: {
    marginTop: 65,
    marginLeft: 13,
  },
  image: {
    marginTop: 51,
    marginLeft: 10,
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: 'rgba(221,185,55,1)',
    marginTop: 51,
    marginLeft: 15,
  },
  headerSubTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(89,89,89,1)',
    marginTop: 5,
    marginLeft: 15,
  },
  iconView: {
    width: 34,
    height: 34,
    backgroundColor: '#181825',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  phoneIcon: {
    width: 14,
    height: 14,
  },
  headerIcons: {
    flexDirection: 'row',
    marginTop: 51,
    marginRight: 16,
  },
  typeMessageView: {
    width: '85%',
    height: 57,
    backgroundColor: '#1D1D26',
    borderRadius: 37,
    marginLeft: 14,
    marginBottom: 25,
    // paddingTop: 70,
  },
  emoji: {
    marginTop: 10,
    marginLeft: 14,
  },
  input: {
    position: 'absolute',
    top: APPBAR_HEIGHT,
    left: 64,
    fontSize: 14,
    fontWeight: '500',
  },
  line: {
    position: 'absolute',
    top: 13,
    right: 55,
  },
  camera: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  microphone: {
    position: 'absolute',
    bottom: 42,
    right: 14,
  },
});
