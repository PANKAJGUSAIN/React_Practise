
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import { Component } from "react";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";

class Day1 extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            code: `
import { Component } from "react";

class Day1 extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        };
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    incrementCounter() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        return (
            <div>
                <h1>Day 1</h1>
                <p>Counter: {this.state.counter}</p>
                <button onClick={this.incrementCounter}>Increment</button>
            </div>
        );
    }
}

export default Day1;
        `,
        };
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    incrementCounter() {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));
    }

    render() {

        return (
            <>
                <div>
                    <h1>Day 1</h1>
                </div>
                <CodeMirror
                    style={{height:"200px", width:"200px"}}
                    value={this.state.code}
                    options={{
                        mode: "javascript",
                        theme: "default",
                        lineNumbers: true
                    }}
                />
            </>
        );
    }
}

export default Day1;