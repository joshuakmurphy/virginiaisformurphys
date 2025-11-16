import { FamilyMember } from '../types';
import {
  COLORS,
  GRADIENTS,
  FONTS,
  RADIUS,
  SHADOWS,
  SPACING,
  getMemberGradient,
} from '../constants/theme';

interface ProfilePageProps {
  member: FamilyMember;
  allMembers: FamilyMember[];
  onBack: () => void;
  onMemberClick: (member: FamilyMember) => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ member, allMembers, onBack, onMemberClick }) => {
  return (
    <article
      style={{
        padding: SPACING.lg,
        minHeight: '100vh',
      }}
    >
      <button
        onClick={onBack}
        aria-label="Back to home page"
        className="back-button"
        style={{
          fontSize: FONTS.size.xs,
          color: COLORS.lightBlue,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontWeight: FONTS.weight.semibold,
          marginBottom: SPACING.lg,
          display: 'flex',
          alignItems: 'center',
          gap: SPACING.xs,
        }}
      >
        ← Back to Home
      </button>

      <header
        style={{
          textAlign: 'center',
          marginBottom: '50px',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            fontSize: FONTS.size['3xl'],
            marginBottom: '15px',
            opacity: '0.4',
          }}
        >
          ❄️
        </div>

        <div
          style={{
            width: '160px',
            height: '160px',
            margin: '0 auto 25px',
            borderRadius: '50%',
            background: getMemberGradient(member.color),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '80px',
            boxShadow: `0 20px 50px ${member.color}40`,
            border: `5px solid ${COLORS.white}`,
            position: 'relative',
          }}
        >
          <span role="img" aria-label={member.emoji}>
            {member.emoji}
          </span>
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              fontSize: FONTS.size.xl,
              animation: 'shimmer 2s infinite',
            }}
          >
            ✨
          </div>
        </div>

        <h2
          style={{
            fontSize: FONTS.size['5xl'],
            fontWeight: FONTS.weight.semibold,
            color: COLORS.textPrimary,
            margin: '0 0 10px 0',
          }}
        >
          {member.fullName}
        </h2>
        <p
          style={{
            fontSize: FONTS.size.base,
            color: COLORS.textTertiary,
            margin: '0',
          }}
        >
          {member.title}
        </p>
      </header>

      <div
        style={{
          maxWidth: '700px',
          margin: '0 auto',
        }}
      >
        <p
          style={{
            fontSize: FONTS.size.base,
            lineHeight: '1.8',
            color: COLORS.textSecondary,
            marginBottom: SPACING.lg,
            textAlign: 'center',
            fontWeight: FONTS.weight.light,
          }}
        >
          {member.story}
        </p>

        <section
          aria-labelledby={`${member.id}-highlights`}
          style={{
            background: GRADIENTS.highlightsBox,
            padding: '35px',
            borderRadius: RADIUS.sm,
            marginBottom: '35px',
            border: '2px solid rgba(74, 144, 226, 0.1)',
          }}
        >
          <h4
            id={`${member.id}-highlights`}
            style={{
              fontSize: FONTS.size.lg,
              fontWeight: FONTS.weight.semibold,
              color: member.color,
              marginBottom: SPACING.md,
              display: 'flex',
              alignItems: 'center',
              gap: SPACING.sm,
            }}
          >
            <span aria-hidden="true">❄️</span>
            2025 Highlights
          </h4>
          <ul
            style={{
              listStyle: 'none',
              padding: '0',
              margin: '0',
            }}
          >
            {member.highlights.map((highlight, idx) => (
              <li
                key={idx}
                style={{
                  fontSize: FONTS.size.sm,
                  lineHeight: '1.8',
                  color: COLORS.textSecondary,
                  marginBottom: '14px',
                  paddingLeft: '30px',
                  position: 'relative',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    left: '0',
                    color: member.color,
                    fontSize: '20px',
                  }}
                >
                  ✦
                </span>
                {highlight}
              </li>
            ))}
          </ul>
        </section>

        <blockquote
          style={{
            background: GRADIENTS.quote,
            padding: SPACING.lg,
            borderRadius: RADIUS.sm,
            textAlign: 'center',
            marginBottom: '50px',
            boxShadow: SHADOWS.quote,
            margin: '0 0 50px 0',
          }}
        >
          <p
            style={{
              fontSize: FONTS.size.xl,
              fontStyle: 'italic',
              color: COLORS.white,
              margin: '0',
              fontWeight: FONTS.weight.light,
            }}
          >
            "{member.quote}"
          </p>
        </blockquote>

        <nav
          aria-label="Other family member stories"
          style={{
            textAlign: 'center',
          }}
        >
          <h4
            style={{
              fontSize: FONTS.size.md,
              fontWeight: FONTS.weight.semibold,
              color: COLORS.textPrimary,
              marginBottom: '25px',
            }}
          >
            Read more family stories
          </h4>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '12px',
            }}
          >
            {allMembers
              .filter((m) => m.id !== member.id)
              .map((otherMember) => (
                <button
                  key={otherMember.id}
                  onClick={() => onMemberClick(otherMember)}
                  aria-label={`Read ${otherMember.fullName}'s story`}
                  className="member-nav-button"
                  data-color={otherMember.color}
                  style={{
                    fontSize: FONTS.size.xs,
                    color: otherMember.color,
                    padding: '12px 24px',
                    border: `2px solid ${otherMember.color}`,
                    backgroundColor: COLORS.white,
                    cursor: 'pointer',
                    fontWeight: FONTS.weight.semibold,
                    borderRadius: RADIUS.lg,
                    boxShadow: `${SHADOWS.button} ${otherMember.color}20`,
                    ['--member-color' as string]: otherMember.color,
                  }}
                >
                  {otherMember.name}
                </button>
              ))}
          </div>
        </nav>
      </div>
    </article>
  );
};

export default ProfilePage;
