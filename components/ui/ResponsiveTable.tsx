"use client";

import { useState, useRef, useEffect } from "react";
import type { ComponentPropsWithoutRef } from "react";
import { FiChevronDown } from "react-icons/fi";

interface ParsedTable {
  headers: string[];
  rows: string[][];
}

export function ResponsiveTable({ children }: ComponentPropsWithoutRef<"table">) {
  const tableRef = useRef<HTMLTableElement>(null);
  const [tableData, setTableData] = useState<ParsedTable | null>(null);
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());

  useEffect(() => {
    const el = tableRef.current;
    if (!el) return;
    const headers = Array.from(el.querySelectorAll("thead th")).map(
      (th) => th.innerHTML
    );
    const rows = Array.from(el.querySelectorAll("tbody tr")).map((tr) =>
      Array.from(tr.querySelectorAll("td")).map((td) => td.innerHTML)
    );
    setTableData({ headers, rows });
  }, []);

  const toggleRow = (i: number) => {
    setExpandedRows((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <div className="my-6 w-full">
      {/* Desktop: normal scrollable table */}
      <div className="hidden md:block overflow-x-auto rounded-lg border border-(--color-border)">
        <table ref={tableRef} className="w-full border-collapse text-sm">
          {children}
        </table>
      </div>

      {/* Mobile: accordion cards */}
      {tableData && (
        <div className="md:hidden space-y-2">
          {tableData.rows.map((row, i) => {
            const expanded = expandedRows.has(i);
            return (
              <div
                key={i}
                className="rounded-lg border border-(--color-border) overflow-hidden text-sm"
              >
                <button
                  onClick={() => toggleRow(i)}
                  className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left bg-(--color-surface)"
                  aria-expanded={expanded}
                >
                  <span
                    className="font-medium"
                    dangerouslySetInnerHTML={{ __html: row[0] ?? "" }}
                  />
                  <FiChevronDown
                    className={`shrink-0 transition-transform duration-200 ${
                      expanded ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expanded && (
                  <div className="px-4 py-3 border-t border-(--color-border) space-y-3">
                    {tableData.headers.slice(1).map((header, j) => (
                      <div key={j}>
                        <div
                          className="text-xs font-semibold text-(--color-text-muted) mb-0.5"
                          dangerouslySetInnerHTML={{ __html: header }}
                        />
                        <div
                          dangerouslySetInnerHTML={{ __html: row[j + 1] ?? "" }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
