import PropTypes from "prop-types";

const commonPropTypes = {
  intl: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default commonPropTypes;
