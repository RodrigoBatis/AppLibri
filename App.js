import React from "react";
// import {Text, View, StyleSheet, SafeAreaView} from "react-native";

import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// function HomeScreen({navigation}) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function DetailsScreen({navigation}) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to Home"
//         onPress={() => navigation.navigate('Home')}
//       />
//     </View>
//   );
// }

import Cadastro from "./src/telas/cadastro";
import Listagem from "./src/telas/listagem";
import Detalhes from "./src/telas/detalhes";
import Editar   from "./src/telas/Editar";

const Stack = createNativeStackNavigator();

const App = () => {

  return(

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="Details" component={DetailsScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // <Listagem/>
    // <Detalhes/>



    <NavigationContainer>

      <Stack.Navigator>

        {/* <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{title:"CADASTRO DE LIVROS"}}
        /> */}


        <Stack.Screen
          name="Listagem"
          component={Listagem}
          options={{title:"LISTAGEM DE LIVROS"}}
        />

        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{title:"DETALHES DE LIVROS"}}
        />

        <Stack.Screen
          name="Editar"
          component={Editar}
          options={{title:"EDIÇÃO DE LIVROS"}}
        />

      </Stack.Navigator>

    </NavigationContainer>

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

