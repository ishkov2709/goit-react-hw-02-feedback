const customizeText = text => {
  if (text === 'positivePercentage') return 'Positive feedback';
  return `${text[0].toUpperCase()}${text.slice(1, text.length)}`;
};

export default customizeText;
