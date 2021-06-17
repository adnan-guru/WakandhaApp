import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  title: {
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 28.6,
    color: 'rgba(221, 185, 55, 1)',
    marginTop: 14,
    marginLeft: 18,
  },
  hrLine: {
    width: '100%',
    height: 2,
    backgroundColor: '#343434',
    marginTop: 12,
    marginBottom: 9,
  },
  mainView: {
    marginHorizontal: 18,
  },
  profileTitle: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 18.2,
    color: 'rgba(221, 185, 55, 1)',
    marginLeft: 13,
  },
  profileSubTitle: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16.6,
    color: 'rgba(89, 89, 89, 1)',
    marginLeft: 13,
    marginTop: 3,
  },
  profileView: {
    flexDirection: 'row',
    marginTop: 28,
  },
  groupsCardView: {
    width: '100%',
    height: 131,
    borderRadius: 5,
    backgroundColor: '#121219',
    marginTop: 22,
    marginBottom: 4,
  },
  icon: {
    alignSelf: 'flex-end',
    marginTop: 14,
    marginRight: 14,
  },
  groupCardText: {
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 15.6,
    color: 'rgba(89, 89, 89, 1)',
    marginLeft: 19,
  },
  groupSubCardText: {
    marginLeft: 12,
  },
  groupCardTextView: {
    flexDirection: 'row',
  },
  ielts: {
    marginLeft: 19,
    marginTop: 12,
  },
  top: {
    marginTop: 7,
  },
  padding: {
    marginTop: 10,
  },

  cardView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  left: {
    marginLeft: 18,
  },
  bottomTextView: {
    marginBottom: 32,
  },
  postImage: {
    alignSelf: 'flex-end',
    marginTop: -110,
  },
});
