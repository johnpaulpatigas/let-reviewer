import React, { useEffect } from 'react';
import {
  Bookmark,
  CheckCircle2,
  Clock,
  Play,
  Lightbulb,
  AlertTriangle,
  BookOpen,
} from 'lucide-react';
import { CategoryBadge } from '../ui/Badge';
import { Button } from '../ui/Button';
import type { StudyMaterial } from '../../types';

interface StudyMaterialReaderProps {
  material: StudyMaterial;
  relatedQuestionCount: number;
  isBookmarked: boolean;
  isCompleted: boolean;
  onToggleBookmark: (materialId: string) => void;
  onToggleCompleted: (materialId: string) => void;
  onStartPractice: (material: StudyMaterial) => void;
  onBack?: () => void;
}

export const StudyMaterialReader: React.FC<StudyMaterialReaderProps> = ({
  material,
  relatedQuestionCount,
  isBookmarked,
  isCompleted,
  onToggleBookmark,
  onToggleCompleted,
  onStartPractice,
}) => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [material.id]);

  return (
    <article className="space-y-5 pb-8 animate-fadeIn">
      {/* Top Reading Action & Meta Bar */}
      <div className="flex items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
        <div className="flex flex-wrap items-center gap-2 min-w-0">
          <CategoryBadge category={material.category} size="sm" />
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider truncate">
            {material.subjectName}
          </span>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <span className="inline-flex items-center gap-1 text-xs text-slate-500 shrink-0">
            <Clock className="w-3 h-3" />
            {material.readTimeMinutes} min read
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => onToggleBookmark(material.id)}
            aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark study guide'}
            className={`w-7 h-7 rounded-md flex items-center justify-center transition-colors tap-target cursor-pointer ${
              isBookmarked
                ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>

          <button
            type="button"
            onClick={() => onToggleCompleted(material.id)}
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium transition-colors tap-target cursor-pointer ${
              isCompleted
                ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            <CheckCircle2 className={`w-3.5 h-3.5 ${isCompleted ? 'fill-emerald-600 text-white' : ''}`} />
            <span>{isCompleted ? 'Completed' : 'Mark as Read'}</span>
          </button>
        </div>
      </div>

      {/* Guide Title & Overview */}
      <header className="space-y-2">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
          {material.title}
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
          {material.overview}
        </p>
      </header>

      {/* Structured Sections */}
      <div className="space-y-6 pt-2">
        {material.sections.map((section, sIdx) => (
          <section key={sIdx} className="space-y-3">
            {section.heading && (
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-1.5">
                {section.heading}
              </h2>
            )}

            {section.paragraphs.map((para, pIdx) => (
              <p
                key={pIdx}
                className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
              >
                {para}
              </p>
            ))}

            {section.bulletPoints && section.bulletPoints.length > 0 && (
              <ul className="space-y-1.5 pl-4 list-disc text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {section.bulletPoints.map((point, bIdx) => (
                  <li key={bIdx}>{point}</li>
                ))}
              </ul>
            )}

            {section.keyConcept && (
              <div className="p-3.5 rounded-md bg-amber-50/50 dark:bg-amber-950/20 border-l-4 border-l-amber-500 border-y border-r border-amber-200 dark:border-amber-900/40 my-3">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider mb-1">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  <span>Key Concept</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                  {section.keyConcept}
                </p>
              </div>
            )}

            {section.example && (
              <div className="p-3.5 rounded-md bg-sky-50/40 dark:bg-sky-950/20 border-l-4 border-l-sky-500 border-y border-r border-sky-200 dark:border-sky-900/40 my-3 space-y-1.5 text-xs sm:text-sm">
                <span className="font-bold text-sky-900 dark:text-sky-300 block text-xs uppercase tracking-wider">
                  Classroom Scenario
                </span>
                <p className="text-slate-700 dark:text-slate-300 italic">
                  "{section.example.scenario}"
                </p>
                <div className="pt-1.5 border-t border-sky-200/60 dark:border-sky-900/40 text-slate-800 dark:text-slate-200">
                  <strong className="text-slate-900 dark:text-white">Analysis: </strong>
                  {section.example.analysis}
                </div>
              </div>
            )}

            {section.comparisonTable && (
              <div className="overflow-x-auto my-3 border border-slate-200 dark:border-slate-800 rounded-md">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                      {section.comparisonTable.headers.map((header, hIdx) => (
                        <th key={hIdx} className="p-2.5 font-bold text-slate-800 dark:text-slate-200">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {section.comparisonTable.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/30">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="p-2.5 text-slate-700 dark:text-slate-300 align-top">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Key Terms */}
      {material.keyTerms && material.keyTerms.length > 0 && (
        <section className="space-y-2.5 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-1.5 text-slate-900 dark:text-white font-bold text-sm">
            <BookOpen className="w-4 h-4 text-sky-700 dark:text-sky-300" />
            <span>High-Yield Vocabulary & Definitions</span>
          </div>
          <div className="space-y-2">
            {material.keyTerms.map((kt, i) => (
              <div
                key={i}
                className="p-3 rounded-md bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs"
              >
                <strong className="text-slate-900 dark:text-white block mb-0.5">
                  {kt.term}
                </strong>
                <span className="text-slate-600 dark:text-slate-300">
                  {kt.definition}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* LET Tips */}
      {material.letTips && material.letTips.length > 0 && (
        <section className="p-4 rounded-md bg-amber-50/60 dark:bg-amber-950/20 border-l-4 border-l-amber-500 border-y border-r border-amber-200 dark:border-amber-900/50 space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider">
            <Lightbulb className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>LET Board Exam Tips</span>
          </div>
          <ul className="space-y-1.5 pl-4 list-disc text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            {material.letTips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Common Traps / Misconceptions */}
      {material.commonMistakes && material.commonMistakes.length > 0 && (
        <section className="p-4 rounded-md bg-rose-50/60 dark:bg-rose-950/20 border-l-4 border-l-rose-500 border-y border-r border-rose-200 dark:border-rose-900/50 space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-rose-900 dark:text-rose-300 uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
            <span>Common Exam Traps & Misconceptions</span>
          </div>
          <ul className="space-y-1.5 pl-4 list-disc text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            {material.commonMistakes.map((mistake, i) => (
              <li key={i}>{mistake}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Summary Points */}
      {material.summaryPoints && material.summaryPoints.length > 0 && (
        <section className="space-y-2 pt-2">
          <h3 className="font-bold text-xs uppercase tracking-wider text-slate-600 dark:text-slate-400">
            Quick Review Summary
          </h3>
          <ul className="space-y-1 pl-4 list-disc text-xs text-slate-700 dark:text-slate-300">
            {material.summaryPoints.map((pt, i) => (
              <li key={i}>{pt}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Practice Connection Footer Action */}
      <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 mt-6">
        <div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">
            Reinforce this Topic with Practice Questions
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
            {relatedQuestionCount > 0 ? (
              <>
                Test your mastery with {relatedQuestionCount} authentic practice questions on{' '}
                <span className="font-semibold text-slate-900 dark:text-white">{material.topic}</span>.
              </>
            ) : (
              <>No practice questions are currently available for this topic.</>
            )}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 pt-1">
          <Button
            variant="primary"
            size="md"
            fullWidth
            disabled={relatedQuestionCount === 0}
            leftIcon={<Play className="w-4 h-4 fill-current" />}
            onClick={() => onStartPractice(material)}
          >
            {relatedQuestionCount > 0
              ? `Practice Topic (${relatedQuestionCount} Qs)`
              : 'No Questions Available'}
          </Button>
          <Button
            variant="secondary"
            size="md"
            fullWidth
            onClick={() => onToggleCompleted(material.id)}
          >
            {isCompleted ? 'Mark as Incomplete' : 'Mark Guide as Completed'}
          </Button>
        </div>
      </div>
    </article>
  );
};
