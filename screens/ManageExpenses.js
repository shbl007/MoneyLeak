import { Text } from "react-native";

function ManageExpense({route}) {

const editedExpenseId = route.params?.expenseId;
const isEditing =  !!editedExpenseId;

return <Text> ManageExpenses Screen</Text>;
}

export default ManageExpense;