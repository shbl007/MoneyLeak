import { Pressable, View,Text,StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";

function ExpenseItem({description,amount,date}) {
    return <Pressable>
    <View style={styles.expenseItem}>
        <View>
        <Text style={[styles.text,styles.description]}>{description}</Text>
        <Text style={styles.text}>{getFormattedDate(date)}</Text>
        </View>

        <View style={styles.amountContainer}>
        <Text style={styles.amount}>{amount}</Text>
        </View>
   </View>
    </Pressable>
}

export default ExpenseItem;

const styles=StyleSheet.create({
    expenseItem:{
        padding:12,
        marginVertical:8,
        backgroundColor:GlobalStyles.colors.primary500,
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:8,
        elevation:3,
        
    },
    text:{
        color:GlobalStyles.colors.primary50,
    },
    description:{
        fontSize:16,
        marginBottom:4,
        fontWeight:'bold'
    },
    amountContainer:{
        paddingHorizontal:12,
        paddingVertical:4,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:6,
        minWidth:80
    },
    amount:{
        color:GlobalStyles.colors.primary500,
        fontWeight:'bold'
    }
});