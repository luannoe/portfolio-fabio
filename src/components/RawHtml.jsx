import React from 'react';
import PropTypes from 'prop-types';

const RawHtml = ({ children, tag, ...props }) => {
  const Tag = tag;
  return <Tag dangerouslySetInnerHTML={{ __html: children }} {...props} />;
};

RawHtml.propTypes = {
  children: PropTypes.string.isRequired,
  tag: PropTypes.string
};

RawHtml.defaultProps = {
  tag: 'div'
};

export default RawHtml;
