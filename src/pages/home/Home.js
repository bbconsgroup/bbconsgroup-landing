import "./Home.css";
// import "../../App.css";

function getRandomPhotoLink() {
  const randomId = Math.floor(Math.random() * 1000); // Change 1000 to adjust the range
  return `https://picsum.photos/200/300?random=${randomId}`;
}

export default function Home() {
  const randomPhotoLink = getRandomPhotoLink();
  return (
    <div className="App">
      <header>
        <h1>Welcome to Our Landing Page</h1>
      </header>
      {/* <nav>
          <a href="#services">Наши услуги</a> |
          <a href="#advantages">Наши преимущества</a> |{" "}
          <a href="#team">Наша команда</a> |<a href="#clients">Наши клиенты</a>{" "}
          |<a href="#reviews">Отзывы наших клиентов</a>
        </nav> */}
      <section id="services">
        <div className="text-image-container">
          <div className="text-container">
            <h1>Main Text</h1>
            <p>Subtext or additional information goes here.</p>
          </div>
          <div className="image-container">
            <img src={randomPhotoLink} alt="Random" />
          </div>
        </div>
        <div className="button-container">
          <button>Button 1</button>
          <button>Button 2</button>
        </div>
      </section>
      <section id="advantages">
        <h2>Наши преимущества</h2>
        <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
      </section>
      <section id="team">
        <h2>Наша команда</h2>
        <p>Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.</p>
      </section>
      <section id="clients">
        <h2>Наши клиенты</h2>
        <p>Maecenas nec odio et ante tincidunt tempus.</p>
      </section>
      <section id="reviews">
        <h2>Отзывы наших клиентов</h2>
        <p>Vestibulum cursus, metus in adipiscing pellentesque.</p>
      </section>
      <footer>
        <p>&copy; 2024 Your Company</p>
      </footer>
    </div>
  );
}
