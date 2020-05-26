import React from 'react';
import {
  Alert,
  Modal,
  Text,
  TouchableHighlight,
  View,
  TextInput,
} from 'react-native';
import { itemFormStyles, shoppingListStyles } from './shoppingListStyles.ts';

const ItemForm = ({
  addItem,
  setAddItem,
  itemName,
  setItemName,
  quantity,
  setQuantity,
}: any) => {
  return (
    <View style={itemFormStyles.centeredView}>
      <Modal
        animationType="slide"
        transparent
        visible={addItem}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={itemFormStyles.centeredView}>
          <View style={itemFormStyles.modalView}>
            <Text style={itemFormStyles.modalText}>Add Item Information</Text>

            <View style={shoppingListStyles.footer}>
              <TextInput
                style={shoppingListStyles.textInput}
                placeholder="Item"
                placeholderTextColor="white"
                underlineColorAndroid="transparent"
                onChangeText={(text) => setItemName(text)}
              />
              <TextInput
                style={shoppingListStyles.textInput}
                placeholder="Quantity"
                placeholderTextColor="white"
                underlineColorAndroid="transparent"
                onChangeText={(num) => setQuantity(num)}
                keyboardType="numeric"
              />
              {/* <TextInput
                style={shoppingListStyles.placeholder}
                placeholder="Item"
                placeholderTextColor="white"
                underlineColorAndroid="transparent"
              /> */}
            </View>

            <TouchableHighlight
              style={{
                ...itemFormStyles.closeButton,
                backgroundColor: '#2196F3',
              }}
              onPress={() => {
                setAddItem(!addItem);
              }}>
              <Text style={itemFormStyles.textStyle}>X</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ItemForm;
