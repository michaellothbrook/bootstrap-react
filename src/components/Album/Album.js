import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Album.scss';
import Card from '../../components/Card/Card'

class Album extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <Card col="4"></Card>
            <Card col="4"></Card>
            <Card col="4"></Card>
          </div>
        </div>
      </div>
    )
  }
}
Album.propTypes = {
}

export default Album;