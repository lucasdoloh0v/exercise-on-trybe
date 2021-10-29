import React from "react";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight, image, id } } = this.props;
    return (
      <div className={id}>
        <p>{ name }</p>
        <img src={ image } alt={ name }></img>
        <p>{ type }</p>
        <p>{`Peso Médio: ${averageWeight.value}${averageWeight.measurementUnit}`}</p>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.number,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    })
  }).isRequired
}

export default Pokemon;
