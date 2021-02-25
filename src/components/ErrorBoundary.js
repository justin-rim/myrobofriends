import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }


    render() {
        if (this.state.hasError) {
            return <h1>Oooops. Not good!</h1>
        }
        return this.prop.children
    }   


}

export default ErrorBoundary;