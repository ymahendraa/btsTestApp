import { useNavigation } from '@react-navigation/native';
import React,{useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';


const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation()
    const Login = async ()=> {
        let data = {
            "username" : username,
            "password": password
        }
        data= JSON.stringify(data)
        return fetch('http://94.74.86.174:8080/login', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body:data})
            .then(response => response.json())
            .then(data =>{
                navigation.navigate('ListScreen', {token: data.data.token})
            })
            .catch((error) => {
            console.error(error);
            });
    }


    return(
        <View style={styles.container}>
            <Text style={styles.header}>Login Screen</Text>
            <View>
                <Text style={styles.title}>username</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(val)=>setUsername(val)}
                    
                />   
            </View>
            <View>
                <Text style={styles.title}>password</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(val)=>setPassword(val)}
                    secureTextEntry
                />   
            </View>
            <Button
                title="Login"
                color="#841584"
                onPress={Login}
            />
            
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        fontSize: 40,
    },
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

export default LoginScreen;