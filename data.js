/* Editable A1+ British English content library, kept separate from game logic. */
{
const TENSES = {
  present_simple: 'Present Simple', present_continuous: 'Present Continuous',
  past_simple: 'Past Simple', future_simple: 'Future Simple'
};

const rawCoordinates = {
  present_simple: [
    ['Mia _____ breakfast at 8 o’clock every day.','has','is having','had','Mia has breakfast at 8 o’clock every day.'],
    ['My brother _____ to school by bus every day.','goes','is going','went','My brother goes to school by bus every day.'],
    ['We _____ football at weekends.','play','are playing','played','We play football at weekends.'],
    ['Anna _____ her room every Saturday.','cleans','is cleaning','cleaned','Anna cleans her room every Saturday.'],
    ['Dad usually _____ dinner for us.','cooks','is cooking','cooked','Dad usually cooks dinner for us.'],
    ['They never _____ TV in the morning.','watch','are watching','watched','They never watch TV in the morning.'],
    ['Leo never _____ coffee.','drinks','is drinking','drank','Leo never drinks coffee.'],
    ['_____ you walk to school every day?','Do','Are','Did','Do you walk to school every day?'],
    ['_____ Sara usually like cats?','Does','Is','Did','Does Sara usually like cats?'],
    ['Where _____ your grandparents usually live?','do','are','did','Where do your grandparents usually live?'],
    ['What time _____ the lesson start every Monday?','does','is','did','What time does the lesson start every Monday?'],
    ['Our dog often _____ in the garden.','sleeps','is sleeping','slept','Our dog often sleeps in the garden.'],
    ['I always _____ my homework after tea.','do','am doing','did','I always do my homework after tea.'],
    ['Ruby _____ books before bed.','reads','is reading','read yesterday','Ruby reads books before bed.'],
    ['The shop _____ at nine every morning.','opens','is opening','opened','The shop opens at nine every morning.'],
    ['Sam and Joe _____ tennis on Fridays.','play','are playing','played','Sam and Joe play tennis on Fridays.'],
    ['Mum _____ never late for work on weekdays.','is','was','will be','Mum is never late for work on weekdays.'],
    ['_____ your friends study English every week?','Do','Are','Did','Do your friends study English every week?'],
    ['Ella _____ her teeth twice a day.','brushes','is brushing','brushed','Ella brushes her teeth twice a day.'],
    ['How often _____ Ben visit his aunt?','does','is','did','How often does Ben visit his aunt?']
  ],
  present_continuous: [
    ['Look! Ben _____ in the garden.','is playing','plays','played','Look! Ben is playing in the garden.'],
    ['The children _____ outside now.','are running','run','ran','The children are running outside now.'],
    ['I _____ my blue jacket at the moment.','am wearing','wear','wore','I am wearing my blue jacket at the moment.'],
    ['Listen! The baby _____.','is crying','cries','cried','Listen! The baby is crying.'],
    ['We _____ dinner right now.','are making','make','made','We are making dinner right now.'],
    ['Mia _____ right now.','is not working','does not work','did not work','Mia is not working right now.'],
    ['The boys _____ TV at the moment.','are not watching','do not watch','did not watch','The boys are not watching TV at the moment.'],
    ['_____ Dad washing the car now?','Is','Does','Did','Is Dad washing the car now?'],
    ['_____ you listening to me right now?','Are','Do','Did','Are you listening to me right now?'],
    ['What _____ Tom doing now?','is','does','did','What is Tom doing now?'],
    ['Why _____ they laughing right now?','are','do','did','Why are they laughing right now?'],
    ['My cat _____ under the table now.','is hiding','hides','hid','My cat is hiding under the table now.'],
    ['I _____ an email at the moment.','am writing','write','wrote','I am writing an email at the moment.'],
    ['The bus _____ now.','is coming','comes','came','The bus is coming now.'],
    ['Look! Lucy and Amy _____ in the kitchen.','are dancing','dance','danced','Look! Lucy and Amy are dancing in the kitchen.'],
    ['It _____ at the moment.','is raining','rains','rained','It is raining at the moment.'],
    ['_____ your teacher speaking now?','Is','Does','Did','Is your teacher speaking now?'],
    ['Who _____ at the door right now?','is standing','stands','stood','Who is standing at the door right now?'],
    ['The students _____ a test right now.','are taking','take','took','The students are taking a test right now.'],
    ['I _____ my phone now.','am not using','do not use','did not use','I am not using my phone now.']
  ],
  past_simple: [
    ['We _____ our grandparents last Sunday.','visited','visit','will visit','We visited our grandparents last Sunday.'],
    ['Tom _____ a new bike yesterday.','bought','buys','will buy','Tom bought a new bike yesterday.'],
    ['I _____ breakfast at seven this morning.','had','have','will have','I had breakfast at seven this morning.'],
    ['They _____ to London last year.','went','go','will go','They went to London last year.'],
    ['Mia _____ her keys two days ago.','lost','loses','will lose','Mia lost her keys two days ago.'],
    ['We _____ football yesterday.','did not play','do not play','will not play','We did not play football yesterday.'],
    ['Sam _____ the film last night.','did not like','does not like','will not like','Sam did not like the film last night.'],
    ['_____ you see Jack yesterday?','Did','Do','Will','Did you see Jack yesterday?'],
    ['_____ Amy call you last week?','Did','Does','Will','Did Amy call you last week?'],
    ['Where _____ they go last summer?','did','do','will','Where did they go last summer?'],
    ['What _____ you eat for lunch yesterday?','did','do','will','What did you eat for lunch yesterday?'],
    ['Dad _____ the window an hour ago.','opened','opens','will open','Dad opened the window an hour ago.'],
    ['I _____ my homework after school yesterday.','did','do','will do','I did my homework after school yesterday.'],
    ['The lesson _____ ten minutes ago.','started','starts','will start','The lesson started ten minutes ago.'],
    ['Our team _____ the match last Saturday.','won','wins','will win','Our team won the match last Saturday.'],
    ['She _____ a letter to her friend last month.','wrote','writes','will write','She wrote a letter to her friend last month.'],
    ['_____ it rain yesterday?','Did','Does','Will','Did it rain yesterday?'],
    ['Why _____ Ben leave early yesterday?','did','does','will','Why did Ben leave early yesterday?'],
    ['The children _____ happy at the party yesterday.','were','are','will be','The children were happy at the party yesterday.'],
    ['Kate _____ at home last night.','was','is','will be','Kate was at home last night.']
  ],
  future_simple: [
    ['Ben _____ to Italy next summer.','will travel','travels every summer','travelled last summer','Ben will travel to Italy next summer.'],
    ['I think it _____ tomorrow.','will rain','rains','rained','I think it will rain tomorrow.'],
    ['We _____ you next week.','will visit','visit every week','visited last week','We will visit you next week.'],
    ['Mia _____ twelve years old next month.','will be','is now','was last month','Mia will be twelve years old next month.'],
    ['I think Dad _____ dinner tomorrow.','will cook','cooks every day','cooked yesterday','I think Dad will cook dinner tomorrow.'],
    ['I _____ your secret tomorrow.','will not tell','do not tell','did not tell','I will not tell your secret tomorrow.'],
    ['They _____ at school tomorrow.','will not be','are not','were not','They will not be at school tomorrow.'],
    ['_____ you help me with this bag tomorrow?','Will','Does','Did yesterday','Will you help me with this bag tomorrow?'],
    ['_____ Sara come to the party next week?','Will','Does','Did','Will Sara come to the party next week?'],
    ['Where _____ you stay next summer?','will','do','did','Where will you stay next summer?'],
    ['What _____ we do tomorrow?','will','do','did','What will we do tomorrow?'],
    ['The train _____ soon.','will arrive','arrives every day','arrived','The train will arrive soon.'],
    ['One day, people _____ on Mars.','will live','live now','lived','One day, people will live on Mars.'],
    ['I _____ you after school tomorrow.','will call','called yesterday','call every day','I will call you after school tomorrow.'],
    ['Our class _____ a museum next month.','will visit','visited','visits every Friday','Our class will visit a museum next month.'],
    ['It _____ easy tomorrow, but we can try.','will not be','is not','was not','It will not be easy tomorrow, but we can try.'],
    ['_____ it be sunny tomorrow?','Will','Is','Was','Will it be sunny tomorrow?'],
    ['Who _____ the game next time?','will win','wins yesterday','won tomorrow','Who will win the game next time?'],
    ['My brother _____ a new school next year.','will start','started','starts yesterday','My brother will start a new school next year.'],
    ['We _____ the work in two days.','will finish','finished','finish yesterday','We will finish the work in two days.']
  ]
};

const coordinates = Object.entries(rawCoordinates).flatMap(([tense, rows]) => rows.map((r,i) => ({
  id:`coord_${tense}_${i+1}`, trainer:'coordinates', tense, sentenceType: i<5?'affirmative':i<7?'negative':i<9?'general question':i<11?'special question':'mixed',
  difficulty: i<8?1:i<15?2:3, prompt:r[0], options:[r[1],r[2],r[3]], answer:r[1], completedSentence:r[4]
})));

const timelineBases = {
  present_simple: [
    ['Mia|has|breakfast|at 8 o’clock'],['Tom|plays|football|every day'],['We|walk|to school|every morning'],['My best friend|likes|funny films'],['The dog|sleeps|in the kitchen'],['I|do not eat|meat'],['Sara|does not watch|TV|in the morning'],['They|do not play|tennis|on Mondays'],['Do|you|read|at weekends?'],['Does|Ben|live|near here?'],['Where|do|your friends|meet?'],['What time|does|the shop|open?'],['My parents|usually cook|dinner|together'],['The children|often visit|the park|after school'],['Our teacher|always helps|us'],['Amy|brushes|her teeth|twice a day'],['Do|the buses|stop|here?'],['Why|does|Leo|walk|to work?'],['My cat|never drinks|milk'],['We|have|English lessons|on Tuesdays']
  ],
  present_continuous: [
    ['The children|are|playing|outside|now'],['I|am|reading|a book|at the moment'],['Mum|is|making|lunch|now'],['Look!|The bus|is|coming'],['Ben|is|wearing|a red hat'],['We|are not|watching|TV|now'],['The baby|is not|sleeping|at the moment'],['I|am not|using|the computer|now'],['Are|you|listening|to me?'],['Is|Dad|washing|the car?'],['What|is|Mia|drawing|now?'],['Why|are|the boys|laughing?'],['The students|are|writing|their answers'],['My dog|is|running|in the garden'],['Listen!|Someone|is|singing'],['Tom and Lucy|are|waiting|for the train'],['Is|your sister|doing|her homework?'],['Where|are|they|going|now?'],['It|is|raining|at the moment'],['I|am|sitting|next to Jack']
  ],
  past_simple: [
    ['We|visited|our grandparents|last Sunday'],['Tom|bought|a new bike|yesterday'],['I|had|breakfast|at seven'],['They|went|to London|last year'],['Mia|lost|her keys|two days ago'],['We|did not play|football|yesterday'],['Sam|did not like|the film'],['Dad|did not work|last Saturday'],['Did|you|see Jack|yesterday?'],['Did|Amy|call you|last week?'],['Where|did|they|go|last summer?'],['What|did|you|eat|for lunch?'],['The lesson|started|ten minutes ago'],['Our team|won|the match|last week'],['She|wrote|a letter|yesterday'],['The children|were|happy|at the party'],['Was|Kate|at home|last night?'],['Why|did|Ben|leave|early?'],['I|found|a coin|in the street'],['We|watched|a great film|on Friday']
  ],
  future_simple: [
    ['Ben|will|travel|to Italy|next summer'],['I|will|call|you|tomorrow'],['We|will|visit|the museum|next week'],['Mia|will|be|twelve|next month'],['Dad|will|cook|dinner|tonight'],['I|will not|tell|your secret'],['They|will not|be|late|tomorrow'],['It|will not|rain|next week'],['Will|you|help|me?'],['Will|Sara|come|to the party?'],['Where|will|you|stay|next summer?'],['What|will|we|do|tomorrow?'],['The train|will|arrive|soon'],['People|will|live|on Mars|one day'],['Our class|will|start|a new project'],['My brother|will|buy|a laptop|next month'],['Will|it|be|sunny|tomorrow?'],['Who|will|win|the game?'],['We|will|finish|the work|in two days'],['I think|you|will|like|this book']
  ]
};
const timeline = Object.entries(timelineBases).flatMap(([tense, rows]) => rows.map((row,i) => {
  const correctOrder=row[0].split('|'); const q=correctOrder[correctOrder.length-1].endsWith('?');
  return {id:`timeline_${tense}_${i+1}`,trainer:'timeline',tense,sentenceType:q?'question':i>=5&&i<8?'negative':'affirmative',difficulty:i<6?1:i<13?2:3,cards:[...correctOrder],correctOrder,answer: correctOrder.join(' ').replace(/ \?/,'?').replace(/^./,x=>x.toUpperCase())+(q?'':'.')};
}));

const markers = {
  present_simple:['every day','every week','on Mondays','usually','always','often','sometimes','never'],
  present_continuous:['now','right now','at the moment','Look!','Listen!','at this moment','just now','currently'],
  past_simple:['yesterday','last week','last month','last year','last Monday','two days ago','an hour ago','in 2024'],
  future_simple:['tomorrow','next week','next month','next year','soon','one day','in the future','in two days']
};
const eventStems = {
  present_simple:['Kate usually walks to school.','We play tennis every Friday.','Ben often helps his dad.','My cat sleeps in the kitchen.','I always have tea at breakfast.','Sara does not like cold weather.','Do you read every evening?','The shop opens at nine.','Mum works at a hospital.','They visit us every month.','Leo never eats fish.','Our bus comes at eight.','My friends live near the park.','Does Amy speak French?','I clean my room on Saturdays.','Dad usually makes lunch.','The children walk home together.','We do not study on Sundays.','What time does school start?','Ruby wears glasses.'],
  present_continuous:['The children are playing outside now.','I am doing my homework at the moment.','Look! The dog is running.','Mia is talking on the phone now.','We are waiting for the bus.','Dad is cooking dinner right now.','Listen! The baby is crying.','Tom is not sleeping now.','Are you wearing my hat?','It is raining at the moment.','The boys are kicking a ball.','I am writing an email now.','Mum is reading in the garden.','What are they doing now?','Our teacher is speaking.','The cat is hiding under the bed.','Ben and Amy are dancing.','She is not watching TV now.','Is Jack coming with us?','The sun is shining.'],
  past_simple:['We visited London last year.','Tom called me yesterday.','I saw Anna two days ago.','Mia bought a book last week.','They played football on Saturday.','Dad cooked dinner last night.','Our lesson started an hour ago.','Ben did not go to school yesterday.','Did you enjoy the film?','The bus arrived ten minutes ago.','We had a picnic last Sunday.','Sara wrote a letter yesterday.','My family moved here in 2024.','I lost my keys last week.','The children were tired after school.','Amy made a cake on Friday.','Where did you stay last summer?','It rained yesterday.','Leo found his phone this morning.','They did not win the match.'],
  future_simple:['I think it will rain tomorrow.','We will visit Paris next year.','Ben will call you soon.','Mia will start school next month.','They will be here in two days.','I will help you tomorrow.','Dad will buy a car next year.','We will not be late.','Will you come next week?','One day, people will live on Mars.','Our class will meet tomorrow.','The train will arrive soon.','Sara will finish the book tonight.','It will be warm next week.','I will send an email tomorrow.','The team will play again next month.','Where will you go next summer?','My brother will be ten next year.','We will not forget you.','The dog will be fine soon.']
};
const sortEvents=Object.entries(eventStems).flatMap(([tense,arr])=>arr.map((text,i)=>({id:`sort_${tense}_${i+1}`,tense,text})));
window.GAME_DATA={TENSES,coordinates,timeline,markers,sortEvents};
}
