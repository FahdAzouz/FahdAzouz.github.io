import React from 'react';
import './App.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="https://github.com/FahdAzouz">GitHub</a>
      </nav>
    </header>
  );
}

function MainSection() {
  return (
    <div className="main-section">
      <img src="your_cover_image.jpg" alt="Cover" className="main-image"/>
      <h1>CampusCompass</h1>
      <p>Streamlining Counseling Services at Al Akhawayn University.</p>
    </div>
  );
}

function FeatureSection() {
  const features = [
    { img: "feature1.png", name: "Efficient Booking System", description: "Book and manage counseling sessions with ease. Our intuitive scheduling system allows you to select times that fit your schedule, promoting a balanced academic life." },
    { img: "feature2.png", name: "Real-Time Counselor Availability", description: "View up-to-the-minute counselor availability and book instant sessions for urgent needs. CampusCompass keeps you updated, ensuring you get help when you need it." },
    { img: "feature3.png", name: "Integrated Communication Tools", description: "Communicate directly with your counselor through the app. Schedule follow-ups and receive reminders to keep your counseling journey on track." },
  ];

  return (
    <div id="features">
      {features.map((feature, index) => (
        <div className="feature" key={index}>
          <img src={feature.img} alt={feature.name}/>
          <h3>{feature.name}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

function AboutSection() {
  return (
    <div id="about" className="about">
      <p>Inspired by the need to support the mental health and academic progress of students at Al Akhawayn University, CampusCompass was developed to offer a centralized platform for accessible counseling services. This project is part of our commitment to fostering a supportive educational environment.</p>
      <a href="https://github.com/FahdAzouz/CampusCompass" className="link">GitHub Repo</a>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <FeatureSection />
      <AboutSection />
    </div>
  );
}

export default App;
