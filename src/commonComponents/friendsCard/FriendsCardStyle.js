import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  cardView: {
    height: 96,
    marginTop: 17,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  cardTitle: {
    marginLeft: 19,
    fontWeight: '600',
    fontSize: 14,
    color: '#DDB937',
    width: '100%',
  },
  cardSubTitle: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15.6,
    color: 'rgba(89, 89, 89, 1)',
    marginLeft: 19,
  },
  time: {
    marginLeft: 0,
  },
  subTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  button: {
    width: 86,
    height: 30,
    backgroundColor: '#DDB937',
    borderRadius: 4,
  },
  bgColor: {
    backgroundColor: 'rgba(66, 66, 78, 1)',
    marginLeft: 5,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 15.6,
    textAlign: 'center',
    marginTop: 6.55,
    color: '#000000',
  },
  buttonTextColor: {
    color: '#FFFFFF',
  },
  buttonView: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 12,
  },
  imageRow: {
    width: '30%',
  },
  titleRow: {
    width: '70%',
  },
});
