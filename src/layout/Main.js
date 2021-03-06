import React from 'react'

const Main = (props) => {

  return (
  <div id="main">

    <section id="intro" className="main">
    <div className="spotlight">
      <div className="content">
      <header className="major">
        <h2>Intro</h2>
      </header>
      <p>This is my first attempt at converting a standard HTML template into React
        components. It currently uses Express to serve the assets, with index.hjs
        launching the React index.js which subsequently renders App.js</p>
      <ul className="actions">
        <li>
        <a href="generic.html" className="button">Learn More</a>
        </li>
      </ul>
      </div>
      <span className="image"><img src="images/pic01.jpg" alt=""/></span>
    </div>
    </section>

    <section id="first" className="main special">
    <header className="major">
      <h2>First Section</h2>
    </header>
    <ul className="features">
      <li>
      <span className="icon major style1 fa-code"></span>
      <h3>Ipsum consequat</h3>
      <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat
        tempus veroeros sed consequat.</p>
      </li>
      <li>
      <span className="icon major style3 fa-copy"></span>
      <h3>Amed sed feugiat</h3>
      <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat
        tempus veroeros sed consequat.</p>
      </li>
      <li>
      <span className="icon major style5 fa-diamond"></span>
      <h3>Dolor nullam</h3>
      <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat
        tempus veroeros sed consequat.</p>
      </li>
    </ul>
    <footer className="major">
      <ul className="actions">
      <li>
        <a href="generic.html" className="button">Learn More</a>
      </li>
      </ul>
    </footer>
    </section>

    <section id="second" className="main special">
    <header className="major">
      <h2>Second Section</h2>
      <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br/>
      posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
    </header>
    <ul className="statistics">
      <li className="style1">
      <span className="icon fa-code-fork"></span>
      <strong>5,120</strong>
      Etiam
      </li>
      <li className="style2">
      <span className="icon fa-folder-open-o"></span>
      <strong>8,192</strong>
      Magna
      </li>
      <li className="style3">
      <span className="icon fa-signal"></span>
      <strong>2,048</strong>
      Tempus
      </li>
      <li className="style4">
      <span className="icon fa-laptop"></span>
      <strong>4,096</strong>
      Aliquam
      </li>
      <li className="style5">
      <span className="icon fa-diamond"></span>
      <strong>1,024</strong>
      Nullam
      </li>
    </ul>
    <p className="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit
      amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac
      arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem,
      sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a
      enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur
      vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero.
      Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque.
      Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur
      lacinia.</p>
    <footer className="major">
      <ul className="actions">
      <li>
        <a href="generic.html" className="button">Learn More</a>
      </li>
      </ul>
    </footer>
    </section>

    <section id="cta" className="main special">
    <header className="major">
      <h2>Header Section</h2>
      <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br/>
      posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
    </header>
    <footer className="major">
      <ul className="actions">
      <li>
        <a href="generic.html" className="button special">Get Started Footer</a>
      </li>
      <li>
        <a href="generic.html" className="button">Learn More Footer</a>
      </li>
      </ul>
    </footer>
    </section>

  </div>
  )
}

module.exports = Main
