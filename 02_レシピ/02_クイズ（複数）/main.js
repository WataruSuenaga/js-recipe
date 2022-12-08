const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")
const nextQuiz = document.getElementById("next-quiz")
const choice4 = document.getElementById("choice-4")
const choice5 = document.getElementById("choice-5")
const choice6 = document.getElementById("choice-6")

// クイズの内容

const quiz = {
  image: "IMG_E9321.JPG",
  choices: [
    {
      text: "ルマンド",
      feedback: "正解！ルマンドだよおおお",
    },
    {
      text: "バームロール",
      feedback: "残念！バームロールはバームクーヘンのお菓子だよおおお",
    },
    {
      text: "チョコリエール",
      feedback: "残念！チョコリエールはチョコとビスケットのお菓子だよおおお",
    },
  ],
}

// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image

  // 選択肢（ボタン）の中身を表示
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
}

// choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

choice1.onclick = function () {
  // 0 番目の選択肢を選択
  choose(0)
}
choice2.onclick = function () {
  // 1 番目の選択肢を選択
  choose(1)
}
choice3.onclick = function () {
  // 2 番目の選択肢を選択
  choose(2)
}

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()

const quiz = {
  image: "IMG_E9321.JPG",
  choices: [
    {
      text: "ルマンド",
      feedback: "正解！ルマンドだよおおお",
    },
    {
      text: "バームロール",
      feedback: "残念！バームロールはバームクーヘンのお菓子だよおおお",
    },
    {
      text: "チョコリエール",
      feedback: "残念！チョコリエールはチョコとビスケットのお菓子だよおおお",
    },
  ],
}

if (choice3.onclick) {
  // quiz を画面に表示する関数
  const reloadQuiz = function () {
    // 問題文を表示
    quizText.textContent = "Q. " + quiz.text

    // 画像を表示
    quizImage.src = "./images/" + quiz.image

    // 選択肢（ボタン）の中身を表示
    choice4.textContent = quiz.choices[0].text
    choice5.textContent = quiz.choices[1].text
    choice6.textContent = quiz.choices[2].text
  }
  // choiceNumber番目の選択肢を選択
  const choose = function (choiceNumber) {
    // フィードバックを表示
    feedback.textContent = quiz.choices[choiceNumber].feedback
  }

  choice4.onclick = function () {
    // 0 番目の選択肢を選択
    choose(0)
  }
  choice5.onclick = function () {
    // 1 番目の選択肢を選択
    choose(1)
  }
  choice6.onclick = function () {
    // 2 番目の選択肢を選択
    choose(2)
  }
}
