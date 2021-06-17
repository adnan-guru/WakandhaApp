import {colors} from '../../../constant/color';
import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.secondryColor,
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
  text: {
    // fontFamily: 'IBMPlexSans',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15.6,
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    marginTop: 33,
  },
  bottomTextView: {
    width: '100%',
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomText: {
    fontWeight: '700',
    marginTop: 10,
    textAlign: 'center',
  },
  bottomSubText: {
    fontWeight: '700',
    color: '#DDB937',
    marginLeft: 5,
    marginTop: 10,
  },
});
