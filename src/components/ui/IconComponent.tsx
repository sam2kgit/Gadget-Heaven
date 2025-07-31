import React from 'react';
import { IconType } from 'react-icons';

interface IconWrapperProps {
  icon: IconType;
}

interface IconWithClassProps {
  icon: IconType;
  className?: string;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({ icon: Icon }) => {
  return React.createElement(Icon as React.ComponentType);
};

export const IconWithClass: React.FC<IconWithClassProps> = ({ icon: Icon, className }) => {
  return React.createElement(Icon as React.ComponentType<{className?: string}>, { className });
};