import "./index.scss";

export const Card = ({ image, title, text }) => {
  return (
    <div className="services_card">
      <img src={image} alt="Lightbub Image" />
      <h2 className="card_title">{title}</h2>
      <p className="card_text">{text}</p>
    </div>
  );
};
