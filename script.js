var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0,
            // counter2: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    getDefaultProps: function() {
        console.log('Przekazanie domyślnych wartości do komponentu')
    },

    componentWillMount: function() {
        console.log('Sprawdzenie, czy wszystkie propsy są przekazane poprawnie');
    },

    sholudComponentUpdate: function() {
        console.log('Sprawdza, czy komponent powinien zostać jeszcze raz wyrenderowany.')
            return true;
    },

    componentWillUnmount: function() {
        console.log('Usuniecie komponentu ze strony, np. dodanie animacji')
    },

    render: function() {
        return React.createElement('div', {},
                React.createElement('button', {onClick: this.decrement}, '-'),
                React.createElement('span', {}, this.state.counter),
                React.createElement('button', {onClick: this.increment}, '+'),
        )
    }
});

var element = React.createElement('div', {}, 
    React.createElement(Counter), 
    React.createElement(Counter),
);

ReactDOM.render(element, document.getElementById('app'));