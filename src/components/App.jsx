import Feedback from './Feedback';

export const App = () => {
  return (
    <div
      style={{
        paddingTop: '60px',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Feedback />
    </div>
  );
};
