import React from 'react';
import { createPortal } from 'react-dom';
import {
  Clock,
  CheckCircle2,
  X,
  FileText,
  Scale,
} from 'lucide-react';
import { Button } from '../ui/Button';
import type { ExamBlueprint } from '../../data/exam-blueprint';

interface ExamBriefingModalProps {
  blueprint: ExamBlueprint;
  isOpen: boolean;
  onClose: () => void;
  onConfirmStart: () => void;
}

export const ExamBriefingModal: React.FC<ExamBriefingModalProps> = ({
  blueprint,
  isOpen,
  onClose,
  onConfirmStart,
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-lg rounded-xl p-5 sm:p-6 shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto space-y-4 animate-scale-in">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-[10px] font-bold uppercase tracking-wider">
              <Scale className="w-3 h-3" />
              <span>Examination Briefing</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">
              {blueprint.title}
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {blueprint.subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close briefing"
            className="w-7 h-7 rounded-md bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-800 dark:hover:text-white tap-target cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Exam Specifications Strip */}
        <div className="grid grid-cols-3 gap-2 p-3 bg-slate-50 dark:bg-slate-800/60 rounded-lg text-center border border-slate-200 dark:border-slate-700">
          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">Total Items</span>
            <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-mono">
              {blueprint.totalQuestions} Questions
            </span>
          </div>
          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">Time Limit</span>
            <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-mono inline-flex items-center gap-1 justify-center">
              <Clock className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
              {blueprint.totalTimeMinutes} Mins
            </span>
          </div>
          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">Passing Standard</span>
            <span className="text-sm sm:text-base font-bold text-emerald-700 dark:text-emerald-400 font-mono">
              ≥ {blueprint.passingGWA}% GWA
            </span>
          </div>
        </div>

        {/* Section Structure Breakdown */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
            <span>Component Breakdown</span>
          </h3>
          <div className="space-y-1.5">
            {blueprint.sections.map((section) => (
              <div
                key={section.id}
                className="p-2.5 rounded-md bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-xs flex items-center justify-between"
              >
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white block">
                    {section.name}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    {section.questionCount} questions • {section.timeLimitMinutes} minutes
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-mono font-bold text-[11px]">
                  {section.weightPercentage}% weight
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
            <span>Examination Protocol</span>
          </h3>
          <ul className="space-y-1 pl-4 list-disc text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            {blueprint.instructions.map((inst, i) => (
              <li key={i}>{inst}</li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
          <Button
            variant="secondary"
            size="md"
            fullWidth
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            size="md"
            fullWidth
            onClick={onConfirmStart}
            className="font-bold"
          >
            Begin Examination
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
};
