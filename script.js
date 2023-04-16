var num1, num2, operator, result;
var numbersDiv = document.getElementById("numbers");
var resultDiv = document.getElementById("result");
var inputArray = [];
var correct = 0;
var incorrect = 0;

// 随机生成0-5两个数
function generateNumbers() {
  num1 = Math.floor(Math.random() * 6);
  num2 = Math.floor(Math.random() * 5);
  operator = '+';
  // operator = Math.random() < 0.5 ? '+' : '-';
  numbersDiv.innerHTML = num1 + ' ' + operator + ' ' + num2 + ' =';
  resultDiv.innerHTML = '';
  inputArray = [];
}

// 输入数字
function input(num) {
  if (inputArray.length < 1) {
    inputArray.push(num);
    resultDiv.innerHTML = inputArray.join('');
  }
}

// 计算结果
function calculate() {
  if (inputArray.length == 1) {
    var inputNum = parseInt(inputArray.join(''));
    if (operator == '+') {
      result = num1 + num2;
    } else {
      result = num1 - num2;
    }
    if (inputNum == result) {
      resultDiv.innerHTML = '恭喜你，回答正确！';
      correct++;
    } else {
      resultDiv.innerHTML = '很遗憾，回答错误。正确答案是 ' + result;
      incorrect++;
    }
  }
  document.getElementById("correct").innerHTML = "答对个数：" +correct;
  document.getElementById("incorrect").innerHTML = "答错个数：" + incorrect;
}

// 重置
function reset() {
  generateNumbers();
  document.getElementById("correct").innerHTML = "答对个数：" + correct;
  document.getElementById("incorrect").innerHTML = "答错个数：" + incorrect;
}

// 初始化页面
generateNumbers();
