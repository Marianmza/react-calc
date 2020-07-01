import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="calc">
                <div className="display">
                    <input type="number"
                           value={0}
                           disabled={true}
                           readOnly={true}
                    />
                </div>
                <div className="buttons">
                    <div className="left">
                        <button>
                            0
                        </button>
                        <button className="clear">
                            C
                        </button>
                        <button className="equal">
                            =
                        </button>
                        {
                            ( new Array( 9 ).fill( null ) ).map( ( a, i ) => {
                                const number = i + 1;

                                return (
                                    <button>
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
