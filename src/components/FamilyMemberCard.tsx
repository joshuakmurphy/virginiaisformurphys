import { FamilyMember } from '../types';
import { COLORS, FONTS, getMemberGradient, getShadowWithColor, SHADOWS } from '../constants/theme';

interface FamilyMemberCardProps {
  member: FamilyMember;
  onClick: (member: FamilyMember) => void;
}

const FamilyMemberCard: React.FC<FamilyMemberCardProps> = ({ member, onClick }) => {
  return (
    <button
      onClick={() => onClick(member)}
      aria-label={`Read ${member.fullName}'s story`}
      className="family-member-card"
      style={{
        textAlign: 'center',
        position: 'relative',
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        width: '100%',
      }}
    >
      {/* Snowflake decoration above */}
      <div
        aria-hidden="true"
        style={{
          fontSize: FONTS.size.xl,
          marginBottom: '10px',
          opacity: '0.4',
        }}
      >
        ❄️
      </div>

      <div
        style={{
          width: '140px',
          height: '140px',
          margin: '0 auto 20px',
          borderRadius: '50%',
          background: getMemberGradient(member.color),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '64px',
          boxShadow: getShadowWithColor(SHADOWS.card, member.color),
          border: `4px solid ${COLORS.white}`,
          position: 'relative',
        }}
      >
        <span role="img" aria-label={member.emoji}>
          {member.emoji}
        </span>

        {/* Sparkle effect */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            fontSize: '20px',
            animation: 'shimmer 2s infinite',
          }}
        >
          ✨
        </div>
      </div>

      <h4
        style={{
          fontSize: FONTS.size.lg,
          fontWeight: FONTS.weight.semibold,
          color: COLORS.textPrimary,
          marginBottom: '5px',
        }}
      >
        {member.name}
      </h4>
      <p
        style={{
          fontSize: FONTS.size.xs,
          color: COLORS.textTertiary,
          margin: '0',
        }}
      >
        {member.title}
      </p>
    </button>
  );
};

export default FamilyMemberCard;
