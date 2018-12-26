import React from 'react';
import { PropTypes } from 'prop-types';

const ProjectCard = ({ active, children, href }) => (
  <div className={`yo-project-card${active && ' yo-project-card--active'}${href && (' yo-project-card__as-link')}`}>
    {
      href
        ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        )
        : children
    }
    {}
  </div>
);

ProjectCard.defaultProps = {
  active: '',
  href: '',
};

ProjectCard.propTypes = {
  active: PropTypes.oneOf(['', true, false]),
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
};

export default ProjectCard;
