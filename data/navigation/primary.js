import PropTypes from 'prop-types';
import navigation from './primary.yml';

const sectionLinkShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  external: PropTypes.bool,
});

const sectionItemsType = PropTypes.objectOf(sectionLinkShape);

const sectionShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  activeSelector: PropTypes.string.isRequired,
  footer: PropTypes.bool,
  header: PropTypes.bool,
  items: sectionItemsType.isRequired,
});

const linkShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
  activeSelector: PropTypes.string,
  sections: PropTypes.objectOf(sectionShape),
});

const linksShape = PropTypes.shape({
  links: PropTypes.objectOf(linkShape).isRequired,
});

const navigationShape = PropTypes.shape({
  navigation: linksShape.isRequired,
});

const sectionsShape = PropTypes.shape({
  sections: PropTypes.objectOf(sectionShape).isRequired,
});

export {
  navigation,
  sectionLinkShape,
  sectionItemsType,
  sectionShape,
  linkShape,
  linksShape,
  navigationShape,
  sectionsShape,
};
