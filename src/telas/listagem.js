import React, {useState, useEffect} from "react";
import {Text, View, StyleSheet, SafeAreaView, ScrollView, Image} from "react-native";

import COLORS from "../const/colors";
import apiLivraria from "../service/apiLivraria";
import capaLivro150 from "../assets/livros/lor150.png"

const listagem = () => 
{
   const[livros, setLivros]= useState({});

   useEffect(
      apiLivraria.get('/listarLivros')
   );

   return(
      <ScrollView>
         <View style={estilos.container}>
            <View style={estilos.post}>
               <Image style={estilos.imagem} source={capaLivro150}/>
               <Text style={estilos.titulo}>O Senhor dos Aneis</Text>
            </View>
         </View>
      </ScrollView>
   );
}

const estilos = StyleSheet.create({
   container:{
      alignItems: 'center'
   },
   post:{
      width: '95%',
      alignItems: 'center',
      backgroundColor:'#ccc',
      marginVertical:5,
      borderRadius:5,
      elevation:10,
   },
   imagem:{
      borderRadius:5,
      marginVertical:16,
      marginLeft:16,

   },
   titulo:{
      textAlign:'center',
      fontSize:20,
      fontWeight:'bold',
   }
});
export default listagem;