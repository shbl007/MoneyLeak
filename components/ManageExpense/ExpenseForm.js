import { View } from "react-native";
import Input from "./input";

function ExpenseForm(){
    function amountChangeHandler(){}

    return <View>
        <Input label="Amount" textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: amountChangeHandler,
        }}/>
        <Input label="Date" textInputConfig={{
            placeholder : 'YYYY-MM-DD',
            maxLength : 10,
            onChangeText:() => {}
        }}/>
        <Input label="Description" textInputConfig={{
            multiline: true,
            
        }}/>
    </View>
}

export default ExpenseForm;