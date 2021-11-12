import "./index.scss";
import DataContext from "../../context/DataContext";
import { useContext } from "react";
import { Header } from "../Header";
import mapImage from "../../assets/map.png";

export const Contact = () => {
  const { data } = useContext(DataContext);

  const adress = data.contact.address;

  return (
    <section className="contact_section" id="contact">
      <Header />
      <article className="contact_section-wrapper">
        <div className="contact_section-text">
          <h1 className="contact_title">{data?.contact.title}</h1>
          <p className="contact_text">{data?.contact.text}</p>
        </div>

        <div className="contact_section-forms">
          <div className="contact_section-adress">
            <div className="adress-info">
              <h2>Adress</h2>
              <h3 className="city-name">{adress.city}</h3>
              <p className="street-name">
                {adress.street}, {adress.number}
              </p>
              <p className="distric-name">
                {adress.district} - {adress.state} - {adress.zipCode}
              </p>
              <div className="contact-info">
                <p className="phone">Phone: {data.contact.phone}</p>
                <p className="email">E-mail: {data.contact.email} </p>
              </div>
            </div>
            <div className="map-image">
              <img src={mapImage} alt="" />
            </div>
          </div>
          <div className="ask-question">
            <h2>Ask a Question</h2>
            <div className="inputs">
              <input type="text" name="" id="" placeholder="Name" />
              <input type="text" name="" id="" placeholder="Last Name" />
            </div>
            <div className="textarea">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Your Question"
              />
              <button>SEND</button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
