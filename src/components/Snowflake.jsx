const Snowflake = ({ size, top, left, delay }) => (
  <div style={{
    position: 'absolute',
    top: top,
    left: left,
    fontSize: size,
    opacity: '0.6',
    animation: `fall ${5 + delay}s linear infinite`,
    animationDelay: `${delay}s`
  }}>
    ❄️
  </div>
);

export default Snowflake;
