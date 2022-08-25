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

    //State de erro de preenchimento 
    const [errors, setErrors] = React.useState({});

    //Função handler que configura as mensagens de erro na state
    const handlerErrors = (errorMesage, input) => {
      setErrors((prevState)=>({...prevState, [input]:errorMesage}));
    }

    //Função de Validação
    const validate = () => {

      let validade = true;

      if (!inputs.titulo)
      {
        validade = false

        handlerErrors('Informe o titulo do livro.', 'titulo');

        // console.log("Titulo em branco")

      }

      if (!inputs.descricao)
      {
        validade = false

        handlerErrors('Informe a descrição do livro.', 'descricao');

        // console.log("descrição em branco")

      }

      if (!inputs.capa)
      {
        validade = false

        handlerErrors('Informe a capa do livro.', 'capa');

        // console.log("capa em branco")

      }

      console.log(errors);

    }

    return(

      // <SafeAreaView style={estilos.Safe}>
        <ScrollView style={estilos.Scroll}>

          <Text style={estilos.TextTitle}>{titulo}</Text>

          <View style={estilos.ViewForm}>
  
            <Input  label= "Titulo:" 
                    iconName="book-outline"
                    error={errors.titulo}

                    onFocus={()=>{handlerErrors(null, 'titulo')}}

                    onChangeText={(text) => handlerOnChange(text, 'titulo')}/>

            <Input  label= "Descrição:" 
                    iconName="card-text-outline"
                    error={errors.descricao}

                    onFocus={()=>{handlerErrors(null, 'descricao')}}

                    onChangeText={(text) => handlerOnChange(text, 'descricao')}/>

            <Input  label= "Capa:" 
                    iconName="image-outline"
                    error={errors.capa}

                    onFocus={()=>{handlerErrors(null, 'capa')}}

                    onChangeText={(text) => handlerOnChange(text, 'capa')}/>

            <Button title= "Cadastrar" 
                    onPress={validate}/>

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
    fontWeight:"bold",
    textAlign:"center"
  },
  ViewForm:{
    marginVertical:20,
  }
})


export default Cadastro;