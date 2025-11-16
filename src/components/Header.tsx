import { COLORS, GRADIENTS, FONTS, RADIUS } from '../constants/theme';

const Header: React.FC = () => {
  return (
    <header
      style={{
        padding: '80px 40px 60px',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      {/* Decorative snowflakes around title */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '40px',
          opacity: '0.3',
          animation: 'shimmer 3s infinite',
        }}
      >
        ❄️
      </div>

      <h1
        style={{
          fontSize: FONTS.size['6xl'],
          fontWeight: FONTS.weight.light,
          color: COLORS.textPrimary,
          margin: '0 0 10px 0',
          letterSpacing: '8px',
          textTransform: 'uppercase',
          textShadow: '2px 2px 4px rgba(255,255,255,0.8)',
        }}
      >
        Winter Wishes
      </h1>

      <div
        style={{
          display: 'inline-block',
          padding: '15px 40px',
          background: GRADIENTS.nameTag,
          borderRadius: RADIUS.xl,
          marginBottom: '20px',
          border: '2px solid rgba(74, 144, 226, 0.2)',
        }}
      >
        <h2
          style={{
            fontSize: FONTS.size['3xl'],
            fontWeight: FONTS.weight.semibold,
            background: GRADIENTS.nameTagText,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: '0',
            letterSpacing: '2px',
          }}
        >
          The Murphy Family
        </h2>
      </div>

      <p
        style={{
          fontSize: FONTS.size.base,
          color: COLORS.textSecondary,
          lineHeight: '1.8',
          maxWidth: '600px',
          margin: '20px auto 0',
          fontWeight: FONTS.weight.light,
        }}
      >
        Celebrating a magical year of love, laughter, and unforgettable moments
      </p>

      <div
        aria-hidden="true"
        style={{
          marginTop: '30px',
          fontSize: FONTS.size.xl,
          letterSpacing: '10px',
          opacity: '0.3',
        }}
      >
        ❄️ ❄️ ❄️
      </div>
    </header>
  );
};

export default Header;
