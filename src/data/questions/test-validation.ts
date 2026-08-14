import { ALL_QUESTIONS } from './index';
import { validateQuestionBank } from './validation';

const result = validateQuestionBank(ALL_QUESTIONS);
console.log('=== LET QUESTION BANK INTEGRITY REPORT ===');
console.log(`Total Active Questions: ${result.totalQuestions}`);
console.log(`Is Valid: ${result.isValid}`);
console.log(`Duplicate IDs: ${result.duplicateIds.length === 0 ? 'None (Clean)' : result.duplicateIds.join(', ')}`);
console.log(`Duplicate Questions: ${result.duplicateQuestions.length === 0 ? 'None (Clean)' : result.duplicateQuestions.join(', ')}`);
console.log(`Invalid Answer Indices: ${result.invalidAnswerIndices.length === 0 ? 'None (Clean)' : result.invalidAnswerIndices.join(', ')}`);
console.log(`Invalid Choice Counts: ${result.invalidChoiceCounts.length === 0 ? 'None (Clean)' : result.invalidChoiceCounts.join(', ')}`);
console.log(`Missing Explanations: ${result.missingExplanations.length === 0 ? 'None (Clean)' : result.missingExplanations.join(', ')}`);
console.log('==========================================');

if (!result.isValid) {
  throw new Error('Question bank integrity validation failed!');
}
