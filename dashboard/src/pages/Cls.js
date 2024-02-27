import React from 'react'
class Cls extends React.Component {
    constructor() {
        super()
            this.state = {
                Name: "sahil",
                Email: "Abc@gmail.com",
                count: 0
            }

        }
        updatestate() {
            this.setState({
                Name: "jayesh",
                Email: "bcd@gmail.com"
            })
        }
        inc = () => {
            this.setState((prev) => ({
                count: prev.count + 1,
            }));
        }
    
    decrement = () => {
        this.setState((prev) => ({
            count: prev.count - 1,
        }));
    }
    render() {
        return (
            <>
                <h1>
                    Name{this.state.Name};
                </h1>
                <h1> email{this.state.Email};</h1>

                <h1> count{this.state.count}</h1>
                <div><button type="button" className="btn btn-primary" onClick={() => {
                    this.updatestate()
                }}>update</button>
                </div>
                <div><button type="button" className="btn btn-primary" onClick={this.inc}>Increse</button></div>
                <div></div>  <button type="button" className="btn btn-primary" onClick={this.decrement}>Decrease</button>
            </>
        )
    }
}

export default Cls