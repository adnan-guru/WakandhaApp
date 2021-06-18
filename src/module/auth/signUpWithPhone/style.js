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
    marginTop: 48,
  },
  inputTitle: {
    color: 'rgba(221, 185, 55, 1)',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18.2,
  },
  dropDownView: {
    width: '100%',
    height: 40,
    borderRadius: 4,
    borderColor: '#606060',
    backgroundColor: '#101018',
    borderWidth: 1,
    marginTop: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropDownText: {
    color: 'rgba(73, 73, 84, 1)',
    marginTop: 12,
    marginLeft: 13,
  },
  icon: {
    marginRight: 17,
    marginTop: 18,
  },
  codeTitle: {
    marginTop: 17,
  },
  codeView: {
    marginTop: 7,
    width: 82,
    height: 40,
    borderRadius: 4,
    borderColor: '#606060',
    backgroundColor: '#101018',
    borderWidth: 1,
  },
  phoneView: {
    width: 200,
  },
  codeText: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 12,
  },
  inputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 33,
  },

  button: {
    marginHorizontal: 33,
  },
});
