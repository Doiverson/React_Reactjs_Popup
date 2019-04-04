import React, { Component } from 'react';
import Popup from "reactjs-popup";
import PopUpDialog from './PopUpDialog';

export default class PopUpDisplay extends Component {

    render(){

        return(
            <Popup trigger={<button>Return</button>} position="bottom left">
                <PopUpDialog/>
            </Popup>
        )
    }
}
