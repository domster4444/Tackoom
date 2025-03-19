import React from 'react';
import styled from 'styled-components';
import { ButtonHTMLAttributes } from 'react';
import { LucideIcon } from 'lucide-react';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'ghost'
  | 'icon'
  | 'planewhite';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: LucideIcon;
  label?: string;
  bgColor?: string;
}

const ButtonBase = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  margin: 1rem 0;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

const PrimaryButton = styled(ButtonBase)`
  background: #0952b3;
  color: white;

  &:hover {
    background: #063c84;
  }
`;

const SecondaryButton = styled(ButtonBase)`
  background: #6c757d;
  color: white;

  &:hover {
    background: #545b62;
  }
`;

const DangerButton = styled(ButtonBase)`
  background: #dc3545;
  color: white;

  &:hover {
    background: #a71d2a;
  }
`;

const GhostButton = styled(ButtonBase)`
  background: transparent;
  color: #0952b3;
  border: 2px solid #0952b3;

  &:hover {
    background: #0952b3;
    color: white;
  }
`;

const IconButton = styled(ButtonBase)<{ bgColor?: string }>`
  background: ${({ bgColor }) => bgColor || 'transparent'};
  color: ${({ bgColor }) => (bgColor ? 'white' : '#0952b3')};
  border: ${({ bgColor }) => (bgColor ? 'none' : '2px solid #0952b3')};
  padding: 8px;

  &:hover {
    background: ${({ bgColor }) => (bgColor ? '#063c84' : '#0952b3')};
    color: white;
  }
`;

const PlaneWhiteButton = styled(ButtonBase)`
  background: white;
  color: black;
  border: 1px solid #e0e0e0;

  &:hover {
    background: #f0f0f0;
  }
`;

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  icon: Icon,
  label,
  bgColor,
  children,
  ...props
}) => {
  if (variant === 'icon' && Icon) {
    return (
      <IconButton className="clickable" bgColor={bgColor} {...props}>
        <Icon />
        {label && <span>{label}</span>}
      </IconButton>
    );
  }

  switch (variant) {
    case 'secondary':
      return (
        <SecondaryButton className="clickable" {...props}>
          {children}
        </SecondaryButton>
      );
    case 'danger':
      return (
        <DangerButton className="clickable" {...props}>
          {children}
        </DangerButton>
      );
    case 'ghost':
      return (
        <GhostButton className="clickable" {...props}>
          {children}
        </GhostButton>
      );
    case 'planewhite':
      return (
        <PlaneWhiteButton className="clickable" {...props}>
          {children}
        </PlaneWhiteButton>
      );
    case 'primary':
    default:
      return (
        <PrimaryButton className="clickable" {...props}>
          {children}
        </PrimaryButton>
      );
  }
};

export default Button;
