import { ALL_QUESTIONS } from './index';
import { validateQuestionBank } from './validation';
import { ALL_STUDY_MATERIALS, getQuestionsForStudyMaterial } from '../study-materials';
import { SUBJECTS } from '../subjects';
import { ICON_MAP } from '../../components/ui/iconMap';

// 1. Validate Question Bank
const qResult = validateQuestionBank(ALL_QUESTIONS);
console.log('=== LET QUESTION BANK INTEGRITY REPORT ===');
console.log(`Total Active Questions: ${qResult.totalQuestions}`);
console.log(`Is Valid: ${qResult.isValid}`);
console.log(`Duplicate IDs: ${qResult.duplicateIds.length === 0 ? 'None (Clean)' : qResult.duplicateIds.join(', ')}`);
console.log(`Duplicate Questions: ${qResult.duplicateQuestions.length === 0 ? 'None (Clean)' : qResult.duplicateQuestions.join(', ')}`);
console.log(`Invalid Answer Indices: ${qResult.invalidAnswerIndices.length === 0 ? 'None (Clean)' : qResult.invalidAnswerIndices.join(', ')}`);
console.log(`Invalid Choice Counts: ${qResult.invalidChoiceCounts.length === 0 ? 'None (Clean)' : qResult.invalidChoiceCounts.join(', ')}`);
console.log(`Missing Explanations: ${qResult.missingExplanations.length === 0 ? 'None (Clean)' : qResult.missingExplanations.join(', ')}`);
console.log('==========================================\n');

if (!qResult.isValid) {
  throw new Error('Question bank integrity validation failed!');
}

// 2. Validate Study Materials & Question Relationships
console.log('=== STUDY MATERIALS & RELATIONSHIPS REPORT ===');
console.log(`Total Study Guides: ${ALL_STUDY_MATERIALS.length}`);

const validSubjectIds = new Set(SUBJECTS.map((s) => s.id));
let materialIssues = 0;

ALL_STUDY_MATERIALS.forEach((material) => {
  if (!validSubjectIds.has(material.subjectId)) {
    console.error(`[ERROR] Material "${material.id}" has invalid subjectId: "${material.subjectId}"`);
    materialIssues++;
  }

  const relatedQs = getQuestionsForStudyMaterial(material, ALL_QUESTIONS);
  console.log(`- [${material.id}] "${material.title}" -> ${relatedQs.length} related Qs (${material.subjectId} / ${material.topic})`);

  if (relatedQs.length === 0) {
    console.warn(`  [WARNING] Material "${material.id}" has 0 matching questions.`);
  }
});

console.log('==============================================');

if (materialIssues > 0) {
  throw new Error(`Study material validation failed with ${materialIssues} issue(s)!`);
}

// 3. Validate Subject Icon Mappings
console.log('=== SUBJECT ICON MAPPINGS REPORT ===');
let iconIssues = 0;
SUBJECTS.forEach((subject) => {
  if (!ICON_MAP[subject.iconName]) {
    console.error(`[ERROR] Subject "${subject.id}" has unmapped iconName: "${subject.iconName}"`);
    iconIssues++;
  } else {
    console.log(`- [${subject.id}] "${subject.name}" -> Icon: ${subject.iconName} (Valid)`);
  }
});
console.log('==============================================');

if (iconIssues > 0) {
  throw new Error(`Subject icon validation failed with ${iconIssues} issue(s)!`);
}
