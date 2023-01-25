/* Название */ const title = "Тестирование за 7 класс История России"
/* Время для выполнения теста (минут)*/  const time = "9"; /* Вопросов */ const question = "10"

//Вопросы, варианты
var q1v1 = "1. В каком возрасте Иван Грозный номинально стал правителем?"; var q1v1a1 = "А) В 4 года"; var q1v1a2 = "Б) В 3 года"; var q1v1a3 = "В) В 5 лет"; var q1v1a4 = "Г) В 10 лет"; var q1v1pa = "Б";
var q1v2 = "1. В каком году состоялось венчание на царство Ивана Грозного?"; var q1v2a1 = "А) В 1547 году"; var q1v2a2 = "Б) В 1548 году"; var q1v2a3 = "В) В 1546 году"; var q1v2a4 = "Г) В 1537 году"; var q1v2pa = "А";
var q1v3 = "1. Сколько законных жен было у Ивана Грозного?"; var q1v3a1 = "А) Одна"; var q1v3a2 = "Б) Три"; var q1v3a3 = "В) Четыре"; var q1v3a4 = "Г) Пять"; var q1v3pa = "В";
var q1v4 = "1. В каком году Иван Грозный созвал первый Земский собор?"; var q1v4a1 = "А) В 1543 году "; var q1v4a2 = "Б) В 1551 году"; var q1v4a3 = "В) В 1549 году"; var q1v4a4 = "Г) В 1548 году"; var q1v4pa = "В";

var q2v1 = "2. Назовите годы правления Ивана IV?"; var q2v1a1 = "А) 1534-1583 гг."; var q2v1a2 = "Б) 1533-1574 гг."; var q2v1a3 = "В) 1533-1584 гг."; var q2v1a4 = "Г) 1534-1586 гг."; var q2v1pa = "В";
var q2v2 = "2. Кто возложил Шапку Мономаха на голову Ивана IV?"; var q2v2a1 = "А) Митрополит Макарий"; var q2v2a2 = "Б) Патриарх Филарет"; var q2v2a3 = "В) Великий князь Василий Темный"; var q2v2a4 = "Г) Нет правильного ответа"; var q2v2pa = "А";
var q2v3 = "2. Кто не входил в Избранную Раду?"; var q2v3a1 = "А) Священник Сильвестр"; var q2v3a2 = "Б) Боярин И.В. Шереметев "; var q2v3a3 = "В) Князь М.И. Воротынский"; var q2v3a4 = "Г) Нет правильного ответа"; var q2v3pa = "Г";
var q2v4 = "2. В каком году страна была разделена на опричнину и земщину?"; var q2v4a1 = "А) 1565 год"; var q2v4a2 = "Б) 1556 год"; var q2v4a3 = "В) 1564 год"; var q2v4a4 = "Г) Нет правильного ответа"; var q2v4pa = "А";

var q3v1 = "3. Что изображено на картине?"; var q3v1a1 = "А) Венчание Ивана IV на царство"; var q3v1a2 = "Б) Покорение Сибири Ермаком"; var q3v1a3 = "В) Вступление Ивана IV в Казань"; var q3v1a4 = "Г) Взятие Иваном Грозным ливонской крепости Кокенгаузен"; var q3v1pa = "В";
var q3v2 = "3. Под какой буквой изображен НЕ Иван IV?"; var q3v2a1 = ""; var q3v2a2 = ""; var q3v2a3 = ""; var q3v2a4 = "";var q3v2pa = "В";
var q3v3 = ""; var q3v3a1 = ""; var q3v3a2 = ""; var q3v3a3 = ""; var q3v3a4 = ""; var q3v3pa = "";
var q3v4 = ""; var q3v4a1 = ""; var q3v4a2 = ""; var q3v4a3 = ""; var q3v4a4 = "";var q3v4pa = "";

var q4v1 = "4. Назовите верные утверждения: (Примичание, ответы пишутся в формате: 'А, А', где А ответ на вопрос)"; var q4v1a1 = "А) Московское восстание 1547 года был результатом злоупотребления властью боярами."; var q4v1a2 = "Б) Во время восстания погибла вся семья Ивана IV со стороны матери."; var q4v1a3 = "В) Московский пожар остановил восстание."; var q4v1a4 = "Г) Царь с семьей во время Московского восстания 1547 года скрывался в селе Воробьёве."; var q4v1pa = "А, Г";
var q4v2 = "4. Назовите верные утверждения: (Примичание, ответы пишутся в формате: 'А, А', где А ответ на вопрос)"; var q4v2a1 = "А) Опричнина просуществовала больше 10 лет."; var q4v2a2 = "Б) Во время опричнины двоюродный брат царя, Владимир Андреевич Старицкий, был казнен за неповиновение царю."; var q4v2a3 = "В) Считается, что непокорный митрополит Филипп, был задушен опричником Малютой Скуратовым."; var q4v2a4 = "Г) В 1571 году крымское войско сожгло Москву.";var q4v2pa = "В, Г";
var q4v3 = "4. Назовите верные утверждения: (Примичание, ответы пишутся в формате: 'А, А', где А ответ на вопрос)"; var q4v3a1 = "А) Главной причиной начала Ливонской войны была необходимость расширения связей со странами Запада"; var q4v3a2 = "Б) В 1583 году было заключено Плюсское перемирие со Швецией"; var q4v3a3 = "В) После смерти Ивана Грозного царем стал его брат - Федор"; var q4v3a4 = "Г) Иван Грозный умер в 1584 году"; var q4v3pa = "А, Б, Г";
var q4v4 = "4. Назовите верные утверждения: (Примичание, ответы пишутся в формате: 'А, А', где А ответ на вопрос)"; var q4v4a1 = "4"; var q4v4a2 = "4"; var q4v4a3 = "4"; var q4v4a4 = "4";var q4v4pa = "1";

