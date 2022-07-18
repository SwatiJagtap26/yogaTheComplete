import "./Home.css";
const Home = (props) => {
  return (
    <div className="main">
      <div className="Container">
        <div className="subContainer">
          <p className="subheading">Welcome to Yoga Asanas</p>
          <h1 className="heading">Yoga Enhances Your Life</h1>
          <p>
            “When you listen to yourself, everything comes naturally. It comes
            from inside, like a kind of will <br /> to do something. Try to be
            sensitive. That is yoga.”
          </p>
        </div>
      </div>

      <div className="container-cards-col">
        <div className="cards">
          <div className="inside-cards">
            <h3>Outdoor Activites</h3>
            <p>
              “Nature connects us to our roots,” says Dr. Matthew Baral, who led
              the This Is Your Brain On Nature lecture at the Sedona Yoga
              Festival. “The grass, the ocean, the trees are all part of our
              primeval world. It is where we feel most at home.” While a
              vigorous hike has its own benefits, practicing yoga outside can
              transform a stagnant routine into a heightened experience. Here,
              four ways that works.
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="inside-cards">
            <h3>Experienced Trainers</h3>
            <p>
              A yoga instructor is a certified yoga teacher who conducts classes
              with groups of people which involves meditation and yoga poses. A
              yoga instructor guides students to "connect to breath" while
              conducting a series of physical and mental exercises. Instructing
              small or large groups of new, intermediate or experienced yoga
              practitioners
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="inside-cards">
            <h3>Happy Environment</h3>
            <p>
              If you are inactive, yoga may be the ideal exercise for both mind
              and body to begin your activity life. Yoga also provides stress
              reduction in addition to strengthening the bones and muscles and
              improving posture as well as overall health and vitality. Because
              you don't have to be in peak physical shape to practice yoga, it
              is the right activity for sedentary people and for seniors who
              might not otherwise exercise.
            </p>
          </div>
        </div>
      </div>

      <div className="advertise-cards">
        <div className="adverise-cards-box"></div>

        <div className="adverise-cards-info">
          <small>Reslish in Nature's Natural Gift</small>
          <h2>LIFE IN DIVINE YOGA</h2>
          <h3>
            "I am standing on my own altar,
            <br /> The Poses are my prayers"
          </h3>
          <p>
            It helped me organize myself internally. I became more patient with
            myself and started to put my life into perspective. Each day I did
            yoga I built up more confidence, happiness, and security within
            myself to take my life with the next level, take things into my own
            hands, and create a better life for myself.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default Home;
