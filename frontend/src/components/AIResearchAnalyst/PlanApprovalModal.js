import React from 'react';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  QuestionList,
  QuestionItem,
  PriorityBadge,
  ModalFooter,
  ApproveButton,
  RejectButton,
} from './styles';

function PlanApprovalModal({ plan, onApprove, onReject, isLoading }) {
  const questions = plan?.research_questions || [];
  const strategies = plan?.search_strategies || [];

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <h2>📋 Research Plan Approval</h2>
          <p>Review the proposed research plan for deep dive analysis</p>
        </ModalHeader>

        <ModalBody>
          <h3>Research Questions</h3>
          <QuestionList>
            {questions.map((q, index) => (
              <QuestionItem key={q.id || index}>
                <PriorityBadge $priority={q.priority}>{q.priority}</PriorityBadge>
                <span>{q.question}</span>
              </QuestionItem>
            ))}
          </QuestionList>

          {strategies.length > 0 && (
            <>
              <h3>Search Strategies</h3>
              <ul>
                {strategies.map((strategy, index) => (
                  <li key={index}>{strategy}</li>
                ))}
              </ul>
            </>
          )}
        </ModalBody>

        <ModalFooter>
          <RejectButton onClick={onReject} disabled={isLoading}>
            Reject & Use Simple Search
          </RejectButton>
          <ApproveButton onClick={onApprove} disabled={isLoading}>
            {isLoading ? 'Processing...' : 'Approve Plan'}
          </ApproveButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
}

export default PlanApprovalModal;