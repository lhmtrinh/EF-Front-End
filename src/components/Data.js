import axios from 'axios';
import EfChart from'./EfChart';
import Error from './Error';
import React from 'react'

export default class Data extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            ef: null,  
            tickers: this.props.tickers,
            points: [],
            period: this.props.period,
            error: null
        }
    }

    
    async componentDidMount(){
        //URL to be changed depending on where you host the application
        const url = 'https://restef.herokuapp.com/api/ef?tickers='+String(this.state.tickers.map(ticker=>ticker.ticker))+'&period='+this.state.period.from+','+this.state.period.to;
        var e = null;
        const response =await axios.get(url)
            .catch(function (error) {
                e = error;
            });
        this.setState({error:e});
        if (this.state.error == null) {
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
    }

    render (){
        if (this.state.error){
            return<div><Error error={this.state.error}/></div>
        } else {
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
}