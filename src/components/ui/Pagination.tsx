import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems?: number;
  itemsPerPage?: number;
  siblingCount?: number;
  className?: string;
  itemLabel?: string;
}

/**
 * Computes an array of page numbers and ellipsis tokens.
 */
function getPaginationRange(
  currentPage: number,
  totalPages: number,
  siblingCount = 1
): (number | 'ellipsis-start' | 'ellipsis-end')[] {
  // Total page numbers to show: 1 (first) + 1 (last) + 1 (current) + 2*siblingCount + 2*ellipsis
  const totalNumbers = siblingCount * 2 + 5;

  if (totalPages <= totalNumbers) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

  const shouldShowLeftEllipsis = leftSiblingIndex > 2;
  const shouldShowRightEllipsis = rightSiblingIndex < totalPages - 1;

  if (!shouldShowLeftEllipsis && shouldShowRightEllipsis) {
    const leftItemCount = 3 + 2 * siblingCount;
    const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
    return [...leftRange, 'ellipsis-end', totalPages];
  }

  if (shouldShowLeftEllipsis && !shouldShowRightEllipsis) {
    const rightItemCount = 3 + 2 * siblingCount;
    const rightRange = Array.from(
      { length: rightItemCount },
      (_, i) => totalPages - rightItemCount + i + 1
    );
    return [1, 'ellipsis-start', ...rightRange];
  }

  const middleRange = Array.from(
    { length: rightSiblingIndex - leftSiblingIndex + 1 },
    (_, i) => leftSiblingIndex + i
  );
  return [1, 'ellipsis-start', ...middleRange, 'ellipsis-end', totalPages];
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
  siblingCount = 1,
  className = '',
  itemLabel = 'items',
}) => {
  if (totalPages <= 1) {
    return null;
  }

  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= totalPages;

  const handlePrev = () => {
    if (!isFirstPage) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (!isLastPage) {
      onPageChange(currentPage + 1);
    }
  };

  const paginationRange = getPaginationRange(currentPage, totalPages, siblingCount);

  // Calculate item range summary if totalItems and itemsPerPage are provided
  let itemsSummary = null;
  if (totalItems !== undefined && itemsPerPage !== undefined && totalItems > 0) {
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);
    itemsSummary = `Showing ${startItem}–${endItem} of ${totalItems} ${itemLabel}`;
  }

  return (
    <nav
      aria-label="Pagination Navigation"
      className={`pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 ${className}`}
    >
      {/* Items Summary (Hidden on very narrow screens if space is tight) */}
      <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 order-2 sm:order-1 text-center sm:text-left">
        {itemsSummary || `Page ${currentPage} of ${totalPages}`}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center gap-1.5 order-1 sm:order-2">
        {/* Previous Button */}
        <button
          type="button"
          onClick={handlePrev}
          disabled={isFirstPage}
          aria-label="Go to previous page"
          aria-disabled={isFirstPage}
          className={`inline-flex items-center justify-center gap-1 h-9 px-3 rounded-lg text-xs font-semibold border transition-colors tap-target ${
            isFirstPage
              ? 'opacity-40 cursor-not-allowed bg-slate-50 dark:bg-slate-900/50 text-slate-400 dark:text-slate-600 border-slate-200 dark:border-slate-800'
              : 'bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden xs:inline">Prev</span>
        </button>

        {/* Mobile Compact Indicator (shown on mobile, hidden on sm+) */}
        <div className="flex sm:hidden items-center px-2.5 h-9 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs font-bold text-slate-800 dark:text-slate-200">
          <span>
            {currentPage} / {totalPages}
          </span>
        </div>

        {/* Desktop Page Numbers (hidden on mobile, shown on sm+) */}
        <div className="hidden sm:flex items-center gap-1">
          {paginationRange.map((page, idx) => {
            if (page === 'ellipsis-start' || page === 'ellipsis-end') {
              return (
                <span
                  key={`ellipsis-${idx}`}
                  className="w-8 h-9 flex items-center justify-center text-xs text-slate-400 dark:text-slate-500 font-bold select-none"
                  aria-hidden="true"
                >
                  •••
                </span>
              );
            }

            const isCurrent = page === currentPage;

            return (
              <button
                key={page}
                type="button"
                onClick={() => onPageChange(page)}
                aria-current={isCurrent ? 'page' : undefined}
                aria-label={`Page ${page}`}
                className={`w-9 h-9 rounded-lg text-xs font-bold transition-all tap-target flex items-center justify-center ${
                  isCurrent
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {page}
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          disabled={isLastPage}
          aria-label="Go to next page"
          aria-disabled={isLastPage}
          className={`inline-flex items-center justify-center gap-1 h-9 px-3 rounded-lg text-xs font-semibold border transition-colors tap-target ${
            isLastPage
              ? 'opacity-40 cursor-not-allowed bg-slate-50 dark:bg-slate-900/50 text-slate-400 dark:text-slate-600 border-slate-200 dark:border-slate-800'
              : 'bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
          }`}
        >
          <span className="hidden xs:inline">Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
};
