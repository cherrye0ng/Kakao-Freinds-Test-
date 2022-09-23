// const main = document.querySelector("#main");
// const qna = document.querySelector("#qna");
// const result = document.querySelector("#result");

// const endPoint = 9;
// const select = [0, 0, 0, 0, 0, 0, 0, 0, 0];


// function calResult() {
//     var result = select.indexOf(Math.max(...select)); //전개구문
//     return result;
// }

// function setResult() {
//     let point = calResult();
//     const resultName = document.querySelector(".resultname");
//     resultName.innerHTML = infoList[point].name;

//     var resultImg = document.createElement('img');
//     const imgDiv = document.querySelector(".resultimg");
//     var imgURL = 'img/image-' + point + '.jpg';
//     resultImg.src = imgURL;
//     resultImg.alt = point;
//     resultImg.classList.add('img-fluid');
//     imgDiv.appendChild(resultImg);

//     const resultDesc = document.querySelector('.resultDesc');
//     resultDesc.innerHTML = infoList[point].desc;
// }

// // // 문제화면에서 결과화면으로 넘어가기
// function goResult() {
//     qna.style.display = "none";
//     result.style.display = "block";
//     let qIdx = 0;
//     setResult();
// }

// // Answer 버튼 만들고 적절한 a값 넣기
// function addAnswer(answerText, qIdx, idx) {
//     var a = document.querySelector('.answerBox');
//     var answer = document.createElement('button'); //createElement 배우기 
//     answer.classList.add('answerList');

//     a.appendChild(answer); //answer가 a에게 소속될 수 있게한다. 
//     answer.innerHTML = answerText;

//     // Answer 버튼이 눌려지면 버튼이 없어지게하기
//     answer.addEventListener("click", function() {
//         var children = document.querySelectorAll('.answerList');
//         for (let i = 0; i < children.length; i++) {
//             children[i].disabled = true;
//         } {
//             var target = qnaList[qIdx].a[idx].type;
//             for (let i = 0; i < target.length; i++) {
//                 select[target[i]] += 1;
//             }

//             for (let i = 0; i < children.length; i++) {
//                 children[i].style.display = 'none';
//             }
//             goNext(++qIdx);
//         }
//     }, false);
// }
// // 첫번째 question에 qnalist의 [0]번째 값을 할당해준다.
// function goNext(qIdx) {
//     if (qIdx === endPoint) {
//         goResult();
//         return;
//     }
//     var q = document.querySelector(".question");
//     q.innerHTML = qnalist[qIdx].q;
//     for (let i in qnalist[qIdx].a) { //for 반복문 다시공부하기
//         addAnswer(qnalist[qIdx].a[i].answer, qIdx, i);
//     }
//     var progress = document.querySelector('.progress-bar');
//     progress.style.width = (100 / endPoint) * (qIdx + 1) + '%';
// }


// // // 메인화면에서 문제화면으로 넘어가기
// function start() {
//     main.style.display = "none";
//     qna.style.display = "block";
//     let qIdx = 0;
//     goNext(qIdx);
// }

const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

const endPoint = 9;
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function calResult() {
    console.log(select);
    var result = select.indexOf(Math.max(...select));
    return result;
}

function setResult() {
    let point = calResult();
    const resultName = document.querySelector('.resultname');
    resultName.innerHTML = infoList[point].name;

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('.resultImg');
    var imgURL = 'img/image-' + point + '.jpg';
    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);

    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[point].desc;
}

function goResult() {
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";
    setTimeout(() => {
        result.style.WebkitAnimation = "fadeIn 1s";
        result.style.animation = "fadeIn 1s";
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block"
        }, 450)
    })
    setResult();
}

function addAnswer(answerText, qIdx, idx) {
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList');

    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", function() {
        var children = document.querySelectorAll('.answerList');
        for (let i = 0; i < children.length; i++) {
            children[i].disabled = true;
            children[i].style.WebkitAnimation = "fadeOut 0.5s";
            children[i].style.animation = "fadeOut 0.5s";
        }
        setTimeout(() => {
            var target = qnaList[qIdx].a[idx].type;
            for (let i = 0; i < target.length; i++) {
                select[target[i]] += 1;
            }

            for (let i = 0; i < children.length; i++) {
                children[i].style.display = 'none';
            }
            goNext(++qIdx);
        }, 450)
    }, false);
}

function goNext(qIdx) {
    if (qIdx === endPoint) {
        goResult();
        return;
    }

    var q = document.querySelector('.question');
    q.innerHTML = qnaList[qIdx].q;
    for (let i in qnaList[qIdx].a) {
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    }
    var progress = document.querySelector('.progress-bar');
    progress.style.width = (100 / endPoint) * (qIdx + 1) + '%';
}

function start() {
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
        setTimeout(() => {
            main.style.display = "none";
            qna.style.display = "block"
        }, 450)
        let qIdx = 0;
        goNext(qIdx);
    }, 450);
}