import {StyleSheet} from 'react-native';
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
    marginLeft: 18,
    marginTop: 14,
  },
  hrLine: {
    width: '100%',
    height: 2,
    backgroundColor: '#343434',
    marginTop: 12,
  },
  cardView: {
    flexDirection: 'row',
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
  cardHeader: {
    marginHorizontal: 15,
    marginTop: 25,
  },
  videoView: {
    width: '100%',
    height: 176,
    marginTop: 17,
    borderRadius: 7,
  },
  cardImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  cardText: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 16.9,
    color: 'rgba(214, 176, 97, 1)',
  },
  button: {
    width: 104,
    height: 30,
    backgroundColor: 'rgba(221, 185, 55, 1)',
    borderRadius: 4,
    marginTop: -6,
  },
  buttonText: {
    fontSize: 12,
    lineHeight: 15.6,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 1)',
    height: 16,
    marginTop: 6.55,
  },
  cardTextView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 125,
  },
  iconsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 24,
  },
  icon: {
    width: 22,
    height: 20,
  },
  microIcon: {
    width: 22,
    height: 20,
  },
  TextColor: {
    color: 'rgba(86, 79, 66, 1)',
  },
  postImage: {
    position: 'absolute',
    right: -20,
    bottom: 20,
  },
});
