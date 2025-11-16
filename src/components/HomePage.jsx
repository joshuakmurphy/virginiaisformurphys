import Header from './Header';
import FamilyMemberCard from './FamilyMemberCard';

const HomePage = ({ familyMembers, onMemberClick }) => {
  return (
    <>
      <Header />

      {/* Hero section with winter overlay */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '60px 40px',
        margin: '0 40px 60px',
        borderRadius: '20px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(102, 126, 234, 0.3)'
      }}>
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          fontSize: '60px',
          opacity: '0.2',
          transform: 'rotate(15deg)'
        }}>
          ❄️
        </div>
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          fontSize: '50px',
          opacity: '0.2',
          transform: 'rotate(-15deg)'
        }}>
          ❄️
        </div>

        <div style={{
          maxWidth: '600px',
          color: '#fff',
          position: 'relative',
          zIndex: 1
        }}>
          <h3 style={{
            fontSize: '36px',
            fontWeight: '600',
            marginBottom: '20px',
            lineHeight: '1.3'
          }}>
            A Year to Remember
          </h3>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            opacity: '0.95',
            fontWeight: '300'
          }}>
            From professional triumphs and spiritual milestones to creative adventures and welcoming Willow to our family, 2025 has been a year filled with joy, growth, and countless precious memories.
          </p>
        </div>
      </div>

      {/* Family Grid with winter theme */}
      <div style={{
        padding: '0 40px 80px'
      }}>
        <h3 style={{
          fontSize: '28px',
          fontWeight: '300',
          color: '#2C5F7C',
          textAlign: 'center',
          marginBottom: '50px',
          textTransform: 'uppercase',
          letterSpacing: '4px'
        }}>
          Our Family
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '40px',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {familyMembers.map((member) => (
            <FamilyMemberCard
              key={member.id}
              member={member}
              onClick={onMemberClick}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
