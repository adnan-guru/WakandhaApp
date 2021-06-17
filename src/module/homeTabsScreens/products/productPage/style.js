import {StyleSheet, Platform} from 'react-native';
const CARD_MARGIN = Platform.OS === 'ios' ? 15 : 10;
export const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
  },
  title: {
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 28.6,
    color: 'rgba(221, 185, 55, 1)',
    marginTop: 14,
  },
  subTitle: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18.2,
    color: 'rgba(221, 185, 55, 1)',
    marginTop: 18,
  },
  hrLine: {
    width: '100%',
    height: 2,
    backgroundColor: '#343434',
    marginTop: 12,
  },
  headerTextView: {
    marginHorizontal: 18,
    flexDirection: 'row',
  },
  icon: {
    marginTop: 21,
  },
  titleView: {
    width: '60%',
  },
  subTitleView: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: CARD_MARGIN,
    marginTop: 17,
  },
  postImage: {
    alignSelf: 'flex-end',
    marginTop: -40,
    marginRight: -20,
  },
});
