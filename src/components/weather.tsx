import React, { useState, useEffect, useCallback } from 'react';
import {
  DiscreteColorLegend,
  LineSeriesCanvas,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis,
} from 'react-vis';
import localStyles from './local-styles.scss'
import GuestLayout from './guest-layout';

const get_icon_url = (icon: string) => `https://openweathermap.org/img/wn/${icon}@2x.png`

const format_weather_column = (a: any) => (
  <div className="column is-5-mobile has-text-centered box mb-0" key={a.dt}>
    <p>{(new Date(a.dt*1000)).toLocaleString("fr-FR", { weekday: 'short', month: 'short', day: 'numeric' })}</p>
    <figure className="image is-1by1">
      <img className="is-rounded" src={get_icon_url(a.weather[0].icon)}/>
    </figure>
    <p>{a.weather[0].main}</p>
    <p className="is-size-7-mobile">{Math.round(a.temp.min*10)/10} / {Math.round(a.temp.max*10)/10}°C</p>
  </div>
)

export default () => {
  const [data, setData] = useState<any>(undefined)
  const [activeTab, setActiveTab] = useState<string>("week")

  const fetchMyAPI = useCallback(async () => {
    let response: any = await fetch( `${process.env.API_URL}/weather`)
    response = await response.json()
    setData({
      current: response.current,
      daily: response.daily,
      hourly: {
        temp: response.hourly.map((pt: any) => ({
          x: new Date(pt.dt * 1000), 
          y: pt.temp
        })),
        rain: response.hourly.map((pt: any) => ({
          x: new Date(pt.dt * 1000), 
          y: pt.rain ? Math.round(pt.rain['1h']*100) : 0
        })),
      }
    })
  }, []) 

  useEffect(() => {
    fetchMyAPI()
  }, [fetchMyAPI])

  const colors = ["#FF470F", "#00D1B2"]
  return (
    <GuestLayout>
      <section className="hero is-info">
        <div className="hero-body">
          <p className="title">
            🌤 Météo
          </p>
          <p className="subtitle">
            Va-t-il faire beau ? Il faudra prier les dieux...
          </p>
        </div>
      </section>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            Météo à Saint-Point
          </p>
        </header>
        <div className="card-content columns is-variable is-4">
          {
            data && (
              <div className={`column is-3 box mb-0`}>
                <div className="columns is-mobile">
                  <div className="column is-5">
                    <figure className="image is-1by1">
                      <img className={`is-rounded ${localStyles.mainmeteopic}`} src={get_icon_url(data.current.weather[0].icon)}/>
                    </figure>
                  </div>
                  <div className="column">
                    <p className="title is-4 is-size-5-mobile">
                      {new Date(data.current.dt*1000).toLocaleString("fr-FR", { weekday: 'long', month: 'long', day: 'numeric' })}
                    </p>
                    <p>
                      <span className="is-4 is-size-5-mobile">{Math.round(data.current.temp*10)/10}°C</span>
                      <span className="is-5 is-size-6-mobile">{" / "}{Math.round(data.current.feels_like*10)/10}°C</span>
                    </p>
                    <p>{data.current.weather[0].description}</p>
                    <p className="is-size-7 mt-2">Wind: {data.current.wind_speed}km/h</p>
                    <p className="is-size-7">Humidity: {data.current.humidity}%</p>
                  </div>
              </div>
              </div>
            )
          }
          {
            data && (
              <div className={`column box ${localStyles.scrollweather} is-paddingless ml-2`}>
                <div className="tabs mb-1">
                  <ul>
                    <li className={activeTab === "week" ? "is-active" : ""}>
                      <a onClick={() => setActiveTab("week")}>Semaine</a>
                    </li>
                    <li className={activeTab === "hour" ? "is-active" : ""}>
                      <a onClick={() => setActiveTab("hour")}>Horaire</a>
                    </li>
                  </ul>
                </div>
                {
                  activeTab === "week" ? (
                    <div className="columns is-4 is-mobile p-3">
                      { data.daily.map(format_weather_column) }
                    </div>
                  ) : (
                    <div className="container">
                      <DiscreteColorLegend 
                        width={500} 
                        orientation="horizontal" 
                        colors={colors} 
                        items={["Température", "Risque de pluie"]} 
                      />
                      <div style={{position: "relative"}}>
                        <div>
                          <XYPlot width={500} height={200} xType="time" margin={{left: 50, right: 50, bottom: 50}}>
                            <VerticalGridLines />
                            <XAxis tickLabelAngle={-45}/>
                            <YAxis tickFormat={value => `${value}°C`}/>
                            <LineSeriesCanvas
                              className="first-series"
                              curve="curveMonotoneX"
                              data={data.hourly.temp}
                              color={colors[0]}
                            />
                          </XYPlot>
                        </div>
                        <div style={{position: "absolute", top: 0}}>
                          <XYPlot width={500} height={200} xType="time" margin={{left: 50, right: 50}} >
                            <YAxis tickFormat={value => `${value}%`} orientation="right"/>
                            <LineSeriesCanvas
                              className="second-series"
                              curve="curveMonotoneX"
                              data={data.hourly.rain}
                              color={colors[1]}
                              strokeDasharray={[2, 2]}
                            />
                          </XYPlot>
                        </div>
                      </div>
                   </div>
                  )
                }
              </div> 
            )
          }
        </div>
      </div>
    </GuestLayout>
  )
};
