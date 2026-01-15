"use client";

import { useState } from "react";
import { zeroTrustQuestions, type QuizQuestion } from "./_data/zeroTrustQuestions";

type QuizState = "start" | "quiz" | "result";

export default function Home() {
  const [state, setState] = useState<QuizState>("start");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<{ questionId: number; selectedIndex: number; isCorrect: boolean }[]>([]);
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    setState("quiz");
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setAnswers([]);
    setScore(0);
  };

  const handleAnswerSelect = (index: number) => {
    if (!showExplanation) {
      setSelectedAnswer(index);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const currentQuestion = zeroTrustQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswerIndex;
    
    const newAnswers = [...answers, {
      questionId: currentQuestion.id,
      selectedIndex: selectedAnswer,
      isCorrect
    }];
    setAnswers(newAnswers);
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < zeroTrustQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setState("result");
    }
  };

  const currentQuestion = zeroTrustQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / zeroTrustQuestions.length) * 100;

  if (state === "start") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <main className="w-full max-w-2xl mx-auto px-6 py-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              Zero Trust Architecture Quiz
            </h1>
            <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-8">
              ゼロトラストアーキテクチャの理解度を試すクイズアプリケーション
            </p>
            <div className="space-y-4 mb-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h2 className="font-semibold text-gray-900 dark:text-white mb-2">出題内容</h2>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
                  <li>Policy Enforcement Point (PEP)</li>
                  <li>Policy Decision Point (PDP)</li>
                  <li>Policy Information Point (PIP)</li>
                  <li>Resource（リソース）</li>
                  <li>Subject（サブジェクト）</li>
                  <li>各コンポーネント間のメッセージフロー</li>
                </ul>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>問題数:</strong> {zeroTrustQuestions.length}問
                </p>
              </div>
            </div>
            <button
              onClick={startQuiz}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors text-lg"
            >
              クイズを開始する
            </button>
          </div>
        </main>
      </div>
    );
  }

  if (state === "quiz") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8">
        <main className="w-full max-w-3xl mx-auto px-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-10">
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  問題 {currentQuestionIndex + 1} / {zeroTrustQuestions.length}
                </span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {Math.round(progress)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {currentQuestion.question}
              </h2>

              {/* Choices */}
              <div className="space-y-3">
                {currentQuestion.choices.map((choice, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = index === currentQuestion.correctAnswerIndex;
                  const isWrong = showExplanation && isSelected && !isCorrect;
                  
                  let buttonClass = "w-full text-left p-4 rounded-lg border-2 transition-all ";
                  if (showExplanation) {
                    if (isCorrect) {
                      buttonClass += "bg-green-100 dark:bg-green-900/30 border-green-500 text-green-900 dark:text-green-100";
                    } else if (isWrong) {
                      buttonClass += "bg-red-100 dark:bg-red-900/30 border-red-500 text-red-900 dark:text-red-100";
                    } else {
                      buttonClass += "bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300";
                    }
                  } else {
                    buttonClass += isSelected
                      ? "bg-indigo-100 dark:bg-indigo-900/30 border-indigo-500 text-indigo-900 dark:text-indigo-100"
                      : "bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:border-indigo-400 dark:hover:border-indigo-500 text-gray-900 dark:text-white cursor-pointer";
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showExplanation}
                      className={buttonClass}
                    >
                      <div className="flex items-center">
                        <span className="mr-3 font-semibold">{String.fromCharCode(65 + index)}.</span>
                        <span>{choice}</span>
                        {showExplanation && isCorrect && (
                          <span className="ml-auto text-green-600 dark:text-green-400">✓ 正解</span>
                        )}
                        {showExplanation && isWrong && (
                          <span className="ml-auto text-red-600 dark:text-red-400">✗ 不正解</span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Explanation */}
            {showExplanation && (
              <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">解説</h3>
                <p className="text-blue-800 dark:text-blue-200">{currentQuestion.explanation}</p>
                {currentQuestion.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {currentQuestion.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4">
              {!showExplanation ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  回答を確定する
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  {currentQuestionIndex < zeroTrustQuestions.length - 1 ? "次の問題へ" : "結果を見る"}
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (state === "result") {
    const percentage = Math.round((score / zeroTrustQuestions.length) * 100);
    const getScoreMessage = () => {
      if (percentage >= 90) return "素晴らしい！ゼロトラストアーキテクチャを完璧に理解しています！";
      if (percentage >= 70) return "良好です！ゼロトラストアーキテクチャの基本を理解しています。";
      if (percentage >= 50) return "まずまずです。もう一度復習してみましょう。";
      return "もう一度学習してから再挑戦してみましょう。";
    };

    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8">
        <main className="w-full max-w-3xl mx-auto px-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              クイズ結果
            </h1>

            {/* Score Display */}
            <div className="text-center mb-8">
              <div className="inline-block p-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-4">
                <div className="text-5xl font-bold text-white">{percentage}%</div>
              </div>
              <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {score} / {zeroTrustQuestions.length} 問正解
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {getScoreMessage()}
              </p>
            </div>

            {/* Review Section */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">問題別の結果</h2>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {zeroTrustQuestions.map((question, index) => {
                  const answer = answers.find(a => a.questionId === question.id);
                  const isCorrect = answer?.isCorrect ?? false;
                  
                  return (
                    <div
                      key={question.id}
                      className={`p-4 rounded-lg border-2 ${
                        isCorrect
                          ? "bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700"
                          : "bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          問題 {index + 1}
                        </span>
                        <span className={`font-semibold ${isCorrect ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                          {isCorrect ? "✓ 正解" : "✗ 不正解"}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{question.question}</p>
                      {answer && !isCorrect && (
                        <div className="mt-2 text-sm">
                          <p className="text-gray-600 dark:text-gray-400">
                            <strong>あなたの回答:</strong> {question.choices[answer.selectedIndex]}
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            <strong>正解:</strong> {question.choices[question.correctAnswerIndex]}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* About Resource */}
            <div className="mb-8 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border-l-4 border-indigo-500">
              <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
                このアプリケーションについて
              </h3>
              <p className="text-indigo-800 dark:text-indigo-200 text-sm">
                このNext.jsクイズアプリケーションは、ゼロトラストアーキテクチャにおいて「Resource（リソース）」として位置づけられます。
                実際のゼロトラスト環境では、Envoy（PEP）の背後で公開され、OPA（PDP）と連携してアクセス制御されることになります。
                ユーザー（Subject）がこのリソースにアクセスする際、PEP/PDPによる認証・認可が行われます。
              </p>
            </div>

            {/* Restart Button */}
            <button
              onClick={startQuiz}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors text-lg"
            >
              もう一度挑戦する
            </button>
          </div>
        </main>
      </div>
    );
  }

  return null;
}
