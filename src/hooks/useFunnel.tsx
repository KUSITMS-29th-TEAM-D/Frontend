import React, { useState } from 'react';

export interface StepProps {
  name: string;
  children: React.ReactNode;
}

export interface FunnelProps {
  children: Array<React.ReactElement<StepProps>>;
}

export const useFunnel = (defaultStep: string) => {
  const [step, setStep] = useState(defaultStep);
  const Step = (props: StepProps) => {
    return <>{props.children}</>;
  };

  const Funnel = ({ children }: FunnelProps) => {
    const targetStep = children.find((childStep) => childStep.props.name === step);

    return <>{targetStep}</>;
  };

  return { Funnel, Step, setStep, currentStep: step } as const;
};
