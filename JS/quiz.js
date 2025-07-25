const quizData = [
  {
    question: "한때 유포리아 멤버였던 door님이 케페 디코방에서 싸웠던 채널은?",
    choices: ["자유채팅", "소통창구 ", "제보센터", "건의사항"],
    answer: "건의사항",
  },
  {
    question: "전 유포리아 벌목장은 몇층까지 증설되었을까요?",
    choices: ["24", "25", "26", "27"],
    answer: "25",
  },
  {
    question: "어떤 사람때문에 연홍이가 만들어졌을까요?",
    choices: ["로드킬", "door", "화이트캣", "^모^"],
    answer: "화이트캣",
  },
  {
    question: "X모님의 강퇴 이유가 된 가장 큰 발언은?",
    choices: ["XX는 지갑여는 속도가 느리네", "벌목장 내가 사용하지도 않는데 왜 도움?", "욕설", "뒷담하다가 걸림"],
    answer: "벌목장 내가 사용하지도 않는데 왜 도움?",
  },
  {
    question: "로드킬의 나이는?",
    choices: ["32", "5", "6", "7"],
    answer: "32",
  },
  {
    question: "냥이라는 유저는 어떠한 행동을 안했을까요?",
    choices: ["여미새", "30만원 flex", "끌어 안고 자겠다라는 레전드 발언", "심한 욕설"],
    answer: "심한 욕설",
  },
  {
    question: "유포리아 멤버들의 펫 이름이 아니였던 것은?",
    choices: ["밥끼", "떡끼", "김밥토끼", "돼끼"],
    answer: "돼끼",
  },

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

