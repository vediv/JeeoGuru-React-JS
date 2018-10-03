import React, {Component} from "react";
import './css/original.css';

export default class Series extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Categorys: []
    }
  }

  componentWillMount() {
    this.fetchSeries();
  }

  fetchSeries() {
    fetch('http://203.122.21.61:6086/category_info?partnerid=ott503&categoryid=294&countrycode=IN', {method: 'post'})
    .then(res => res.json())
    .then((result) => {
      this.setState({isLoaded: true, Categorys: result.category_info});
    }, (error) => {
      this.setState({isLoaded: true, error});
    })
  }
  render() {
    console.log(this.state.Categorys);
    return (<div className="series">
        {this.state.Categorys.map((Category, key) => {
      return (
        <div><img className="seriesImg" src={Category.t_large_url} alt=""/>
          <h4>{Category.Parent_name}</h4></div>
      )
    })}
  </div>
  );
  }

}