var q5v1 = "5. Что изображено на картине?"; var q5v1a1 = "А) Церковь Вознесения в Коломенском"; var q5v1a2 = "Б) Троицкая церковь в Александровой слободе"; var q5v1a3 = "В) Храм Покрова Богородицы на Рву"; var q5v1a4 = "Г) Колокольня Ивана Великого"; var q5v1pa = "А";
var q5v2 = "5. Что изображено на картине?"; var q5v2a1 = "А) Церковь Вознесения в Коломенском"; var q5v2a2 = "Б) Троицкая церковь в Александровой слободе"; var q5v2a3 = "В) Храм Покрова Богородицы на Рву"; var q5v2a4 = "Г) Колокольня Ивана Великого";var q5v2pa = "Б";
var q5v3 = "5. Что изображено на картине?"; var q5v3a1 = "А) Церковь Вознесения в Коломенском"; var q5v3a2 = "Б) Троицкая церковь в Александровой слободе"; var q5v3a3 = "В) Храм Покрова Богородицы на Рву"; var q5v3a4 = "Г) Колокольня Ивана Великого"; var q5v3pa = "Г";
var q5v4 = "5. Что изображено на картине?"; var q5v4a1 = "А) Церковь Вознесения в Коломенском"; var q5v4a2 = "Б) Троицкая церковь в Александровой слободе"; var q5v4a3 = "В) Храм Покрова Богородицы на Рву"; var q5v4a4 = "Г) Колокольня Ивана Великого";var q5v4pa = "В";

var q6v1 = "6. Назовите российского монарха в период, когда произошло восстание, границы района которого обозначены на карте"; var q6v1a1 = ""; var q6v1a2 = ""; var q6v1a3 = ""; var q6v1a4 = ""; var q6v1pa = "алексей михайлович";
var q6v2 = "6. Заполните пропуск в предложении (укажите название государственного образования): «Война, события которой отражены на карте, началась с боевых действий России против"; var q6v2a1 = ""; var q6v2a2 = ""; var q6v2a3 = ""; var q6v2a4 = "";var q6v2pa = "ливонский ордена";
var q6v3 = "6. Назовите монарха, в период правления которого состоялся обозначенный на карте стрелками поход"; var q6v3a1 = ""; var q6v3a2 = ""; var q6v3a3 = ""; var q6v3a4 = ""; var q6v3pa = "Иван Грозный";
var q6v4 = "6. Назовите российского монарха, в период правления которого состоялся обозначенный на карте поход"; var q6v4a1 = ""; var q6v4a2 = ""; var q6v4a3 = ""; var q6v4a4 = "";var q6v4pa = "Василий Шуйский";

var q7v1 = "7. В 1597 году был издан указ об «урочных летах», по которому:"; var q7v1a1 = "A) крестьянам запрещалось менять хозяев в Юрьев день"; var q7v1a2 = "Б) был ограничен переход крестьян в Юрьев день"; var q7v1a3 = "B) был введен пятилетний срок сыска беглых крестьян "; var q7v1a4 = "Г) помещикам разрешалось в определенное время переводить крестьян на оброк"; var q7v1pa = "В";
var q7v2 = "7. Причиной Смуты на Руси НЕ ЯВЛЯЛОСЬ следующее:"; var q7v2a1 = "A) последствия разорения страны после опричнины"; var q7v2a2 = "Б) династический кризис"; var q7v2a3 = "B) голод 1601-1603 гг."; var q7v2a4 = "Г) неудачная внешняя политика Бориса Годунова"; var q7v2pa = "Г";
var q7v3 = "7. Опричнина была направлена против"; var q7v3a1 = "А) дворянской оппозиции "; var q7v3a2 = "Б) взбунтовавшихся крестья"; var q7v3a3 = "В) жителей национальных окраин "; var q7v3a4 = "Г) строптивого боярства"; var q7v3pa = "В";
var q7v4 = "7. Появление мануфактур в XVII в. свидетельствовало о:"; var q7v4a1 = "A) господстве феодальных отношений"; var q7v4a2 = "Б) зарождении капиталистических отношений"; var q7v4a3 = "B) продолжении процесса закрепощения крестьян"; var q7v4a4 = "Г) превращении России в передовую промышленную держав"; var q7v4pa = "Б";

