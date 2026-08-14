import React, { useEffect } from 'react';
import {
  Bookmark,
  CheckCircle2,
  Clock,
  ArrowLeft,
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
  onBack: () => void;
}

export const StudyMaterialReader: React.FC<StudyMaterialReaderProps> = ({
  material,
  relatedQuestionCount,
  isBookmarked,
  isCompleted,
  onToggleBookmark,
  onToggleCompleted,
  onStartPractice,
  onBack,
}) => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [material.id]);

  return (
    <article className="space-y-5 pb-8 animate-fadeIn">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white tap-target"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Study Guides</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onToggleBookmark(material.id)}
            aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark study guide'}
            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors tap-target ${
              isBookmarked
                ? 'bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>

          <button
            type="button"
            onClick={() => onToggleCompleted(material.id)}
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-colors tap-target ${
              isCompleted
                ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
            }`}
          >
            <CheckCircle2 className={`w-3.5 h-3.5 ${isCompleted ? 'fill-emerald-500 text-white' : ''}`} />
            <span>{isCompleted ? 'Completed' : 'Mark as Read'}</span>
          </button>
        </div>
      </div>

      {/* Guide Meta & Title */}
      <header className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <CategoryBadge category={material.category} size="sm" />
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            {material.subjectName}
          </span>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <span className="inline-flex items-center gap-1 text-xs text-slate-500">
            <Clock className="w-3 h-3" />
            {material.readTimeMinutes} min read
          </span>
        </div>

        <h1 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
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
              <div className="p-3.5 rounded-lg bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 my-3">
                <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-900 dark:text-indigo-200 uppercase tracking-wider mb-1">
                  <Lightbulb className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>Key Concept</span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                  {section.keyConcept}
                </p>
              </div>
            )}

            {section.example && (
              <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 my-3 space-y-1.5 text-xs sm:text-sm">
                <span className="font-bold text-slate-900 dark:text-slate-100 block">
                  Classroom Scenario:
                </span>
                <p className="text-slate-700 dark:text-slate-300 italic">
                  "{section.example.scenario}"
                </p>
                <div className="pt-1.5 border-t border-slate-200 dark:border-slate-750 text-slate-800 dark:text-slate-200">
                  <strong className="text-indigo-600 dark:text-indigo-400">Pedagogical Analysis: </strong>
                  {section.example.analysis}
                </div>
              </div>
            )}

            {section.comparisonTable && (
              <div className="overflow-x-auto my-3 border border-slate-200 dark:border-slate-800 rounded-lg">
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
            <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>High-Yield Vocabulary & Terms</span>
          </div>
          <div className="space-y-2">
            {material.keyTerms.map((kt, i) => (
              <div
                key={i}
                className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs"
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
        <section className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider">
            <Lightbulb className="w-3.5 h-3.5" />
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
        <section className="p-4 rounded-lg bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-rose-800 dark:text-rose-400 uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5" />
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

      {/* Practice Connection Footer CTA */}
      <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800 space-y-3 mt-6">
        <div>
          <h3 className="font-bold text-sm text-white">
            Reinforce this Topic with Exam Questions
          </h3>
          <p className="text-xs text-slate-300 mt-0.5">
            Test your comprehension with {relatedQuestionCount} authentic LET questions for{' '}
            <span className="font-semibold text-indigo-300">{material.topic}</span>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 pt-1">
          <Button
            variant="primary"
            size="md"
            fullWidth
            leftIcon={<Play className="w-4 h-4 fill-current" />}
            onClick={() => onStartPractice(material)}
          >
            Practice This Topic ({relatedQuestionCount} Qs)
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
