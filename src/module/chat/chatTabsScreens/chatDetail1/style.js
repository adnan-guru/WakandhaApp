import {StyleSheet} from 'react-native';
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
  backArrow: {
    marginTop: 57,
    marginLeft: 24,
  },
  headerTitle: {
    marginTop: 53,
    marginLeft: 13.5,
    fontWeight: '600',
    fontSize: 14,
    color: '#DDB937',
  },
  searchIcon: {
    marginTop: 48,
    marginRight: 21,
  },
  row: {
    flexDirection: 'row',
  },
  typeMessageView: {
    width: '90%',
    height: 57,
    backgroundColor: '#1D1D26',
    borderRadius: 37,
    marginBottom: 25,
    alignSelf: 'center',
  },
  emoji: {
    marginTop: 10,
    marginLeft: 14,
  },
  input: {
    position: 'absolute',
    top: 20,
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
    top: 15,
    right: 18,
  },
});
