import { Box, Title } from './Section.styled';
import PropTypes from 'prop-types';

const Section = props => {
  const { title, children } = props;
  return (
    <Box>
      {title && <Title title={title}>{title}</Title>}
      {children}
    </Box>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};
