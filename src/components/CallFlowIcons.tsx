import React from 'react';
// SVG Icons for BM AI Voice Bot Call Flows
// These can be used as React components or copied as standalone SVGs

// INBOUND CALL FLOW ICONS

// 1. Customer Calls - Phone ringing with waves
export const CustomerCallsIcon = ({ size = 32, color = "white" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 4C26.4183 4 30 7.58172 30 12V20C30 24.4183 26.4183 28 22 28H10C5.58172 28 2 24.4183 2 20V12C2 7.58172 5.58172 4 10 4H22Z" stroke={color} strokeWidth="2"/>
    <path d="M8 12C8 10.8954 8.89543 10 10 10H12C13.1046 10 14 10.8954 14 12V20C14 21.1046 13.1046 22 12 22H10C8.89543 22 8 21.1046 8 20V12Z" fill={color}/>
    <path d="M18 12C18 10.8954 18.8954 10 20 10H22C23.1046 10 24 10.8954 24 12V20C24 21.1046 23.1046 22 22 22H20C18.8954 22 18 21.1046 18 20V12Z" fill={color}/>
    <path d="M14 14H18" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M14 18H18" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    {/* Sound waves */}
    <path d="M28 8C28 8 30 10 30 12C30 14 28 16 28 16" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M26 10C26 10 27 11 27 12C27 13 26 14 26 14" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// 2. AI Answers - Robot head with microphone
export const AIAnswersIcon = ({ size = 32, color = "white" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="8" width="20" height="18" rx="4" stroke={color} strokeWidth="2"/>
    <circle cx="12" cy="14" r="2" fill={color}/>
    <circle cx="20" cy="14" r="2" fill={color}/>
    <path d="M10 20H22" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    {/* Microphone */}
    <rect x="14" y="2" width="4" height="6" rx="2" stroke={color} strokeWidth="1.5"/>
    <path d="M12 6V7C12 9.20914 13.7909 11 16 11C18.2091 11 20 9.20914 20 7V6" stroke={color} strokeWidth="1.5"/>
    <path d="M16 11V13" stroke={color} strokeWidth="1.5"/>
    {/* AI indicators */}
    <circle cx="8" cy="4" r="1" fill={color} opacity="0.7"/>
    <circle cx="12" cy="2" r="1" fill={color} opacity="0.5"/>
    <circle cx="20" cy="2" r="1" fill={color} opacity="0.5"/>
    <circle cx="24" cy="4" r="1" fill={color} opacity="0.7"/>
  </svg>
);

// 3. Request/Transact - Hand with money/card
export const RequestTransactIcon = ({ size = 32, color = "white" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10C4 8.89543 4.89543 8 6 8H26C27.1046 8 28 8.89543 28 10V22C28 23.1046 27.1046 24 26 24H6C4.89543 24 4 23.1046 4 22V10Z" stroke={color} strokeWidth="2"/>
    <rect x="6" y="12" width="20" height="4" fill={color} opacity="0.3"/>
    <circle cx="24" cy="19" r="1.5" fill={color}/>
    <path d="M8 19H16" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    {/* Transaction arrows */}
    <path d="M16 4L20 6L16 8" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 6H12" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 28L12 26L16 24" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 26H20" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// 4. AI Resolves/Escalates - Gear with arrow up
export const AIResolvesIcon = ({ size = 32, color = "white" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2L18.5 7H23.5L19.75 10.25L21.25 15.25L16 12L10.75 15.25L12.25 10.25L8.5 7H13.5L16 2Z" stroke={color} strokeWidth="2" fill={color} opacity="0.3"/>
    <circle cx="16" cy="16" r="6" stroke={color} strokeWidth="2"/>
    <circle cx="16" cy="16" r="2" fill={color}/>
    {/* Gear teeth */}
    <rect x="15" y="6" width="2" height="4" fill={color}/>
    <rect x="15" y="22" width="2" height="4" fill={color}/>
    <rect x="6" y="15" width="4" height="2" fill={color}/>
    <rect x="22" y="15" width="4" height="2" fill={color}/>
    {/* Escalation arrow */}
    <path d="M24 8L27 5L30 8" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M27 5V11" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// 5. Analytics - Chart with data points
export const AnalyticsIcon = ({ size = 32, color = "white" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="28" height="24" rx="2" stroke={color} strokeWidth="2"/>
    <path d="M6 24V16L10 12L14 18L18 10L22 14L26 8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="6" cy="16" r="2" fill={color}/>
    <circle cx="10" cy="12" r="2" fill={color}/>
    <circle cx="14" cy="18" r="2" fill={color}/>
    <circle cx="18" cy="10" r="2" fill={color}/>
    <circle cx="22" cy="14" r="2" fill={color}/>
    <circle cx="26" cy="8" r="2" fill={color}/>
    {/* Grid lines */}
    <path d="M6 8V24M10 8V24M14 8V24M18 8V24M22 8V24M26 8V24" stroke={color} strokeWidth="0.5" opacity="0.3"/>
  </svg>
);

// OUTBOUND CALL FLOW ICONS

// 1. Campaign Scheduled - Calendar with clock
export const CampaignScheduledIcon = ({ size = 32, color = "white" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="24" height="20" rx="2" stroke={color} strokeWidth="2"/>
    <path d="M10 2V6M22 2V6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M4 12H28" stroke={color} strokeWidth="2"/>
    {/* Calendar grid */}
    <path d="M9 16H11M15 16H17M21 16H23" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 20H11M15 20H17M21 20H23" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    {/* Clock overlay */}
    <circle cx="20" cy="20" r="6" fill="rgba(0,0,0,0.8)" stroke={color} strokeWidth="1.5"/>
    <path d="M20 17V20L22 22" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// 2. AI Dials - Phone with AI brain
export const AIDialsIcon = ({ size = 32, color = "white" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 4C6.89543 4 6 4.89543 6 6V26C6 27.1046 6.89543 28 8 28H24C25.1046 28 26 27.1046 26 26V6C26 4.89543 25.1046 4 24 4H8Z" stroke={color} strokeWidth="2"/>
    <rect x="10" y="8" width="12" height="8" rx="1" stroke={color} strokeWidth="1.5"/>
    {/* AI brain pattern */}
    <path d="M12 10C12 10 14 9 16 10C18 9 20 10 20 10" stroke={color} strokeWidth="1"/>
    <path d="M12 12C12 12 14 11 16 12C18 11 20 12 20 12" stroke={color} strokeWidth="1"/>
    <path d="M12 14C12 14 14 13 16 14C18 13 20 14 20 14" stroke={color} strokeWidth="1"/>
    {/* Dial buttons */}
    <circle cx="11" cy="20" r="1.5" fill={color} opacity="0.7"/>
    <circle cx="16" cy="20" r="1.5" fill={color} opacity="0.7"/>
    <circle cx="21" cy="20" r="1.5" fill={color} opacity="0.7"/>
    <circle cx="11" cy="24" r="1.5" fill={color} opacity="0.7"/>
    <circle cx="16" cy="24" r="1.5" fill={color} opacity="0.7"/>
    <circle cx="21" cy="24" r="1.5" fill={color} opacity="0.7"/>
    {/* Outgoing signal */}
    <path d="M28 2C28 2 30 4 30 6C30 8 28 10 28 10" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M26 4C26 4 27 5 27 6C27 7 26 8 26 8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// 3. Customer Interacts - Person with speech bubbles
export const CustomerInteractsIcon = ({ size = 32, color = "white" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="12" r="6" stroke={color} strokeWidth="2"/>
    <path d="M8 28C8 24 10 20 16 20C22 20 24 24 24 28" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    {/* Speech bubble 1 */}
    <ellipse cx="8" cy="8" rx="6" ry="4" fill={color} opacity="0.3" stroke={color} strokeWidth="1"/>
    <path d="M5 10L3 12L7 11Z" fill={color}/>
    {/* Speech bubble 2 */}
    <ellipse cx="24" cy="6" rx="5" ry="3" fill={color} opacity="0.3" stroke={color} strokeWidth="1"/>
    <path d="M27 8L29 10L25 9Z" fill={color}/>
    {/* Interaction indicators */}
    <circle cx="16" cy="8" r="1" fill={color}/>
    <circle cx="12" cy="6" r="0.8" fill={color} opacity="0.7"/>
    <circle cx="20" cy="4" r="0.8" fill={color} opacity="0.7"/>
  </svg>
);

// 4. AI Records - Document with checkmark
export const AIRecordsIcon = ({ size = 32, color = "white" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 4C5.44772 4 5 4.44772 5 5V27C5 27.5523 5.44772 28 6 28H26C26.5523 28 27 27.5523 27 27V9L21 3H6Z" stroke={color} strokeWidth="2"/>
    <path d="M21 3V9H27" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Document lines */}
    <path d="M9 14H19" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 18H23" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 22H20" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    {/* Checkmark */}
    <circle cx="20" cy="20" r="6" fill="rgba(0,0,0,0.8)" stroke={color} strokeWidth="1.5"/>
    <path d="M17 20L19 22L23 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// 5. Follow-up - Circular arrow with person
export const FollowUpIcon = ({ size = 32, color = "white" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="12" stroke={color} strokeWidth="2" strokeDasharray="4 4"/>
    <path d="M24 8L28 12L24 16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 24L4 20L8 16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Person in center */}
    <circle cx="16" cy="12" r="3" stroke={color} strokeWidth="1.5"/>
    <path d="M12 22C12 20 13 18 16 18C19 18 20 20 20 22" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    {/* Follow-up indicators */}
    <circle cx="22" cy="10" r="1" fill={color}/>
    <circle cx="10" cy="22" r="1" fill={color}/>
  </svg>
);

// Usage example component
export const CallFlowDiagrams = () => {
  const inboundSteps = [
    { 
      label: 'Customer Calls', 
      desc: 'Customer calls your business number',
      icon: <CustomerCallsIcon size={48} />
    },
    { 
      label: 'AI Answers', 
      desc: 'BM AI answers instantly, in English or Swahili',
      icon: <AIAnswersIcon size={48} />
    },
    { 
      label: 'Request/Transact', 
      desc: 'Customer requests info, makes transaction, or gets support',
      icon: <RequestTransactIcon size={48} />
    },
    { 
      label: 'AI Resolves/Escalates', 
      desc: 'AI resolves or escalates to human agent if needed',
      icon: <AIResolvesIcon size={48} />
    },
    { 
      label: 'Analytics', 
      desc: 'Analytics and call summary available in dashboard',
      icon: <AnalyticsIcon size={48} />
    },
  ];

  const outboundSteps = [
    { 
      label: 'Campaign Scheduled', 
      desc: 'Business schedules or triggers outbound campaign',
      icon: <CampaignScheduledIcon size={48} />
    },
    { 
      label: 'AI Dials', 
      desc: 'BM AI dials customers with personalized message',
      icon: <AIDialsIcon size={48} />
    },
    { 
      label: 'Customer Interacts', 
      desc: 'Customer interacts (confirms, pays, responds, etc.)',
      icon: <CustomerInteractsIcon size={48} />
    },
    { 
      label: 'AI Records', 
      desc: 'AI records responses and updates dashboard',
      icon: <AIRecordsIcon size={48} />
    },
    { 
      label: 'Follow-up', 
      desc: 'Follow-up or escalation as needed',
      icon: <FollowUpIcon size={48} />
    },
  ];

  return (
    <div className="space-y-20">
      {/* Inbound Call Flow */}
      <div>
        <div className="flex justify-center">
          <h3 className="text-xl font-bold mb-10 uppercase tracking-wide text-white text-center w-full max-w-4xl">Inbound Call Flow</h3>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-10 md:gap-0 w-full max-w-4xl">
            {inboundSteps.map((step, idx) => (
              <React.Fragment key={step.label}>
                <div className="flex flex-col items-center w-full max-w-xs md:flex-1 snap-start">
                  <div className="bg-white/10 border-2 border-white/30 rounded-full w-24 h-24 md:w-24 md:h-24 flex items-center justify-center mb-3 shadow-2xl text-4xl md:text-3xl">
                    {step.icon}
                  </div>
                  <span className="text-white font-bold text-base md:text-sm text-center mb-2">{step.label}</span>
                  <span className="text-white/80 text-sm md:text-xs text-center mb-4 md:mb-0 max-w-[10rem]">{step.desc}</span>
                </div>
                {idx < inboundSteps.length - 1 && (
                  <>
                    {/* Horizontal arrow for desktop */}
                    <svg className="hidden md:block mx-4 shrink-0 arrow-horizontal" width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="4" y1="12" x2="44" y2="12" stroke="#fff" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round"/>
                      <polygon points="44,6 48,12 44,18" fill="#fff" fillOpacity="0.7" />
                    </svg>
                    {/* Vertical arrow for mobile */}
                    <svg className="block md:hidden my-2 shrink-0 arrow-vertical" width="24" height="48" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="12" y1="4" x2="12" y2="44" stroke="#fff" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round"/>
                      <polygon points="6,44 12,48 18,44" fill="#fff" fillOpacity="0.7" />
                    </svg>
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Outbound Call Flow */}
      <div>
        <div className="flex justify-center">
          <h3 className="text-xl font-bold mb-10 uppercase tracking-wide text-white text-center w-full max-w-4xl">Outbound Call Flow</h3>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-10 md:gap-0 w-full max-w-4xl">
            {outboundSteps.map((step, idx) => (
              <React.Fragment key={step.label}>
                <div className="flex flex-col items-center w-full max-w-xs md:flex-1 snap-start">
                  <div className="bg-white/10 border-2 border-white/30 rounded-full w-24 h-24 md:w-24 md:h-24 flex items-center justify-center mb-3 shadow-2xl text-4xl md:text-3xl">
                    {step.icon}
                  </div>
                  <span className="text-white font-bold text-base md:text-sm text-center mb-2">{step.label}</span>
                  <span className="text-white/80 text-sm md:text-xs text-center mb-4 md:mb-0 max-w-[10rem]">{step.desc}</span>
                </div>
                {idx < outboundSteps.length - 1 && (
                  <>
                    {/* Horizontal arrow for desktop */}
                    <svg className="hidden md:block mx-4 shrink-0 arrow-horizontal" width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="4" y1="12" x2="44" y2="12" stroke="#fff" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round"/>
                      <polygon points="44,6 48,12 44,18" fill="#fff" fillOpacity="0.7" />
                    </svg>
                    {/* Vertical arrow for mobile */}
                    <svg className="block md:hidden my-2 shrink-0 arrow-vertical" width="24" height="48" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="12" y1="4" x2="12" y2="44" stroke="#fff" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round"/>
                      <polygon points="6,44 12,48 18,44" fill="#fff" fillOpacity="0.7" />
                    </svg>
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallFlowDiagrams; 