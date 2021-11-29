import React from "react";
import axios from "axios";
import './App.css';

class GenerateRandomQuotes extends React.Component{
    state = { advice: '' };

    componentDidMount(){
        this.getAdvice();
    }

    getAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const { advice } = response.data.slip;

            this.setState({advice: advice})
        })
        .catch((error) => {
            console.log(error);
        })
    }
    render(){
        const{ advice } = this.state;

        return(
          
           <div className="card text-center">

                <div className="card-header ">
                    Advice
                </div>
                <div className="card-body">
                        <p className="card-text"> <h1>{ advice }</h1></p>
                            <a href="/" className="btn btn-outline-success ">Extra Advice!!</a>
                </div>
            </div>
           
           
        );
    }
}

export default GenerateRandomQuotes;