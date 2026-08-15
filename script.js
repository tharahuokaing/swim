const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const resultDisplay = document.getElementById('result');

const swimmers = [
    { element: document.getElementById('swimmer1'), name: 'កីឡាករ N/A', pos: 40 },
    { element: document.getElementById('swimmer2'), name: 'កីឡាករ N/A', pos: 40 },
    { element: document.getElementById('swimmer3'), name: 'កីឡាករ N/A', pos: 40 },
    { element: document.getElementById('swimmer4'), name: 'កីឡាករ N/A', pos: 40 },
    { element: document.getElementById('swimmer5'), name: 'កីឡាករ N/A', pos: 40 },
    { element: document.getElementById('swimmer6'), name: 'កីឡាករ N/A', pos: 40 },
    { element: document.getElementById('swimmer7'), name: 'កីឡាករ ម៉ែន (Mr. Men)', pos: 40},
    { element: document.getElementById('swimmer8'), name: 'កីឡាការិនី គីម មួយ (Mrs. Kim Muy)', pos: 40 },
    { element: document.getElementById('swimmer9'), name: 'កីឡាករ សេង ឆាត (Mr. Seng Chat)', pos: 40 },
    { element: document.getElementById('swimmer10'), name: 'កីឡាករ ហួកាំង ថារ៉ា (Mr. Huokaing Thara)', pos: 40 },
    { element: document.getElementById('swimmer11'), name: 'កីឡាករ N/A', pos: 40 },
    { element: document.getElementById('swimmer12'), name: 'កីឡាករ N/A', pos: 40 },
    { element: document.getElementById('swimmer13'), name: 'កីឡាករ N/A', pos: 40 },
    { element: document.getElementById('swimmer14'), name: 'កីឡាករ N/A', pos: 40 },
    { element: document.getElementById('swimmer15'), name: 'កីឡាករ N/A', pos: 40 },
    { element: document.getElementById('swimmer16'), name: 'កីឡាករ N/A', pos: 40 },
    { element: document.getElementById('swimmer17'), name: 'កីឡាករ N/A', pos: 40 },
    { element: document.getElementById('swimmer18'), name: 'កីឡាករ N/A', pos: 40 },
    { element: document.getElementById('swimmer19'), name: 'កីឡាករ N/A', pos: 40 },
    { element: document.getElementById('swimmer20'), name: 'កីឡាករ N/A', pos: 40 }
];

let raceInterval;
let isRacing = false;

function startRace() {
    if (isRacing) return; // បើកំពុងប្រណាំង មិនឱ្យចុចដដែលៗទេ
    isRacing = true;
    startBtn.disabled = true;
    resultDisplay.innerText = "កំពុងប្រជែងគ្នាយ៉ាងស្វិតស្វាញ... 🏊‍♂️💨";

    // ទទឹងអាងសរុប ដកទំហំរូបអ្នកហែលទឹក និងខ្សែទីព្រ័ត្រ
    const finishPos = document.querySelector('.lane').offsetWidth - 90;

    raceInterval = setInterval(() => {
        let winners = [];

        swimmers.forEach(swimmer => {
            // បន្ថែមល្បឿនចៃដន្យពី ១ ទៅ ៧ ក្នុងមួយវគ្គ
            const speed = Math.random() * 6 + 1;
            swimmer.pos += speed;
            swimmer.element.style.left = swimmer.pos + 'px';

            // ពិនិត្យមើលថាអ្នកណាដល់ទីព្រ័ត្រមុន
            if (swimmer.pos >= finishPos) {
                winners.push(swimmer.name);
            }
        });

        // បើសិនជាមានអ្នកដល់ទីព្រ័ត្រ
        if (winners.length > 0) {
            clearInterval(raceInterval);
            isRacing = false;
            startBtn.disabled = false;
            
            // បង្ហាញអ្នកឈ្នះ (ករណីដល់ព្រមគ្នាក៏បង្ហាញទាំងពីរនាក់)
            resultDisplay.innerText = `🏆 លទ្ធផល៖ ${winners.join(' និង ')} បានឈ្នះការប្រកួត! 🥇`;
        }
    }, 50); // រត់រៀងរាល់ 0.05 វិនាទី
}

function resetRace() {
    clearInterval(raceInterval);
    isRacing = false;
    startBtn.disabled = false;
    resultDisplay.innerText = "សូមចុចប៊ូតុងដើម្បីចាប់ផ្តើម!";
    
    // នាំកីឡាករត្រឡប់ទៅចំណុចចាប់ផ្តើមវិញ
    swimmers.forEach(swimmer => {
        swimmer.pos = 40;
        swimmer.element.style.left = '40px';
    });
}

// ភ្ជាប់ព្រឹត្តិការណ៍ចុច (Click Events)
startBtn.addEventListener('click', startRace);
resetBtn.addEventListener('click', resetRace);