var q8v1 = "8. Годы 1497, 1581, 1597, 1649 отражают основные этапы:"; var q8v1a1 = "A) борьбы России за выход к морю"; var q8v1a2 = "Б) образования Российского централизованного государства"; var q8v1a3 = "B) борьбы Руси с Золотой Ордой за независимость"; var q8v1a4 = "Г) закрепощения крестьян."; var q8v1pa = "Г";
var q8v2 = "8. Политическое развитие России в XVII в. характеризовалось:"; var q8v2a1 = "A) усилением самодержавной власти"; var q8v2a2 = "Б) установлением ограниченного самодержавия"; var q8v2a3 = "B) учреждением системы министерств"; var q8v2a4 = "Г) усилением роли Боярской думы";var q8v2pa = "А";
var q8v3 = "8. В середине XVII в. Земские соборы перестали собираться, так как в России:"; var q8v3a1 = "A) были решены основные вопросы внешней политики"; var q8v3a2 = "Б) возросло значение Боярской думы"; var q8v3a3 = "B) это было решено Соборным уложением"; var q8v3a4 = "Г) формировался абсолютизм"; var q8v3pa = "Г";
var q8v4 = "8. Какой ряд дат отражает события во внешней политике России XVII в.?"; var q8v4a1 = "A) 1632-1634, 1654-1667, 1686"; var q8v4a2 = "Б) 1650,1662,1670-1671"; var q8v4a3 = "B) 1649,1653, 1667"; var q8v4a4 = "Г) 1613, 1652-1666, 1682";var q8v4pa = "А";

var q9v1 = "9. Напишите год начала Ливонской войны"; var q9v1a1 = ""; var q9v1a2 = ""; var q9v1a3 = ""; var q9v1a4 = ""; var q9v1pa = "1558";
var q9v2 = "9. Напишите год окончания Ливонской войны"; var q9v2a1 = ""; var q9v2a2 = ""; var q9v2a3 = ""; var q9v2a4 = ""; var q9v2pa = "1583";
var q9v3 = "9. Напишите когда началась осада Пскова"; var q9v3a1 = ""; var q9v3a2 = ""; var q9v3a3 = ""; var q9v3a4 = ""; var q9v3pa = "1581";
var q9v4 = "9. Напишите год взятия Ермаком Сибирского ханства"; var q9v4a1 = ""; var q9v4a2 = ""; var q9v4a3 = ""; var q9v4a4 = ""; var q9v4pa = "1582";

var q10v1 = "10. В каком году была напечатана первая на Руси книга 'Апостол'"; var q10v1a1 = ""; var q10v1a2 = ""; var q10v1a3 = ""; var q10v1a4 = ""; var q10v1pa = "1564";
var q10v2 = "10. В каком году Фёдор Конь возвёл укрепления Белого города"; var q10v2a1 = ""; var q10v2a2 = ""; var q10v2a3 = ""; var q10v2a4 = ""; var q10v2pa = "1586";
var q10v3 = "10. Напишите дату правления Фёдора Ивановича (формат 1000-1000)"; var q10v3a1 = ""; var q10v3a2 = ""; var q10v3a3 = ""; var q10v3a4 = ""; var q10v3pa = "1584-1598";
var q10v4 = "10. В каком году произошло учереждение в Москвском государстве патриаршества?"; var q10v4a1 = ""; var q10v4a2 = ""; var q10v4a3 = ""; var q10v4a4 = ""; var q10v4pa = "1589";


window.onload = function() {
    document.querySelector(".title_txt_up").innerHTML = title
    document.querySelector(".settings_test_txt").innerHTML = `Настройки теста: время на выполнение: ${time} минут, вопросов: ${question}`
    document.querySelector(".timer_text").innerHTML = `сталось время: <span id="timer"> ${time}:00</span> минут </p>`
 };
// КОД

var minute = time-1;
var sec = 59;

var mark = 2
var xhr = new XMLHttpRequest();
document.querySelector(".q3-img1").style.display = 'none';
document.querySelector(".q3-img2").style.display = 'none';
document.querySelector(".q5-img1").style.display = 'none';
document.querySelector(".q5-img2").style.display = 'none';
document.querySelector(".q5-img3").style.display = 'none';
document.querySelector(".q5-img4").style.display = 'none';
document.querySelector(".q6-img1").style.display = 'none';
document.querySelector(".q6-img2").style.display = 'none';
document.querySelector(".q6-img3").style.display = 'none';
document.querySelector(".q6-img4").style.display = 'none';

