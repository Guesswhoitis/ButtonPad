import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Button from '../components/Button';
import { TestButton, TestSlider } from '../Global/Functions';

import Slider from '../components/Slider'
import fs from 'react-native-fs'
import {
  useIsFocused
} from '@react-navigation/native'
import Colors from '../Global/Colors';

const functions = { TestButton, TestSlider }
const colors = {"RED":Colors.RED,"BLUE":Colors.BLUE,"GREEN":Colors.GREEN};

const ButtonPad = ({ navigation }) => {

  

  const isFocused = useIsFocused()
  var saveFile = fs.DocumentDirectoryPath + '/save.json';
  let [saveObj, setSaveObj] = useState([]);

   useEffect(() => {
    var saveJson = fs.readFile(saveFile)
    .then((success) => {
      console.log(success);
      if (JSON.stringify(saveObj) !== JSON.stringify(JSON.parse(success))) {
        setSaveObj(JSON.parse(success));
      }
    })
    .catch((err) => {
      console.log('File fail');
      //fs.unlink(saveFile); //In case of mess up
      fs.writeFile(saveFile, '[]', 'utf8').then().catch();
    });
     
   }, [isFocused])

  return (
    <View style={style.container}>
      <TouchableOpacity style={style.add_button} onPress={() => navigation.navigate('Add')}>
        <Text>
          add
        </Text>
      </TouchableOpacity>
      <View style={style.button_container}>

        {saveObj.map((element) => {

          if (element.type === "button") {
            return <Button key={element.key} color={colors[element.color]} func={functions[element.func]} title={element.title} />
          }

          if (element.type === "slider") {
            return <Slider color={colors[element.color]} func={functions[element.func]} title={element.Slider} originalValue={50} />
          }
        })}
      </View>
    </View>

  );
};

export default ButtonPad;


const style = StyleSheet.create({
  container: {

  },
  add_button: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray'

  },
  button_container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  }
});
