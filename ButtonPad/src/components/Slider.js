import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';



const Button = ({ color, func, title }) => {

    const [value, setValue] = useState(1);

    func(value);
    
    return (
        <View style={[style.container,{borderColor:color}]}>
            <View style={style.slider}>
                <Slider
                    value={value}
                    onValueChange={value => setValue(value)}
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

export default Button;


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
    text:{
        textAlign:'center'
    }
});
