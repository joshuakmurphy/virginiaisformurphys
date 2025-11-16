import { useState } from 'react';
import { FamilyMember } from './types';
import Snowflake from './components/Snowflake';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import Footer from './components/Footer';
import { familyMembers } from './data/familyMembers';
import './App.css';

const WinterWonderlandCard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'profile'>('home');
  const [selectedMember, setSelectedMember] = useState<FamilyMember | null>(null);

  const viewMemberStory = (member: FamilyMember) => {
    setSelectedMember(member);
    setCurrentPage('profile');
  };

  const goHome = () => {
    setCurrentPage('home');
    setSelectedMember(null);
  };

  return (
    <div style={{
      background: 'linear-gradient(180deg, #E8F4F8 0%, #FFFFFF 50%, #F0F8FF 100%)',
      minHeight: '100vh',
      padding: '0',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <style>
        {`
          @keyframes fall {
            0% { transform: translateY(-100px) rotate(0deg); }
            100% { transform: translateY(100vh) rotate(360deg); }
          }
          @keyframes shimmer {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
          }
        `}
      </style>

      {/* Floating snowflakes */}
      <Snowflake size="20px" top="-50px" left="10%" delay={0} />
      <Snowflake size="15px" top="-30px" left="25%" delay={1} />
      <Snowflake size="18px" top="-70px" left="40%" delay={2} />
      <Snowflake size="12px" top="-40px" left="60%" delay={0.5} />
      <Snowflake size="22px" top="-60px" left="75%" delay={1.5} />
      <Snowflake size="16px" top="-45px" left="85%" delay={2.5} />

      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {currentPage === 'home' ? (
          <HomePage
            familyMembers={familyMembers}
            onMemberClick={viewMemberStory}
          />
        ) : (
          selectedMember && (
            <ProfilePage
              member={selectedMember}
              allMembers={familyMembers}
              onBack={goHome}
              onMemberClick={viewMemberStory}
            />
          )
        )}

        <Footer />
      </div>
    </div>
  );
};

export default WinterWonderlandCard;
