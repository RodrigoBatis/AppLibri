import React from "react";
import {Text, View, StyleSheet, SafeAreaView} from "react-native";
import Login from "./src/telas/login";
import Cadastro from "./src/telas/cadastro";

const App = () => {
  
  //const nome = 'SENAI -- JANDIRA'

  return(
    <SafeAreaView>

      <Cadastro/>

    </SafeAreaView>
  );

}

const estilo = StyleSheet.create({
  container:{

  },
  titulo:{
    width: "100%",
    backgroundColor: "#F00",
    textAlign:"center",
    fontSize:16,
    color:"#FFF",
    fontWeight: "bold",
    padding: 15,
  },
});

export default App;