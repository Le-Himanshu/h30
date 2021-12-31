import React, {Component} from "react";
import { Text,View,TouchableOpacity,TextInput,StyleSheet,Button,ScrollView} from "react-native";

export default class SOS extends Component{
render(){
    return(
        
        <View style={{flex:1,justifyContent:"center",alignItems:"centre",backgroundColor : 'red'}}>
       <ScrollView>    
     <Text style={{ marginTop: 5,
    marginLeft: 22,
     fontWeight: 'bold',
     fontStyle: "italic",
    fontSize: 30,
    padding : 20,}}>SOS Screen</Text>   
     <View style = {{flex:1,justifyContent:"center",alignItems:"centre"}}> 
     <TouchableOpacity style={{  height:70,width:100,backgroundColor: 'purple',marginTop:100 , marginLeft:100 , justifyContent:"center",alignItems:"centre" }}>
          <Text style={{justifyContent:"center",alignItems:"centre", fontWeight: 'bold',
     fontStyle: "italic",
    fontSize: 20,}}>Accident</Text>
        </TouchableOpacity>

   </View>
   <View style = {{flex:1,justifyContent:"center",alignItems:"centre" }}> 
   <TouchableOpacity style={{  height:70,width:200,backgroundColor: 'blue',marginTop:100 , marginLeft:100 ,justifyContent:"center",alignItems:"centre" }}>
          <Text style={{justifyContent:"center",alignItems:"centre", fontWeight: 'bold',
     fontStyle: "italic",
    fontSize: 20,}}>Vehicle Trouble</Text>
        </TouchableOpacity>

</View>
<View style = {{flex:1,justifyContent:"center",alignItems:"centre" }}> 
<TouchableOpacity style={{ height:70,width:200,backgroundColor: 'yellow',marginTop:100 , marginLeft:100 ,justifyContent:"center",alignItems:"centre" }}>
          <Text style={{justifyContent:"center",alignItems:"centre", fontWeight: 'bold',
     fontStyle: "italic",
    fontSize: 20,}}>Unsafe Situation</Text>
        </TouchableOpacity>

   </View>
   <View style = {{flex:1,justifyContent:"center",alignItems:"centre" }}> 
   
   </View> 
   </ScrollView> 
    </View>
     
    )
}
}
