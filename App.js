import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, ScrollView, FlatList, SectionList, Picker} from 'react-native';



export default class App extends React.Component {
  state ={
    nombre: "",
    correo: "",
    password: "",
    direccion: "",
    ciudad: "",
    estado: "",
    cp: "",
    telefono: "",
    rfc: ""
  }

  // constructor(props) {
  //   super(props)
  //   // Inicializa con esta función
  //   this.get()
    
  // }

  // handlePress = () => {
  //   alert(`Tu nombre es: ${this.state.texto}`);
  // };

  changeNombre = nombre => {
    this.setState({nombre});
  }
  changeCorreo = correo => {
    this.setState({correo});
  }
  changePassword = password => {
    this.setState({password});
  }
  changeDireccion = direccion => {
    this.setState({direccion});
  }
  changeCiudad = ciudad => {
    this.setState({ciudad});
  }
  changeEstado = estado => {
    this.setState({estado});
  }
  changeCp = cp => {
    this.setState({cp});
  }
  changeTelefono = telefono => {
    this.setState({telefono});
  }
  changeRfc = rfc => {
    this.setState({rfc});
  }

  // get = () => {
  //   const response = await fetch('route')
  //   const pre = await response.json() //Saca todos los datos
  //   const vector = pre.map(x => ({ ...x, key: String(x.id)})); // Añade la propiedad key
  //   this.setState({vector});
  // }

  submit = () => {



  fetch("http://192.168.1.104:3001/users/addUser", {
    method: "POST",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nombre: this.state.nombre,
      correo: this.state.correo,
      password: this.state.password,
      direccion: this.state.direccion,
      ciudad: this.state.ciudad,
      estado: this.state.estado,
      cp: this.state.cp,
      telefono: this.state.telefono,
      rfc: this.state.rfc
    })
  })
  .catch(function(error) {
    console.log(error.message);
    throw error;
  });

    alert(`Usuario Creado`);
  }
  
  render() {
    
    const { texto } = this.state;
    return (
      <View >
        {/* <TextInput 
          style={styles.input}
          onChangeText={this.handleChange}
          placeholder="Nombre"
        /> */}
        {/* <Button title="Aceptar" onPress={this.handlePress}/> */}
        {/* <TouchableHighlight style={styles.button} onPress={this.handlePress}>
          <Text>Aceptar</Text>
        </TouchableHighlight> */}
        {/* <Text>{texto && `Mi nombre es: ${texto}`}</Text> */}

        
        {/* <FlatList 
            data={[
              {name: 'Alan', key: '1'},
              {name: 'Diego', key: '2'},
              {name: 'Jhony', key: '3'},
              {name: 'Vilchis', key: '4'},
              {name: 'Ulises', key: '5'},
              {name: 'Ulises', key: '6'},
              {name: 'Ulises', key: '7'},
              {name: 'Ulises', key: '8'},
              {name: 'Ulises', key: '9'},
              {name: 'Ulises', key: '10'},
              {name: 'Ulises', key: '11'},
            ]}
            renderItem={({ item }) => <Text style={{fontSize: 80}}>{item.name}</Text>}
          /> */}

        {/* <SectionList
          sections={[
            {
              title: "Nombres",
              data: [
                { name: "Alan", key: "1" },
                { name: "Diego", key: "2" },
                { name: "Jhony", key: "3" },
                { name: "Vilchis", key: "4" },
                { name: "Ulises", key: "5" }
              ]
            },
            {
              title: "Uliseses",
              data: [
                { name: "Ulises", key: "5" },
                { name: "Ulises", key: "6" },
                { name: "Ulises", key: "7" },
                { name: "Ulises", key: "8" },
                { name: "Ulises", key: "9" },
                { name: "Ulises", key: "10" },
                { name: "Ulises", key: "11" }
              ]
            }
          ]}
          renderItem={({ item }) => <Text style={{fontSize: 80}}>{item.name}</Text> }
          renderSectionHeader={({ section }) => <Text style={{fontSize: 40, backgroundColor: "gray"}}> {section.title}</Text>}
        /> */}

        {/* <Picker
          selectedValue={this.state.value || 1}
          style={{}}
          onValueChange={(value, index) => {
            this.setState({ value });
          }}
        >
          <Picker.Item label={this.props.user.name} value={this.props.user.id} />
          <Picker.Item label={this.props.user.name} value={this.props.user.id} />
          <Picker.Item label={this.props.user.name} value={this.props.user.id} />

        </Picker> */}
        
        <Text style={styles.h1}>Sign In</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.changeNombre}
          placeholder="Nombre"
        />
        <TextInput
          style={styles.input}
          onChangeText={this.changeCorreo}
          placeholder="Correo"
        />
        <TextInput
          style={styles.input}
          onChangeText={this.changePassword}
          placeholder="Password"
        />
        <TextInput
          style={styles.input}
          onChangeText={this.changeDireccion}
          placeholder="Dirección"
        />
        <TextInput
          style={styles.input}
          onChangeText={this.changeCiudad}
          placeholder="Ciudad"
        />
        <TextInput
          style={styles.input}
          onChangeText={this.changeEstado}
          placeholder="Estado"
        />
        <TextInput
          style={styles.input}
          onChangeText={this.changeCp}
          placeholder="Código Postal"
        />
        <TextInput
          style={styles.input}
          onChangeText={this.changeTelefono}
          placeholder="Telefono"
        />
        <TextInput
          style={styles.input}
          onChangeText={this.changeRfc}
          placeholder="RFC"
        />

        <Button title="Aceptar" onPress={this.submit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // button:{
  //   backgroundColor: 'green',
  //   height: 50,
  //   padding: 15,
  // },
  // input:{
  //   borderWidth: 1,
  //   borderColor: 'black',
  //   paddingTop: 2,
  //   paddingBottom: 2,
  //   paddingRight: 4,
  //   paddingLeft: 4,
  // },
  // text:{
  //   color: 'red',


  // },
  input:{
    paddingBottom: 5,
  },
  h1:{
    fontSize: 20,
    marginTop: 50,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
