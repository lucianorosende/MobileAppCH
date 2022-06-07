import React, { useState } from 'react';
import { Button, Text, TextInput, View, FlatList, Modal, TouchableOpacity } from 'react-native';
import { styles } from "./styles"

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
    <View key={item.id} style={styles.containerItemList}>
          <Text style={styles.itemList}>{item.value}</Text>
          <TouchableOpacity onPress={() => onHandleModal(item.id)} style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>X</Text>
          </TouchableOpacity>
    </View>
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
      <TextInput 
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
      <Modal
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
        
      </Modal>
      
    </View>
  );
}


