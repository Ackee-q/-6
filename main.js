

// Функція №1: Зміна кольору фону
document.getElementById('colorSelect').addEventListener('change', function() {
    document.body.style.backgroundColor = this.value;
});

// Функція №2: Тестування логічного елемента
function checkXOR(a, b) {
    const result = a ^ !b;
    document.getElementById(`result-${a}-${b}`).innerText = result;
}

// Функція №3: Тест "Хто сказав Мяу?"
function checkQuiz() {
    const answers = document.getElementsByName('answer');
    let selectedValue;
    for (const answer of answers) {
        if (answer.checked) {
            selectedValue = answer.value;
            break;
        }
    }

    const resultElement = document.getElementById('quizResult');
    if (selectedValue === 'cat') {
        resultElement.innerText = 'Правильно! Це сказала кішка.';
        resultElement.style.color = 'green';
    } else {
        resultElement.innerText = 'Неправильно. Спробуйте ще раз.';
        resultElement.style.color = 'red';
    }
}

// Функція №4: Реєстрація користувача
function registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const fullname = document.getElementById('fullname').value;
    const dob = document.getElementById('dob').value;

    const resultElement = document.getElementById('registrationResult');
    if (username && password && email && fullname && dob) {
        resultElement.innerText = `Користувач ${fullname} успішно зареєстрований!`;
        resultElement.style.color = 'green';
    } else {
        resultElement.innerText = 'Будь ласка, заповніть усі поля.';
        resultElement.style.color = 'red';
    }
}

// Функція №5: Обчислення суми двох чисел
function calculateSum() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const sum = num1 + num2;

    const resultElement = document.getElementById('sumResult');
    resultElement.innerText = `Сума: ${sum}`;
}
