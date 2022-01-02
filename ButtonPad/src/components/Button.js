import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';



const Button = ({color,func,title}) => {
  return (
    <TouchableOpacity onPress={func} style={[style.container,{borderColor:color}]}>
      <Text>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;


const style = StyleSheet.create({
    container:{
        width:100,
        height:100,
        borderWidth:1,
        borderRadius:10,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:5,
    },
});
