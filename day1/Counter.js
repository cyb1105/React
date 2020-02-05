import React,{Component} from 'react';

const ErrorObject =()=>{
    throw(new Error('에러 발생')); //2번
}

class Counter extends Component{
    state = {
        count : 0,
        info : {
            name:'cyb',
            age:10
        }
    }

    componentDidCatch(error, info){
        this.setState({
            error: true //3번 
        })
    }
    constructor(props){
        super(props);
            // this.state.count = this.props.init
        
        console.log("constructor")
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate')
        if(nextState.count % 5 ===0 ) return false;
        return true;
    }

    componentWillUpdate(nextProps,nextState){
        console.log('componentWillUpdate');
    }
    componentDidUpdate(prevProps, preState){
        console.log(' componentDidUpdate')
    }



    handleIncrease = ()=>{
        this.setState({
            count : this.state.count + 1
        })
        
    }
    handleDecrease = ()=>{
       this.setState({
           count : this.state.count - 1
       })
        
    }
    handleChangeInfo = () =>{
        this.setState({
            info : {
                ...this.state.info,
                name : 'yb'
            }
        })

    }
    render(){
        if(this.state.error) 
        return (<h1>에러가 발생되었습니다.</h1>); //4번
        return(
            <div>
                <h1>Counter</h1>
                <h2>{this.state.count}</h2>
                {this.state.count == 3 && <ErrorObject/>} {/*카운트가 3일경우 에러객체 발동 1번 */}
                <button onClick= {this.handleIncrease}>+</button>
                <button onClick= {this.handleDecrease}>-</button>   
                <button onClick= {this.handleChangeInfo}>Change info name</button>              
            
                {this.state.info.name}/{this.state.info.age}
            </div>
        )
    }
}

export default Counter;