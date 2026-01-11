import styled, { keyframes } from 'styled-components';

// Container
export const AIResearchAnalystContainer = styled.div`
  width: 100%;
  text-align: center;
`;

// Form styles
export const FormContainer = styled.form`
  display: flex;
  gap: 12px;
  padding: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormInput = styled.input`
  flex: 1;
  min-width: 200px;
  padding: 14px 18px;
  border: 2px solid var(--color-border-light);
  border-radius: 8px;
  font-size: 16px;
  background-color: var(--color-bg);
  color: var(--color-text);
  transition: all 0.3s ease;

  &::placeholder {
    color: var(--color-light-gray);
  }

  &:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const DepthSelect = styled.select`
  padding: 14px 18px;
  border: 2px solid var(--color-border-light);
  border-radius: 8px;
  font-size: 16px;
  background-color: var(--color-bg);
  color: var(--color-text);
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const SubmitButton = styled.button`
  padding: 14px 28px;
  background-color: var(--color-accent);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background-color: transparent;
    color: var(--color-accent);
    box-shadow: inset 0 0 0 2px var(--color-accent);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

// Progress styles
export const ProgressContainer = styled.div`
  padding: 20px;
  border-top: 1px solid var(--color-border-light);
`;

export const StepperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 20px;
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

export const StepDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ $status }) => {
    if ($status === 'completed') return 'var(--color-accent)';
    if ($status === 'active') return 'var(--color-orange)';
    return 'var(--color-border-light)';
  }};
  transition: all 0.3s ease;
  animation: ${({ $status }) => ($status === 'active' ? pulse : 'none')} 1.5s infinite;
`;

export const StepLabel = styled.span`
  font-size: 11px;
  font-weight: ${({ $status }) => ($status === 'active' ? '600' : '400')};
  color: ${({ $status }) => {
    if ($status === 'completed') return 'var(--color-accent)';
    if ($status === 'active') return 'var(--color-orange)';
    return 'var(--color-light-gray)';
  }};

  @media (max-width: 576px) {
    display: none;
  }
`;

export const StepConnector = styled.div`
  width: 30px;
  height: 2px;
  background-color: ${({ $completed }) =>
    $completed ? 'var(--color-accent)' : 'var(--color-border-light)'};
  transition: all 0.3s ease;

  @media (max-width: 576px) {
    width: 15px;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  span {
    font-size: 12px;
    color: var(--color-secondary-text);
  }

  strong {
    font-size: 20px;
    color: var(--color-text);
  }
`;

// Report styles
export const ReportContainer = styled.div`
  text-align: left;
  padding: 20px;
  border-top: 1px solid var(--color-border-light);
  max-height: 500px;
  overflow-y: auto;

  h1, h2, h3 {
    color: var(--color-text);
    margin-top: 1em;
  }

  p {
    color: var(--color-secondary-text);
    line-height: 1.7;
  }

  ul, ol {
    margin-left: 20px;
    color: var(--color-secondary-text);
  }

  code {
    background: var(--color-border-light);
    padding: 2px 6px;
    border-radius: 4px;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: var(--color-border-light);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-accent);
    border-radius: 3px;
  }
`;

export const ErrorMessage = styled.div`
  background: #fee2e2;
  color: #dc2626;
  padding: 12px 16px;
  border-radius: 8px;
  margin: 20px;
  text-align: center;
`;

export const CallToActionLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: var(--color-accent);
  color: var(--color-bg);
  border-radius: 8px;
  text-decoration: none;
  font-size: 1.1em;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  margin-bottom: 40px;
  margin-top: 40px;

  &:hover {
    background-color: transparent;
    color: var(--color-accent);
    border: 2px solid var(--color-accent);
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }

  svg {
    margin-right: 10px;
  }
`;

// Modal styles
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;
  padding: 20px;
`;

export const ModalContent = styled.div`
  background: var(--color-card-bg);
  border-radius: 12px;
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid var(--color-border-light);
`;

export const ModalHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid var(--color-border-light);
  text-align: center;

  h2 {
    margin: 0 0 8px 0;
    color: var(--color-text);
    font-size: 1.4em;
  }

  p {
    margin: 0;
    color: var(--color-secondary-text);
    font-size: 0.9em;
  }
`;

export const ModalBody = styled.div`
  padding: 20px;
  text-align: left;

  h3 {
    color: var(--color-text);
    font-size: 1em;
    margin: 0 0 12px 0;
  }

  ul {
    margin: 0 0 20px 20px;
    color: var(--color-secondary-text);
  }

  li {
    margin-bottom: 6px;
  }
`;

export const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const QuestionItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px;
  background: var(--color-bg);
  border-radius: 8px;
  border: 1px solid var(--color-border-light);

  span {
    color: var(--color-text);
    font-size: 0.95em;
    line-height: 1.4;
  }
`;

export const PriorityBadge = styled.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.7em;
  font-weight: 600;
  text-transform: uppercase;
  flex-shrink: 0;
  background: ${({ $priority }) => {
    if ($priority === 'high') return '#fee2e2';
    if ($priority === 'medium') return '#fef3c7';
    return '#e0e7ff';
  }};
  color: ${({ $priority }) => {
    if ($priority === 'high') return '#dc2626';
    if ($priority === 'medium') return '#d97706';
    return '#4f46e5';
  }};
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};
  transition: all 0.2s ease;

  ${({ $clickable }) =>
    $clickable &&
    `
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  `}
`;

export const PrioritySelector = styled.div`
  display: flex;
  gap: 4px;
  flex-shrink: 0;
`;

export const PriorityOption = styled.button`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.7em;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${({ $priority }) => {
    if ($priority === 'high') return '#fee2e2';
    if ($priority === 'medium') return '#fef3c7';
    return '#e0e7ff';
  }};
  color: ${({ $priority }) => {
    if ($priority === 'high') return '#dc2626';
    if ($priority === 'medium') return '#d97706';
    return '#4f46e5';
  }};

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const ModalFooter = styled.div`
  padding: 20px;
  border-top: 1px solid var(--color-border-light);
  display: flex;
  gap: 12px;
  justify-content: flex-end;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ApproveButton = styled.button`
  padding: 12px 24px;
  background: var(--color-accent);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: transparent;
    color: var(--color-accent);
    box-shadow: inset 0 0 0 2px var(--color-accent);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const RejectButton = styled.button`
  padding: 12px 24px;
  background: transparent;
  color: var(--color-secondary-text);
  border: 2px solid var(--color-border-light);
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    border-color: var(--color-orange);
    color: var(--color-orange);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;