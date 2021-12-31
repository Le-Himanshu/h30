import React, {Component} from "react";
import { Text,View,TouchableOpacity,TextInput,ScrollView,Button } from "react-native";

export default class Feedback extends Component{
render(){
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"centre",backgroundColor:"#86c8fe"}}>
     <ScrollView>
     <Text style={{marginTop: 5,
    marginLeft: 22,
     fontWeight: 'bold',
     fontStyle: "italic",
    fontSize: 30,
    padding : 20,
    color:"#3154ff"}}>Feedback Screen</Text>
     <TextInput
     placeholder={"comment your experience"}
     multiline={true}
     numberOfLines={10}
     placeholderTextColor="black"
     />
     <View>
     <TouchableOpacity style={{ height:40,width:70,backgroundColor: 'orange',marginTop:20 , marginLeft:20 ,justifyContent:"center",alignItems:"centre" }}>
          <Text style={{justifyContent:"center",alignItems:"centre", fontWeight: 'bold',
     fontStyle: "italic",
    fontSize: 20,color:"black"}}>Submit</Text>
        </TouchableOpacity>
     </View>
     </ScrollView>
        </View>
    )
}
}









