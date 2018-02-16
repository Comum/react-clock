import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnMount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>React State Clock</h1>
                <h2>{this.state.date.toLocaleString()}</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);