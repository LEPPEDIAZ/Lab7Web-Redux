import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../action/index'

class MenuItems extends Component {

    render() {

        const {item} = this.props;

        return (
            <div >
                <div >
                    <div >
                        <div>
                            <div >
                                <label>{ item.fooditem }</label>
                            </div>
                            <div>
                                <label>Precio: Q{ item.price }</label>
                            </div>
                            <div >
                                <input type="button" value="Add" 
                                       onClick={()=> {
                                           this.props.addToCart(item);
                                       }}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function  mapDispatchToProps(dispatch) {
    return {
        addToCart : (item) => dispatch(addToCart(item))
    };
}

export default connect(null,mapDispatchToProps)(MenuItems);