// mecha Stat Displays
const health = document.getElementById('mecha-health-display');
const version = document.getElementById('mecha-version-display');
const mood = document.getElementById('mecha-mood-display');
const level = document.getElementById('mecha-level-display');
const hunger = document.getElementById('mecha-hunger-display');

const tokens = document.getElementById('mecha-tokens-display');

const mechaDisplay = document.getElementById('mecha-sprite-container');

// Game Buttons
const upgradeBtn = document.getElementById('upgrade-btn');
const repairBtn = document.getElementById('repair-btn');
const trainBtn = document.getElementById('train-btn');

let mechaHealth = 100;
let mechaVersion = 6;
let mechaMood = 40;
let mechaLevel = 0;
let mechaHunger = 80;

let mechaTokens = 6000;

let mechaXp = 20;

const init = ()=> {
    
    health.innerText = `${mechaHealth}%`;
    version.innerText = `${mechaVersion}`;
    mood.innerText = `${mechaMood}%`;
    level.innerText = `${mechaLevel}`;
    hunger.innerText = `${mechaHunger}%`;

    tokens.innerText = `${mechaTokens}`;

    setInterval(()=>{
        healthCalc();
        moodCalc();
        hungerCalc();
        levelCalc();
    }, 1000) 

    setInterval(()=>{
        versionCalc();
    }, 5000)

    setInterval(()=>{
        tokenCalc();
    }, 2000)
}

init();

// stat Calculators
const healthCalc = () => {

     if(mechaHealth <= 0){
        mechaHealth = 0;
    }

    if(mechaVersion >=5){
        mechaHealth -= 2;
    }

    if(mechaHunger <= 0){
        mechaHealth -= 5;
    }

    if(mechaMood <= 60){
        mechaHealth -= 1;
    }

    if(mechaHunger >= 80){
        mechaHealth -= 1;
    }

    // Death
    if(mechaHealth === 50){
        mechaHealth = 0;
    }

    if(mechaHealth >= 100){
        mechaHealth = 100;
    }

    if(mechaHealth <= 0){
        mechaHealth = 0;
    }

    health.innerText = `${mechaHealth}/100%`;

    console.log(mechaHealth + 'health');
}

const versionCalc = () => {

    mechaVersion += 1;
    console.log(mechaVersion);

    version.innerText = `${mechaVersion}`;
}

const moodCalc = () => {

    if(mechaHealth <= 30){
        mechaMood -= 2;
    }

    if(mechaVersion > 30){
        mechaMood -= 3;
    }

    if(mechaHunger >= 60){
        mechaMood -= 3;
    }

    if(mechaMood <= 0){
        mechaMood = 0;
    }

    if(mechaMood >= 100){
        mechaMood = 100;
    }

    if(mechaMood >= 80){
        mood.innerText = `😊 ${mechaMood}%`;
    }

    if(mechaMood <=50){
        mood.innerText = `😐 ${mechaMood}%`;
    }

    if(mechaMood <= 20){
        mood.innerText = `😭 ${mechaMood}%`
    }

    console.log(mechaMood + 'Mood');
}

const levelCalc = () => {
    let mechaLevel = Math.trunc(mechaXp / 5);

    level.innerText = `${mechaLevel}`;
    
    if(mechaHealth === 0){
        mechaDisplay.innerHTML = `<img id="mecha-dead" src="./images/pet/dead.gif" alt="404">`;
    }else{
    if(mechaLevel >= 0){
        mechaDisplay.innerHTML = '<img id="mecha-baby" src="./images/pet/baby.gif" alt="404">';
    }
    
    if(mechaLevel >= 10){
        mechaDisplay.innerHTML = '<img id="mecha-teen" src="./images/pet/teen.gif" alt="404">';
    }

    if(mechaLevel >= 15){
        mechaDisplay.innerHTML = '<img id="mecha-adult" src="./images/pet/adult.gif" alt="404">';
    }}
}

const hungerCalc = () => {

    mechaHunger -= 5;

    if(mechaHunger >= 100){
        mechaHunger = 100;
    }

    if(mechaHunger <= 0 ){
        mechaHunger = 0;
    }

    hunger.innerText = `${mechaHunger}%`;
}

//Button Events + Token Events

upgradeBtn.addEventListener('click', () => {

    if(mechaTokens < 100){
        alert('You can not afford this!')
    }else{
        mechaHunger += 20;

        mechaXp += 1;

        mechaTokens -= 100;
        tokens.innerText = `${mechaTokens}`;
    }
})

repairBtn.addEventListener('click', () => {

    if(mechaTokens < 100){
        alert('You can not afford this!')
    }else{
        mechaHealth += 20;

        mechaXp += 1;

        mechaTokens -= 100;
        tokens.innerText = `${mechaTokens}`;
    }
})

trainBtn.addEventListener('click', () => {

    if(mechaTokens < 100){
        alert('You can not afford thi!')
    }else{
        mechaMood += 20;

        mechaXp += 1;

        mechaTokens -= 100;
        tokens.innerText = `${mechaTokens}`;
    }
})

const tokenCalc = () => {

    mechaTokens += 100;
    console.log('mechaTokens');

    tokens.innerText = `${mechaTokens}`;
}