import { StyleSheet } from 'react-native';
import styled from 'styled-components';

export const CardContainer = styled.View`
  background-color: ${(props) => `${props.color}`};
  border-radius: 4px;
  height: 150px;
  margin-bottom: 5px;
  shadow-color: white;
  shadow-offset: {width: 0px, height: 2px};
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 1;
  width: 380px;
`;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'rgba(0,0,0,1)',
    borderRadius: 4,
    height: 151,
    marginBottom: 5,
    width: 380,
  },
  container: {
    flex: 1,
  },
  heading: {
    color: '#121212',
    fontSize: 36,
    lineHeight: 1,
    marginLeft: 118,
    marginTop: -675,
  },
  logoContainer: {
    backgroundColor: 'rgba(255,255,255,1)',
    height: 119,
    left: 0,
    position: 'absolute',
    top: 0,
    width: 119,
  },
  logoContainerStack: {
    height: 120,
    width: 120,
  },
  logoContainerStackRow: {
    flexDirection: 'row',
    height: 120,
    marginLeft: 14,
    marginRight: 100,
    marginTop: 16,
  },
  picker: {
    // borderWidth: 1,
    height: 100,
    marginBottom: 20,
  },
  pickerItem: {
    height: 110,
  },
  receiptDate: {
    color: 'rgba(255,255,255,1)',
    fontSize: 18,
    marginLeft: 2,
    marginTop: 1,
  },
  receiptItemTotal: {
    color: 'rgba(255,255,255,1)',
    fontSize: 18,
    marginLeft: 2,
    marginTop: 1,
  },
  receiptStoreName: {
    color: 'rgba(255,255,255,1)',
    fontSize: 30,
  },
  receiptTotalPrice: {
    color: 'rgba(255,255,255,1)',
    fontSize: 18,
    marginLeft: 2,
    marginTop: 10,
  },
  scrollArea1: {
    // backgroundColor: 'rgba(255,255,255,1)',
    height: 500,
    marginLeft: 14,
    // marginTop: 140,
    width: 380,
  },
  scrollArea2: {
    flexDirection: 'column',
    // height: 600,
    width: 348,
  },
  storeLogo: {
    height: 120,
    left: 0,
    position: 'absolute',
    top: 0,
    width: 120,
  },
  storeNameColumn: {
    marginBottom: 10,
    marginLeft: 16,
    marginTop: 6,
  },
});

export default styles;