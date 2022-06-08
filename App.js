import React, { useState } from 'react';
import { Button, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { styles } from "./styles"
import CustomModal from "./src/components/modal/index"
import ListItem from "./src/components/list-item/index"
import Input from "./src/components/input/index"

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModal] = useState(false);

  const handleText = (text) => {
    setText(text)
  }

  const addItem = () => {
    if(text !== ""){
      setList((currentList) => [
        ...currentList, {id: Math.random(), value: text}
      ]);
      setText("")
    } 
  }

  const renderItem = ({item}) => (
    <ListItem item={item} onHandleModal={onHandleModal}/>
  )

  const keyExtractor = (item) => item.id.toString();

  const onHandleDelete = id => {

    setList((currentList) => currentList.filter((item) => item.id !== id))
    setItemSelected({});
    setModal(!modalVisible)
  };

  const onHandleModal = id => {
    setItemSelected(list.filter(item => item.id === id)[0])
    setModal(!modalVisible)
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}> 
      <Input 
      placeholder='new task'
      placeholderTextColor={"#000"}
      style={styles.input}
      value={text}
      onChangeText={(text) => handleText(text)}
      />
      <Button title='add' onPress={() => addItem()}/>
      </View>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.containerList} 
      />
      <CustomModal
      animationtype='slide'
      visible={modalVisible}
      onRequestClose={() => null}
      >
      <View style={styles.modalContent}>
        <View style={styles.modalTitleContainer}>
          <Text style={styles.modalTitle}>Delete Item</Text>
          <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => setModal(!modalVisible)}
          >
          <Text style={styles.deleteButtonText}>X</Text>
          </TouchableOpacity>
         
        </View>
        <Text style={styles.modalText}>Are you Sure?</Text>
        <Button title="Remove" onPress={() => onHandleDelete(itemSelected.id)} color="#6B4E4E"></Button>
      </View>
        
      </CustomModal>
      
    </View>
  );
}


