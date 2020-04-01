import Modal from "./modal"
import MovieForm from './movieForm'
const Sidemenu = props => {
  const { categories } = props
  return (
    <div>
      <Modal>
        <MovieForm />
      </Modal>
      <h1 className="my-4">Shop Name</h1>
      <div className="list-group">
        {
          categories.map((category, index) => <a key={index} href="#" className="list-group-item">{category.name}</a>)
        }
      </div>
    </div>
  );
};

export default Sidemenu;
