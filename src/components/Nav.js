import React, { Component } from "react";
import Switch from "react-switch";
import file from "../../src/JoseLemaResume.pdf"
import "bulma/css/bulma.min.css";

class Nav extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  // handleBurgerMenuClick = () => {
  //   let burger = document.querySelector('.burger')
  //   let nav = document.querySelector('#'+burger.dataset.target)

  //   burger.addEventListener('click', function () {
  //     burger.classList.toggle('is-active')
  //     nav.classList.toggle('is-active')
  //   })
  // }

  handleBurgerMenuClick () {
    let burger = document.querySelector('.burger')
    let nav = document.querySelector('#'+burger.dataset.target)

    burger.addEventListener('click', function () {
      burger.classList.toggle('is-active')
      nav.classList.toggle('is-active')
    })
  }

  render() {
    console.log(this)
    return (
      <div>
        <nav className="navbar is-black is-spaced" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            {/* <a className="navbar-item" href="https://bulma.io">
              <img src="../../public/images/Jose-Lema.png" width="75" alt="Jose Lema initials logo" />
            </a> */}
        
            <div onClick={this.handleBurgerMenuClick} role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>
  
          <div id="navbarBasicExample" className="navbar-menu is-size-3 is-family-sans-serif">
            <div id="nav-home" className="navbar-start">
              <a href="#nav-home" className="navbar-item">
                Home
              </a>
        
              <a href="#about" className="navbar-item">
                About Me
              </a>

              <a href="#skills" className="navbar-item">
                Skills
              </a>

              <a href="#portfolio" className="navbar-item">
                Projects
              </a>

              <a href="#resume" className="navbar-item">
                Experience
              </a>

              <a href={file} className="navbar-item" target="blank">
                Resume
              </a>
        
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  Let's Connect
                </a>
        
                <div className="navbar-dropdown is-size-4">
                  <a className="navbar-item" href="mailto:srjorgemaciel2002@gmail.com" target="_blank">
                    Email
                  </a>
                  <a className="navbar-item" href="https://www.linkedin.com/in/josemlema/" target="_blank">
                    LinkedIn
                  </a>
                  <a className="navbar-item" href="https://github.com/mauilema" target="_blank">
                    Github
                  </a>
                </div>
              </div>

              <div>
                  <Switch
                    checked={this.state.checked}
                    onChange={this.onThemeSwitchChange}
                    offColor="#baaa80"
                    onColor="#353535"
                    className="react-switch mx-auto dark-mode-toggle"
                    width={90}
                    height={40}
                    uncheckedIcon={
                      <span
                        className="iconify"
                        data-icon="mi:moon"
                        data-inline="false"
                        style={{
                          display: "block",
                          height: "100%",
                          fontSize: 25,
                          textAlign: "end",
                          marginLeft: "20px",
                          color: "#353239",
                        }}
                      ></span>
                    }
                    checkedIcon={
                      <span
                        className="iconify"
                        data-icon="emojione-v1:sun-with-face"
                        data-inline="false"
                        style={{
                          display: "block",
                          height: "100%",
                          fontSize: 25,
                          textAlign: "end",
                          marginLeft: "10px",
                          color: "#353239",
                        }}
                      ></span>
                    }
                    id="icon-switch"
                  />
                </div>


            </div>

        
            <div className="navbar-end">
              <div className="navbar-item">
              
                <div className="buttons">
                  <a className="button is-light" href="https://www.linkedin.com/in/josemlema/" target="_blank">
                    <i className="fab fa-linkedin"></i>
                  </a>

                  <a className="button is-light" href="https://github.com/mauilema" target="_blank">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>  

      </div>
    );
  }
}

export default Nav;