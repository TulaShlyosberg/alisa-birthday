function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function romantic_chaika() {
    let initial_container = document.getElementsByClassName('alisa_and_chaika')[0];
    initial_container.innerHTML = '';
    for(i = 1; i <= 39; i++) {
        let chaika = document.createElement('img');
        chaika.src = 'img/chaika.png';
        chaika.className = 'chaika_' + i.toString();
        chaika.alt = 'rotated chaika';
        initial_container.appendChild(
            chaika
        );
        await sleep(200);
    }
}

async function toast() {
    let text = '';
    console.log(this.id);
    switch(this.id) {
        case 'drinking_1': 
            text = 'Выпьем за Алисиных друзей! В том числе не представленных на фото.';
            break;
        case 'drinking_2':
            text = 'Выпьем за отношения с Алисой! И за совместные кулинарные эксперименты.'
            break;
        case 'drinking_3':
            text = 'Выпьем за праздники с Алисой! Веселые, душевные, оригинальные.'
            break;
        case 'drinking_4':
            text = 'Выпьем за путешествия с Алисой! За ванильные дни в Риме и шоколадные ночи в Париже (сорри, очень сложно было удержаться). А также сидровые вечера в Питере и пельменные утра у нее на даче.'
        default:
            break;
    }
    console.log(text);
    let toast_field = document.getElementById('drinking_toast');
    toast_field.textContent = '';
    let letters = text.split('');
    for(i = 0; i < letters.length; i++) {
        toast_field.textContent += letters[i];
        await sleep(50);
    }
}