import { View ,StyleSheet} from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of balls ',
        amount : 45,
        date: new Date('2023-11-06')
    },
    {
        id: 'e2',
        description: 'A pair of socks ',
        amount : 75,
        date: new Date('2022-11-06')
    },
    {
        id: 'e3',
        description: 'A pair of hooks ',
        amount : 65,
        date: new Date('2023-02-23')
    },
    {
        id: 'e4',
        description: 'A bucket ',
        amount : 98,
        date: new Date('2020-01-26')
    },
    {
        id: 'e5',
        description: 'A Coffe Mug',
        amount : 750,
        date: new Date('2026-10-06')
    },
];

function ExpensesOutput({expenses ,expensesPeriod}){
    return(
         <View style={styles.container }>
        <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
        <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
 );
}
export default ExpensesOutput;

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor: GlobalStyles.colors.primary700
    }
});