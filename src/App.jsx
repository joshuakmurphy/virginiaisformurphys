import React, { useState } from 'react';

const WinterWonderlandCard = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedMember, setSelectedMember] = useState(null);

  const familyMembers = [
    {
      id: 'josh',
      name: 'Josh',
      fullName: 'Josh Murphy',
      title: 'Dad',
      emoji: '👨',
      color: '#4A90E2',
      highlights: [
        'Enjoyed professional growth and new opportunities',
        'Worked on exciting technology projects',
        'Continued learning and development',
        'Created memorable experiences with family',
        'Focused on work-life balance and personal wellness'
      ],
      story: 'A year of growth and balance, Josh has focused on being present for his family while pursuing meaningful work. Whether it\'s helping with homework or working on new projects, he\'s found joy in both the big moments and the everyday.',
      quote: 'Making every moment count.'
    },
    {
      id: 'amy',
      name: 'Amy',
      fullName: 'Amy Murphy',
      title: 'Mom',
      emoji: '👩',
      color: '#9B59B6',
      highlights: [
        'Organized wonderful family celebrations',
        'Supported everyone through life\'s ups and downs',
        'Created a warm and welcoming home',
        'Balanced work and family with grace'
      ],
      story: 'The heart of the Murphy family, Amy has made 2025 a year filled with love, laughter, and togetherness. Her warmth and dedication make every day special.',
      quote: 'Family is everything.'
    },
    {
      id: 'abby',
      name: 'Abby',
      fullName: 'Abby Murphy',
      title: 'Age 15',
      emoji: '👧',
      color: '#E91E63',
      highlights: [
        'Excelled in school and activities',
        'Developed new interests and hobbies',
        'Showed maturity and leadership',
        'Made wonderful memories with friends'
      ],
      story: 'At 15, Abby continues to impress with her dedication and kindness. This year brought new adventures, achievements, and growth.',
      quote: 'Growing stronger every day.'
    },
    {
      id: 'serena',
      name: 'Serena',
      fullName: 'Serena Murphy',
      title: 'Age 9',
      emoji: '👧',
      color: '#20B2AA',
      highlights: [
        'Explored creativity through art and play',
        'Brought joy and laughter to every day',
        'Made new friends and discoveries',
        'Showed kindness and imagination'
      ],
      story: 'Serena\'s creativity and energy make every day an adventure. Her imagination knows no bounds, and her smile lights up the room.',
      quote: 'Always creating, always exploring.'
    },
    {
      id: 'willow',
      name: 'Willow',
      fullName: 'Willow',
      title: 'Family Dog',
      emoji: '🐕',
      color: '#8D6E63',
      highlights: [
        'Brought endless joy to the family',
        'Learned new tricks and commands',
        'Provided unlimited cuddles',
        'Made the house feel complete'
      ],
      story: 'The newest Murphy family member, Willow has filled our home with wagging tails, wet noses, and unconditional love.',
      quote: '*woof woof*'
    }
  ];

  const viewMemberStory = (member) => {
    setSelectedMember(member);
    setCurrentPage('profile');
  };

  const goHome = () => {
    setCurrentPage('home');
    setSelectedMember(null);
  };

  // Snowflake component
  const Snowflake = ({ size, top, left, delay }) => (
    <div style={{
      position: 'absolute',
      top: top,
      left: left,
      fontSize: size,
      opacity: '0.6',
      animation: `fall ${5 + delay}s linear infinite`,
      animationDelay: `${delay}s`
    }}>
      ❄️
    </div>
  );

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
          <>
            {/* Header with winter theme */}
            <div style={{
              padding: '80px 40px 60px',
              textAlign: 'center',
              position: 'relative'
            }}>
              {/* Decorative snowflakes around title */}
              <div style={{
                position: 'absolute',
                top: '40px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '40px',
                opacity: '0.3',
                animation: 'shimmer 3s infinite'
              }}>
                ❄️
              </div>

              <h1 style={{
                fontSize: '64px',
                fontWeight: '300',
                color: '#2C5F7C',
                margin: '0 0 10px 0',
                letterSpacing: '8px',
                textTransform: 'uppercase',
                textShadow: '2px 2px 4px rgba(255,255,255,0.8)'
              }}>
                Winter Wishes
              </h1>

              <div style={{
                display: 'inline-block',
                padding: '15px 40px',
                background: 'linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(155, 89, 182, 0.1) 100%)',
                borderRadius: '50px',
                marginBottom: '20px',
                border: '2px solid rgba(74, 144, 226, 0.2)'
              }}>
                <h2 style={{
                  fontSize: '32px',
                  fontWeight: '600',
                  background: 'linear-gradient(135deg, #4A90E2 0%, #9B59B6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  margin: '0',
                  letterSpacing: '2px'
                }}>
                  The Murphy Family
                </h2>
              </div>

              <p style={{
                fontSize: '18px',
                color: '#5A7C8F',
                lineHeight: '1.8',
                maxWidth: '600px',
                margin: '20px auto 0',
                fontWeight: '300'
              }}>
                Celebrating a magical year of love, laughter, and unforgettable moments
              </p>

              <div style={{
                marginTop: '30px',
                fontSize: '24px',
                letterSpacing: '10px',
                opacity: '0.3'
              }}>
                ❄️ ❄️ ❄️
              </div>
            </div>

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
                {familyMembers.map((member, index) => (
                  <div
                    key={member.id}
                    onClick={() => viewMemberStory(member)}
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
                ))}
              </div>
            </div>
          </>
        ) : (
          /* Profile Page */
          <div style={{
            padding: '40px',
            minHeight: '100vh'
          }}>
            <button
              onClick={goHome}
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
                background: `linear-gradient(135deg, ${selectedMember.color} 0%, ${selectedMember.color}dd 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '80px',
                boxShadow: `0 20px 50px ${selectedMember.color}40`,
                border: '5px solid #fff',
                position: 'relative'
              }}>
                {selectedMember.emoji}
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
                {selectedMember.fullName}
              </h2>
              <p style={{
                fontSize: '18px',
                color: '#7A99AC',
                margin: '0'
              }}>
                {selectedMember.title}
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
                {selectedMember.story}
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
                  color: selectedMember.color,
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
                  {selectedMember.highlights.map((highlight, idx) => (
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
                        color: selectedMember.color,
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
                  "{selectedMember.quote}"
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
                  {familyMembers
                    .filter(m => m.id !== selectedMember.id)
                    .map(member => (
                      <button
                        key={member.id}
                        onClick={() => viewMemberStory(member)}
                        style={{
                          fontSize: '14px',
                          color: member.color,
                          padding: '12px 24px',
                          border: `2px solid ${member.color}`,
                          backgroundColor: '#fff',
                          cursor: 'pointer',
                          fontWeight: '600',
                          borderRadius: '30px',
                          transition: 'all 0.3s ease',
                          boxShadow: `0 4px 12px ${member.color}20`
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = member.color;
                          e.currentTarget.style.color = '#fff';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#fff';
                          e.currentTarget.style.color = member.color;
                        }}
                      >
                        {member.name}
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
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
      </div>
    </div>
  );
};

export default WinterWonderlandCard;
