import React from "react";
// import {Text, View, StyleSheet, SafeAreaView} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Cadastro from "./src/telas/cadastro";
import Listagem from "./src/telas/listagem";
import Detalhes from "./src/telas/detalhes";

const App = () => {

  return(

    // <Listagem/>
    <Detalhes/>



    // <NavigationContainer>

    //   <Stack.Navigator screenListeners={false}>

    //     <Stack.Screen
    //       name="Cadastro"
    //       component={Cadastro}
    //       options={{title:"CADASTRO DE LIVROS"}}
    //     />

    //     <Stack.Screen
    //       name="Listagem"
    //       component={Listagem}
    //       options={{title:"LISTAGEM DE LIVROS"}}
    //     />

    //   </Stack.Navigator>

    // </NavigationContainer>

  );

}

export default App;

// const estilo = StyleSheet.create({
//   container:{

//   },
//   titulo:{
//     width: "100%",
//     backgroundColor: "#F00",
//     textAlign:"center",
//     fontSize:16,
//     color:"#FFF",
//     fontWeight: "bold",
//     padding: 15,
//   },
// });

