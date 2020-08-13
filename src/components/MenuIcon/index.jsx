import React from 'react';
import PropTypes from 'prop-types';
import menuIconCss from './style';

export const MenuIcon = ({ icon, menuIsOpen, onClick }) => {
  return (
    <div css={() => menuIconCss(menuIsOpen)} onClick={onClick}>
      <i className={`icon-${icon}`} />
    </div>
  );
};

MenuIcon.propTypes = {
  onClick: PropTypes.func,
  menuIsOpen: PropTypes.bool,
  icon: PropTypes.string
};

MenuIcon.defaultProps = {
  icon: 'menu'
};

export default React.memo(MenuIcon);
