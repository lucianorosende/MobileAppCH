import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    itemList:{
        fontSize: 14,
      },
      containerItemList:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
        marginHorizontal: 20,
        
      },
      deleteButton:{
        backgroundColor: "#6B4E4E",
        paddingVertical: 10,
        paddingHorizontal: 15,
      },
      deleteButtonText:{
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold"
      },
});