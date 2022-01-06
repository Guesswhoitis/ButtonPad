import React from "react";

import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import fs from 'react-native-fs'
import { Formik } from 'formik';
import DropDown from "../components/DropDown";


function save(toAdd, navigation) {

    var saveFile = fs.DocumentDirectoryPath + '/save.json';


    var saveJson = fs.readFile(saveFile)
        .then((success) => {
            let jsonObj = JSON.parse(success);
            toAdd["value"] = 50;
            toAdd["key"] = jsonObj.length;
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
    const types = ["button", "slider"]
    const functions = ["TestButton", "TestSlider"]
    const colors = ["RED", "BLUE", "GREEN"]


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
                save(toAdd, navigation);
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, setFieldValue, values }) => (
                <View style={style.container}>
                    <Button onPress={handleSubmit} title="Submit" style={style.submit_button} />
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
                        <Text style={style.text}>Type:</Text>
                        <View style={style.drop_down}>
                            <DropDown field={'type'} values={types} setValue={setFieldValue} value={values.type} />
                        </View>

                    </View>
                    <View style={style.row}>
                        <Text style={style.text}>Func:</Text>
                        <View style={style.drop_down}>
                            <DropDown field={'func'} values={functions} setValue={setFieldValue} value={values.func} />
                        </View>
                    </View>
                    <View style={style.row}>
                        <Text style={style.text}>Color:</Text>
                        <View style={style.drop_down}>
                            <DropDown field={'color'} values={colors} setValue={setFieldValue} value={values.color} />
                        </View>
                    </View>


                </View>
            )}

        </Formik>
    );
}

export default Add;

const style = StyleSheet.create({
    container: {
        height: "50%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
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
        padding: 0
    },
    text: {
        width: '50%'
    },
    drop_down: {
        width: '50%',
    },
    submit_button: {
        bottom: 0
    }
})