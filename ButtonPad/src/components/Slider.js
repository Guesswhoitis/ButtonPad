import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import fs from 'react-native-fs'

function updateValue(id,value){
    var saveFile = fs.DocumentDirectoryPath + '/save.json';
    var saveJson = fs.readFile(saveFile)
    .then((success) => {
        let jsonArr = JSON.parse(success);

        for(var i=0; i<jsonArr.length; i++){
            if(jsonArr[i].key == id){
                jsonArr[i].value = value;
            }
        }
        
        fs.writeFile(saveFile, JSON.stringify(jsonArr));
    })
    .catch((err)=>{
        console.log(err);
    });
    
}



const Slide = ({id, color, func, title, originalValue }) => {

    const [value, setValue] = useState(originalValue);

   
    

    return (
        <View style={[style.container, { borderColor: color }]}>
            <View style={style.slider}>
                <Slider
                    value={value}
                    // onValueChange={value => setValue(value)}
                    onSlidingComplete={value => {
                        setValue(value);
                        func(value);
                        updateValue(id,value);
                    }}
                    maximumValue={100}
                    minimumValue={0}
                    maximumTrackTintColor='#b3b3b3'
                    minimumTrackTintColor='#3f3f3f'
                />
                <Text style={style.text}>{title}</Text>
            </View>

        </View>
    );
};

export default Slide;


const style = StyleSheet.create({
    container: {
        width: 225,
        height: 100,
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 5,
    },
    slider: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    text: {
        textAlign: 'center'
    }
});
