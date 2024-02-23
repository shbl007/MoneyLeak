import { TextInput, textInputConfig ,View,Text } from "react-native";

function Input({label,type}){
    return( 
         <View>
        <Text>{label}</Text>
        <TextInput {...textInputConfig} />
    </View>
    );
}

export default Input;