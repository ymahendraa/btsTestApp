import React,{useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const RegisterScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigation = useNavigation();

    const Register = async ()=> {
        let data = {
            "email" : email,
            "username" : username,
            "password": password
        }
        data= JSON.stringify(data)
        return fetch('http://94.74.86.174:8080/register', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body:data})
            .then(response => {
                if(response.status == 200){
                    navigation.navigate('LoginScreen')
                }
                console.log(response.status)
            })
            .catch((error) => {
            console.error(error);
            });
    }

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Register Screen</Text>
            <View>
                <Text style={styles.title}>email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(val)=>setEmail(val)}
                />   
            </View>
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
                    
                />   
            </View>
            <View style={styles.button}>
                <Button
                    title="Register"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                    onPress={Register}
                />    
            </View>
            
            <Button
                title="Login screen"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
                onPress={() => navigation.navigate("LoginScreen")}
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
    button:{
        marginBottom:10
    }
})

export default RegisterScreen;