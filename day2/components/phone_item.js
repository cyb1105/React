import React, { Component } from 'react';


class Phoneitem extends Component{
    state={
        editable : false,
        name : '',
        phone : ''
    }
    componentDidUpdate(preProps,presState){ // 화면이 변할때 마다 호출
        const {info, onUpdate} =this.props;
        console.log(info.name + "/"+info.phone);
        console.log(presState.editable+"/"+this.state.editable)
        if(!presState.editable && this.state.editable){
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }
        //update
        if(presState.editable && !this.state.editable){
            onUpdate(info.id,{
                name:this.state.name,
                phone: this.state.phone
            })
        }
    }
    handleRemove =(e)=>{
        const {info, onRemove} = this.props
        onRemove(info.id);
    }
    handleUpdate = (e)=>{
        const {editable} = this.state
        // const editable =this.state.editable
        this.setState({
            editable: !editable //true false 변환을 위함
        })
     }
     
    handleChange=(e)=>{
        const {name,value} = e.target;
        this.setState({
            [name]:value
        });
    }

   render(){
    const css ={
        border:'1px solid black',
        padding:'9px',
        margin:'5px'
    }
    // const info =this.props.info;
    // console.log(info.id);
    // console.log(info.phone);
    // console.log(info.name);

    const {editable} = this.state;
    if(editable){
        return(
            <div style={css}>
                <div>
                    <input value={this.state.name} name="name" 
                    placeholder="이름 입력"
                    onChange={this.handleChange}/>
                </div>
                <div>
                    <input value={this.state.phone} name="phone" 
                    placeholder="번호 입력"
                    onChange={this.handleChange}/>
                </div>
                <button onClick={this.handleRemove}>삭제</button>
                <button onClick={this.handleUpdate}>적용</button>
            </div>
        );
    }
    const{ name, phone, id} = this.props.info;
    return (
    <div style={css}>
        <div><b>{name}</b></div> 
        <div><b>{phone}</b></div>
        <button onClick={this.handleRemove}>삭제 </button> 
        <button onClick={this.handleUpdate}>수정</button>
    </div>
  );
};
}
export default Phoneitem;
