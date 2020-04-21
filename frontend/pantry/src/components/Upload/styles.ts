import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
`;

export const Picture = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 89%;
  width: 95%;
  margin-left: 2%;
`;

export const ProgressBar = styled.View`
  background-color: ${(props) => (props.bar === 100 ? 'green' : 'red')};
  height: 3px;
  width: ${(props) => props.bar}%;
  align-items: flex-start;
`;

export const styling = StyleSheet.create({
  button: {
    alignSelf: 'center',
    backgroundColor: '#98FB98',
    borderRadius: 43,
    height: 363,
    marginTop: 90,
    overflow: 'visible',
    // shadowOpacity: 1,
    width: 310,
  },
  icon: {
    alignSelf: 'center',
    color: 'rgba(128,128,128,1)',
    fontSize: 60,
    height: 60,
    marginTop: 143,
    width: 51,
  },
  uploadYourReceipt: {
    color: '#121212',
    fontSize: 30,
    justifyContent: 'space-between',
    letterSpacing: 0,
    lineHeight: 55,
    // marginTop: -274,
    textAlign: 'center',
  },
});