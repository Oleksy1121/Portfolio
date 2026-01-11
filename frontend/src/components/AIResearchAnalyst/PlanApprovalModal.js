import React, { useState } from 'react';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  QuestionList,
  QuestionItem,
  PriorityBadge,
  PrioritySelector,
  PriorityOption,
  ModalFooter,
  ApproveButton,
  RejectButton,
} from './styles';

const PRIORITIES = ['high', 'medium', 'low'];

function PlanApprovalModal({ plan, onApprove, onReject, isLoading }) {
  const [questions, setQuestions] = useState(plan?.research_questions || []);
  const [editingId, setEditingId] = useState(null);
  const strategies = plan?.search_strategies || [];

  const handlePriorityChange = (questionId, newPriority) => {
    setQuestions(prev =>
      prev.map(q =>
        q.id === questionId ? { ...q, priority: newPriority } : q
      )
    );
    setEditingId(null);
  };

  const handleApprove = () => {
    const modifiedPlan = {
      research_questions: questions,
      search_strategies: strategies,
    };
    onApprove(modifiedPlan);
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <h2>📋 Research Plan Approval</h2>
          <p>Review the proposed research plan for deep dive analysis</p>
        </ModalHeader>

        <ModalBody>
          <h3>Research Questions <span style={{ fontSize: '0.8em', fontWeight: 'normal', color: 'var(--color-light-gray)' }}>(click priority to edit)</span></h3>
          <QuestionList>
            {questions.map((q, index) => (
              <QuestionItem key={q.id || index}>
                {editingId === q.id ? (
                  <PrioritySelector>
                    {PRIORITIES.map(p => (
                      <PriorityOption
                        key={p}
                        $priority={p}
                        onClick={() => handlePriorityChange(q.id, p)}
                      >
                        {p}
                      </PriorityOption>
                    ))}
                  </PrioritySelector>
                ) : (
                  <PriorityBadge
                    $priority={q.priority}
                    onClick={() => setEditingId(q.id)}
                    $clickable
                  >
                    {q.priority}
                  </PriorityBadge>
                )}
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
          <ApproveButton onClick={handleApprove} disabled={isLoading}>
            {isLoading ? 'Processing...' : 'Approve Plan'}
          </ApproveButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
}

export default PlanApprovalModal;