import React, { Component } from 'react';
import PhoneForm from './components/phone_form';
import PhoneList from './components/phone_list';

class App extends Component{
  id = 1;
  state ={
    contacts:[
      {
        id: 0,
        name : '관리자',
        phone : '010-000-0000'
      }
    ]
  }
  handleUpdate = (selected_id, data) => {
    const {contacts} =this.state;
   
    this.setState({
      contacts:contacts.map(
        item=> item.id === selected_id
                  ? {...item, ...data}
                  : item
      )

    })
    

   
  }
  handleRemove = (selected_id) =>{
    const {contacts} =this.state;

    this.setState({
    contacts: contacts.filter(
      info => info.id !== selected_id
    )
    });
  }
   
  handleCreate = (data)=>{
    console.log(data);

    const {contacts} =this.state;
    this.setState({
      contacts: contacts.concat({id:this.id++, ...data})

    })
  }
  render(){
    const {contacts} =this.state;
    // console.log(this.state) // {contacts : [...]}
    // console.log(this.state.contacts)//[...]
    // console.log(contacts)///[...]
  return (
    <div>
      <PhoneForm
        onCreate={this.handleCreate}/>
      <PhoneList 
      data ={this.state.contacts}
      onRemove={this.handleRemove}
      onUpdate={this.handleUpdate}/>
    </div>
  );
}
}
export default App;
