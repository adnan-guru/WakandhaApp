import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
  },
  mainView: {
    marginHorizontal: 25,
  },
  text: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18.2,
    marginTop: 51,
    color: 'rgba(221, 185, 55, 1)',
    alignSelf: 'flex-end',
  },
  headerTextRow: {
    flexDirection: 'row',
  },
  headerImage: {
    marginTop: 16,
  },
  headerText: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18.2,
    color: 'rgba(221, 185, 55, 1)',
    marginTop: 21,
    marginLeft: 15,
  },
  headerSubText: {
    marginTop: 4,
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 13,
    color: 'rgba(221, 185, 55, 1)',
    marginLeft: 15,
  },
  addImageView: {
    width: '100%',
    height: 146,
    borderColor: '#DDB937',
    borderRadius: 5,
    borderStyle: 'dashed',
    borderWidth: 1,
    marginTop: 28,
  },
  addImageText: {
    alignSelf: 'center',
  },
  para: {
    marginLeft: 0,
    marginTop: 28,
    color: 'rgba(235, 219, 162, 1)',
  },
});
