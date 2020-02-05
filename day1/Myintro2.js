import React from 'react';
const css ={
    color :'red',
    fontSize:'40px'}

const Myintro2 = function({card}){
    
    return(
        <div style={css}>
        안녕하세요, 제 이름은 <b>{card.name}</b>입니다.
        안녕하세요, 제 email은 <b>{card.email}</b>입니다.  
        안녕하세요, 제 번호는 <b>{card.phone}</b>입니다.                  
    </div>

    )

}

export default Myintro2