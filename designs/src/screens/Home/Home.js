import { FlatList, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import styles from '../../constants/Style/styles'
import dummydata from './DummyData'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import colors from '../../constants/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ButtonComp from '../../Components/ButtonComp'
const Home = () => {

  const RenderItem = ({ item }) => {
    console.log(item.item.id)
    let data = item.item;
    return (
      <View style={styless.flatstylye}>
        <View style={styless.contentbox}>
          <View>
            <Text style={{ fontSize: moderateScale(12), color: 'black' }}>{data?.date}</Text>
            <Text style={{ fontSize: moderateScale(12), fontWeight: "bold", color: 'black', marginTop: moderateScale(8) }}>{data?.name}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <MaterialCommunityIcons name='map-marker' size={10} color={'black'} />
              <Text style={{ fontSize: moderateScale(12), color: 'black' }}>{data?.address}</Text>
            </View>
          </View>
          <Image style={styless.Imagestyle} source={{ uri: 'https://thumbs.dreamstime.com/b/businessman-avatar-image-beard-hairstyle-male-profile-vector-illustration-178545831.jpg' }} />
        </View>
        <View style={{ ...styless.contentbox, marginVertical: moderateVerticalScale(8) }}>
          <Text style={styless.textstyles}>Price</Text>
          <Text style={styless.textstyles}>{data.price}</Text>
        </View>

        <View style={styless.contentbox}>
          <View style={{ flex: 1 }}>
            <ButtonComp btntext={'Reject'} btnstyle={{ backgroundColor: '#fff', borderWidth: 1, borderColor: colors.theamecolor }}
              btntextstyle={{ color: colors.theamecolor, fontWeight: '400' }} />

          </View>
          <View style={{ flex: 1 }}>
            <ButtonComp btntext={'Accept'}
              btntextstyle={{ color: '#fff', fontWeight: '400' }} />
          </View>

        </View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styless.headerstyle}>
          <Text />
          <Text style={styless.Headertext}>Nanny Line</Text>
          <MaterialCommunityIcons name='bell-outline' size={25} color={colors.theamecolor} />
        </View>
        <View style={{
          marginTop: moderateVerticalScale(14),
          marginHorizontal: moderateScale(16),
          flex: 1
        }}>
          <FlatList
            data={dummydata}
            renderItem={(item) => <RenderItem item={item} />}
            ItemSeparatorComponent={() => <View style={{ marginBottom: moderateVerticalScale(16) }}></View>}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Home

const styless = StyleSheet.create({
  headerstyle: {
    backgroundColor: '#fff',
    paddingVertical: moderateScale(24),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: moderateScale(16),
    padding: moderateScale(16),

  },
  Headertext: {
    fontWeight: 'bold',
    fontSize: scale(18),
    textTransform: 'uppercase',
    color: colors.theamecolor
  },
  flatstylye: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    backgroundColor: '#fff',
    padding: moderateScale(16),
    borderRadius: moderateScale(4)

  },
  Imagestyle: {
    width: moderateScale(64),
    height: moderateScale(64),
    borderRadius: moderateScale(32)
  },
  contentbox: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }
  ,
  textstyles: { fontSize: moderateScale(12), textTransform: 'uppercase', color: 'black', marginTop: moderateScale(8) }
})
