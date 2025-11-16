import { COLORS, GRADIENTS, FONTS } from '../constants/theme';

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        background: GRADIENTS.footer,
        padding: '60px 40px',
        color: COLORS.white,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '20px',
          left: '10%',
          fontSize: '30px',
          opacity: '0.1',
        }}
      >
        ❄️
      </div>
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '30px',
          right: '15%',
          fontSize: '40px',
          opacity: '0.1',
        }}
      >
        ❄️
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          aria-hidden="true"
          style={{
            fontSize: FONTS.size['3xl'],
            marginBottom: '15px',
            opacity: '0.6',
          }}
        >
          ❄️ ✨ ❄️
        </div>
        <p
          style={{
            fontSize: '26px',
            fontWeight: FONTS.weight.light,
            margin: '0 0 10px 0',
            fontStyle: 'italic',
            letterSpacing: '1px',
          }}
        >
          Warmest wishes for a magical holiday season
        </p>
        <p
          style={{
            fontSize: FONTS.size.xs,
            color: 'rgba(255,255,255,0.7)',
            margin: '20px 0 0 0',
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}
        >
          The Murphy Family • Richmond, Virginia • 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
