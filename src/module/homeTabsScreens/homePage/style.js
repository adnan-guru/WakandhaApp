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
    marginLeft: 110,
    marginTop: 11,
  },
  cardBgImage: {
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
    bottom: 0,
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
    marginTop: 15,
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
    bottom: 0,
  },
  //
  centeredView: {
    flex: 1,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: 400,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    position: 'absolute',
    width: '100%',
    bottom: 0,

    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalIcon: {
    marginLeft: -15,
  },
  modalText: {
    fontSize: 15,
    marginLeft: 10,
    marginTop: 3,
    fontWeight: 'bold',
  },
  hrLine: {
    width: '125%',
    height: 1,
    backgroundColor: 'gray',
    marginLeft: -40,
    marginTop: 15,
  },
  madalRow: {
    flexDirection: 'row',
  },
  modalSubIcon: {
    marginTop: 10,
  },
  modalSubText: {
    marginTop: 13,
  },
  modalButton: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#DDB937',
    alignSelf: 'flex-end',
    marginTop: -25,
    marginRight: -20,
  },
  back: {
    fontSize: 20,
    textAlign: 'center',
    color: 'red',
  },
});
