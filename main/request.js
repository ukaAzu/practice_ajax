// let request = new XMLHttpRequest();
// request.open('POST', 'index.php', true);

// request.onload = function () {
//     if (request.status >= 200 && request.status < 400) {
//         console.log('成功');
//     } else {
//         console.log('失敗');
//     }
// };

// request.onerror = function () {
//     console.log('失敗');
// };

// request.send();

const request = document.getElementById('request');
const requestMessage = document.getElementById('request_message');
const predict = document.getElementById('predict');
const btn = document.getElementById('btn');

// request.addEventListener('change', search);

// let r = new XMLHttpRequest();
// r.open('POST', 'index.php', true);
// r.onload = function () {
//     request.addEventListener('change', (e) => {
//         requestMessage.textContent = e.target.value;
//         console.log('成功');
//     })
// };
// r.send();

function getCSV() {
    let rc = new XMLHttpRequest();
    rc.open("get", "request_list.csv", true);
    rc.send(null);
    rc.onload = function () {
        convertCSVtoArray(rc.responseText);
    }
}

function convertCSVtoArray(str) {
    let tmp = str.split('\r\n');
    let word;
    let wordList = '';
    request.addEventListener('input', () => {
        let result = [];
        let predictArray = [];
        predict.innerHTML = '';
        for (let i = 0; i < tmp.length; i++) {
            result[i] = tmp[i].split(',');
            word = result[i][0];
            if (word.indexOf(request.value) !== -1) {
                predictArray.push(word);
            }
        }
        wordList = (`<p>${predictArray.join('</p><p>')}</p>`);
        predict.innerHTML = wordList;
    })

    btn.addEventListener('click', () => {
        console.log(request.value);
        if (request.value == 'ありがとうございます') {
            text = 'いつもありがとうございます';
        } else if (request.value == 'あいすたべたいです') {
            text = 'チョコミントのアイスでお願いします';
        } else if (request.value == 'あたまいたいです') {
            text = 'もう帰ってもいいですか？';
        } else {
            text = 'は？';
        }
        requestMessage.innerText = text;
    })
}

getCSV();
