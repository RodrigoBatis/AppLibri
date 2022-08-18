import React from "react";
import { View, Text, TextInput, StyleSheet} from "react-native";
import COLORS from "../const/colors"

const Input = ({label, error, onFocus=()=>{}, ...props}) => {

   return (

      <View style ={estilos.formContainer}>
         <Text style ={estilos.inputLabel}>
            {label}
         </Text>

         <View style={[estilos.InputContainer, {borderColor: error ?  COLORS.red : COLORS.darkBlue }]}>
            <TextInput
               style={estilos.TextInput}
               autoCorrect={false}
               onFocus={()=>{onFocus()}}
               {...props}

            />
         </View>
         <Text style={estilos.textError}>{error}</Text>

      </View>

   )

}

const estilos = StyleSheet.create({

   formContainer:{
      marginBottom:20,

   },
   inputLabel:{
      marginVertical:5,
      fontSize:15,
      color:COLORS.gray,
      
   },
   textError:{
      color: COLORS.red,
      fontSize: 15,
      fontStyle: "italic",
      textAlign: "center",
   },
   InputContainer:{
      height:55,
      backgroundColor:COLORS.light,
      flexDirection:"row",
      paddingHorizontal:15,
      borderWidth:0.5,
      alignItems:"center",
      borderRadius:25,
      borderColor: COLORS.black,
      borderStyle:"dotted",
      borderWidth: 3,
   },
   TextInput:{
      color:COLORS.darkBlue,
      flex:1,
   },
});

export default Input;