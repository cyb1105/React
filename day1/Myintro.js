import React, { Component} from 'react';

// function Myintro(){
class Myintro extends Component{
    render(){
        const css ={
            color :'blue',
            fontSize:'40px'
        };
        return(
            <div style = {css}>
                안녕하세요, 제 이름은 <b>{this.props.card.name}</b>입니다.
                안녕하세요, 제 email은 <b>{this.props.card.email}</b>입니다.  
                안녕하세요, 제 번호는 <b>{this.props.card.phone}</b>입니다.                  
            </div>
        );
    }
}

export default Myintro