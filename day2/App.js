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
    ],
    keyword:''
  }
  handleChange =(e)=>{
    this.setState({
      keyword: e.target.value
    })
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
    const {contacts, keyword} =this.state;
    //전체목록 contacts, 검색할 키워드 keyword
    //contacts에서 keyword인 데이터만 검색해서 전달(list)
    //contacts.filter(v => (조건) ? true : false)
    const filteredContacts = contacts.filter(v => v.name.indexOf(keyword)!== -1);
    
    // console.log(this.state) // {contacts : [...]}
    // console.log(this.state.contacts)//[...]
    // console.log(contacts)///[...]
  return (
    <div className="App-header">
      <PhoneForm
        onCreate={this.handleCreate}/>
      <p>
        <input placeholder="검색"
        onChange={this.handleChange}
        value={this.state.keyword}/>
      </p>
      <PhoneList 
      data ={filteredContacts} // 검색 
      onRemove={this.handleRemove}
      onUpdate={this.handleUpdate}/>
    </div>
  );
}
}
export default App;
