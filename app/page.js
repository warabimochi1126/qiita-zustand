"use client";
import { create } from "zustand";
import { shallow } from 'zustand/shallow';

const useStore = create((set, get) => ({
  score: 0,
  setScore10: () => set({ score: 10 }),
  scoreIncrement: () => set({ score: get().score + 1 }),
  scoreDecrement: () => set( (state) => ({ score: state.score - 1 }) )
}));

export default function Home() {
  const { score, setScore10, scoreIncrement, scoreDecrement } = useStore((state) => ({
    score: state.score,
    setScore10: state.setScore10,
    scoreIncrement: state.scoreIncrement,
    scoreDecrement: state.scoreDecrement
  }), shallow);

  return (
    <>
    <h1>scoreの値:{score}</h1>
    <button onClick={() => setScore10()}>scoreを10に変更するボタン</button>
    <button onClick={() => scoreIncrement()}>scoreを1増加するボタン</button>
    <button onClick={() => scoreDecrement()}>scoreを1減少するボタン</button>
    </>
  );
}
