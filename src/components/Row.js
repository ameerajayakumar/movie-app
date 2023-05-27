const Row = ({ length, columns, gap }) => {
  const rowStyles = {
    display: 'flex',
    justifyContent: length < columns ? 'flex-start' : 'space-between',
    alignItems: 'center',
    gap: length < columns && `${gap}px`,
    width: '100%',
  };

  return <div style={rowStyles} />;
};
export default Row;
