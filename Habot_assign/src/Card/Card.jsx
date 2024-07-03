
import './Card.css'
const Card = () => {
    const steps = [
        {
          icon: '👤',
          text: 'Select Your Role and Sign Up',
          bgColor: '#e6f7ff',
        },
        {
          icon: '📝',
          text: 'Buyers Post Your Requirements',
          bgColor: '#ffffff',
        },
        {
          icon: '🔍',
          text: 'Review, Select, and Contact the Best Suppliers',
          bgColor: '#e6f7ff',
        },
        {
          icon: '📄',
          text: 'Suppliers Complete your profile and get notified for opportunities',
          bgColor: '#ffffff',
        },
        {
          icon: '💬',
          text: 'Contact to Buyers and Share your Quote for the service',
          bgColor: '#e6f7ff',
        },
        {
          icon: '🤝',
          text: 'Both the Parties can Connect and Make Business Leave a Feedback',
          bgColor: '#ffffff',
        },
      ];
    
  return (
     
      
        <div className="how-it-works-container">
          <h2>How it works?</h2>
          <p>
            Buyers post their needs and review top suppliers, while suppliers complete profiles,
            connect with potential buyers, and build successful business relationships, sharing
            valuable feedback.
          </p>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div className="step-card" key={index} style={{ backgroundColor: step.bgColor }}>
                <div className="icon">{step.icon}</div>
                <div className="text">{step.text}</div>
              </div>
            ))}
          </div>
        </div>
  )
}

export default Card
