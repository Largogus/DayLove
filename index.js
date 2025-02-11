window.onload = function() {
    setTimeout(function() {
        document.getElementById('loads').style.display = 'none'; // Скрываем прелоадер
        document.getElementById('contents').style.display = 'block';
    }, 300)
}

const button_ok = document.querySelector('.button');
const dlg = document.getElementById('choice_dlg');

let heart_src = 'image/pattern/heart.png';
let block_src = 'image/pattern/block.png';
let star_src = 'image/pattern/star.png';

let comaru_src = 'image/picture/comaru.png';
let kisi_src = 'image/picture/kisi.png';
let miku_src = 'image/picture/miku.png';


let text = 'С днём Святого Валентина! От: Меня. Кому: Тебе'


let backgroundColor = 'rgb(255, 167, 215)';
let image = new Image();
image.crossOrigin = 'Anonymous';
image.src = 'image/pattern/heart.png';

let picture = new Image();
picture.crossOrigin = 'Anonymous';
picture.src = miku_src;

button_ok.addEventListener("click", function () {
    dlg.showModal();
    drawCanvas();
})

function drawCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = backgroundColor;
    ctx.imageSmoothingQuality = 'high';
    ctx.imageSmoothingEnabled = true;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 1020, 30, 900, 900);
    ctx.drawImage(picture, 0, 180, 900, 900)
    console.log(text);

    ctx.font = '70px Dela Gothic One';
    ctx.fillStyle = 'white'; 
    ctx.textAlign = 'center';
    
    ctx.fillStyle = 'black';
            
    const maxLineLength = 25;
    const lines = [];
    let currentLine = '';

    for (let i = 0; i < text.length; i++) {
        currentLine += text[i];

        if (currentLine.length >= maxLineLength || text[i] === '.' || text[i] === '!') {
            lines.push(currentLine.trim());
            currentLine = '';
        }
    }

    if (currentLine.length) {
        lines.push(currentLine.trim());
    }

    lines.forEach((line, index) => {
        const y = 120 + index * 120;
        ctx.fillStyle = 'black';
        ctx.fillRect(650, y, 1200, 10); 
        ctx.fillText(line, 1250, y - 12);
    });
};

const canvas = document.querySelector('.valentinka');
const ctx = canvas.getContext('2d');

const inputText = document.getElementById('textInput').addEventListener('input', function() {
    console.log('tttt')
    const inputTexts = document.getElementById('textInput');
    const text_value = inputTexts.value;
    text = text_value;

    drawCanvas()
})

const button_left = document.getElementById('button-left');
const button_right = document.getElementById('button-right');

button_right.addEventListener('click', function() {
    const pages_div = document.getElementById('main_button');
    let pageValue = parseInt(pages_div.getAttribute('page'), 10);

    pageValue += 1;
    pages_div.setAttribute('page', pageValue);

    if (pageValue === 0) {
        pages_div.innerHTML = '<input id="textInput" class="p_choice" placeholder="Напишите тут Ваши пожелния" style="width: 90%; text-align: center; border: none;">';
    } else if (pageValue === 1) {
        button_left.disabled = false;
        const code = `
            <p class="p_choice">Цвет</p>

            <button class="btn-choice" id="color_1"><div class="circle_btn1"></div></button>
            <button class="btn-choice" id="color_2"><div class="circle_btn2"></div></button>
            <button class="btn-choice" id="color_3"><div class="circle_btn3"></div></button>
        `;

        pages_div.innerHTML = code;
        addColorEventListeners();
    } else if (pageValue === 2) {
        const code = `
        <p class="p_choice">Узор</p>

        <button class="btn-choice" id="pattern1"></button>
        <button class="btn-choice" id="pattern2"></button>
        <button class="btn-choice" id="pattern3"></button>
        `;

        pages_div.innerHTML = code;
        selectPattern();
    } else if (pageValue === 3) {
        const code = `
        <p id="kart" class="p_choice">Фото</p>

        <button class="btn-choice" id="picture_1"></button>
        <button class="btn-choice" id="picture_2"></button>
        <button class="btn-choice" id="picture_3"></button>
        `;

        pages_div.innerHTML = code;
        selectPicture()
    } else if (pageValue === 4) {
        button_right.disabled = true;

        const code = `
        <button class="btn-save">Сохранить</button>
        `;

        pages_div.innerHTML = code;
        saveBtn()
    }
});

