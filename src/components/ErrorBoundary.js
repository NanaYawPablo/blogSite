import React, { Component } from "react";


export default class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.log("Error from ErrorBoundary: "+error);
      console.log(errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <div className="errorBoundary text-center">
         <p>Sorry there was a problem loading this page.</p>
          </div>;
      }
  
      return this.props.children; 
    }
  }