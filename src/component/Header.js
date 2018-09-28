import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './css/Header.css';
import logo from '../img/logo.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("http://ott.planetcast.in:6086/menu?partnerid=ott503&userid=0").then(res => res.json()).then((result) => {
      this.setState({isLoaded: true, menus: result.Menu});
    }, (error) => {
      this.setState({isLoaded: true, error});
    })
  }

  render() {
    const {error, isLoaded, menus} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (<div className="container1">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/" className="logo"><img src={logo} alt=""/></a>
              </Navbar.Brand>
                <Nav>
                  <ul className="demo">
                    {
                      menus.map(menu => (<NavItem className="option" key>
                        <li><img alt="img" src={menu.menu_icon}/>{menu.catName}</li>
                      </NavItem>))
                    }
                    <div className="container-right ">
                      <a className="header-right" href="#LOGIN">LOGIN</a>
                    </div>
                    </ul>
                </Nav>
                </Navbar.Header>
              </Navbar>
              </div>
              );
    }
  }
}

export default App;
