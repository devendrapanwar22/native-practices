import { View, Text, SafeAreaView, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeFromCart,gettotalammount } from './Redux/cartReducer';

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);

  const total =cart.reduce((prevValue, currentValue) => {
    return prevValue + currentValue.price*currentValue.quantity;
  }, 0)

  const quantitys = cart.reduce((prevValue, currentValue) => {
    return prevValue + currentValue.quantity;
  }, 0)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartItems item={{ item }} />}
        keyExtractor={item => item.id}
      />
     <View style={{height: 90, justifyContent: 'center', alignItems: 'center',borderRadius:10,marginBottom:10 }}>
     <View style={{backgroundColor:'#fff',flex:1, flexDirection: 'row', width:'95%',justifyContent: 'space-around', alignItems: 'center',borderRadius:10,marginBottom:10 ,borderColor:'#000',borderWidth:2}}>
       <Text style={styles.textstyle}>Total :{total.toFixed(2)}</Text>
        <Text style={styles.textstyle}>no of items:{cart.length}</Text>
        <Text style={styles.textstyle}> quantity:{quantitys}</Text>
      </View>
     </View>
    </SafeAreaView>
  )
}

const CartItems = (item) => {

  let data = item.item.item;

  const dispach = useDispatch();

   const deletefromCart = (item) => {
    dispach(removeFromCart(item));
  }
  const increaseqty = (item) => {
    dispach(incrementQuantity(item));
  }

  const decreasqty = (item) => {
    dispach(decrementQuantity(item));
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 10 }}>
      <View style={styles.cardview}>

        <View style={styles.imagecontaine}>
          <Image style={styles.imagestyle} source={{ uri: data.image }} />
        </View>

        <View style={styles.textbox}>
          <Text style={styles.textstyle}>category:{data.category}</Text>
          <Text style={styles.textstyle}>Price:{data.price}$</Text>
          <Text style={styles.textstyle}>title:{data.title}</Text>
          <Text style={styles.textstyle}>quantity:{data.quantity}</Text>


          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
            {
              data.quantity > 0 ?
                <View style={{ flexDirection: 'row', width: "70%", justifyContent: 'space-around' }}>
                  <TouchableOpacity onPress={() => increaseqty(item)} style={styles.increment}>
                    <Text>+</Text>
                  </TouchableOpacity>
                    <Text>{data.quantity}</Text>
                  <TouchableOpacity onPress={() => decreasqty(item)} style={styles.increment}>
                    <Text>-</Text>
                  </TouchableOpacity>
                </View>
                :
                <TouchableOpacity onPress={() => deletefromCart(item)} style={styles.button}>
                  <Text>delete</Text>
                </TouchableOpacity>
            }


          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
export default Cart

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