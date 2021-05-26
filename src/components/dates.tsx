import React from 'react';
import GuestLayout from './guest-layout';
import Timeline from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'

type Participant = {
  name: string
  arrivee: string
  depart: string
}

type Props = {
  loadedData: Participant[]
}

const Dates: React.FC<Props> = ({ loadedData }) => {
  const participants = loadedData.sort((a, b) => +new Date(a.arrivee) - +new Date(b.arrivee));
  const groups = participants.map((p,i) => ({ id: i, title: p.name }))
  const items = participants.map((p,i) => [
    {
      id: i, 
      group: i, 
      title: p.name, 
      start_time: moment(new Date(p.arrivee)),
      end_time: moment(new Date(p.depart))
    }
  ]).flat()

  return (
    <GuestLayout>
      <section className="hero is-info">
        <div className="hero-body">
          <p className="title">
            📆 Dates
          </p>
          <p className="subtitle">
            Voyez les dates du séjour, et les présences de chacun
          </p>
        </div>
      </section>
      <div className="container p-b-md p-r-md p-l-md">
        <hr />
        <article className="panel is-info">
          <p className="panel-heading">
            Calendrier de séjour
          </p> 
          <Timeline
            groups={groups}
            items={items}
            defaultTimeStart={moment(new Date("2021/05/29 00:00:00"))}
            defaultTimeEnd={moment(new Date("2021/06/06 23:59:59"))}
          />  
        </article>
      </div>
    </GuestLayout>
  )
};

export default Dates;