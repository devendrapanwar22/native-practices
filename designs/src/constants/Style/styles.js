import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale, scale } from "react-native-size-matters";
import colors from "../Colors";


const styles = StyleSheet.create({
        // Container styles
        container: {
          flex: 1,
        },
        
        // Image styles
        imgStyle: {
          height: moderateScale(200),
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
        
        // Text styles
        textStyle: {
          fontSize: scale(32),
          color: '#fff',
          fontWeight: 'bold',
        },
        
        // Input container styles
        inpurcontainer: {
          borderBottomColor: 'rgba(0,0,0,.08)',
          borderBottomWidth: 1,
          borderRadius: moderateScale(4),
        },
        
        // Common input styles
        inputcommon: {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red',
        },
        
        // Main container styles
        mainstyle: {
          paddingHorizontal: moderateScale(24),
          paddingVertical: moderateVerticalScale(44),
        },
        
        // Label text styles
        LableTextStyle: {
          fontSize: scale(14),
          color: 'rgba(0,0,0,0.5)',
        },
        
        // Button styles
        btnStyle: {
          height: moderateScale(48),
          width: '80%',
          backgroundColor: colors.theamecolor,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
        },
        btntextstyle: {
          fontSize: scale(18),
          fontWeight: 'bold',
          textTransform: 'uppercase',
          color: '#FFF',
        },
        
        // Text styles
        settextstyle: {
          fontSize: scale(12),
          color: '#000',
          fontWeight: 'bold',
          textAlign: 'center',
        },
        settextstylenormal: {
          fontSize: scale(12),
          color: '#000',
          fontWeight: '400',
          textAlign: 'center',
        },
        
        // Heading text styles
        headingtext: {
          fontSize: scale(32),
          color: '#000',
          fontWeight: '400',
          textAlign: 'center',
          marginTop: moderateScale(54),
        },
      }
      
)
export default styles;