button_left.addEventListener('click', function() {
    const pages_div = document.getElementById('main_button');
    let pageValue = parseInt(pages_div.getAttribute('page'), 10);

    pageValue -= 1;
    pages_div.setAttribute('page', pageValue);

    if (pageValue === 0) {
        button_left.disabled = true;
        pages_div.innerHTML = '<input id="textInput" class="p_choice" placeholder="Напишите тут Ваши пожелния" style="width: 90%; text-align: center; border: none;">';
        const inputText = document.getElementById('textInput');
        inputText.value = text
        inputText.addEventListener('input', function() {
            text = inputText.value
            drawCanvas();
        });

    } else if (pageValue === 1) {
        const code = `
            <p class="p_choice">Цвет</p>

            <button class="btn-choice" id="color_1"><div class="circle_btn1"></div></button>
            <button class="btn-choice" id="color_2"><div class="circle_btn2"></div></button>
            <button class="btn-choice" id="color_3"><div class="circle_btn3"></div></button>
        `;

        pages_div.innerHTML = code;
        addColorEventListeners();
    } else if (pageValue === 2) {
        button_right.disabled = false;

        const code = `
        <p class="p_choice">Узор</p>

        <button class="btn-choice" id="pattern1"></button>
        <button class="btn-choice" id="pattern2"></button>
        <button class="btn-choice" id="pattern3"></button>
        `;

        pages_div.innerHTML = code;
        selectPattern();
    } else if (pageValue === 3) {
        button_right.disabled = false;
        const code = `
        <p id="kart" class="p_choice">Фото</p>

        <button class="btn-choice" id="picture_1"></button>
        <button class="btn-choice" id="picture_2"></button>
        <button class="btn-choice" id="picture_3"></button>
        `;

        pages_div.innerHTML = code;
        selectPicture()
    } else if (pageValue === 4) {
С

        const code = `
        <button class="btn-save">Сохранить</button>
        `;

        pages_div.innerHTML = code;
        saveBtn()
    }
});

function addColorEventListeners() {
    const color1 = document.getElementById('color_1');
    const color2 = document.getElementById('color_2');
    const color3 = document.getElementById('color_3');

    if (color1) {
        color1.addEventListener('click', function() {
            backgroundColor = 'rgb(255, 167, 215)';
            drawCanvas();
        });
    }

    if (color2) {
        color2.addEventListener('click', function() {
            backgroundColor = 'rgb(129, 253, 217)';
            drawCanvas();
        });
    }

    if (color3) {
        color3.addEventListener('click', function() {
            backgroundColor = 'rgb(255, 194, 111)';
            drawCanvas();
        });
    }
}

function selectPattern() {
    const pattern1 = document.getElementById('pattern1');
    const pattern2 = document.getElementById('pattern2');
    const pattern3 = document.getElementById('pattern3');

    if (pattern1) {
        pattern1.addEventListener('click', function() {
            image.src = heart_src
            image.onload = function() {
                drawCanvas();
            };
        })
    }

    if (pattern2) {
        pattern2.addEventListener('click', function() {
            image.src = block_src;
            image.onload = function() {
                drawCanvas();
            };
        })
    }

    if (pattern3) {
        pattern3.addEventListener('click', function() {
            image.src = star_src
            image.onload = function() {
                drawCanvas();
            };
        })
    }
}

function selectPicture() {
    const picture1 = document.getElementById('picture_1');
    const picture2 = document.getElementById('picture_2');
    const picture3 = document.getElementById('picture_3');

    if (picture1) {
        picture1.addEventListener('click', function() {
            picture.src = miku_src
            picture.onload = function() {
                drawCanvas();
            };
        })
    }

    if (picture2) {
        picture2.addEventListener('click', function() {
            picture.src = kisi_src;
            picture.onload = function() {
                drawCanvas();
            };
        })
    }

    if (picture3) {
        picture3.addEventListener('click', function() {
            picture.src = comaru_src
            picture.onload = function() {
                drawCanvas();
            };
        })
    }
}

function saveBtn() {
    btn = document.querySelector('.btn-save')
    
    if (btn) {
        btn.addEventListener('click', function() {
            const imageData = canvas.toDataURL('image/png');

            const link = document.createElement('a');
            link.href = imageData;
            link.download = 'Валентинка.png';

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        };
    }

    function set() {
        const inputText = document.getElementById('textInput');

        if (inputText) {
        }
    }