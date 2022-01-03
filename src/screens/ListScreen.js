import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Button, FlatList, Text, View } from "react-native";


const ListScreen = ({route}) => {
    const [data, setData] = useState([]);
    const {token} = route.params
    const navigation = useNavigation()

    const getList = () =>{
        const myHeaders = new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        });
        
        return fetch('http://94.74.86.174:8080/checklist', {
          method: 'GET',
          headers: myHeaders,
        })
        .then(response => response.json())
        .then(data => setData(data))
        .catch((error) => {
            console.error(error);
        });
    }

    useEffect(()=> {
        getList()
    },[])

    return(
        <View>
            <Text style={{fontSize:40}}>List Screen</Text>
            {data == []? 
            <FlatList 
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={() => {
                    return(
                        <Text>{item.name}</Text>
                    )
                }}
            /> :
            <Text>Tidak ada list</Text>   
        }
        <Button 
            title="Tambah list"
            onPress={() => navigation.navigate("AddListScreen", {token: token})}    
        />
        </View>
    )
}

export default ListScreen;