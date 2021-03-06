import React, {Component} from 'react';
import apiConfig from '../api/apiConfig.jsx';
import DayCard from './DayCard.jsx';

class WeatherApp extends Component{
        state = {
            fullData: [],
            dailyData: []
        }
        
        componentDidMount = () => {
            const weatherURL =  `api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID={apiConfig}`;

        fetch(weatherURL)
            .then(res => res.json())
            .then(data => {
                const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
                this.setState({
                    fullData: data.list,
                    dailyData: dailyData
                }, () => console.log(this.state))
                })
        }

        formatDayCards = () => {
            return this.state.dailyData.map((reading, index) => <DayCard reading={reading} key={index}/>)
        }

        render(){
            return(
            <React.Fragment>
                <div className="row">
                    <div className="col-1">
                        <div className="col-10">
                            {this.formatDayCards()}
                        </div> 
                    </div>
                </div>
            </React.Fragment>
            );
        }
}

export default WeatherApp;