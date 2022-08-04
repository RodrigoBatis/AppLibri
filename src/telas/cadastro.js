import React from "react";
import {Text, View, StyleSheet, SafeAreaView, ScrollView} from "react-native";

import Input from "../componentes/input";
import Button from "../componentes/button";
import COLORS from "../const/colors";

const Cadastro = () => {
   const titulo = 'CADASTRO DE LIVRO'

   return(

      // <SafeAreaView style={estilos.Safe}>
        <ScrollView style={estilos.Scroll}>

          <Text style={estilos.TextTitle}>{titulo}</Text>

          <View style={estilos.ViewForm}>
  
            <Input label= "Titulo"/>
            <Input label= "Descrição"/>
            <Input label= "Capa"/>

            <Button title= "Cadastrar"/>

          </View>
        </ScrollView>
      // </SafeAreaView>

    );
}

const estilos = StyleSheet.create({

  Safe:{
    flex:1,
    backgroundColor:COLORS.white
  },
  Scroll:{
    paddingTop:50,
    paddingHorizontal:20,
  },
  TextTitle:{
    color:COLORS.black,
    fontSize:25,
    fontWeight:"bold"
  },
  ViewForm:{
    marginVertical:20,
  }
})


export default Cadastro;