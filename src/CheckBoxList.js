import React from 'react';
import CheckBox from './CheckBox';

export default class CheckBoxList extends React.Component{



           
                      
    render(){
        const {places,checked}=this.props
        return(
             <div className="checkbox-list">
                    {places.map((places,index) =>
                    {return(
                    <CheckBox onClick= {(places)=>{this.toggleTodo(places)}} key={index} places={places.place} checked={checked}/>
                    )
                    }
                    )}
                </div>
            );
               
        }

        toggleTodo = (places)=>{
                        
            this.props.onClick(places);
         }
}
