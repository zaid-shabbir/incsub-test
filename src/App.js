import SignupForm from "./components/SignupForm";
import "./App.scss";

function App() {
  return (
    <div className='signup-page'>
      <section className='signup-page__left-side'>
        <div className='signup-page__left-side-content'>
          <SignupForm />
        </div>
      </section>
      <section className='signup-page__right-side'>
        <div className='signup-page__right-side-content'>
          <div className='signup-page__heading-text'>Dummy Heading</div>
          <p className='signup-page__normal-text'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            provident iure eveniet consequuntur quidem obcaecati explicabo enim
            id nisi? Architecto explicabo nam doloribus officiis sequi vero nisi
            sint suscipit quibusdam?
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
