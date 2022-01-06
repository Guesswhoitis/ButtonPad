import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const DropDownElement = ({ title, setValue, field, setOpen }) => {
    return (
        <View style={style.drop_down_element}>
            <TouchableOpacity onPress={() => {
                setValue(field, title);
                setOpen(false)
                }}>
                <Text style={style.drop_down_element_text}>{title}</Text>
            </TouchableOpacity>
        </View>

    );
}



const DropDownModal = ({ open, values, setValue, field, setOpen }) => {
    if (!open) {
        return (
            <>
            </>
        );
    }
    return (
        <View style={style.drop_down}>
            {values.map((element) => {
                return <DropDownElement key={field+element} title={element} setValue={setValue} field={field} setOpen={setOpen} />
            })}
        </View>
    );
}




const DropDown = ({ field, values, setValue, value }) => {
    const [open, setOpen] = useState(false);
    return (
        <View>
            <View style={style.container}>
                <Text style={style.Text}>
                    {value}
                </Text>
                <TouchableOpacity style={style.button} onPress={() => setOpen(!open)}>
                    <Text>
                        {">"}
                    </Text>
                </TouchableOpacity>
            </View>
            <DropDownModal open={open} values={values} setValue={setValue} field={field} setOpen={setOpen} />
        </View>
    );
};

export default DropDown;


const style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        width: "100%",
        borderWidth: 1,
        borderColor: 'black',
        justifyContent:'space-between'
    },
    button: {
        borderWidth: 1,
        borderColor: 'black',
    },
    Text: {
    },
    drop_down: {
        position: 'absolute',
        top: '100%',
        width:'100%'
    },
    drop_down_element: {
        backgroundColor: 'rgb(0,0,0)',
        width: "100%",
        zIndex: 100

    },
    drop_down_element_text: {
        color: 'white'
    }
})