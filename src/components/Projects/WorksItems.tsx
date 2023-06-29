// @ts-nocheck

const WorksItems = ({ item }) => {
  return (
    <div key={item.id} className="work__card">
      <img src={item.image} alt={item.title} className="work__img" />
      <h2 className="work__title">{item.title}</h2>
      <h3 className="work__subtitle">{item.skills}</h3>
      <a href={item.url} className="work__button">
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorksItems;
