import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#2B2B2B',
  },
  header: {
    marginTop: 47,
    marginLeft: 22,
    width: '55%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontWeight: '700',
    fontSize: 20,
    color: '#DDB937',
  },
  cardMargin: {
    marginHorizontal: 26,
  },
  card: {
    marginTop: 28,
    width: '100%',
    height: 174,
    borderRadius: 22,
    backgroundColor: '#1D1D27',
  },
  cardTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#DDB937',
    marginTop: 27,
    marginLeft: 19,
  },
  cardSubTitle: {
    fontWeight: '400',
    fontSize: 12,
    color: '#FFFFFF',
    marginTop: 9,
    marginLeft: 19,
  },
  cardAmount: {
    fontWeight: '700',
    fontSize: 30,
    color: '#DDB937',
    marginTop: 38,
    marginLeft: 19,
  },
  paymentTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#DDB937',
    marginTop: 31,
    marginLeft: 38,
  },
  paymentSubTitle: {
    fontWeight: '400',
    fontSize: 13,
    color: '#ECE6CF',
    marginTop: 10,
    marginLeft: 38,
    marginBottom: 20,
  },
  selectView: {
    width: '100%',
    height: 43,
    backgroundColor: '#1D1D27',
    borderRadius: 4,
    marginTop: 5,
  },
  CheckBox: {
    padding: 10,
  },
  checkBoxLabel: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  checkBoxView: {
    marginHorizontal: 32,
  },
  button: {
    marginBottom: 72,
  },
});
