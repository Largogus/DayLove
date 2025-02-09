window.onload = function() {
    setTimeout(function() {
        document.getElementById('loads').style.display = 'none'; // Скрываем прелоадер
        document.getElementById('contents').style.display = 'block';
    }, 300)
}

const button_ok = document.querySelector('.button');
const dlg = document.getElementById('choice_dlg');

heart_src = 'image/pattern/heart.png';
block_src = 'image/pattern/block.png';
star_src = 'image/pattern/star.png';

let text = 'С днём Святого Валентина! От: Меня. Кому: Тебе'


let backgroundColor = 'rgb(255, 167, 215)';
let image = new Image();
image.crossOrigin = 'Anonymous';
image.src = 'image/pattern/heart.png';

button_ok.addEventListener("click", function () {
    dlg.showModal();
    drawCanvas();
})

function drawCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 170, 10, 130, 130);
    console.log(text);

    ctx.font = '10px Dela Gothic One';
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
        const y = 30 + index * 20;
        ctx.fillStyle = 'black';
        ctx.fillRect(115, y, 175, 1); 
        ctx.fillText(line, 205, y - 2);
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
        <p class="p_choice">Цвет</p>

        <button class="btn-choice"><div class="test1"></div></button>
        <button class="btn-choice"><div class="test1"></div></button>
        <button class="btn-choice"><div class="test1"></div></button>
        `;

        pages_div.innerHTML = code;
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
        const code = `
        <p class="p_choice">Цвет</p>

        <button class="btn-choice"><div class="test1"></div></button>
        <button class="btn-choice"><div class="test1"></div></button>
        <button class="btn-choice"><div class="test1"></div></button>
        `;

        pages_div.innerHTML = code;
    } else if (pageValue === 4) {
        button_left.disabled = false;

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

function saveBtn() {
    btn = document.querySelector('.btn-save')
    
    if (btn) {
        btn.addEventListener('click', function() {
            const newWidth = 1920;  
            const newHeight = 1080; 

            const newCanvas = document.createElement('canvas');
            newCanvas.width = newWidth;
            newCanvas.height = newHeight;
            const newCtx = newCanvas.getContext('2d');

            const scaleFactorX = newWidth / canvas.width;
            const scaleFactorY = newHeight / canvas.height;

            newCtx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, newWidth, newHeight);

            const imageData = newCanvas.toDataURL('image/png');

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