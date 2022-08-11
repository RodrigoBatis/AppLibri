import React, { useState } from "react";
import {Text, View, StyleSheet, SafeAreaView, ScrollView} from "react-native";

import Input from "../componentes/input";
import Button from "../componentes/button";
import COLORS from "../const/colors";

const Cadastro = () => {
    const titulo = 'CADASTRO DE LIVRO'

    //Captura de dados com uso de states
    const [inputs, setInputs] = React.useState({
      
      titulo: '',
      descricao: '',
      capa: '',
    });

    //Função que manipula a entrada de dados na State no metodo onChangeText
    const handlerOnChange = (text, input) => {
      setInputs((prevState) => (
        
        console.log(prevState),

        //console.log(input + "  " + text)

        //injeção de dados na State
        {...prevState, [input]:text}


      ))
    }

    //Validação dos dados de cadastros 
    //Função de
    const validate = () => {

      let validade = true;

      if (!inputs.titulo)
      {
        validade = false
        console.log("Titulo em branco")

      }

      if (!inputs.descricao)
      {
        validade = false
        console.log("descrição em branco")

      }

      if (!inputs.capa)
      {
        validade = false
        console.log("capa em branco")

      }

    }

    return(

      // <SafeAreaView style={estilos.Safe}>
        <ScrollView style={estilos.Scroll}>

          <Text style={estilos.TextTitle}>{titulo}</Text>

          <View style={estilos.ViewForm}>
  
            <Input label= "Titulo:" onChangeText={(text) => handlerOnChange(text, 'titulo')}/>

            <Input label= "Descrição:" onChangeText={(text) => handlerOnChange(text, 'descricao')}/>

            <Input label= "Capa:" onChangeText={(text) => handlerOnChange(text, 'capa')}/>

            <Button title= "Cadastrar" onPress={validate}/>

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