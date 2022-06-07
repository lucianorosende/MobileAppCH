import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    
    },
    input: {
      borderBottomWidth: 1, 
      borderBottomColor: "black",
      flex: 0.85
    },
    content:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 70,
        marginHorizontal: 20,
    },
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
    modalContent:{
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
    },
    modalTitleContainer:{
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center"
    },
    modalTitle:{
      fontSize: 18,
      marginVertical: 20,
      marginHorizontal: 20,
    },
    modalText:{
      fontSize: 18,
      fontWeight: "bold",
      marginVertical: 10,
    },

  });