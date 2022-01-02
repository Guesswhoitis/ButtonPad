import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from '../components/Button';
import { Test } from '../Global/functions';
import colors from '../Global/colors'



const ButtonPad = () => {
  return (
    <View style={style.container}>
      <Button color={colors.RED} func={Test} title={'Red'}/>
      <Button color={colors.GREEN} func={Test} title={'Green'}/>
      <Button color={colors.BLUE} func={Test} title={'Blue'}/>
    </View>
  );
};

export default ButtonPad;


const style = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-evenly'
    }
});
