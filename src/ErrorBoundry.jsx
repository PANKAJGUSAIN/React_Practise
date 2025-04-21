import { Component } from "react";

class ErrorBoundry extends Component{
    constructor(props){
        super(props);
        this.state={
            hasError:false,
            error:null
        }
    }

    static getDerivedStateFromError(error){
        return {hasError:true , error:error}
    }

    componentDidCatch(error , errorInfo){
        console.log('error' , error , errorInfo);
    }


    render(){
        
        if(this.state.hasError){
            return <>
                    Error Occured on - {this.props.componentName} !!!!
                    {this.state.error}
                </>
        }else{
            return this.props.children
        }
    }
}