import React from 'react';

interface ComingSoonProps {
  title: string;
  description?: string;
  subtitle?: string;
  buttonText?: string;
  sectionId?: string;
}

const ComingSoon = ({ 
  title, 
  description = "This section is currently under construction. We're working on bringing you something amazing.",
  subtitle = "Coming Soon!",
  buttonText = "Notify Me",
  sectionId
}: ComingSoonProps) => {
  return (
    <section id={sectionId} className="w-full py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-[#be4725]">{title}</span>
          </h2>
          <div className="mx-auto w-16 h-1 bg-linear-to-r from-[#be4725] via-[#a73b24] to-[#0d1723] rounded-full mb-4"></div>
        </div>

        {/* Coming Soon Content */}
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h3 className="text-3xl font-bold">{subtitle}</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;