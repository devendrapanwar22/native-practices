import { View, Text, SafeAreaView, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useGetAllProductsQuery } from './Redux/service'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, incrementQuantity, removeFromCart } from './Redux/cartReducer'
import { configureStore } from '@reduxjs/toolkit'


const Products = () => {


  const { data, isLoading } = useGetAllProductsQuery();

  const cart = useSelector((state) => state.cart.cart);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {
        isLoading ? <Text style={{ flex: 1, textAlign: 'center', fontWeight: '600' }}>Loding data....</Text>
          :
          <View style={{ flex: 1, margin: 10 }}>
            <FlatList
              data={data}
              renderItem={({ item }) =>
                <CardData item={{ item }} />
              }
              keyExtractor={item => item.id}
            />
          </View>
      }

    </SafeAreaView >
  )
}

const CardData = (item) => {

  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  let data = item.item.item;

  cart.forEach((product) => {
    if (data.id === product.id) {
      data = product;
      console.log('added', product);
    }
  });


  const additem = (item) => {

    dispatch(addToCart(item));
  }

  const deletefromCart = (item) => {
    dispatch(removeFromCart(item));
  }
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.cardview}>

        <View style={styles.imagecontaine}>
          <Image style={styles.imagestyle} source={{ uri: data.image }} />
        </View>

        <View style={styles.textbox}>
          <Text style={styles.textstyle}>category:{data.category}</Text>
          <Text style={styles.textstyle}>Price: {data.price}$</Text>
          <Text style={styles.textstyle}>tittle:{data.title}</Text>

          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
            {
              data.quantity > 0 ? <TouchableOpacity onPress={() => deletefromCart(item)} style={styles.button}>
                <Text>remove</Text>
              </TouchableOpacity> : <TouchableOpacity onPress={() => { additem(item) }} style={styles.button}>
                <Text>Buy Now</Text>
              </TouchableOpacity>
            }


          </View>

        </View>
      </View>
    </View>
  )
}

export default Products

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardview: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 200,
    // backgroundColor:'green'
    borderRadius: 10,
    borderWidth: 2, borderColor: 'black',
    marginTop: 7,
    marginBottom: 5
  },
  textstyle: {
    fontSize: 12,
    fontWeight: '500',
    marginLeft: 5
  },
  imagestyle: {
    width: '80%',
    height: 150,
    borderRadius: 10,
    backgroundColor: 'green'
  },
  textbox: {
    backgroundColor: '#fff',
    flex: 1,
    height: 150,
    justifyContent: 'center',
    borderRadius: 10
  },
  imagecontaine: {
    flex: 1, justifyContent: 'center',
    // backgroundColor: 'green',
    alignItems: 'center',
    borderRadius: 10
  },
  button: {
    height: 30,
    backgroundColor: 'green',
    width: '70%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalbox: {
    height: 70,

    width: '100%', justifyContent: 'center',
    alignItems: 'center', borderRadius: 10,
    backgroundColor: '#fff'
  },
  increment: {
    height: 30,
    backgroundColor: 'green',
    width: '30%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }

});