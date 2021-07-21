import React from 'react'
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux'

function Congrats({listComplete=false}) {
  
    const congratsMessage=
    <span data-test='congrats-message'>
            Congratulations! You have successfully completed your List!
    </span>;
    return (
      <div data-test="component-congrats">
            {listComplete && congratsMessage}
      </div>
    )
}

Congrats.propTypes={
    listComplete: PropTypes.bool.isRequired,
}

export default Congrats
