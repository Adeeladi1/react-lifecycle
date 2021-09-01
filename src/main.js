import React from 'react';

export class MyComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"doremon",
            show:true
        }
    }
    shouldComponentUpdate(){
        return true;
    }
    static getDerivedStateFromProps(props, state){
         return {name:props.name}
    }
    
    componentDidMount(){
        setTimeout(() => {
             this.setState({name:"waqas"})
        }, 1000);
       
    }
    // componentDidMount will execute only once, when React component mounted and it doesn't execut when state or props changed.
    delHeader=()=>{
    this.setState({show:false})
    }
    render(){
       let update;
         if(this.state.show){
         update=<UnMount/>
       }
        return(
            <> 
            <div className="main">
               <h2 style={{marginLeft:"5rem", marginTop:"2rem"}}>{update}</h2>
               <h3 style={{marginLeft:"8rem", marginTop:"1rem"}}>{this.state.name}</h3>
               <button style={{marginLeft:"7rem", marginTop:"1rem" ,padding:"10px"}} onClick={this.delHeader}>Dont-Click</button>
            </div>
            </>
        )
    }
}


class UnMount extends React.Component{
    componentWillUnmount(){
    alert("you'r component is about to be unmounted");
    }
     render(){
         return(
             <h2>Well-come</h2>
         )
     }
}