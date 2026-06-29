const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const resultDisplay = document.getElementById('result');

const swimmers = [
    { element: document.getElementById('swimmer1'), name: 'កីឡាករ អាត់', pos: 40 },
    { element: document.getElementById('swimmer2'), name: 'កីឡាករ ប៊ី', pos: 40 },
    { element: document.getElementById('swimmer3'), name: 'កីឡាករ ស៊ី', pos: 40 }
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
