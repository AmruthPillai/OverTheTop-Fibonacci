import React, { Component } from 'react'
import axios from "axios";

export default class Fibonnaci extends Component {
  state = {
    seenIndices: [],
    values: {},
    index: ''
  }

  componentDidMount() {
    this.fetchValues();
    this.fetchIndices();
  }

  async fetchValues() {
    const values = await axios.get('/api/values/current');
    this.setState({ values: values.data });
  }

  async fetchIndices() {
    const seenIndices = await axios.get('/api/values/all');
    this.setState({ seenIndices: seenIndices.data });
  }

  async onSubmit(event) {
    event.preventDefault();

    await axios.post('/api/values', {
      index: this.state.index
    });

    this.setState({ index: '' });
  }

  renderSceneIndices() {
    return this.state.seenIndices
      .map(({ number }) => number)
      .join(', ');
  }

  renderValues() {
    const entries = [];

    for (let key in this.state.values) {
      entries.push(
        <div key={ key }>
          For index { key }, I calculated { this.state.values[{ key }] }
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.onSubmit() }>
          <label>Enter your index:</label>
          <input type="number"
            value={this.state.index}
            onChange={ event => this.setState({ index: event.target.value }) } />
          <button type="submit">Submit</button>
        </form>

        <h3>Indices I have seen:</h3>
        { this.renderSceneIndices() }

        <h3>Calculated Values:</h3>
        { this.renderValues() }
      </div>
    )
  }
}