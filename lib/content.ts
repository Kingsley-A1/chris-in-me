export const site = {
  name: "Chris in Me Gospel Arena",
  shortName: "CHRIS IN ME",
  eyebrow: "CHRIS IN ME · GOSPEL ARENA",
  tagline: "A place to belong. A faith to grow.",
  description: "A thoughtful digital home for worship, faith, and community — an original church website concept by Bespoke Technologies.",
  notice: "Church website concept by Bespoke Technologies. This is not a verified operating congregation. Sermons, events, ministry information, and photographs are illustrative.",
  creator: "Bespoke Technologies",
  creatorUrl: "https://www.bespoketech.com.ng",
  creatorWhatsApp: "https://wa.me/2348088071657",
  url: "https://chris-in-me.vercel.app",
};

const photo=(id:string,w=1400)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=82`;

export const media = {
  hero: photo("photo-1438232992991-995b7058bbb3",2200),
  worship: photo("photo-1438232992991-995b7058bbb3",1600),
  community: photo("photo-1529156069898-49953e39b3ac",1400),
  prayer: photo("photo-1504052434569-70ad5836ab65",1400),
  sanctuary: photo("photo-1438032005730-c779502df39b",1800),
  group: photo("photo-1517457373958-b7bdd4587205",1400),
  service: photo("photo-1488521787991-ed7bbaae773c",1400),
  sunrise: photo("photo-1470252649378-9c29740c9fa8",1600),
  guitar: photo("photo-1510915361894-db8b60106cb1",1200),
  bible: photo("photo-1499209974431-9dddcece7f88",1300),
  quiet: photo("photo-1506744038136-46273834b3fb",1400),
  sky: photo("photo-1519681393784-d120267933ba",1400),
  architecture: photo("photo-1509228627152-72ae9ae6848d",1600),
};

export type Sermon = {
  slug:string; title:string; series:string; scripture:string; category:string; duration:string;
  deck:string; image:string; passage:string; takeaway:string; notes:string[]; questions:string[];
};
export const sermons:Sermon[] = [
  {slug:"hope-has-a-name",title:"Hope has a name.",series:"Rooted in hope",scripture:"Colossians 1:27",category:"Hope",duration:"Reflection · 6 min",image:media.sunrise,
  deck:"A quiet reminder that Christian hope is more than positive thinking. It is grounded in Christ.",
  passage:"Christ in you, the hope of glory. — Colossians 1:27 (KJV)",
  takeaway:"Hope is not the absence of hard days. It is a reason to keep walking through them.",
  notes:["Sometimes the word hope sounds like a wish: something we hold lightly because we cannot know what will happen next. The New Testament invites us into something deeper — a hope rooted in Christ rather than a guarantee of easy circumstances.","Colossians describes a profound mystery: Christ among and within His people. The point is not that every uncertainty disappears, but that we are not abandoned to face uncertainty alone.","That changes the way we walk into ordinary life. We can be honest about grief, responsibility, doubt and need, while still choosing a posture of faithful expectation."],
  questions:["What has been making hope feel difficult lately?","How might your day change if hope were an anchor rather than a prediction?"]},
  {slug:"room-at-the-table",title:"There is room at the table.",series:"Life together",scripture:"Romans 12:10–13",category:"Community",duration:"Reflection · 5 min",image:media.community,
  deck:"What belonging looks like when it moves from a warm greeting into everyday practice.",
  passage:"Be kindly affectioned one to another with brotherly love. — Romans 12:10 (KJV)",
  takeaway:"Hospitality begins when someone feels seen, not merely counted.",
  notes:["A welcome sign is easy to print. A welcoming culture takes practice. It is built in the moment someone is noticed, included, listened to and remembered.","Romans 12 moves love into ordinary conduct. It describes affection, generosity, patience and hospitality. These are not abstract ideas reserved for special occasions.","Belonging can begin in very small ways: remembering a visitor's name, making space for a newcomer, listening before offering advice, and being present when someone needs a friend."],
  questions:["Who made you feel welcome when you needed it?","How can you make room for one person this week?"]},
  {slug:"faith-for-the-ordinary-days",title:"Faith for ordinary days.",series:"Everyday faith",scripture:"Micah 6:8",category:"Growth",duration:"Reflection · 7 min",image:media.bible,
  deck:"We often look for life-changing moments while overlooking the daily choices that shape us.",
  passage:"Do justly, and to love mercy, and to walk humbly with thy God. — Micah 6:8 (KJV)",
  takeaway:"A faithful life is shaped in small decisions repeated with care.",
  notes:["Most of life is not spent on mountaintops. It is lived in conversations, commutes, responsibilities, meals and unseen choices.","Micah speaks plainly about justice, mercy and humility. These values do not wait for a microphone or a platform; they can be practised in our work, friendships and homes.","Growth becomes visible when our convictions shape how we treat people, keep promises, admit mistakes and respond under pressure."],
  questions:["Which ordinary decision is asking for courage or kindness?","What might walking humbly look like tomorrow morning?"]},
  {slug:"the-courage-to-begin-again",title:"The courage to begin again.",series:"Grace in motion",scripture:"Lamentations 3:22–23",category:"Grace",duration:"Reflection · 5 min",image:media.sky,
  deck:"A fresh start is not always dramatic. Sometimes it is simply choosing the next faithful step.",
  passage:"His compassions fail not. They are new every morning. — Lamentations 3:22–23 (KJV)",
  takeaway:"Grace does not erase responsibility; it gives us courage to face it again.",
  notes:["There are mornings when yesterday feels heavy. Words we regret, opportunities missed, expectations unmet. Scripture does not pretend those realities vanish.","Lamentations holds hope and honest sorrow in the same place. That is what makes the language of new mercies so powerful.","Beginning again may mean apologising, asking for help, returning to prayer or taking a small honest step toward what matters."],
  questions:["Where do you need permission to begin again?","What is one truthful next step you can take?"]},
  {slug:"love-with-its-sleeves-rolled-up",title:"Love with its sleeves rolled up.",series:"Faith in action",scripture:"James 2:14–17",category:"Service",duration:"Reflection · 6 min",image:media.service,
  deck:"What if compassion were measured not only by what we feel, but by what we actually do?",
  passage:"Faith, if it hath not works, is dead, being alone. — James 2:17 (KJV)",
  takeaway:"Love becomes visible when it takes the form of practical care.",
  notes:["We may sincerely care about people and still overlook what they need in practice. James brings faith into contact with hunger, clothing and everyday hardship.","The passage is not a call to perform goodness for applause. It is an invitation to let what we believe shape how we respond to those around us.","Sometimes service is public; often it is quiet. A thoughtful call. A shared meal. A ride. Patient attention. Faith becomes recognisable in these moments."],
  questions:["What practical need can you respond to this week?","How can service remain personal rather than performative?"]},
  {slug:"peace-in-the-middle",title:"Peace in the middle.",series:"The quiet strength",scripture:"Philippians 4:6–7",category:"Prayer",duration:"Reflection · 6 min",image:media.quiet,
  deck:"An invitation to bring our real worries into prayer without pretending they are small.",
  passage:"The peace of God, which passeth all understanding, shall keep your hearts and minds. — Philippians 4:7 (KJV)",
  takeaway:"Prayer is an honest place to bring what we cannot carry alone.",
  notes:["Anxiety is not solved by somebody telling us to stop worrying. Biblical prayer begins with honesty: naming what is troubling us and bringing it before God.","Philippians connects prayer with thanksgiving and the peace of God. It does not say every problem disappears immediately.","The invitation is to remain grounded in God while taking responsible steps, seeking wise support, and refusing to confuse a difficult season with a hopeless one."],
  questions:["What worry needs words rather than silence?","Who could offer practical support as you pray?"]},
];

export type Ministry={slug:string;title:string;kicker:string;description:string;image:string;focus:string[];invitation:string;};
export const ministries:Ministry[]=[
 {slug:"worship-and-creative",title:"Worship & Creative",kicker:"COME WITH A SONG",description:"Space for music, thoughtful storytelling and the creative gifts that help people worship together.",image:media.guitar,focus:["Music and worship","Creative expression","Service production"],invitation:"Bring your gift. Bring your willingness to grow."},
 {slug:"children-and-families",title:"Children & Families",kicker:"LITTLE LIVES. GREAT VALUE.",description:"A thoughtful approach to helping children feel safe, known, encouraged and rooted in the love of God.",image:media.group,focus:["Age-appropriate learning","Family connection","Safe participation"],invitation:"A place for questions, wonder, and growing faith."},
 {slug:"young-people",title:"Young People",kicker:"FAITH FOR THE ROAD AHEAD",description:"Belonging and meaningful conversation for young people exploring identity, purpose, friendship and service.",image:media.community,focus:["Mentoring","Community","Faith conversations"],invitation:"Real questions are welcome here."},
 {slug:"care-and-prayer",title:"Care & Prayer",kicker:"YOU DO NOT WALK ALONE",description:"An example of how a church can communicate compassionate pastoral care and prayer support.",image:media.prayer,focus:["Prayer","Listening","Practical support"],invitation:"Sometimes the bravest first step is asking someone to listen."},
 {slug:"outreach-and-service",title:"Outreach & Service",kicker:"FAITH WITH OPEN HANDS",description:"Making room for generosity, dignity and neighbourly service beyond the church gathering.",image:media.service,focus:["Neighbour care","Community partnerships","Practical generosity"],invitation:"Love looks beautiful when it becomes useful."},
 {slug:"small-groups",title:"Groups & Fellowship",kicker:"LIFE IS BETTER TOGETHER",description:"Smaller spaces for friendship, scripture, questions and showing up for one another in everyday life.",image:media.bible,focus:["Bible conversations","Friendship","Mutual encouragement"],invitation:"Because being known matters."},
];
export type Gathering={slug:string,title:string,label:string,type:string,summary:string,description:string,image:string,whatToExpect:string[],};
export const gatherings:Gathering[]=[
 {slug:"worship-gathering",title:"Worship gathering",label:"WORSHIP",type:"Community gathering concept",summary:"A gathering shaped by music, prayer, scripture and genuine connection.",description:"An example worship gathering that places Scripture, meaningful music, prayer, and a warm welcome at the centre of the experience. Actual service days, times and location are intentionally unlisted until confirmed.",image:media.hero,whatToExpect:["A friendly welcome","Worship and prayer","A Bible-centred message","Time to connect"]},
 {slug:"the-table",title:"The Table",label:"COMMUNITY",type:"Fellowship concept",summary:"Good conversations have a way of making strangers feel like neighbours.",description:"A concept for the simple beauty of gathering: shared stories, unhurried conversation, and a chance to feel seen beyond the main service.",image:media.community,whatToExpect:["Casual introductions","Meaningful conversation","A welcoming environment","Room for questions"]},
 {slug:"still-and-strong",title:"Still & Strong",label:"PRAYER",type:"Prayer gathering concept",summary:"A quieter space to bring both gratitude and the things we cannot explain.",description:"A sample concept for a reflective prayer gathering that values silence as much as speech, and cares for people without pressure.",image:media.prayer,whatToExpect:["A reflective atmosphere","Guided prayer","Scripture reflection","Respect for privacy"]},
 {slug:"hands-and-hearts",title:"Hands & Hearts",label:"SERVE",type:"Service initiative concept",summary:"Because care is most convincing when it shows up in real life.",description:"A programme concept centred on dignity and practical care in the wider community. No actual initiative or impact statistics are claimed.",image:media.service,whatToExpect:["Serving with care","Community collaboration","Simple practical needs","Respect and dignity"]},
];

export type Note={slug:string,category:string,title:string,deck:string,image:string,read:string,paragraphs:string[],quote:string};
export const notes:Note[]=[
 {slug:"the-beauty-of-being-known",category:"BELONGING",title:"The beauty of being known.",deck:"Not just seen in a room. Really known.",image:media.community,read:"4 MIN READ",quote:"Belonging isn't a headcount. It's the feeling that your presence matters.",paragraphs:["There is a difference between entering a crowded room and finding a place where someone knows your name. Both can look busy. Only one feels like home.","Christian community is more than attending the same gathering. It grows through listening, generosity, presence and the willingness to carry one another's stories with care.","Sometimes the most meaningful act of welcome is uncomplicated: making room, asking a name, remembering an answer and being glad someone came."]},
 {slug:"the-unhurried-life",category:"SPIRITUAL GROWTH",title:"The unhurried life.",deck:"Faith is not another race to finish.",image:media.quiet,read:"5 MIN READ",quote:"Not everything that matters needs to happen quickly.",paragraphs:["We live among deadlines, notifications and the quiet pressure to prove that every moment has been productive.","Yet some of the things that shape us most deeply cannot be rushed: learning patience, making peace, praying honestly, listening to someone who needs time.","An unhurried life is not a life without responsibility. It is a life where we remember the difference between urgency and importance."]},
 {slug:"more-than-a-sunday",category:"EVERYDAY FAITH",title:"More than a Sunday.",deck:"What does faith look like on a Tuesday?",image:media.bible,read:"4 MIN READ",quote:"The ordinary day is where our convictions become visible.",paragraphs:["It is easy to imagine faith in the atmosphere of a beautiful song or a quiet place. A more difficult question is what happens when the week begins.","Our working lives, friendships, disappointments, decisions and small acts of generosity all become places where we practise what we believe.","Faith becomes deeply human when it shapes how we treat the people who may never attend our gatherings."]},
 {slug:"a-welcome-that-feels-like-one",category:"COMMUNITY",title:"A welcome that feels like one.",deck:"Hospitality is an action, not a banner.",image:media.group,read:"3 MIN READ",quote:"The first impression is often made by a person, not a building.",paragraphs:["A first visit can be full of little uncertainties: where to go, where to sit, whether you belong, and whether anybody will notice you are new.","A thoughtful church experience removes unnecessary questions. Directions are clear. People are kind. There is no pressure to pretend to know the routine.","We can build beautiful websites, but the truest welcome is always what people experience when someone makes room for them."]},
];
export const values=[
 {n:"01",name:"Rooted in Christ",copy:"Our focus is the person of Jesus and the hope found in Him."},
 {n:"02",name:"Open-hearted belonging",copy:"People matter before programmes, labels or appearances."},
 {n:"03",name:"Faith for everyday life",copy:"What we believe should shape what we do beyond the gathering."},
 {n:"04",name:"Love made practical",copy:"Care is strongest when it meets a real human need."},
];
export const nav=[{href:"/about",label:"Our story"},{href:"/visit",label:"New here?"},{href:"/messages",label:"Messages"},{href:"/ministries",label:"Ministries"},{href:"/gatherings",label:"Gatherings"},{href:"/journal",label:"Journal"}];
