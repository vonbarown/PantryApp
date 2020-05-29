import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  RefreshControl,
} from 'react-native';
import Product from './Product.tsx';
import { client } from '../../../proxy';
import { shoppingListStyles } from './shoppingListStyles.ts';
import ItemForm from './ItemForm.tsx';
import EmptyShoppingList from './emptyShoppinglist.tsx';

import { client } from '../../../proxy';

const ShoppingList = ({ navigation }: any) => {
  //   const navigateToImg = () => navigation.navigate('Pantry');
  //   const navigateToReceipts = () => navigation.navigate('Receipts');
  const [products, setProducts] = useState([]);
  const [productInfo, setProductInfo] = useState('');
  const fetchShoppingList = async () => {
    try {
      const {
        data: { payload },
      } = await client.get(`/shoppingList/`);
      console.log('list', payload);
      setProducts(payload);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchShoppingList();
  }, []);

  console.log('info', productInfo);

  return (
    <KeyboardAvoidingView style={shoppingListStyles.container}>
      <ScrollView
        style={shoppingListStyles.scrollContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {products.length ? (
          products.map((item: any) => {
            return (
              <Product
                item={item}
                key={item.id}
                keyVal={item.id}
                setItemToComplete={setItemToComplete}
              />
            );
          })
        ) : (
          <EmptyShoppingList />
        )}

        {addItem ? (
          <ItemForm
            addItem={addItem}
            setAddItem={setAddItem}
            setItemName={setItemName}
            setQuantity={setQuantity}
            handleSubmit={handleSubmit}
          />
        ) : null}
      </ScrollView>
      <View style={styles.footer}>
        <TextInput
          style={styles.textInput}
          placeholder="Item"
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          onChangeText={(text) => setProductInfo(text)}
          value={productInfo}
        />
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text>+</Text>
      </TouchableOpacity>
      {/* </SafeAreaView> */}
    </KeyboardAvoidingView>
  );
};

export default ShoppingList;

const styles = StyleSheet.create({
  addButton: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: 'orange',
    borderRadius: 70 / 2,
    bottom: '15%',
    height: 70,
    justifyContent: 'center',
    position: 'absolute',
    right: '5%',
    shadowColor: '#F02A4B',
    shadowRadius: 10,
    width: 70,
    zIndex: 30,
  },

  container: {
    flex: 1,
  },
  footer: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    zIndex: 20,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  textInput: {
    alignSelf: 'stretch',
    backgroundColor: '#252525',
    borderTopColor: '#ededed',
    borderTopWidth: 2,
    color: '#fff',
    padding: 20,
  },
});
