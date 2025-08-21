// Array of 20 India GK Questions with options + answers
const questions = [
  {
    question: "Q) What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    answer: "New Delhi"
  },
  {
    question: "Q) Who is known as the Father of the Nation in India?",
    options: ["Jawaharlal Nehru", "Mahatma Gandhi", "B. R. Ambedkar", "Sardar Patel"],
    answer: "Mahatma Gandhi"
  },
  {
    question: "Q) What is the national animal of India?",
    options: ["Lion", "Elephant", "Tiger", "Leopard"],
    answer: "Tiger"
  },
  {
    question: "Q) Who was the first Prime Minister of India?",
    options: ["Jawaharlal Nehru", "Indira Gandhi", "Rajendra Prasad", "Lal Bahadur Shastri"],
    answer: "Jawaharlal Nehru"
  },
  {
    question: "Q) Which is the largest state of India by area?",
    options: ["Madhya Pradesh", "Rajasthan", "Maharashtra", "Uttar Pradesh"],
    answer: "Rajasthan"
  },
  {
    question: "Q) What is the national flower of India?",
    options: ["Rose", "Lotus", "Sunflower", "Jasmine"],
    answer: "Lotus"
  },
  {
    question: "Q) Who was the first woman Prime Minister of India?",
    options: ["Sonia Gandhi", "Indira Gandhi", "Pratibha Patil", "Sarojini Naidu"],
    answer: "Indira Gandhi"
  },
  {
    question: "Q) Which is the longest river in India?",
    options: ["Yamuna", "Ganga", "Godavari", "Brahmaputra"],
    answer: "Ganga"
  },
  {
    question: "Q) Which city is known as the Pink City of India?",
    options: ["Udaipur", "Jodhpur", "Jaipur", "Agra"],
    answer: "Jaipur"
  },
  {
    question: "Q) Who wrote the Indian National Anthem?",
    options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarojini Naidu", "Aurobindo Ghosh"],
    answer: "Rabindranath Tagore"
  },
  {
    question: "Q) Which is the smallest state in India by area?",
    options: ["Goa", "Sikkim", "Nagaland", "Tripura"],
    answer: "Goa"
  },
  {
    question: "Q) Who was the first President of India?",
    options: ["Dr. Rajendra Prasad", "S. Radhakrishnan", "Zakir Hussain", "Jawaharlal Nehru"],
    answer: "Dr. Rajendra Prasad"
  },
  {
    question: "Q) Which Indian scientist is known as the 'Missile Man of India'?",
    options: ["Vikram Sarabhai", "Homi Bhabha", "A. P. J. Abdul Kalam", "C. V. Raman"],
    answer: "A. P. J. Abdul Kalam"
  },
  {
    question: "Q) Which Indian state is known as the 'Spice Garden of India'?",
    options: ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
    answer: "Kerala"
  },
  {
    question: "Q) What is the national currency of India?",
    options: ["Dollar", "Rupee", "Pound", "Dinar"],
    answer: "Rupee"
  },
  {
    question: "Q) Who is the current Prime Minister of India (2025)?",
    options: ["Rahul Gandhi", "Narendra Modi", "Amit Shah", "Arvind Kejriwal"],
    answer: "Narendra Modi"
  },
  {
    question: "Q) In which year did India gain independence?",
    options: ["1945", "1946", "1947", "1950"],
    answer: "1947"
  },
  {
    question: "Q) Which Indian city is known as the 'City of Joy'?",
    options: ["Mumbai", "Kolkata", "Chennai", "Hyderabad"],
    answer: "Kolkata"
  },
  {
    question: "Q) Where is the famous Sun Temple located?",
    options: ["Puri", "Konark", "Madurai", "Khajuraho"],
    answer: "Konark"
  },
  {
    question: "Q) Who is known as the 'Iron Man of India'?",
    options: ["Subhas Chandra Bose", "Sardar Vallabhbhai Patel", "B. R. Ambedkar", "Bhagat Singh"],
    answer: "Sardar Vallabhbhai Patel"
  }
];

const quiz = document.getElementById('quiz');
const ans = [];
questions.sort(() => Math.random() - 0.5);
for(let i=0;i<5;i++){
    const div_q = document.createElement('div');
    div_q.className = 'q';
    quiz.appendChild(div_q);

    const ques = document.createElement('div');
    ques.className = 'ques';

    const obj = questions[i];
    console.log(obj.question);
    ques.textContent = obj.question;
    div_q.appendChild(ques);

    const opt = document.createElement('div');
    opt.className = 'options';

    div_q.appendChild(opt);

    for(let j=0;j<4;j++){
        const label = document.createElement('label');
        label.className = "option";

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'q'+i;
        input.value = obj.options[j];

        label.appendChild(input);

        label.appendChild(document.createTextNode(" " + obj.options[j]));
        opt.appendChild(label);
    }
    ans.push(obj.answer);
}


const form = document.querySelector('form');

form.addEventListener(('submit'),(event)=>{
    event.preventDefault();

    const data = new FormData(form);
    const answer = Array.from(data.values());
    let cnt = 0;
    for(let i=0;i<ans.length;i++){
        if(answer[i]===ans[i]){ 
          cnt+=1;
        }
    }
    console.log(cnt);
    const sc = document.getElementById('scoreArea');
    sc.innerHTML = 'Score: '+cnt+'/5';
})
