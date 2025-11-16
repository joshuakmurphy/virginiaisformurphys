const Header: React.FC = () => {
  return (
    <div style={{
      padding: '80px 40px 60px',
      textAlign: 'center',
      position: 'relative'
    }}>
      {/* Decorative snowflakes around title */}
      <div style={{
        position: 'absolute',
        top: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '40px',
        opacity: '0.3',
        animation: 'shimmer 3s infinite'
      }}>
        ❄️
      </div>

      <h1 style={{
        fontSize: '64px',
        fontWeight: '300',
        color: '#2C5F7C',
        margin: '0 0 10px 0',
        letterSpacing: '8px',
        textTransform: 'uppercase',
        textShadow: '2px 2px 4px rgba(255,255,255,0.8)'
      }}>
        Winter Wishes
      </h1>

      <div style={{
        display: 'inline-block',
        padding: '15px 40px',
        background: 'linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(155, 89, 182, 0.1) 100%)',
        borderRadius: '50px',
        marginBottom: '20px',
        border: '2px solid rgba(74, 144, 226, 0.2)'
      }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: '600',
          background: 'linear-gradient(135deg, #4A90E2 0%, #9B59B6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          margin: '0',
          letterSpacing: '2px'
        }}>
          The Murphy Family
        </h2>
      </div>

      <p style={{
        fontSize: '18px',
        color: '#5A7C8F',
        lineHeight: '1.8',
        maxWidth: '600px',
        margin: '20px auto 0',
        fontWeight: '300'
      }}>
        Celebrating a magical year of love, laughter, and unforgettable moments
      </p>

      <div style={{
        marginTop: '30px',
        fontSize: '24px',
        letterSpacing: '10px',
        opacity: '0.3'
      }}>
        ❄️ ❄️ ❄️
      </div>
    </div>
  );
};

export default Header;
