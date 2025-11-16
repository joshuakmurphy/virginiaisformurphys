import { FamilyMember } from '../types';
import { COLORS, GRADIENTS, FONTS, RADIUS, SHADOWS, SPACING } from '../constants/theme';
import Header from './Header';
import FamilyMemberCard from './FamilyMemberCard';

interface HomePageProps {
  familyMembers: FamilyMember[];
  onMemberClick: (member: FamilyMember) => void;
}

const HomePage: React.FC<HomePageProps> = ({ familyMembers, onMemberClick }) => {
  return (
    <>
      <Header />

      {/* Hero section with winter overlay */}
      <section
        aria-label="Family year in review"
        style={{
          background: GRADIENTS.hero,
          padding: '60px 40px',
          margin: `0 ${SPACING.lg} 60px`,
          borderRadius: RADIUS.md,
          position: 'relative',
          overflow: 'hidden',
          boxShadow: SHADOWS.hero,
        }}
      >
        {/* Decorative elements */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            fontSize: '60px',
            opacity: '0.2',
            transform: 'rotate(15deg)',
          }}
        >
          ❄️
        </div>
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            fontSize: '50px',
            opacity: '0.2',
            transform: 'rotate(-15deg)',
          }}
        >
          ❄️
        </div>

        <div
          style={{
            maxWidth: '600px',
            color: COLORS.white,
            position: 'relative',
            zIndex: 1,
          }}
        >
          <h3
            style={{
              fontSize: FONTS.size['4xl'],
              fontWeight: FONTS.weight.semibold,
              marginBottom: SPACING.md,
              lineHeight: '1.3',
            }}
          >
            A Year to Remember
          </h3>
          <p
            style={{
              fontSize: FONTS.size.base,
              lineHeight: '1.8',
              opacity: '0.95',
              fontWeight: FONTS.weight.light,
            }}
          >
            From professional triumphs and spiritual milestones to creative adventures and welcoming
            Willow to our family, 2025 has been a year filled with joy, growth, and countless
            precious memories.
          </p>
        </div>
      </section>

      {/* Family Grid with winter theme */}
      <section
        aria-label="Family members"
        style={{
          padding: `0 ${SPACING.lg} 80px`,
        }}
      >
        <h3
          style={{
            fontSize: FONTS.size['2xl'],
            fontWeight: FONTS.weight.light,
            color: COLORS.textPrimary,
            textAlign: 'center',
            marginBottom: '50px',
            textTransform: 'uppercase',
            letterSpacing: '4px',
          }}
        >
          Our Family
        </h3>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: SPACING.lg,
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {familyMembers.map((member) => (
            <FamilyMemberCard key={member.id} member={member} onClick={onMemberClick} />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
