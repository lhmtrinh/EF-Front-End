import axios from 'axios';
import React from 'react';
import EfChart from'./EfChart';

export default class Data extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            ef: null,  
            tickers: this.props.tickers,
            points: [],
            period: this.props.period
        }
    }

    
    async componentDidMount(){
        //const url = 'http://localhost:8080/api/ef?tickers='+String(this.state.tickers.map(ticker=>ticker.ticker))+'&portfolios=10&from=2018&to=2020';
        const url = 'http://localhost:8080/api/ef?tickers='+String(this.state.tickers.map(ticker=>ticker.ticker))+'&from='+this.state.period.from+'&to='+this.state.period.to;
        const response = await axios.get(url);
        console.log(url);
        const data = response.data;
        await this.setState({loading: false, ef: data});
        var newPoint = [];
        var pointList= [];
        Object.keys(this.state.ef.curveList).map((index)=> {
            newPoint=[this.state.ef.curveList[index].risk,this.state.ef.curveList[index].return]
            pointList.push(newPoint);
        });
        this.setState({ points: pointList })
    }

    render (){
        if (this.state.loading) {
            return<div>Loading...</div>
        }
        if (!this.state.ef){
            return<div>Can not load the Efficient Frontier graph</div>
        } else {
            return (
                <div>
                    <EfChart points={this.state.points}/>
                    <table className= "styled-table">
                        <thead>
                            <tr>
                                <th>Risk</th>
                                <th>Return</th>
                                {this.state.tickers.map(ticker => (
                                    <th key={ticker.ticker}>{ticker.ticker}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(this.state.ef.curveList).map((index)=>(
                                <tr>
                                    <td key={index}>{this.state.ef.curveList[index].risk}</td>
                                    <td>{this.state.ef.curveList[index].return}</td>
                                    {this.state.ef.curveList[index].weights.map(weight =>(
                                        <td key={weight}>{weight}</td>
                                    ))}
                                </tr>   
                            ))
                            }
                        </tbody>
                    </table>
                </div>
            )
        }        
    }
}