import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { icons } from 'lucide-react';

const steps = [
  {
    title: 'Enter Your Idea',
    desc: 'Start with a one-liner. We expand it with AI.',
    icon: 'Lightbulb',
    content: (
      <div className='flex flex-col items-center max-w-md mx-auto'>
        <div className='flex-1 w-full'>
          <div className='flex items-center bg-background border border-muted rounded-xl px-6 py-5 shadow-inner min-h-[56px]'>
            <span className='text-muted-foreground mr-3 text-lg'>💡</span>
            <span className='text-base text-foreground flex-1'>
              remote foot-care monitor with pressure sensors, automated
              caregiver alerts, mobile app dashboard
            </span>
          </div>
          {/* Suggestion bubbles */}
          <div className='flex flex-wrap gap-2 mt-4'>
            {['Healthcare', 'Marketplace', 'SaaS'].map((suggestion) => (
              <span
                key={suggestion}
                className='px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs cursor-pointer hover:bg-primary/10 transition'
              >
                {suggestion}
              </span>
            ))}
          </div>
          <div className='flex justify-end mt-3'>
            <button
              type='button'
              className='inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium shadow hover:bg-primary/90 transition'
              disabled
            >
              <Icon name='Send' size={18} className='text-primary-foreground' color='white' />
              Send
            </button>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Meet Your First Customers',
    desc: 'Choose from our library of pre-trained AI agents—each comes with a real-world backstory.',
    icon: 'Users',
    content: (
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto'>
        {/* Dr. Elena Martinez */}
        <div className='bg-card border border-muted rounded-xl shadow p-5 flex flex-col items-center text-center'>
          <Icon name='User' size={40} className='text-primary mb-2' color='white' />
          <div className='font-semibold text-lg'>Dr. Elena Martinez</div>
          <div className='text-sm text-muted-foreground mb-1'>
            52 &middot; Endocrinologist
          </div>
          <div className='text-xs text-muted-foreground'>
            20 yrs treating diabetic wounds; clinical researcher
          </div>
        </div>
        {/* James Liu */}
        <div className='bg-card border border-muted rounded-xl shadow p-5 flex flex-col items-center text-center'>
          <Icon name='User' size={40} className='text-primary mb-2' color='white' />
          <div className='font-semibold text-lg'>James Liu</div>
          <div className='text-sm text-muted-foreground mb-1'>
            68 &middot; Diabetes Patient
          </div>
          <div className='text-xs text-muted-foreground'>
            Retired teacher; lives alone; tech-cautious
          </div>
        </div>
        {/* Maria Rossi */}
        <div className='bg-card border border-muted rounded-xl shadow p-5 flex flex-col items-center text-center'>
          <Icon name='User' size={40} className='text-primary mb-2' color='white' />
          <div className='font-semibold text-lg'>Maria Rossi</div>
          <div className='text-sm text-muted-foreground mb-1'>
            34 &middot; Home Health Nurse
          </div>
          <div className='text-xs text-muted-foreground'>
            10 yrs visiting patients; patient-education advocate
          </div>
        </div>
        {/* Kevin Patel */}
        <div className='bg-card border border-muted rounded-xl shadow p-5 flex flex-col items-center text-center'>
          <Icon name='User' size={40} className='text-primary mb-2' color='white' />
          <div className='font-semibold text-lg'>Kevin Patel</div>
          <div className='text-sm text-muted-foreground mb-1'>
            29 &middot; Health-tech Founder
          </div>
          <div className='text-xs text-muted-foreground'>
            Ex-hospital IT; UX enthusiast; startup alum
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Have a Real Conversation',
    desc: 'Our AI agents behave just like real interviewees—asking follow-ups, digging into your answers, and remembering context so you can practice true back-and-forth dialogue.',
    icon: 'MessageCircle',
    content: (
      <div className="flex flex-col gap-6 bg-background rounded-md py-0 sm:py-6 px-0 shadow max-w-xl mx-auto border-0 sm:border sm:border-muted">
        {/* Thread 1: Dr. Martinez */}
        <div className="bg-muted/30 border border-muted rounded-lg p-4 flex flex-col gap-2 shadow-inner w-full max-w-full sm:max-w-[90%] mx-auto">
          <div className="flex flex-col gap-2">
            <div className="bg-muted px-5 py-3 rounded-lg w-fit max-w-[98vw] sm:max-w-[80%] self-start text-sm shadow-sm break-words">
              <span className="font-medium text-primary">Dr. Martinez:</span>{' '}
              <span>“How do you ensure early ulcer detection?”</span>
            </div>
            <div className="bg-primary text-primary-foreground px-5 py-3 rounded-lg w-fit max-w-[98vw] sm:max-w-[80%] self-end text-sm shadow break-words">
              <span className="font-medium">You:</span>{' '}
              <span>
                “We use pressure-sensing insoles calibrated weekly—alerts trigger at a 2× risk threshold.”
              </span>
            </div>
            {/* Typing indicator */}
            <div className="bg-muted px-5 py-3 rounded-lg w-fit max-w-[98vw] sm:max-w-[80%] self-start text-sm flex items-center gap-2 mt-1 break-words">
              <span className="font-medium text-primary">Dr. Martinez:</span>
              <span className="flex items-center gap-1">
                <span className="inline-block w-2 h-2 rounded-full bg-muted-foreground animate-bounce [animation-delay:0ms]" />
                <span className="inline-block w-2 h-2 rounded-full bg-muted-foreground animate-bounce [animation-delay:150ms]" />
                <span className="inline-block w-2 h-2 rounded-full bg-muted-foreground animate-bounce [animation-delay:300ms]" />
              </span>
              <span className="text-xs text-muted-foreground ml-2"></span>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="inline-block px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-semibold">
              Insight
            </span>
            <span className="text-xs text-muted-foreground">
              Highlighted need for clinical-grade calibration.
            </span>
          </div>
        </div>
        {/* Thread 2: James */}
        <div className="bg-muted/30 border border-muted rounded-lg p-4 flex flex-col gap-2 shadow-inner w-full max-w-full sm:max-w-[90%] mx-auto">
          <div className="flex flex-col gap-2">
            <div className="bg-muted px-5 py-3 rounded-lg w-fit max-w-[98vw] sm:max-w-[80%] self-start text-sm shadow-sm break-words">
              <span className="font-medium text-primary">James:</span>{' '}
              <span>“I’m not great with apps. Can I get voice prompts?”</span>
            </div>
            <div className="bg-primary text-primary-foreground px-5 py-3 rounded-lg w-fit max-w-[98vw] sm:max-w-[80%] self-end text-sm shadow break-words">
              <span className="font-medium">You:</span>{' '}
              <span>
                “Absolutely. We support voice guidance and large-text mode so it’s senior-friendly.”
              </span>
            </div>
            {/* AI follow-up bubble */}
            <div className="bg-muted px-5 py-3 rounded-lg w-fit max-w-[98vw] sm:max-w-[80%] self-start text-sm mt-1 break-words">
              <span className="font-medium text-primary">James:</span>{' '}
              <span className="text-muted-foreground">“Can you tell me more about the large-text mode?”</span>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="inline-block px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-semibold">
              Insight
            </span>
            <span className="text-xs text-muted-foreground">
              Voice-first onboarding increases accessibility.
            </span>
          </div>
        </div>
        {/* You can add more threads below in the same pattern */}
        <style>{`
          @keyframes bounce {
            0%, 80%, 100% { transform: scale(1); opacity: 0.6; }
            40% { transform: scale(1.3); opacity: 1; }
          }
          .animate-bounce {
            animation: bounce 1.2s infinite;
          }
        `}</style>
      </div>
    )
  },
  {
    title: 'Get a Feedback Report',
    desc: 'Receive AI-powered insight and success score.',
    icon: 'BarChart2',
    content: (
      <div className='bg-card border border-muted rounded-lg p-6 shadow max-w-xl mx-auto space-y-4 text-sm'>
        <div className='flex justify-between'>
          <span className='font-medium'>Clinical Validity</span>
          <span className='text-green-600 font-bold'>78%</span>
        </div>
        <div className='flex justify-between'>
          <span className='font-medium'>Patient Usability</span>
          <span className='text-green-500 font-bold'>High</span>
        </div>
        <div className='flex justify-between'>
          <span className='font-medium'>Adoption Likelihood</span>
          <span className='text-yellow-600 font-bold'>Medium</span>
        </div>
        <div className='flex flex-col gap-1 pt-2'>
          <span className='font-medium'>Key Insight</span>
          <span className='text-muted-foreground'>
            Add a voice-first onboarding flow
          </span>
        </div>
        <div className='flex flex-col gap-1'>
          <span className='font-medium'>Next Steps</span>
          <span className='text-muted-foreground'>
            Prototype guided tutorial and re-test
          </span>
        </div>
      </div>
    )
  }
];

export const VisualMockupSection = () => {
  return (
    <section id='how-it-works' className='container py-24 sm:py-32 p-0'>
      <div
        className='
          relative
          rounded-2xl
          p-6 md:p-12
          overflow-hidden
          shadow-inner
          bg-opacity-15
          w-full sm:w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl
          mx-auto
          border border-secondary
          z-30
          bg-card
          transition-all
          group
        '
        style={{
          boxShadow: '0 8px 32px 0 rgba(31,41,55,0.10)'
        }}
      >
        {/* Animated border overlay */}
        <div className='pointer-events-none absolute inset-0 rounded-2xl z-40 transition-all duration-500 group-hover:animate-border-glow' />

        <div className='text-center mb-16 relative z-50'>
          <h2 className='text-sm text-primary tracking-widest uppercase mb-2'>
            How It Works
          </h2>
          <h1 className='text-4xl font-bold mb-2'>
            Test Your Ideas in a Sandbox
          </h1>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            Get real-world feedback from AI personas so you ship features people
            actually want.
          </p>
        </div>

        {/* Timeline container */}
        <div className='relative flex flex-col items-center max-w-2xl mx-auto z-10'>
          {/* Vertical line */}
          <div
            className='pointer-events-none absolute left-1/2 top-0 h-full flex flex-col items-center z-0'
            style={{ transform: 'translateX(-50%)' }}
            aria-hidden='true'
          >
            {/* Gradient line with dots */}
            <div className='w-1 h-full bg-gradient-to-b from-primary/30 via-muted to-primary/30 rounded-full relative'>
              {/* Dots for each step */}
              {steps.map((_, idx) => (
                <span
                  key={idx}
                  className='absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background shadow'
                  style={{
                    top: `calc(${(idx / (steps.length - 1)) * 100}% - 0.75rem)`,
                    zIndex: 1
                  }}
                />
              ))}
            </div>
          </div>

          {steps.map((step, idx) => (
            <div
              key={step.title}
              className={`
                relative flex flex-col items-center w-full
                z-10
                ${idx !== steps.length - 1 ? 'mb-16' : ''}
                animate-fade-in-up
              `}
              style={{
                animationDelay: `${idx * 200 + 200}ms`,
                animationFillMode: 'both',
                opacity: 0,
                animationDuration: '700ms'
              }}
            >
              {/* Icon Bullet */}
              <div className='relative z-20 flex items-center justify-center bg-primary text-white w-14 h-14 rounded-full shadow-lg border-4 border-background mb-4'>
                <Icon
                  name={step.icon as keyof typeof icons}
                  size={28}
                  className='text-white'
                  color='hsl(var(--secondary))'
                />
              </div>
              {/* Step Card */}
              <Card className='w-full max-w-xl mx-auto bg-background border-2 border-muted shadow-lg'>
                <CardHeader>
                  <CardTitle className='text-xl font-semibold'>
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground mb-4'>{step.desc}</p>
                  {step.content}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        {/* Border animation style */}
        <style>{`
          .group:hover .group-hover\\:animate-border-glow {
            animation: border-glow 1.2s linear infinite;
          }
          @keyframes border-glow {
            0% {
              box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.15), 0 8px 32px 0 rgba(31,41,55,0.10);
              border-color: #6366f1;
            }
            50% {
              box-shadow: 0 0 24px 8px rgba(99, 102, 241, 0.25), 0 8px 32px 0 rgba(31,41,55,0.10);
              border-color: #818cf8;
            }
            100% {
              box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.15), 0 8px 32px 0 rgba(31,41,55,0.10);
              border-color: #6366f1;
            }
          }
        `}</style>
      </div>
      {/* Animations */}
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in-up {
          animation-name: fade-in-up;
        }
      `}</style>
    </section>
  );
};
