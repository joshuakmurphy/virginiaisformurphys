const FamilyMemberCard = ({ member, onClick }) => {
  return (
    <div
      onClick={() => onClick(member)}
      style={{
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
        position: 'relative'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Snowflake decoration above */}
      <div style={{
        fontSize: '24px',
        marginBottom: '10px',
        opacity: '0.4'
      }}>
        ❄️
      </div>

      <div style={{
        width: '140px',
        height: '140px',
        margin: '0 auto 20px',
        borderRadius: '50%',
        background: `linear-gradient(135deg, ${member.color} 0%, ${member.color}dd 100%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '64px',
        boxShadow: `0 15px 35px ${member.color}40`,
        border: '4px solid #fff',
        position: 'relative'
      }}>
        {member.emoji}

        {/* Sparkle effect */}
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          fontSize: '20px',
          animation: 'shimmer 2s infinite'
        }}>
          ✨
        </div>
      </div>

      <h4 style={{
        fontSize: '22px',
        fontWeight: '600',
        color: '#2C5F7C',
        marginBottom: '5px'
      }}>
        {member.name}
      </h4>
      <p style={{
        fontSize: '14px',
        color: '#7A99AC',
        margin: '0'
      }}>
        {member.title}
      </p>
    </div>
  );
};

export default FamilyMemberCard;
