import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
    flexDirection: 'row',
  },
  profileCardsView: {
    width: '100%',
    height: 153,
    marginTop: 16,
    marginLeft: 11,
  },
  cardView: {
    flexDirection: 'row',
  },
  mainView: {
    width: '100%',
    height: 260,
  },
  imageTitle: {
    color: '#DDB937',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 18.2,
  },
  text: {
    fontWeight: '400',
    color: '#595959',
    marginLeft: 5,
  },

  textView: {
    flexDirection: 'row',
    marginLeft: 13,
    marginTop: 4,
  },
  cardDotImg: {
    position: 'absolute',
    right: 5,
    top: 11,
  },
  cardBgImage: {
    flex: 1,
    width: '100%',
    height: 176,
    resizeMode: 'cover',
    justifyContent: 'center',
    marginTop: 17,
  },
  bgImageView: {
    width: '97%',
    height: 44.34,
    backgroundColor: '#121219',
    borderRadius: 112.069,
    position: 'absolute',
    bottom: 19,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  thumbImg: {
    width: 30,
    height: 29,
    marginTop: 5,
  },
  iconsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  icon: {
    width: 22,
    height: 20,
  },
  microIcon: {
    width: 22,
    height: 20,
  },
  cardText: {
    color: '#564F42',
  },
  postImage: {
    position: 'absolute',
    right: -20,
  },
});
