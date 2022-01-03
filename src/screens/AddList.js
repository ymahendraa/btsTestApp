import React, { useState } from 'react';
import {View, TextInput, Text, Button, StyleSheet} from 'react-native'

const AddList = ({route}) => {
    const [list, setList] = useState()
    const {token} = route.params;
    return(
        <View style={styles.container}>
            <Text style={{fontSize:40}}>Add List</Text>

            <View>
                <Text style={styles.title}>Tambah list</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(val)=>setList(val)}
                />   
            </View>

            <Button
                title="Add list"
                color="#841584"
            />
        </View>
    )
}

const styles = StyleSheet.create({
   
    title:{
        fontSize:20,
        textAlign:'center'
    }, 
    container:{
        alignItems:'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width:200
      },
})
export default AddList;