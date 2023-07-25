//functional comp vs class componenet
import React,{Component} from 'react';
import './Header.css'

class Header extends Component{
    constructor(){
        super()
            this.state=({message : 'hi',name : "admin"});
        }

        changeState(){
            this.setState({message : "bye"})

            this.state.message=this.props.name
        }   

    render(){
        this.changeState();
        
        
        return(
            <h1 id="go">{this.state.message}{this.state.name}</h1>
        )
    }

}
export default Header;
