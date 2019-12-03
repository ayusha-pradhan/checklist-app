import React from 'react';


export default class CheckBox extends React.Component{
  
render(){
    const {places}= this.props;
    
    return (
                 <div >
                    <label>
                    <input
                        type="checkbox"
                        places={places}
                        checked={places.check}
                        onChange={(places)=>this.toggleTodo(places)}
                    />
                    {places}
                    </label>               
                </div>
            );
}
toggleTodo = ()=>{
//    debugger;
this.props.updateTodoFn(this.props.places);
console.log(this.props.places);
}

}
