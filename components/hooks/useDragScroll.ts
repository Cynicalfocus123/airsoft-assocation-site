"use client";

import { useRef, useState } from "react";

type DragState = { active: boolean; moved: boolean; startX: number; startScroll: number };
const threshold = 6;

export function useDragScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const state = useRef<DragState>({ active: false, moved: false, startX: 0, startScroll: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const finish = (event?: React.PointerEvent<HTMLDivElement>) => {
    if (event?.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    state.current.active = false;
    setIsDragging(false);
  };

  return {
    ref,
    isDragging,
    pointerHandlers: {
      onPointerDown: (event: React.PointerEvent<HTMLDivElement>) => {
        if (event.pointerType !== "mouse" || !ref.current) return;
        state.current = { active: true, moved: false, startX: event.clientX, startScroll: ref.current.scrollLeft };
        event.currentTarget.setPointerCapture(event.pointerId);
      },
      onPointerMove: (event: React.PointerEvent<HTMLDivElement>) => {
        if (event.pointerType !== "mouse" || !state.current.active || !ref.current) return;
        const deltaX = event.clientX - state.current.startX;
        if (Math.abs(deltaX) >= threshold) { state.current.moved = true; setIsDragging(true); }
        ref.current.scrollLeft = state.current.startScroll - deltaX;
      },
      onPointerUp: finish,
      onPointerCancel: finish,
      onPointerLeave: finish,
      onClickCapture: (event: React.MouseEvent<HTMLDivElement>) => {
        if (!state.current.moved) return;
        event.preventDefault();
        event.stopPropagation();
        state.current.moved = false;
      },
    },
  };
}
