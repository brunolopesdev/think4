import "./index.scss";
import { useContext } from "react";
import { Header } from "../Header/index";
import DataContext from "../../context/DataContext";
import { Card } from "../Card";

export const Services = () => {
  const { data } = useContext(DataContext);

  let servicesItem = data?.services.items;

  return (
    <section className="services_section" id="services">
      <Header />
      <article className="services_section-wrapper">
        <div className="services_section-text">
          <h1 className="services_title">{data?.services.title}</h1>
          <p className="services_subtitle">{data?.services.subtitle}</p>
          <p className="services_text">{data?.services.text}</p>
        </div>
        <div className="services_card-wrapper">
          {servicesItem.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </article>
    </section>
  );
};
