import { FamilyMember } from '../types';

interface ProfilePageProps {
  member: FamilyMember;
  allMembers: FamilyMember[];
  onBack: () => void;
  onMemberClick: (member: FamilyMember) => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ member, allMembers, onBack, onMemberClick }) => {
  return (
    <div style={{
      padding: '40px',
      minHeight: '100vh'
    }}>
      <button
        onClick={onBack}
        style={{
          fontSize: '14px',
          color: '#4A90E2',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontWeight: '600',
          marginBottom: '40px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}
      >
        ← Back to Home
      </button>

      <div style={{
        textAlign: 'center',
        marginBottom: '50px'
      }}>
        <div style={{
          fontSize: '32px',
          marginBottom: '15px',
          opacity: '0.4'
        }}>
          ❄️
        </div>

        <div style={{
          width: '160px',
          height: '160px',
          margin: '0 auto 25px',
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${member.color} 0%, ${member.color}dd 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '80px',
          boxShadow: `0 20px 50px ${member.color}40`,
          border: '5px solid #fff',
          position: 'relative'
        }}>
          {member.emoji}
          <div style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            fontSize: '24px',
            animation: 'shimmer 2s infinite'
          }}>
            ✨
          </div>
        </div>

        <h2 style={{
          fontSize: '42px',
          fontWeight: '600',
          color: '#2C5F7C',
          margin: '0 0 10px 0'
        }}>
          {member.fullName}
        </h2>
        <p style={{
          fontSize: '18px',
          color: '#7A99AC',
          margin: '0'
        }}>
          {member.title}
        </p>
      </div>

      <div style={{
        maxWidth: '700px',
        margin: '0 auto'
      }}>
        <p style={{
          fontSize: '18px',
          lineHeight: '1.8',
          color: '#5A7C8F',
          marginBottom: '40px',
          textAlign: 'center',
          fontWeight: '300'
        }}>
          {member.story}
        </p>

        <div style={{
          background: 'linear-gradient(135deg, rgba(74, 144, 226, 0.05) 0%, rgba(155, 89, 182, 0.05) 100%)',
          padding: '35px',
          borderRadius: '16px',
          marginBottom: '35px',
          border: '2px solid rgba(74, 144, 226, 0.1)'
        }}>
          <h4 style={{
            fontSize: '22px',
            fontWeight: '600',
            color: member.color,
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span>❄️</span>
            2025 Highlights
          </h4>
          <ul style={{
            listStyle: 'none',
            padding: '0',
            margin: '0'
          }}>
            {member.highlights.map((highlight, idx) => (
              <li key={idx} style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#5A7C8F',
                marginBottom: '14px',
                paddingLeft: '30px',
                position: 'relative'
              }}>
                <span style={{
                  position: 'absolute',
                  left: '0',
                  color: member.color,
                  fontSize: '20px'
                }}>✦</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '40px',
          borderRadius: '16px',
          textAlign: 'center',
          marginBottom: '50px',
          boxShadow: '0 15px 40px rgba(102, 126, 234, 0.2)'
        }}>
          <p style={{
            fontSize: '24px',
            fontStyle: 'italic',
            color: '#fff',
            margin: '0',
            fontWeight: '300'
          }}>
            "{member.quote}"
          </p>
        </div>

        <div style={{
          textAlign: 'center'
        }}>
          <h4 style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#2C5F7C',
            marginBottom: '25px'
          }}>
            Read more family stories
          </h4>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px'
          }}>
            {allMembers
              .filter(m => m.id !== member.id)
              .map(otherMember => (
                <button
                  key={otherMember.id}
                  onClick={() => onMemberClick(otherMember)}
                  style={{
                    fontSize: '14px',
                    color: otherMember.color,
                    padding: '12px 24px',
                    border: `2px solid ${otherMember.color}`,
                    backgroundColor: '#fff',
                    cursor: 'pointer',
                    fontWeight: '600',
                    borderRadius: '30px',
                    transition: 'all 0.3s ease',
                    boxShadow: `0 4px 12px ${otherMember.color}20`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = otherMember.color;
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#fff';
                    e.currentTarget.style.color = otherMember.color;
                  }}
                >
                  {otherMember.name}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
