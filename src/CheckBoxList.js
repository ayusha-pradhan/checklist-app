import React from 'react';
import CheckBox from './CheckBox';

export default class CheckBoxList extends React.Component{

 render(){
        const {places,check}=this.props
        return(

          
             <div className="checkbox-list">
                    {places.map((places,index) =>
                    {return(
                    <CheckBox updateTodoFn= {(places)=>{this.toggleTodo(places)}} key={index} places={places.place}
                     check={check} 
                   
                    />
                    )
                    }
                    )}
                </div>
            );
               
        }

toggleTodo = (places)=>{
    this.props.updateTodoFn(places);
}
}
