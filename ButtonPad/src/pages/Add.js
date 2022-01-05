import React from "react";

import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import fs from 'react-native-fs'
import { Formik } from 'formik';


function save(toAdd,navigation) {

    var saveFile = fs.DocumentDirectoryPath + '/save.json';


    var saveJson = fs.readFile(saveFile)
        .then((success) => {
            let jsonObj = JSON.parse(success);
            jsonObj.push(toAdd);
            fs.writeFile(saveFile, JSON.stringify(jsonObj));
            navigation.navigate("ButtonPad");
        })
        .catch((err) => {
            console.log('File Fail');
            fs.writeFile(saveFile, '[]', 'utf8').then().catch();
        });
}

const Add = ({ navigation }) => {
    return (
        <Formik
            initialValues={{
                type: '',
                title: '',
                func: '',
                color: ''
            }}
            onSubmit={values => {
                let toAdd = values;
                toAdd["value"] = -1;
                save(toAdd, navigation);
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <View style={style.row}>
                        <Text style={style.text}>Type:</Text>
                        <TextInput
                            onChangeText={handleChange('type')}
                            onBlur={handleBlur('type')}
                            value={values.type}
                            style={style.text_input}
                        />
                    </View>
                    <View style={style.row}>
                        <Text style={style.text}>Title:</Text>
                        <TextInput
                            onChangeText={handleChange('title')}
                            onBlur={handleBlur('title')}
                            value={values.title}
                            style={style.text_input}
                        />
                    </View>
                    <View style={style.row}>
                        <Text style={style.text}>Func:</Text>
                        <TextInput
                            onChangeText={handleChange('func')}
                            onBlur={handleBlur('func')}
                            value={values.func}
                            style={style.text_input}
                        />
                    </View>
                    <View style={style.row}>
                        <Text style={style.text}>Color:</Text>
                        <TextInput
                            onChangeText={handleChange('color')}
                            onBlur={handleBlur('color')}
                            value={values.color}
                            style={style.text_input}
                        />
                    </View>

                    <Button onPress={handleSubmit} title="Submit" />
                </View>
            )}
        </Formik>
    );
}

export default Add;

const style = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    text_input: {
        width: '50%',
        borderColor: 'black',
        borderWidth: 1,

    },
    text: {
        width: '50%'
    }
})