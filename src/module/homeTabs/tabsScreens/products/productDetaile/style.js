import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
  },
  image: {
    width: '100%',
    height: 345,
    resizeMode: 'cover',
  },
  imageIcon: {
    flexDirection: 'row',
    marginTop: 39,
    justifyContent: 'space-between',
    marginHorizontal: 24,
  },
  imageTitleView: {
    width: 282,
    height: 69,
    marginTop: 19,
    marginLeft: 24,
  },
  imageTitle: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 26,
    color: 'rgba(221, 185, 55, 1)',
  },
  subText: {
    fontSize: 16,
    marginLeft: 24,
    marginTop: 5,
  },
  iconCircle: {
    width: 48,
    height: 48,
    backgroundColor: '#181825',
    borderRadius: 50,
    marginTop: 23,
  },
  circleIcon: {
    alignSelf: 'center',
    marginTop: 14,
  },
  circleIconsRow: {
    marginHorizontal: 29,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 75,
  },
  circleIconText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18.2,
    textAlign: 'center',
    color: 'rgba(221, 185, 55, 1)',
    marginTop: 23,
  },
  text: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 16.9,
    color: 'rgba(214, 176, 97, 1)',
    marginTop: 50,
  },
  detailText: {
    marginHorizontal: 24,
  },
  hrLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#343434',
    marginTop: 28,
  },
  paraTitle: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 23.4,
    marginTop: 23,
    color: 'rgba(221, 185, 55, 1)',
  },
  para: {
    marginTop: 12,
    color: 'rgba(235, 219, 162, 1)',
    textAlign: 'left',
  },
  paraHr: {
    marginTop: 22,
  },
  cardHeaderImage: {
    marginTop: 24,
  },
  cardHeaderText: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18.2,
    color: 'rgba(221, 185, 55, 1)',
    marginTop: 29,
    marginLeft: 15,
  },
  cardHeaderSubText: {
    marginTop: 4,
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 13,
    color: 'rgba(221, 185, 55, 1)',
    marginLeft: 15,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardHeaderTextRow: {
    flexDirection: 'row',
  },
  button: {
    width: 106,
    height: 36,
    borderRadius: 5,
    backgroundColor: '#E0CD87',
    marginTop: 29,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 18.2,
    color: 'rgba(9, 9, 15, 1)',
    marginTop: 9,
  },
  productCardTitle: {
    marginTop: 49,
  },
  card: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 43,
  },
});
