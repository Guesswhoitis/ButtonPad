import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from '../components/Button';
import { TestButton, TestSlider } from '../Global/functions';
import colors from '../Global/colors'
import Slider from '../components/Slider'



const ButtonPad = () => {
  return (
    <View style={style.container}>
      <Button color={colors.RED} func={TestButton} title={'Red'}/>
      <Button color={colors.GREEN} func={TestButton} title={'Green'}/>
      <Button color={colors.BLUE} func={TestButton} title={'Blue'}/>
      <Slider color={colors.BLUE} func={TestSlider} title={'Slider'}/>
      <Button color={colors.BLUE} func={TestButton} title={'Blue'}/>
     
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
