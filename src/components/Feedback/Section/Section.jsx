import { Box, Title } from './Section.styled';

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
