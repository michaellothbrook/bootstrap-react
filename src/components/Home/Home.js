import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Home.scss';
import Album from '../../components/Album/Album';

import Title from '../../components/Title/Title';

class Home extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <main className="main">
        <Title></Title>
        <Album></Album>
      </main>
    )
  }
}
Home.propTypes = {
}

export default Home;