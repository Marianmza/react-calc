import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(){
        super();

        this.state = {
            number1: 0,
            number2: 0
        }
    }

    render() {
        return (
            <div className="calc">
                <div className="display">
                    <input type="number" value={this.state.number1} disabled/>
                </div>
                <div className="buttons">
                    <div className="left">
                        <button>0</button>
                        <button className="clear">C</button>
                        <button className="equal">=</button>
                        {
                            ( new Array( 9 ).fill( null ) ).map( ( a, i ) => {
                                const number = i + 1;

                                return (
                                    <button
                                        onClick={() => {
                                            this.setState({number1: this.state.number1 * 10 + number})
                                        }}
                                    >
                                        {number}
                                    </button>
                                )
                            } )
                        }
                    </div>
                    <div className="actions">
                        <button>&divide;</button>
                        <button>&times;</button>
                        <button>-</button>
                        <button>+</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
