const Footer: React.FC = () => {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #2C5F7C 0%, #1E3A4F 100%)',
      padding: '60px 40px',
      color: '#fff',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '10%',
        fontSize: '30px',
        opacity: '0.1'
      }}>
        ❄️
      </div>
      <div style={{
        position: 'absolute',
        bottom: '30px',
        right: '15%',
        fontSize: '40px',
        opacity: '0.1'
      }}>
        ❄️
      </div>

      <div style={{
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          fontSize: '32px',
          marginBottom: '15px',
          opacity: '0.6'
        }}>
          ❄️ ✨ ❄️
        </div>
        <p style={{
          fontSize: '26px',
          fontWeight: '300',
          margin: '0 0 10px 0',
          fontStyle: 'italic',
          letterSpacing: '1px'
        }}>
          Warmest wishes for a magical holiday season
        </p>
        <p style={{
          fontSize: '14px',
          color: 'rgba(255,255,255,0.7)',
          margin: '20px 0 0 0',
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }}>
          The Murphy Family • Richmond, Virginia • 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