var ball = 0;
document.querySelector(".start_test_bttn").onclick = function(){
    var name = document.getElementById("username_input").value;//by id
    console.log(name)
    document.querySelector(".start_test_bttn").disabled = true; 
    document.querySelector(".title_txt_down").innerHTML = "Тестирование (актив)";
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

    
    setInterval(function() {
      document.getElementById("timer").innerHTML = minute + ":" + sec;
      sec--;
  
      if (sec == 00) {
        minute--;
        sec = 59;
  
        if (minute == 0) {
          alert('TIME!');
        }
      }
    }, 1000);
        if(sec == 00){
            if (minute == 0) {
                while(true){alert('TIME!!!')}
              }
        }

data_q1 = randomInteger(1, 4)
data_q2 = randomInteger(1, 4)
data_q3 = randomInteger(1, 2)
data_q4 = randomInteger(1, 3)
data_q5 = randomInteger(1, 4)
data_q6 = randomInteger(1, 4)
data_q7 = randomInteger(1, 4)
data_q8 = randomInteger(1, 4)
data_q9 = randomInteger(1, 4)
data_q10 = randomInteger(1, 4)
console.log(data_q1); console.log(data_q2); console.log(data_q3);console.log(data_q4);console.log(data_q5);console.log(data_q6);console.log(data_q7);console.log(data_q8);console.log(data_q9);console.log(data_q10)

if(data_q1 == 1){
    document.querySelector(".q1").innerHTML = q1v1;
    document.querySelector(".q1-a1").innerHTML= q1v1a1;
    document.querySelector(".q1-a2").innerHTML = q1v1a2;
    document.querySelector(".q1-a3").innerHTML= q1v1a3;
    document.querySelector(".q1-a4").innerHTML= q1v1a4;
}
if(data_q1 == 2){
    document.querySelector(".q1").innerHTML = q1v2;
    document.querySelector(".q1-a1").innerHTML= q1v2a1;
    document.querySelector(".q1-a2").innerHTML= q1v2a2;
    document.querySelector(".q1-a3").innerHTML= q1v2a3;
    document.querySelector(".q1-a4").innerHTML= q1v2a4;
}
if(data_q1 == 3){
    document.querySelector(".q1").innerHTML = q1v3;
    document.querySelector(".q1-a1").innerHTML= q1v3a1;
    document.querySelector(".q1-a2").innerHTML = q1v3a2;
    document.querySelector(".q1-a3").innerHTML= q1v3a3;
    document.querySelector(".q1-a4").innerHTML= q1v3a4;
}
if(data_q1 == 4){
    document.querySelector(".q1").innerHTML = q1v4;
    document.querySelector(".q1-a1").innerHTML= q1v4a1;
    document.querySelector(".q1-a2").innerHTML = q1v4a2;
    document.querySelector(".q1-a3").innerHTML= q1v4a3;
    document.querySelector(".q1-a4").innerHTML= q1v4a4;
}

if(data_q2 == 1){
    document.querySelector(".q2").innerHTML = q2v1;
    document.querySelector(".q2-a1").innerHTML= q2v1a1;
    document.querySelector(".q2-a2").innerHTML = q2v1a2;
    document.querySelector(".q2-a3").innerHTML= q2v1a3;
    document.querySelector(".q2-a4").innerHTML= q2v1a4;
}
if(data_q2 == 2){
    document.querySelector(".q2").innerHTML = q2v2;
    document.querySelector(".q2-a1").innerHTML= q2v2a1;
    document.querySelector(".q2-a2").innerHTML = q2v2a2;
    document.querySelector(".q2-a3").innerHTML= q2v2a3;
    document.querySelector(".q2-a4").innerHTML= q2v2a4;
}
if(data_q2 == 3){
    document.querySelector(".q2").innerHTML = q2v3;
    document.querySelector(".q2-a1").innerHTML= q2v3a1;
    document.querySelector(".q2-a2").innerHTML = q2v3a2;
    document.querySelector(".q2-a3").innerHTML= q2v3a3;
    document.querySelector(".q2-a4").innerHTML= q2v3a4;
}
if(data_q2 == 4){
    document.querySelector(".q2").innerHTML = q2v4;
    document.querySelector(".q2-a1").innerHTML= q2v4a1;
    document.querySelector(".q2-a2").innerHTML = q2v4a2;
    document.querySelector(".q2-a3").innerHTML= q2v4a3;
    document.querySelector(".q2-a4").innerHTML= q2v4a4;
}

if(data_q3 == 1){
    document.querySelector(".q3").innerHTML = q3v1;
    document.querySelector(".q3-img1").style.display = '';
    document.querySelector(".q3-a1").innerHTML= q3v1a1;
    document.querySelector(".q3-a2").innerHTML = q3v1a2;
    document.querySelector(".q3-a3").innerHTML= q3v1a3;
    document.querySelector(".q3-a4").innerHTML= q3v1a4;
}
if(data_q3 == 2){
    document.querySelector(".q3").innerHTML = q3v2;
    document.querySelector(".q3-img2").style.display = '';
    document.querySelector(".q3-a1").innerHTML= q3v2a1;
    document.querySelector(".q3-a2").innerHTML = q3v2a2;
    document.querySelector(".q3-a3").innerHTML= q3v2a3;
    document.querySelector(".q3-a4").innerHTML= q3v2a4;
}   
if(data_q3 == 3){
    document.querySelector(".q3").innerHTML = q3v3;
    document.querySelector(".q3-a1").innerHTML= q3v3a1;
    document.querySelector(".q3-a2").innerHTML = q3v3a2;
    document.querySelector(".q3-a3").innerHTML= q3v3a3;
    document.querySelector(".q3-a4").innerHTML= q3v3a4;
}
if(data_q3 == 4){
    document.querySelector(".q3").innerHTML = q3v4;
    document.querySelector(".q3-a1").innerHTML= q3v4a1;
    document.querySelector(".q3-a2").innerHTML = q3v4a2;
    document.querySelector(".q3-a3").innerHTML= q3v4a3;
    document.querySelector(".q3-a4").innerHTML= q3v4a4;
}

if(data_q4 == 1){
    document.querySelector(".q4").innerHTML = q4v1;
    document.querySelector(".q4-a1").innerHTML= q4v1a1;
    document.querySelector(".q4-a2").innerHTML = q4v1a2;
    document.querySelector(".q4-a3").innerHTML= q4v1a3;
    document.querySelector(".q4-a4").innerHTML= q4v1a4;
}
if(data_q4 == 2){
    document.querySelector(".q4").innerHTML = q4v2;
    document.querySelector(".q4-a1").innerHTML= q4v2a1;
    document.querySelector(".q4-a2").innerHTML = q4v2a2;
    document.querySelector(".q4-a3").innerHTML= q4v2a3;
    document.querySelector(".q4-a4").innerHTML= q4v2a4;
}
if(data_q4 == 3){
    document.querySelector(".q4").innerHTML = q4v3;
    document.querySelector(".q4-a1").innerHTML= q4v3a1;
    document.querySelector(".q4-a2").innerHTML = q4v3a2;
    document.querySelector(".q4-a3").innerHTML= q4v3a3;
    document.querySelector(".q4-a4").innerHTML= q4v3a4;
}
if(data_q4 == 4){
    document.querySelector(".q4").innerHTML = q4v4;
    document.querySelector(".q4-a1").innerHTML= q4v4a1;
    document.querySelector(".q4-a2").innerHTML = q4v4a2;
    document.querySelector(".q4-a3").innerHTML= q4v4a3;
    document.querySelector(".q4-a4").innerHTML= q4v4a4;
}

if(data_q5 == 1){
    document.querySelector(".q5").innerHTML = q5v1;
    document.querySelector(".q5-img1").style.display = '';
    document.querySelector(".q5-a1").innerHTML= q5v1a1;
    document.querySelector(".q5-a2").innerHTML = q5v1a2;
    document.querySelector(".q5-a3").innerHTML= q5v1a3;
    document.querySelector(".q5-a4").innerHTML= q5v1a4;
}
if(data_q5 == 2){
    document.querySelector(".q5").innerHTML = q5v2;
    document.querySelector(".q5-img2").style.display = '';
    document.querySelector(".q5-a1").innerHTML= q5v2a1;
    document.querySelector(".q5-a2").innerHTML = q5v2a2;
    document.querySelector(".q5-a3").innerHTML= q5v2a3;
    document.querySelector(".q5-a4").innerHTML= q5v2a4;
}
if(data_q5 == 3){
    document.querySelector(".q5").innerHTML = q5v3;
    document.querySelector(".q5-img3").style.display = '';
    document.querySelector(".q5-a1").innerHTML= q5v3a1;
    document.querySelector(".q5-a2").innerHTML = q5v3a2;
    document.querySelector(".q5-a3").innerHTML= q5v3a3;
    document.querySelector(".q5-a4").innerHTML= q5v3a4;
}
if(data_q5 == 4){
    document.querySelector(".q5").innerHTML = q5v4;
    document.querySelector(".q5-img4").style.display = '';
    document.querySelector(".q5-a1").innerHTML= q5v4a1;
    document.querySelector(".q5-a2").innerHTML = q5v4a2;
    document.querySelector(".q5-a3").innerHTML= q5v4a3;
    document.querySelector(".q5-a4").innerHTML= q5v4a4;
}

if(data_q6 == 1){
    document.querySelector(".q6").innerHTML = q6v1;
    document.querySelector(".q6-img1").style.display = '';
    document.querySelector(".q6-a1").innerHTML= q6v1a1;
    document.querySelector(".q6-a2").innerHTML = q6v1a2;
    document.querySelector(".q6-a3").innerHTML= q6v1a3;
    document.querySelector(".q6-a4").innerHTML= q6v1a4;
}   
if(data_q6 == 2){
    document.querySelector(".q6").innerHTML = q6v2;
    document.querySelector(".q6-img2").style.display = '';
    document.querySelector(".q6-a1").innerHTML= q6v2a1;
    document.querySelector(".q6-a2").innerHTML = q6v2a2;
    document.querySelector(".q6-a3").innerHTML= q6v2a3;
    document.querySelector(".q6-a4").innerHTML= q6v2a4;
}
if(data_q6 == 3){
    document.querySelector(".q6").innerHTML = q6v3;
    document.querySelector(".q6-img3").style.display = '';
    document.querySelector(".q6-a1").innerHTML= q6v3a1;
    document.querySelector(".q6-a2").innerHTML = q6v3a2;
    document.querySelector(".q6-a3").innerHTML= q6v3a3;
    document.querySelector(".q6-a4").innerHTML= q6v3a4;
}
if(data_q6 == 4){
    document.querySelector(".q6").innerHTML = q6v4;
    document.querySelector(".q6-img4").style.display = '';
    document.querySelector(".q6-a1").innerHTML= q6v4a1;
    document.querySelector(".q6-a2").innerHTML = q6v4a2;
    document.querySelector(".q6-a3").innerHTML= q6v4a3;
    document.querySelector(".q6-a4").innerHTML= q6v4a4;
}

if(data_q7 == 1){
    document.querySelector(".q7").innerHTML = q7v1;
    document.querySelector(".q7-a1").innerHTML= q7v1a1;
    document.querySelector(".q7-a2").innerHTML = q7v1a2;
    document.querySelector(".q7-a3").innerHTML= q7v1a3;
    document.querySelector(".q7-a4").innerHTML= q7v1a4;
}
if(data_q7 == 2){
    document.querySelector(".q7").innerHTML = q7v2;
    document.querySelector(".q7-a1").innerHTML= q7v2a1;
    document.querySelector(".q7-a2").innerHTML = q7v2a2;
    document.querySelector(".q7-a3").innerHTML= q7v2a3;
    document.querySelector(".q7-a4").innerHTML= q7v2a4;
}
if(data_q7 == 3){
    document.querySelector(".q7").innerHTML = q7v3;
    document.querySelector(".q7-a1").innerHTML= q7v3a1;
    document.querySelector(".q7-a2").innerHTML = q7v3a2;
    document.querySelector(".q7-a3").innerHTML= q7v3a3;
    document.querySelector(".q7-a4").innerHTML= q7v3a4;
}
if(data_q7 == 4){
    document.querySelector(".q7").innerHTML = q7v4;
    document.querySelector(".q7-a1").innerHTML= q7v4a1;
    document.querySelector(".q7-a2").innerHTML = q7v4a2;
    document.querySelector(".q7-a3").innerHTML= q7v4a3;
    document.querySelector(".q7-a4").innerHTML= q7v4a4;
}

if(data_q8 == 1){
    document.querySelector(".q8").innerHTML = q8v1;
    document.querySelector(".q8-a1").innerHTML= q8v1a1;
    document.querySelector(".q8-a2").innerHTML = q8v1a2;
    document.querySelector(".q8-a3").innerHTML= q8v1a3;
    document.querySelector(".q8-a4").innerHTML= q8v1a4;
}
if(data_q8 == 2){
    document.querySelector(".q8").innerHTML = q8v2;
    document.querySelector(".q8-a1").innerHTML= q8v2a1;
    document.querySelector(".q8-a2").innerHTML = q8v2a2;
    document.querySelector(".q8-a3").innerHTML= q8v2a3;
    document.querySelector(".q8-a4").innerHTML= q8v2a4;
}
if(data_q8 == 3){
    document.querySelector(".q8").innerHTML = q8v3;
    document.querySelector(".q8-a1").innerHTML= q8v3a1;
    document.querySelector(".q8-a2").innerHTML = q8v3a2;
    document.querySelector(".q8-a3").innerHTML= q8v3a3;
    document.querySelector(".q8-a4").innerHTML= q8v3a4;
}
if(data_q8 == 4){
    document.querySelector(".q8").innerHTML = q8v4;
    document.querySelector(".q8-a1").innerHTML= q8v4a1;
    document.querySelector(".q8-a2").innerHTML = q8v4a2;
    document.querySelector(".q8-a3").innerHTML= q8v4a3;
    document.querySelector(".q8-a4").innerHTML= q8v4a4;
}

if(data_q9 == 1){
    document.querySelector(".q9").innerHTML = q9v1;
    document.querySelector(".q9-a1").innerHTML= q9v1a1;
    document.querySelector(".q9-a2").innerHTML = q9v1a2;
    document.querySelector(".q9-a3").innerHTML= q9v1a3;
    document.querySelector(".q9-a4").innerHTML= q9v1a4;
}
if(data_q9 == 2){
    document.querySelector(".q9").innerHTML = q9v2;
    document.querySelector(".q9-a1").innerHTML= q9v2a1;
    document.querySelector(".q9-a2").innerHTML = q9v2a2;
    document.querySelector(".q9-a3").innerHTML= q9v2a3;
    document.querySelector(".q9-a4").innerHTML= q9v2a4;
}
if(data_q9 == 3){
    document.querySelector(".q9").innerHTML = q9v3;
    document.querySelector(".q9-a1").innerHTML= q9v3a1;
    document.querySelector(".q9-a2").innerHTML = q9v3a2;
    document.querySelector(".q9-a3").innerHTML= q9v3a3;
    document.querySelector(".q9-a4").innerHTML= q9v3a4;
}
if(data_q9 == 4){
    document.querySelector(".q9").innerHTML = q9v4;
    document.querySelector(".q9-a1").innerHTML= q9v4a1;
    document.querySelector(".q9-a2").innerHTML = q9v4a2;
    document.querySelector(".q9-a3").innerHTML= q9v3a3;
    document.querySelector(".q9-a4").innerHTML= q9v4a4;
}

if(data_q10 == 1){
    document.querySelector(".q10").innerHTML = q10v1;
    document.querySelector(".q10-a1").innerHTML= q10v1a1;
    document.querySelector(".q10-a2").innerHTML = q10v1a2;
    document.querySelector(".q10-a3").innerHTML= q10v1a3;
    document.querySelector(".q10-a4").innerHTML= q10v1a4;
}
if(data_q10 == 2){
    document.querySelector(".q10").innerHTML = q10v2;
    document.querySelector(".q10-a1").innerHTML= q10v2a1;
    document.querySelector(".q10-a2").innerHTML = q10v2a2;
    document.querySelector(".q10-a3").innerHTML= q10v2a3;
    document.querySelector(".q10-a4").innerHTML= q10v2a4;
}
if(data_q10 == 3){
    document.querySelector(".q10").innerHTML = q10v3;
    document.querySelector(".q10-a1").innerHTML= q10v3a1;
    document.querySelector(".q10-a2").innerHTML = q10v3a2;
    document.querySelector(".q10-a3").innerHTML= q10v3a3;
    document.querySelector(".q10-a4").innerHTML= q10v3a4;
}
if(data_q10 == 4){
    document.querySelector(".q10").innerHTML = q10v4;
    document.querySelector(".q10-a1").innerHTML= q10v4a1;
    document.querySelector(".q10-a2").innerHTML = q10v4a2;
    document.querySelector(".q10-a3").innerHTML= q10v4a3;
    document.querySelector(".q10-a4").innerHTML= q10v4a4;
}
}
document.querySelector(".end_test_bttn").onclick = function(){
    document.querySelector(".title_txt_down").innerHTML = "Тестирование (завершено)" ;
    document.querySelector(".end_test_bttn").disabled = true; 
    var name = document.getElementById("username_input").value;
    var time_ower_minute = minute
    var time_ower_secund = sec
    time_out = time_ower_minute + ":"+ time_ower_secund;
    var otv_q1 = document.getElementById("q1-a").value;
    var otv_q2 = document.getElementById("q2-a").value;
    var otv_q3 = document.getElementById("q3-a").value;
    var otv_q4 = document.getElementById("q4-a").value;
    var otv_q5 = document.getElementById("q5-a").value;
    var otv_q6 = document.getElementById("q6-a").value;
    var otv_q7 = document.getElementById("q7-a").value;
    var otv_q8 = document.getElementById("q8-a").value;
    var otv_q9 = document.getElementById("q9-a").value;
    var otv_q10 = document.getElementById("q10-a").value;
    
    if (data_q1==1){
        if(otv_q1==q1v1pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }

    if (data_q1==2){
        if(otv_q1==q1v2pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }
    if (data_q1==3){
        if(otv_q1==q1v3pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }
    if (data_q1==4){
        if(otv_q1==q1v4pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }
    if (data_q2==1){
        if(otv_q2==q2v1pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }
    if (data_q2==2){
        if(otv_q2==q2v2pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }
    if (data_q2==3){
        if(otv_q2==q2v3pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }
    if (data_q2==4){
        if(otv_q2==q2v4pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }

    if (data_q3==1){
        if(otv_q3==q3v1pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }
    if (data_q3==2){
        if(otv_q3==q3v2pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }
    if (data_q3==3){
        if(otv_q3==q3v3pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }
    if (data_q3==4){
        if(otv_q3==q3v4pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }

    if (data_q4==1){
        if(otv_q4==q4v1pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }
    if (data_q4==2){
        if(otv_q4==q4v2pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }
    if (data_q4==3){
        if(otv_q4==q4v3pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }
    if (data_q4==4){
        if(otv_q4==q4v4pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }

    if (data_q5==1){
        if(otv_q5==q5v1pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }
    if (data_q5==2){
        if(otv_q5==q5v2pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }
    if (data_q5==3){
        if(otv_q5==q5v3pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }
    if (data_q5==4){
        if(otv_q5==q5v4pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }

    if (data_q6==1){
        if(otv_q6==q6v1pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }
    if (data_q6==2){
        if(otv_q6==q6v2pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }
    if (data_q6==3){
        if(otv_q6==q6v3pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }
    if (data_q6==4){
        if(otv_q6==q6v4pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }

    if (data_q7==1){
        if(otv_q7==q7v1pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }
    if (data_q7==2){
        if(otv_q7==q7v2pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }
    if (data_q7==3){
        if(otv_q7==q7v3pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }
    if (data_q7==4){
        if(otv_q7==q7v4pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }

    if (data_q8==1){
        if(otv_q8==q8v1pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }
    if (data_q8==2){
        if(otv_q8==q8v2pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }
    if (data_q8==3){
        if(otv_q8==q8v3pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }
    if (data_q8==4){
        if(otv_q8==q8v4pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }

    if (data_q9==1){
        if(otv_q9==q9v1pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }
    if (data_q9==2){
        if(otv_q9==q9v2pa){
            ball = ball+1
            
        }
        else{
            ball = ball
        }
    }
    if (data_q9==3){
        if(otv_q9==q9v3pa){
            ball = ball+1
        }
        else{
            ball = ball
        }
    }
    if (data_q9==4){
        if(otv_q9==q9v4pa){
            ball = ball+1
        }
        else{
            ball = ball
        }
    }

    if (data_q10==1){
        if(otv_q10==q10v1pa){
            ball = ball+1
            if(ball == 10){
                mark = 5   
           }
           if(ball == 9){
               mark = 5   
           }
           if(ball == 8){
               mark = 4 
           }
           if(ball == 7){
               mark = 4  
           }
           if(ball == 6){
               mark = 4   
           }
           if(ball == 5){
               mark = 3 
           }
           if(ball == 4){
               mark = 3 
           }
           if(ball == 3){
               mark = 2
           }
           if(ball == 2){
               mark = 2
           }
           if(ball == 1){
               mark = 2
           }
            console.log("Ball - " + ball)
            alert("Name: " + name + "| Time: "+time_out + "| Ball: " +ball + "| Mark: " + mark);
            fetch(`his7/result/${name}/${ball}/${mark}`, {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            
        }
        else{
            ball = ball
            if(ball == 10){
                mark = 5   
           }
           if(ball == 9){
               mark = 5   
           }
           if(ball == 8){
               mark = 4 
           }
           if(ball == 7){
               mark = 4  
           }
           if(ball == 6){
               mark = 4   
           }
           if(ball == 5){
               mark = 3 
           }
           if(ball == 4){
               mark = 3 
           }
           if(ball == 3){
               mark = 2
           }
           if(ball == 2){
               mark = 2
           }
           if(ball == 1){
               mark = 2
           }
            console.log("Ball - " + ball)
            alert("Name: " + name + "| Time: "+time_out + "| Ball: " +ball + "| Mark: " + mark);
            fetch(`his7/result/${name}/${ball}/${mark}`, {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    if (data_q10==2){
        if(otv_q10==q10v2pa){
            ball = ball+1
            if(ball == 10){
                mark = 5   
           }
           if(ball == 9){
               mark = 5   
           }
           if(ball == 8){
               mark = 4 
           }
           if(ball == 7){
               mark = 4  
           }
           if(ball == 6){
               mark = 4   
           }
           if(ball == 5){
               mark = 3 
           }
           if(ball == 4){
               mark = 3 
           }
           if(ball == 3){
               mark = 2
           }
           if(ball == 2){
               mark = 2
           }
           if(ball == 1){
               mark = 2
           }
            console.log("Ball - " + ball)
            alert("Name: " + name + "| Time: "+time_out + "| Ball: " +ball + "| Mark: " + mark);
            fetch(`his7/result/${name}/${ball}/${mark}`, {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
        else{
            ball = ball          
            if(ball == 10){
                mark = 5   
           }
           if(ball == 9){
               mark = 5   
           }
           if(ball == 8){
               mark = 4 
           }
           if(ball == 7){
               mark = 4  
           }
           if(ball == 6){
               mark = 4   
           }
           if(ball == 5){
               mark = 3 
           }
           if(ball == 4){
               mark = 3 
           }
           if(ball == 3){
               mark = 2
           }
           if(ball == 2){
               mark = 2
           }
           if(ball == 1){
               mark = 2
           }
            console.log("Ball - " + ball)
            alert("Name: " + name + "| Time: "+time_out + "| Ball: " +ball + "| Mark: " + mark);
            fetch(`his7/result/${name}/${ball}/${mark}`, {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    if (data_q10==3){
        if(otv_q10==q10v3pa){
            ball = ball+1
            if(ball == 10){
                mark = 5   
           }
           if(ball == 9){
               mark = 5   
           }
           if(ball == 8){
               mark = 4 
           }
           if(ball == 7){
               mark = 4  
           }
           if(ball == 6){
               mark = 4   
           }
           if(ball == 5){
               mark = 3 
           }
           if(ball == 4){
               mark = 3 
           }
           if(ball == 3){
               mark = 2
           }
           if(ball == 2){
               mark = 2
           }
           if(ball == 1){
               mark = 2
           }
            console.log("Ball - " + ball)
            alert("Name: " + name + "| Time: "+time_out + "| Ball: " +ball + "| Mark: " + mark);
            fetch(`his7/result/${name}/${ball}/${mark}`, {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
        else{
            ball = ball
            if(ball == 10){
                mark = 5   
           }
           if(ball == 9){
               mark = 5   
           }
           if(ball == 8){
               mark = 4 
           }
           if(ball == 7){
               mark = 4  
           }
           if(ball == 6){
               mark = 4   
           }
           if(ball == 5){
               mark = 3 
           }
           if(ball == 4){
               mark = 3 
           }
           if(ball == 3){
               mark = 2
           }
           if(ball == 2){
               mark = 2
           }
           if(ball == 1){
               mark = 2
           }
            console.log("Ball - " + ball)
            alert("Name: " + name + "| Time: "+time_out + "| Ball: " +ball + "| Mark: " + mark);
            fetch(`his7/result/${name}/${ball}/${mark}`, {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    if (data_q10==4){
        if(otv_q10==q10v4pa){
            ball = ball+1
            if(ball == 10){
                mark = 5   
           }
           if(ball == 9){
               mark = 5   
           }
           if(ball == 8){
               mark = 4 
           }
           if(ball == 7){
               mark = 4  
           }
           if(ball == 6){
               mark = 4   
           }
           if(ball == 5){
               mark = 3 
           }
           if(ball == 4){
               mark = 3 
           }
           if(ball == 3){
               mark = 2
           }
           if(ball == 2){
               mark = 2
           }
           if(ball == 1){
               mark = 2
           }
            console.log("Ball - " + ball)
            alert("Name: " + name + "| Time: "+time_out + "| Ball: " +ball + "| Mark: " + mark);
            fetch(`his7/result/${name}/${ball}/${mark}`, {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
        else{
            ball = ball
            if(ball == 10){
                mark = 5   
           }
           if(ball == 9){
               mark = 5   
           }
           if(ball == 8){
               mark = 4 
           }
           if(ball == 7){
               mark = 4  
           }
           if(ball == 6){
               mark = 4   
           }
           if(ball == 5){
               mark = 3 
           }
           if(ball == 4){
               mark = 3 
           }
           if(ball == 3){
               mark = 2
           }
           if(ball == 2){
               mark = 2
           }
           if(ball == 1){
               mark = 2
           }
            console.log("Ball - " + ball)
            alert("Name: " + name + "| Time: "+time_out + "| Ball: " +ball + "| Mark: " + mark);
            fetch(`his7/result/${name}/${ball}/${mark}`, {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }
}

