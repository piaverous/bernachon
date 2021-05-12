import React, { useState } from 'react';
import GuestLayout from './guest-layout';

type DateType = {
  index: number
  date: Date
  tags: string[]
  people: string[]
}

type ModalState = {
  title: string
  people: string[]
}

const formatTitleCase = (string: string) =>
  string
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");

const Dates: React.FC = () => {
  const [filter, setFilter] = useState("all");
  const [activeModal, setActiveModal] = useState(-1);
  const [modalContents, setModalContents] = useState<ModalState>({ title: "", people: [] });


  const dates: DateType[] = [
    {
      index: 0,
      date: new Date("May 29, 2021"),
      tags: ["all", "we1"],
      people: ["Pierre Averous", "Max Perez", "Marion Chomik", "Julie De Gail", "Alexandre Fri"]
    },
    {
      index: 1,
      date: new Date("May 30, 2021"),
      tags: ["all", "we1"],
      people: ["Pierre Averous", "Max Perez", "Marion Chomik", "Julie De Gail", "Alexandre Fri"]
    },
    {
      index: 2,
      date: new Date("May 31, 2021"),
      tags: ["all", "semaine"],
      people: ["Pierre Averous", "Max Perez", "Marion Chomik"]
    },
    {
      index: 3,
      date: new Date("June 1, 2021"),
      tags: ["all", "semaine"],
      people: ["Pierre Averous", "Max Perez", "Marion Chomik"]
    },
    {
      index: 4,
      date: new Date("June 2, 2021"),
      tags: ["all", "semaine"],
      people: ["Pierre Averous", "Max Perez", "Marion Chomik", "Joseph Hoellinger"]
    },
    {
      index: 5,
      date: new Date("June 3, 2021"),
      tags: ["all", "semaine"],
      people: ["Pierre Averous", "Max Perez", "Marion Chomik", "Joseph Hoellinger", "Camille Irlinger"]
    },
    {
      index: 6,
      date: new Date("June 4, 2021"),
      tags: ["all", "semaine"],
      people: ["Pierre Averous", "Max Perez", "Marion Chomik", "Joseph Hoellinger", "Camille Irlinger", "Arthur Dumas", "Nicolas Pinon", "Julie De Gail"]
    },
    {
      index: 7,
      date: new Date("June 5, 2021"),
      tags: ["all", "we2"],
      people: ["Pierre Averous", "Max Perez", "Marion Chomik", "Joseph Hoellinger", "Camille Irlinger", "Arthur Dumas", "Nicolas Pinon", "Julie De Gail", "Alexandre Fri"]
    },
    {
      index: 8,
      date: new Date("June 6, 2021"),
      tags: ["all", "we2"],
      people: ["Pierre Averous", "Max Perez", "Marion Chomik", "Joseph Hoellinger", "Camille Irlinger", "Arthur Dumas", "Nicolas Pinon", "Julie De Gail", "Alexandre Fri"]
    },
  ]

  const toggleModal = (item?: DateType) => {
    if (item && activeModal != item.index) {
      setModalContents({
        title: formatTitleCase(item.date.toLocaleDateString("fr-FR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })),
        people: item.people
      })
      setActiveModal(item.index)
    }
    else {
      setActiveModal(-1)
      setModalContents({ title: "", people: [] })
    }
  }

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
          <p className="panel-tabs">
            <a className={filter == "all" ? "is-active" : ""} onClick={() => setFilter("all")}>Tous</a>
            <a className={filter == "we1" ? "is-active" : ""} onClick={() => setFilter("we1")}>WE 1</a>
            <a className={filter == "semaine" ? "is-active" : ""} onClick={() => setFilter("semaine")}>Semaine</a>
            <a className={filter == "we2" ? "is-active" : ""} onClick={() => setFilter("we2")}>WE 2</a>
          </p>
          {dates.filter(item => item.tags.includes(filter)).map(item => (
            <a className="panel-block is-active" key={item.index} onClick={() => toggleModal(item)}>
              <span className="panel-icon">
                <i className="fas fa-calendar-day" aria-hidden="true"></i>
              </span>
              {formatTitleCase(
                item.date.toLocaleDateString("fr-FR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
              )}
            </a>
          ))}
        </article>
      </div>
      <div className={`modal ${activeModal >= 0 ? "is-active" : ""}`}>
        <div className="modal-background" onClick={() => toggleModal()}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{modalContents.title}</p>
            <button className="delete" aria-label="close" onClick={() => toggleModal()}></button>
          </header>
          <section className="modal-card-foot">
            <div className="columns">
              <div className="column">
                <ul>
                  {modalContents.people.map(person => <li key={person}>{person}</li>)}
                </ul>
              </div>
              <div className="column">
                  {modalContents.people.length} personnes
              </div>
            </div>
          </section>
        </div>
      </div>
    </GuestLayout>
  )
};

export default Dates;