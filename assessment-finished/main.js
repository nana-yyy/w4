const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'その日は華氏40度でとても暑かった。だから :insertx: は外に出かけた。:inserty:についた時、彼は何十分もの間踊り続けた。その時、:insertz:。体重300ポンドの:insertx:は驚いたが、Bobは驚かなかった。それは:inserty:ではよくある話だった。';
const insertX = ['学校の先生', 'サンタさん', 'マイファーザー'];
const insertY = ['ディズニーランド', '家庭室', 'ダンスホール'];
const insertZ = ['雪が降っていた', '火事が起きていた', 'プールに落っこちた'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("jp").checked) {
    const weight = `${Math.round(300*0.0714286)} kg`;
    const temperature =  `摂氏${Math.round((94-32) * 5 / 9)} 度`;
    newStory = newStory.replace('華氏40度', temperature);
    newStory = newStory.replace('300ポンド', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
