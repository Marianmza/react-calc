import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(){
        super();

        this.state = {
            number1: 0,
            number2: 0,
            operand: null,
            number: 1,
        }
    }

    render() {
        return (
            <div className="calc">
                <div className="display">
                    <input type="number" value={this.state.number === 1 ? this.state.number1 : this.state.number2} disabled/>
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
                                            if(this.state.number == 1){
                                                this.setState({number1: this.state.number1 * 10 + number})
                                            }else{
                                                this.setState({number2: this.state.number2 * 10 + number})
                                            }
                                        }}
                                    >
                                        {number}
                                    </button>
                                )
                            } )
                        }
                    </div>
                    <div className="actions">
                        <button onClick={() => {
                            this.setState({operand: '/', number: 2})
                        }}>&divide;</button>

                        <button onClick={() => {
                            this.setState({operand: '*', number: 2})
                        }}>&times;</button>

                        <button onClick={() => {
                            this.setState({operand: '-', number: 2})
                        }}>-</button>

                        <button onClick={() => {
                            this.setState({operand: '+', number: 2})
                        }}>+</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
