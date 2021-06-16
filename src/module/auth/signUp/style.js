import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
  },
  logo: {
    width: 92,
    height: 66,
    marginTop: 69,
    alignSelf: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    lineHeight: 36,
    textAlign: 'center',
    color: '#DDB937',
    marginTop: 25,
    // fontFamily: 'IBMPlexSans',
  },
  inputsView: {
    marginHorizontal: 33,
    marginTop: 38,
  },

  bottomTextView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 174,
    marginBottom: 145,
  },
  bottomText: {
    // fontFamily: 'IBMPlexSans',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 15.6,
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    marginTop: 33,
  },
  bottomSubText: {
    // fontFamily: 'IBMPlexSans',

    fontWeight: '700',
    color: '#DDB937',
    marginLeft: 5,
    fontSize: 12,
    lineHeight: 15.6,
    textAlign: 'center',
    marginTop: 33,
  },
});
