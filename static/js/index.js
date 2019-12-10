/* If you've found this file, YES the solutions are in plain text below, and YES the website is a bit janky. 
But this was put together in 3 hours when I pretty deep in a bottle of wine. Besides, it's Python vs Matlab,
not Python vs Matlab vs Javascript! 🤷*/


class Question {
    constructor(id, title, text, solution){
        this.id = id
        this.title = title;
        this.text = text;
        this.solution = solution;
    }
}

const questions = [
    new Question(
        id = 0,
        title = 'Reversing A String',
        text = 'Reverse the following string: }y4w-gn0rw-3h7-gn10G{',
        solution = '{G01ng-7h3-wr0ng-w4y}'
    ),
    new Question(
        id = 1,
        title = 'Time Flies',
        text = 'How many seconds are in 2019 days?',
        solution = '174441600'
    ),
    new Question(
        id = 2,
        title = 'Fibonacci Numbers',
        text = 'Today is the 344th day of the year. What is the 344th Fibonacci number?',
        solution = '348548520675021628424024078524038024981674935849553053830206986267617333'
    ),
    new Question(
        id = 3,
        title = 'Large Primes',
        text = 'The number 395229343297 has two prime factors. What is the value of the larger one?',
        solution = '18956753'
    ),
    new Question(
        id = 4,
        title = 'Caesar Cipher',
        text = "A 'n' Caesar Cipher shifts each letter by 'n' values - for example, a 5 Caesar cipher would take A to E, B to F etc. When you get to the end of the alphabet, you loop back round (in the last example, Z becomes D). The following text was encrypted using a 10 Caesar Cipher, decrypt it: 'Ixyvjydw sxqhqsjuhi yi vkd qdt uqio kiydw fhewhqccydw'",
        solution = 'Shifting characters is fun and easy using programming'
    ),
    new Question(
        id = 5,
        title = 'Palindromes',
        text = "A Palindrome is a number that is the same forward as backward (e.g. 101). What is the sum of all palindromes from 100 to 100000?",
        solution = '50044500'
    ),
    new Question(
        id = 6,
        title = 'Boom and Bust',
        text = 'A new bank is trying out a savings account that offers 5% yearly interest for 5 years (including the year the money was deposited), followed by 0.3% for 3 years. This cycle then starts again and repeats. If I deposit £1000 on 1st Jan 2020, how much money will I have on the same date in 2050, to the nearest pound?',
        solution = '2734'
    ),
    new Question(
        id = 7,
        title = 'Collatz Conjecture',
        text = "Take a number, and divide it by two if it is even, or multiply it by 3 and add one if it is odd. The Collatz Conjecture proposes this process will always reach one (however proving this isn't required for this question!); out of the numbers from 1 to 100, which takes the longest to reach one?",
        solution = '97'
    ),
    new Question(
        id = 8,
        title = 'RSA Encryption',
        text = "The following message was encrypted using a simple letter to number substitution cipher (A -> 01, B -> 02, ..., Z -> 26), then, using an RSA Encryption method word-wise with public key e = 5538 and n = 30174768947, encrypted again. Decrypt it. '29243418350 1418636601 22268282269 19847042090'",
        solution = 'cracking codes for christmas'
    ),
    new Question(
        id = 9,
        title = 'Image analysis',
        text = "There is a 5 letter word hidden in the image at this url: 'https://i.imgur.com/FETLUr6.png'. What is it?",
        solution = 'pylab'
    )
]

var isIntro = true
var currentQuestion

const submitButton = document.querySelector('.pvm-submit-button')
const questionInput = document.querySelector('.pvm-question-input')
const questionTitle = document.querySelector('.pvm-question-title-text')
const questionText = document.querySelector('.pvm-question-text')
const alert = document.querySelector('.pvm-alert')

submitButton.addEventListener('click', function(){
    if(isIntro){
        questionInput.style.display = 'block'
        submitButton.textContent = 'Submit'
        isIntro = false
        serveQuestion(0)
    } else {
        markQuestion(questions[currentQuestion], questionInput.value)
    }
})

function serveQuestion(number){
    if(number < 10){
        currentQuestion = number
        questionToServe = questions[number]
        questionTitle.textContent = questionToServe.title
        questionText.textContent = questionToServe.text
    } else {
        pass
    }
}

function markQuestion(question, playerAnswer){
    if(question.solution == playerAnswer){
        // Mark as correct
        alert.textContent = `Correct! You got question ${currentQuestion + 1} correct!`
        alert.classList.toggle('alert-success', true)
        alert.classList.toggle('alert-warning', false)
        alert.style.display = 'block'
        serveQuestion(currentQuestion + 1)
    } else {
        // Mark as incorrect

        alert.textContent = 'Sorry, you got that question wrong, try again!'
        alert.classList.toggle('alert-success', false)
        alert.classList.toggle('alert-warning', true)
        alert.style.display = 'block'
    }
    questionInput.value = ''
}
