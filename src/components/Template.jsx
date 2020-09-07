/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import TemplateDefault from './TemplateDefault';
import Header from './Header';

const Template = ({
  withHeader,
  headTitle,
  headDescription,
  title,
  backRouter,
  children
}) => (
  <TemplateDefault title={headTitle} description={headDescription}>
    {withHeader && <Header title={title} backRouter={backRouter} />}
    {children && children}
  </TemplateDefault>
);

Template.propTypes = {
  withHeader: PropTypes.bool,
  headTitle: PropTypes.string,
  headDescription: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  backRouter: PropTypes.string
};

Template.defaultProps = {
  withHeader: false,
  headTitle: '',
  headDescription: '',
  title: '',
  icon: 'menu'
};

export default Template;
