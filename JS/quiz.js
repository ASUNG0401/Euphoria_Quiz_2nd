const quizData = [
  {
    question: "유포리아의 클로버는 무슨 뜻일까요?",
    choices: ["행복", "희열 ", "만족", "안도"],
    answer: "행복",
  },
  {
    question: "유포리아의 멤버 수는 몇명일까요?",
    choices: ["24", "25", "26", "27"],
    answer: "25",
  },
  {
    question: "유포리아는 2024년 몇월에 만들어졌을까요?",
    choices: ["9월", "10월", "11월", "12월"],
    answer: "10월",
  },
  {
    question: "유포리아에 있는 비속어욕 탐지 봇의 이름은?",
    choices: ["티어", "티버", "비버", "티비"],
    answer: "티비",
  },
  {
    question: "우리 마을원 중에 02년생은 몇명일까요?",
    choices: ["2명", "3명", "4명", "5명"],
    answer: "5명",
  },
  {
    question: "유포리아 서버 태그를 만든 사람은?",
    choices: ["연두", "이지스", "렌", "하숭"],
    answer: "이지스",
  },
  {
    question: "유포리아 마을에서 안해본 게임은?",
    choices: ["마인크래프트", "발로란트", "테라리아", "원스휴먼"],
    answer: "테라리아",
  },
  {
    question: "유포리아 디스코드 채널에는 몇개의 보이스 채널이 있을까요? (이건 확인하지 마세요!)",
    choices: ["4개", "5개", "6개", "7개"],
    answer: "5개",
  },
  {
    question: "레이드 2팀에 없는 멤버는?",
    choices: ["토끼", "블문", "누리", "삐까"],
    answer: "누리",
  },
  {
    question: "유포리아에 대표 화가는?",
    choices: ["연두", "하숭", "웅삼", "미쿠렌"],
    answer: "웅삼",
  }

];

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const current = quizData[currentQuestion];
  questionEl.textContent = current.question;
  choicesEl.innerHTML = ""; // 기존 버튼 제거

  current.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.classList.add("choice-btn");
    btn.addEventListener("click", () => selectAnswer(choice));
    choicesEl.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const buttons = document.querySelectorAll(".choice-btn");

  buttons.forEach(btn => {
    // 모든 버튼의 선택 클래스 제거
    btn.classList.remove("selected");

    // 클릭한 버튼이면 선택 클래스 추가
    if (btn.textContent === selected) {
      btn.classList.add("selected");
    }
  });

  const correct = quizData[currentQuestion].answer;
  if (selected === correct) {
    score++;
  }

  nextBtn.style.display = "block";
}


nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
    nextBtn.style.display = "none"; // 다시 숨김
  } else {
    localStorage.setItem("score", score);
    window.location.href = "result.html";
  }
});

// 첫 문제 로드
loadQuestion();
nextBtn.style.display = "none";

const choiceButtons = document.querySelectorAll(".choice-btn");

choiceButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // 모든 버튼에서 선택 클래스 제거
    choiceButtons.forEach(b => b.classList.remove("selected"));
    // 클릭한 버튼에만 선택 클래스 추가
    btn.classList.add("selected");
  });
});

