import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Sidebar
    revSideBod: true,
    hidesideMenu: true,
    revSide: false,
    // NavDrawer
    reveal: false,
    hideMainMenu: true,
    revInner: false,
    //Home Page
    skillsCards: [
      // hard & soft sec: Data
      {
        id: 1,
        img: "https://ik.imagekit.io/invimgs0101/IV-CODE/HOME/shubham-dhage-4tXfdctTcWs-unsplash_mF6rixpa6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656026051359",
        altSrc: "Images From Unsplash",
        iconstyle: "white",
        pstyle: "white--text ma-2",
        icon: "mdi-monitor-edit",
        skills: [
          { id: 1, skill: "User Research/Journey" },
          { id: 1, skill: "Usability Testing" },
          { id: 1, skill: "Wireframing" },
          { id: 1, skill: "Mockups" },
          { id: 1, skill: "Figma" },
        ],
        name: "UI/UX",
      },
      {
        id: 2,
        img: "https://ik.imagekit.io/invimgs0101/IV-CODE/HOME/mohammad-rahmani-8qEB0fTe9Vw-unsplash_XCGc9d3_r.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656026055480",
        altSrc: "Images From Unsplash",
        iconstyle: "white",
        pstyle: "white--text ma-2",
        icon: "mdi-monitor-dashboard",
        skills: [
          { id: 1, skill: "HTML, CSS, & JS" },
          { id: 1, skill: "Vue.js" },
          { id: 1, skill: "Vuetify" },
          { id: 1, skill: "VueX" },
          { id: 1, skill: "Vue Router" },
        ],
        name: "Front-End Dev",
      },
      {
        id: 3,
        img: "https://ik.imagekit.io/invimgs0101/IV-CODE/HOME/ashkan-forouzani-ZJDqxRcv6J4-unsplash_nof9J4Dy2C.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656026051480",
        altSrc: "Images From Unsplash",
        iconstyle: "white",
        pstyle: "white--text ma-2",
        icon: "mdi-monitor-eye",
        skills: [
          { id: 1, skill: "AD Managment" },
          { id: 1, skill: ".EXE/Config of Hardware/Apps" },
          { id: 1, skill: "Accound Admin" },
          { id: 1, skill: "Network Config" },
          { id: 1, skill: "Documentation" },
        ],
        name: "IT Specialist",
      },
      {
        id: 4,
        img: "https://ik.imagekit.io/invimgs0101/IV-CODE/HOME/thomas-tastet-hSODeSbvzE0-unsplash_V4Ak2AQsi.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656026054326",
        altSrc: "Images From Unsplash",
        iconstyle: "grey",
        pstyle: "grey--text ma-2",
        soon: "Coming Soon",
        icon: "mdi-xml",
        skills: [
          { id: 1, skill: "CRUD Functionality" },
          { id: 1, skill: "" },
          { id: 1, skill: "" },
          { id: 1, skill: "" },
          { id: 1, skill: "" },
        ],
        name: "Back-End Dev",
        alt: "Coming Soon",
      },
      {
        id: 5,
        img: "https://ik.imagekit.io/invimgs0101/IV-CODE/HOME/sigmund-_dJCBtdUu74-unsplash_6e2BDNHGF.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656026052123",
        altSrc: "Images From Unsplash",
        iconstyle: "white",
        pstyle: "white--text ma-2",
        icon: "mdi-monitor-edit",
        skills: [
          { id: 1, skill: "Collaboration" },
          { id: 1, skill: "Communication" },
          { id: 1, skill: "Presentation" },
          { id: 1, skill: "Prioritization" },
        ],
        name: "UI/UX",
      },
      {
        id: 6,
        img: "https://ik.imagekit.io/invimgs0101/IV-CODE/HOME/roman-synkevych-vXInUOv1n84-unsplash_3UI4APwCq.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656026052982",
        altSrc: "Images From Unsplash",
        iconstyle: "white",
        pstyle: "white--text ma-2",
        icon: "mdi-monitor-dashboard",
        skills: [
          { id: 1, skill: "Responive Design" },
          { id: 1, skill: "Version Control" },
          { id: 1, skill: "Browser Dev Tools" },
          { id: 1, skill: "Web Performance" },
        ],
        name: "Front-End Dev",
      },
      {
        id: 7,
        img: "https://ik.imagekit.io/invimgs0101/IV-CODE/HOME/howard-bouchevereau-Db-tzBhd500-unsplash_onvTb2uvW.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656026051396",
        altSrc: "Images From Unsplash",
        iconstyle: "white",
        pstyle: "white--text ma-2",
        icon: "mdi-monitor-eye",
        skills: [
          { id: 1, skill: "Teamwork" },
          { id: 1, skill: "Troubleshooting" },
          { id: 1, skill: "Project Management" },
          { id: 1, skill: "Creativity" },
        ],
        name: "IT Specialist",
      },
      {
        id: 8,
        img: "https://ik.imagekit.io/invimgs0101/IV-CODE/HOME/hamid-sedaghat-ijb8-nejOsU-unsplash_xeIWo8s3H.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656026051141",
        altSrc: "Images From Unsplash",
        iconstyle: "grey",
        pstyle: "grey--text ma-2",
        soon: "Coming Soon",
        icon: "mdi-xml",
        skills: [
          { id: 1, skill: "Caffeine  Friendly" },
          { id: 1, skill: "" },
          { id: 1, skill: "" },
          { id: 1, skill: "" },
        ],
        name: "Back-End Dev",
      },
    ],
    //Footer Component
    footerSections: [
      { id: 1, header: "Questions" },
      { id: 2, header: "Lost" },
      { id: 3, header: "Legal & Credits" },
      { id: 4, header: "Follow Me" },
    ],
    footerInfo: [
      { id: 1, name: "About Me", link: "/About", href: "", target: "_self" },
      { id: 1, name: "Services", link: "/Services", href: "", target: "_self" },
      {
        id: 1,
        name: "Contact Me",
        link: "/Contact",
        href: "",
        target: "_self",
      },
      { id: 1, name: "FAQ", link: "/Faq", href: "", target: "_self" },
      { id: 1, name: "Resume", link: "/Credits", href: "", target: "_self" },
      { id: 2, name: "Home", link: "/", href: "", target: "_self" },
      { id: 2, name: "Projects", link: "/Projects", href: "", target: "_self" },
      {
        id: 2,
        name: "Resources",
        link: "/Resources",
        href: "",
        target: "_self",
      },
      {
        id: 3,
        name: "Privacy Policy",
        link: "/PrivacyPolicy",
        href: "",
        target: "_self",
      },
      { id: 3, name: "Credits", link: "/Credits", href: "", target: "_self" },
      {
        id: 4,
        name: "Instagram",
        link: "",
        href: "https://www.instagram.com/iv_greatopus",
        target: "_blank",
      },
      {
        id: 4,
        name: "Linkedin",
        link: "",
        href: "https://www.linkedin.com/in/isaac-valdez-iv-code",
        target: "_blank",
      },
    ],
    //FAQ Page
    questionheaders: [
      { id: 1, header: "UI/UX FAQ" },
      { id: 2, header: "Front-End FAQ" },
      { id: 3, header: "IT Specialist FAQ" },
      { id: 4, header: "Other FAQ" },
    ],
    questionsanswers: [
      //UI/UX FAQ
      {
        id: 1,
        name: "What is Wireframing? ",
        children: [
          {
            id: 1,
            name: "One of the first steps taken in UX is a simple outline of your pages architecture. The way I see wireframing is as a skeleton of your design. This step also plays a major part in the overall direction in the beginning.",
          },
        ],
      },
      {
        id: 1,
        name: "What is a Mockup? ",
        children: [
          {
            id: 1,
            name: "Shortly after brainstorming a few wireframes mockups become part of the atmosphere. Mockups give you the ability to view multiple concepts prior to focusing your aim on your ideal concept that are based off your wireframing. This part has a given application  to aid in creating given concepts, which in my case is usually figma. ",
          },
        ],
      },
      {
        id: 1,
        name: "Why did you choose figma? ",
        children: [
          {
            id: 1,
            name: "One of the strongest selling points for choosing figma is it's starting price point, which if you don't know it's free with very few limitations. The next point that comes to mind is the documentation on youtube. Yes other apps also have documentation, but considering a majority of my training has come from freecodecamp and it's youtube channel I decided too stay in one area. Those are my two deciding factors, but after some time the factor I now realize is convincing for most is it's learning curve. I personally think anyone can learn how to use Figma decently, and along with a process & an understanding of viewpoints anyone can produce decent results.",
          },
        ],
      },
      {
        id: 1,
        name: "How is user research relevant in the UI/UX? ",
        children: [
          {
            id: 1,
            name: "I may have a simplified user research process, but by knowing what is relevant aka current deign standards & technologies integrated in given industry  I have a deeper understanding of what each industry will need based off those user startdards. In short provide what users expect as the standard across given industry. ",
          },
        ],
      },
      {
        id: 1,
        name: "How is usability testing relevant? ",
        children: [
          {
            id: 1,
            name: "Ok, many people have a common view on this stage of developing a design or even in code production. One thing these people fail to realise is that if your were to take a test, and the test reflected on your grade that in return will reflect your academic performance... wouldn't you want a pre-test to know where & why you have an incorrect answer. This example is similiar to usability testing, becouse as a company your appearance, your values, and your network reflect off of your work. Having feedback in a controlled envoirment is worth it's time in gold, so be patient, time sparing, and conscious since this may impact your business. ",
          },
        ],
      },
      {
        id: 1,
        name: "Is UI/UX hard? ",
        children: [
          {
            id: 1,
            name: "Depends what your definition of hard is. My definition of hard is dedicating two hours each day to learn how to use Figma, then start creating short projects based off the double diamond process for a month. For me time is the currency of my life, so how I spend it matters since once it's gone that's it. As a front end developer having to work with either just wireframes at most means having to revise your design many, many, many times, so having a concrete or significantly close to concrete design based off users means hours of aimless work avoided.",
          },
        ],
      },
      {
        id: 1,
        name: "What are some benefits of integrated UI/UX into your Website/Application Creation? ",
        children: [
          {
            id: 1,
            name: "Well just in case you completly skipped the first two sections of the home page I'd suggest you go view it for hard and soft skills that are self explanitory for the most part. As a developer the time saved having a final design saves many hours of aimless work, as an individual the look & feel of a website can mean the difference between calling this website sketch and moving on or spending an aditional minutes browsing around their content, and as a designer to many to cover on this passage. One thing you should keep in mind is that UI/UX in my opinion will become a standard part of creating websites/ aplications/ & more since user interations & user expeirances are key to having products anyone can dijest that gives the fruit of increasing products reach. ",
          },
        ],
      },
      {
        id: 1,
        name: "What are some negatives of UI/UX? ",
        children: [
          {
            id: 1,
            name: "The biggest negative some say are that come along with UI/UX is cost & time. In my opinion one of the negatives I see is since UI/UX designs are based off of research when a design is created the website/application/other can only stay within the range of old design, standard design, and modern design. This has the effect of many companies not taking the initiative of new interations until someone else takes that risk. ",
          },
        ],
      },
      {
        id: 1,
        name: "What part of the design process shouldn't be ignored or skipped? ",
        children: [
          {
            id: 1,
            name: "The part that many skip, becouse it's not part of the actual designing. Is the process of involving the developers who will in the end create what you design. Working tightly along with others means the designis are feasible for the designer & agreed on for the most part.",
          },
        ],
      },
      {
        id: 1,
        name: "Who should be involved in the design process? ",
        children: [
          {
            id: 1,
            name: "Who ever needs too be, but that usually includes the UI/UX person/s, developer/s front & back, Marketing, Sales Lead, Human Resources, and CEO or VP. Each of these individuals have multiple points to brng into each session, but are needed at each meeting depending on the page will decide who is needed.",
          },
        ],
      },

      //Front-End FAQ
      {
        id: 2,
        name: "What is HTML, CSS, and JS? ",
        children: [
          {
            id: 2,
            name: "HTML is Hyper Text Markup Language, CSS is Cascading Stlye Sheets, and JS is Javascript. These are the fundamentals of Front-End Web development, and are commonly used as an introduction for most web developers. The way I like to think of HTML is the skeleton of your website, CSS is the appearance of your website, and JS is sort of the brain.",
          },
        ],
      },
      {
        id: 2,
        name: "What is a Front-End Web Development? ",
        children: [
          {
            id: 2,
            name: "A front-end web development is tipically known as the client-side development who is responsible for the look and feel of your website. They are incharge of developing the code base for visualization & basic functionality. Skills needed to be a front-end web development range from the basics being HTML/CSS/ & JS, Source Code Editor Knowledge, Basic UI/UX, SEO, mutilpe libraies for style/local data/ & basic functionality, Framework/s, Brower/s Inspection Knowledge, Responsive Design, Repository Handling, and more if needed.",
          },
        ],
      },
      {
        id: 2,
        name: "Why did you choose to learn front-end development first? ",
        children: [
          {
            id: 2,
            name: "Well, in the about me page you can learn just a little more of why I chose to learn front-end development, but since you found this I'll leave another point I did not mention on the about me page. In 8th grade I was first introduced to code, and I had almost forgotten when this sense to learn code came. The class that started this desire was called PLTW aka Project Lead the Way, which was created to develop more STEM majors. I remeber how much I loved that class, and not to mention how much I wanted to pursure this class futher. The only problem was that in my high school there was no similiar class, and for many years that desire slowly faded away. I still kept a spark in me though by modding games, helping with Tech in church, and kept dreaming.. what if. After high school I had the opportunity to create a website for the church I was in, so I decided to learn HTML and CSS. After learning an introduction to the basics I figured why not use a web editor since it took me a month to just learn those two well enough to build a single non responsible page with no UI or UX. At this time I was at CUSB, and felt it in me to see the computer science classes. Right after seeing how much math i'd have too complete I automatically decided to kill the dream, but little did I know in a year I'd be learning more than just a the basics. Anyways that's a short side story that is based on a true story.",
          },
        ],
      },
      {
        id: 2,
        name: "Why did you choose the self taught route? ",
        children: [
          {
            id: 2,
            name: "There was a time when I was at CUSB aka my University that I considered taking a STEM major. Like many people before me seeing how much math & theoretical classes you have complete by themselves motivate you too not take a STEM major especially if you have never been good at math, and in my case I've been decent at math making me motivated you too not take a STEM major. After that another big point that is usually pretty obvious is code camps cost a pretty penny for some, and an arm or leg for most. The last point that I probably should have mentioned first is that I've always excelled in teaching myself topics I find interest in, so this is why I chose to take the self taught route. ",
          },
        ],
      },
      {
        id: 2,
        name: "What resources did you use to teach yourself? ",
        children: [
          {
            id: 2,
            name: "In short youtube, freecodecamp, an actual free code camp, mentorship, and google.",
          },
        ],
      },
      {
        id: 2,
        name: "What frameworks did you try prior to Vue.js? ",
        children: [
          {
            id: 2,
            name: "Prior to getting into Vue.js I actually learned the basics of Angular. This was part of an actual free code camp that I applied for, and was accepted too. The camp was reletively hard since at the time covid was high, so having in person meets with mentors was really hard to come by. This along with most of the class being elderly people that never touched code until the first day, and the first day was introduction into Angular kept me isolated from creating a network. ",
          },
        ],
      },
      {
        id: 2,
        name: "Advice for self taught developers? ",
        children: [
          {
            id: 2,
            name: "Take your time learning the basics, becouse the basics are later transfered into every other concept. When learning the basics building projects comment your code enough to teach yourself when you forget since you will. When you learn given framework along with the choosen styling libary start building a portfolio page that you'll add three projects that will stand out, and aren't generic. After that refine your skills along with bookmarking and using mutiple resources.",
          },
        ],
      },
      {
        id: 2,
        name: "What made me choose the dependencies I know? ",
        children: [
          {
            id: 2,
            name: "For the most part work, but for animations I actually found one of the dependencies I use in a youtube video I happened to be viewing during breakfast. Just like that I learned something new, and alot of skills & resources have come along the same way. Most of the dependencies I use now are used since they integrated with vue nicely, and are vue based.",
          },
        ],
      },
      {
        id: 2,
        name: "What are important soft skills for front-end developers? ",
        children: [
          {
            id: 2,
            name: "If you seen the skills boxes in the home page I'm assuming you also clicked soft to view them anyways. Responsive web design in todays world is a must, so this soft skill should be a norm. Version control keeps a flow of changes while maintaining a log of excisting changes. Browser dev tools are a must for any web developer, and without that you'll be lost for the most part.  Lastly web performance along with search engine optimization is again required for load speeds, keyword ranking, accessibility, and so much more.",
          },
        ],
      },
      {
        id: 2,
        name: "How can I become a self taught front-end developer? ",
        children: [
          {
            id: 2,
            name: "First I want to say this is just my opinion coming from a guy who didn't take the college route. First, ingrain the basics into your mind, create a few different small projects, learn a frame work along with two dependancies, create a few different mid sizes projects, learn UI/UX process and how to use a vector graphices editor/ prototyping tool, create a few prototyps based off interests, create a portfolio for your projects and integrate UI/UX process/prototyping, create three large projects different from each other using everything you've learned and add a few new dependencies into the mix, create a documented github account & a professional linkedin account, create a few projects for small business near you, create a detailed resume, and lastly start applying. Why so many projects? you may ask. I believe creating a decent amount of projects that build ontop of each other will slowly allow you to build with the end in mind, and give you a deeper understanding of each components significance along the way.",
          },
        ],
      },
      //IT Specialist
      {
        id: 3,
        name: "Do you have a basic understanding of Networks? ",
        children: [
          {
            id: 3,
            name: "Yes, I've set up a basic home network. My home network consists of a router, modem, and access points. Like any network that you want the most out of it's hard wired. I'm RJ45 friendly, keep that in mind along with the knowledge that not every network is congifured the same, so what I know may not be the same to what you have setup.",
          },
        ],
      },
      {
        id: 3,
        name: "Are you familiar with account management? ",
        children: [
          {
            id: 3,
            name: "Yes, I'm familiar with the practice to group access based off department, so you can give access to certain information. This along with how an email account associated with a team member can be set in a vault with it's own user relevant information seperate to shared permisions that can later be add in shared vault for that shared department access. Much more can go into account managment depeding of the type of management your asking about.",
          },
        ],
      },
      {
        id: 3,
        name: "Are you familiar with the acronym AD? ",
        children: [
          {
            id: 3,
            name: "AD means adam, no it means active directory, and for the most part it's used for server accounts that can be managed to have access to this or that. Quick fun fact, you can actually see what user/s has open on a local shared drive, so if you get the question of who has what open on a shared drive you can actually have an answer.",
          },
        ],
      },
      {
        id: 3,
        name: "Have you been actively involved with installation & configuration of hardware and applications? ",
        children: [
          {
            id: 3,
            name: "In short yes, I have been actively installing and configurating hardware based off need. Applications in the other hand have always been dependant on the CTO or what the current companie/s need. I do want to add on that as IT configuration of hardware & applications are a contant norm since users sometimes vary based off needs in given project/s.",
          },
        ],
      },
      {
        id: 3,
        name: "Are you keen to stay on company standards? ",
        children: [
          {
            id: 3,
            name: "There are common practices every company has that are based off industry, so standards stay standards unless change is needed. I've always been adapable to what is needed, but if my wonder & discernment kick in to inform me of a process that could be improved I won't hesitate to form a possible solution to bring.",
          },
        ],
      },
      {
        id: 3,
        name: "What soft skills do you have? ",
        children: [
          {
            id: 3,
            name: "If you go back to the home page there is a soft skills tab that shows you what skills I've unlocked, which have been unlocked by each area of work. I'll mention one \"Teamwork\" what is my evidance? well considering that at Steel Tech Building Systems I've taken part in at least ten small too large scale projects now that each have involved multiple departmenst or one department other than IT I'd say those expierance points added up to gain at least a level. Why just a level? well that's just a form of saying that even if hypothetically I didn't try by working along each department I gained some exp, but this isn't the case so many levels were granted to me thanks to each project & department",
          },
        ],
      },
      {
        id: 3,
        name: "What is your thought process when an issue arrise?? ",
        children: [
          {
            id: 3,
            name: "If we are speaking in terms of a printer that stops working, then I usually follow these following steps unless the description of the issue leads me another way. First if I'm given no description or \"it just stopped working\" I go to the users mobile phone/ipad/laptop/ or pc to check if something isn't working locally, then if it isn't a local issue I check for external problems that first is the printer, and after the printer check is the network. If the external issues aren't showing any error, then I return back to the users phone/ipad/laptop/ or pc too check once again if it's a local issue. If both the internal & external show no error or anything I can base my research on I let the problem sit while I allow user to print using someone else's equipment. The following day I return to the problem, and loop my steps checking with a clear mind what I could have missed. Lastly if the prior steps aren't showing me anything that I can base my research on I assume hardware, then switch the users equipment for a temp replacement to do a deeper check of equipment with issues.",
          },
        ],
      },
      {
        id: 3,
        name: "What is an important saying in IT? ",
        children: [
          {
            id: 3,
            name: "A phrase that transfered over from my last, last, last job is \"The Customer is always right\". I'd say this is a phrase you should follow, becouse most people don't make a living out of fixing, configuration, or installing applications or hardware. Since this is usually true have a considerate mind, and be informative if need be of what actions you took to solve the problem. Keeping that phrase in mind has been a sort of moto for me when working with most people, becouse being considerate and informative is key to relaying information in a positive way",
          },
        ],
      },
      {
        id: 3,
        name: "What drives you to continue learning? ",
        children: [
          {
            id: 3,
            name: "Three words Curiosity, Creativity, and The ability to create something. ",
          },
        ],
      },
      {
        id: 3,
        name: "Advice for a person thinking about taking a career in IT? ",
        children: [
          {
            id: 3,
            name: "Just like any career choice, when you join you aren't expected to learn everything on your first few weeks, so be prepared to learn consistently for a month at least. Keep in mind that if you aren't given a period of time to learn the technologies, hardware, and applications the company has.... Quit. ",
          },
        ],
      },
      //Other FAQ
      {
        id: 4,
        name: "Why is it that the tech world doesn't stop growing? ",
        children: [
          {
            id: 4,
            name: "Tech is an ever expanding bubble that as time goes on will continue to grow more since development & innovation won't slow down any time soon. Question: Why is it that IT, Developers, and other STEM majors seem to always have time at work or outside of work too focus on new technologies. Well for example, just recently I was asked to figure out how to create an image aka replicata of everything on one desktop. This was too see if we could automate the process of installing applications, settings, and permisions. In a few days I came back with a document of how too solve this perticular porblem a few ways, and to my surprise my team lead didn't know that about eight months ago a package manager by microsoft was made with a repository of popular apps. What does this mean? well basically instead of having to create a group policy aka GPO on the active directory aka AD for automatically installing applications you could use this new resource to install multiple applications with a few simple commands. What I'm trying to convey is you could know of a few applications to solve a given issue, but give it one year & the tech world would have created two or more similiar if not better ways of solving given issue.",
          },
        ],
      },
      {
        id: 4,
        name: "Did you have any mentors? ",
        children: [
          {
            id: 4,
            name: "I did have a few mentors, to start off with development for Front & Back I give alot of credit too Noah G since he was the first Dev mentor to advise me in what framework & dependancies to learn. Not to mention the endless barrage of questions he answered or guided whenever I was lost, also keep in mind I'm self taught meaning being lost most of the time was a norm. ",
          },
        ],
      },
      {
        id: 4,
        name: "What were your intial thoughts when learning CSS? ",
        children: [
          {
            id: 4,
            name: "CSS isn't complicated, one thing it is though when you don't use a styling libary is alot, and I mean alot since using flexboxes, grids, @medias, and specific details on each components responsiveness really drain alot of time learning. I remember for about a few weeks I was only making everything on a single page reponsive, so keep that in mind if you are going to learn the basics. ",
          },
        ],
      },
      {
        id: 4,
        name: "How can a website impact a company? ",
        children: [
          {
            id: 4,
            name: "Having a social presense is a must in today's world, but a website is just the graphices card. Many websites aren't cutting it, becouse they aren't responsiveness, SEO, lack documentation, don't represent the company properly, aren't using modern practices, are being limited by web editors, and aren't using a process for a design matching the business.",
          },
        ],
      },
    ],
    //About Me Page
    headersabout: [
      { id: 1, header: "Professional Life" },
      { id: 2, header: "Personal Life" },
      { id: 3, header: "Other" },
    ],
    answersabout: [
      //Professional Life
      {
        id: 1,
        name: "How can you describe your work mindset? ",
        children: [
          {
            id: 1,
            name: "I would describe my work mindset as the mindset of a wolf hunting its prey. Endurance along with teamwork are key to cathcing your prey, and within in your field of work. ",
          },
        ],
      },
      {
        id: 1,
        name: "What is your first action when you arrive at work? ",
        children: [
          {
            id: 1,
            name: "Well let's say I'm accustomed to the work flow, and I know what to expect for the most part. Oh, let's also forget about checking your emails, answering missed emails or messages, viewing schedule, and setting up setup. I'd say it would probably be the cup of coffee I routinely drink or just make after 30 minutes at work.",
          },
        ],
      },
      //Personal Life
      {
        id: 2,
        name: "Do you have any hobbies? ",
        children: [
          {
            id: 2,
            name: "Ouch! any hobbies, yes I do have a life. A hobbie I just recently picked up is picking up my trusty 9mm, then heading to a shooting range to shoot. When I go shooting it reminds me how human we are, and it increases my stats in that area as well.",
          },
        ],
      },
      {
        id: 2,
        name: "When did you start riding? ",
        children: [
          {
            id: 2,
            name: "A few months after arriving in missiori I took the MSF course to learn how to ride, and at the same time take the wriiten & riding test. I was actually going to purchase a cruiser, but when I saw my Yamaha I knew she was the one for me.",
          },
        ],
      },
      //Other
      {
        id: 3,
        name: "What is important in life? ",
        children: [
          {
            id: 3,
            name: "To live a life with purpose, and guide the life you want by create healthy habbits that will in time accomplish your goals.",
          },
        ],
      },
      {
        id: 3,
        name: "Do you have any beliefs?",
        children: [
          {
            id: 3,
            name: "I have many beliefs, but one that I personally have choosen is monotheism. Along with the Judeo Christian teachings, and other similiar teachings.",
          },
        ],
      },
      {
        id: 3,
        name: "Secrets Skills?  ",
        children: [
          { id: 3, name: "They wouldn't be secret if I told you lol." },
        ],
      },
      {
        id: 3,
        name: "Where can I find more possible answers?  ",
        children: [{ id: 3, name: "Look for my FAQ page on this website." }],
      },
    ],
    //Resources Page
    cardsInfo: [
      {
        id: 0,
        // Project Thumbnail
        img: "https://ik.imagekit.io/invimgs0101/IV-CODE/HOME/shubham-dhage-4tXfdctTcWs-unsplash_mF6rixpa6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656026051359",
        // Carousel IMG's
        items: [
          {
            id: 1,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/IV-CODE/V3_-_UI/www.figma.com_file_NBUh9MHEMg7FWJHIzXjjAb_Portfolio-Page_node-id_0_3A1_Laptop_with_HIDPI___5__IXTQo7Osm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656184901821",
            alt: "IVCODE Contact Me PG",
          },
          {
            id: 2,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/IV-CODE/V3_-_UI/www.figma.com_file_NBUh9MHEMg7FWJHIzXjjAb_Portfolio-Page_node-id_0_3A1_Laptop_with_HIDPI___2__XYqcuVnh_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656184901863",
            alt: "IVCODE Resources PG",
          },
          {
            id: 3,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/IV-CODE/V3_-_UI/www.figma.com_file_NBUh9MHEMg7FWJHIzXjjAb_Portfolio-Page_node-id_0_3A1_Laptop_with_HIDPI___7__Zd2faMijJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656184901979",
            alt: "IVCODE About Me PG",
          },
          {
            id: 4,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/IV-CODE/V3_-_UI/www.figma.com_file_NBUh9MHEMg7FWJHIzXjjAb_Portfolio-Page_node-id_0_3A1_Laptop_with_HIDPI___11__1DUWiv0cym.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656184902685",
            alt: "IVCODE Projects PG",
          },
          {
            id: 5,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/IV-CODE/V3_-_UI/www.figma.com_file_NBUh9MHEMg7FWJHIzXjjAb_Portfolio-Page_node-id_0_3A1_Laptop_with_HIDPI___9__qSsHPAfe4v.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656184902362",
            alt: "IVCODE Credits PG",
          },
        ],
        // Skill Name
        name: "UI/UX Designer",
        // Skill Summary
        descOne:
          "Learning a design tool, common practices, a process, and company based designs are steps in created any given project.",
        shortName: "UI/UX",
        // Intro Top Section
        definition:
          "UI or User Interaction is the Human-First approach to designing the aethetic experience of a product. UX or User Experience is the Human First approach to product design.",
        knownSkill: "Figma & Double Diamond Process",
        whyInterest:
          "I am interested in the process of integrating UI & UX, becouse when I integrate UI/UX into a project the audiences tend to be interested in the project more, and the production time is significantly decreased.",
        // Documentation: Section 1
        projectTitleOne: "Steel Tech Business Systems",
        projectOneDesc:
          "The first time I actually integrated UI into the pre-production phase of a project was with Steel Tech. Half-way through the project my instagram feed started showing more content related too UI/UX. I decided to do some personal research, then later asked my CTO if I could dedicate some time to learning how to use Figma, and a few weeks later started prototyping for pages on the website.",
        // Documentation: Section 2
        projectTitleTwo: "Components U.S.A",
        projectTwoDesc:
          "A Few months after creating Steel Tech's website the opportunity to create another company's website was given to me. I replicated their current website to take it off godaddy, and soon after started creating protopyes for it's website. After about a month I finished the final protopye concept, and presented. Compared to the previous project I also included some aspects of UX, so the prototype I presented was solid. Unfortunately, the company decided to hold off on actually creating the website, so the designs were created to forever be held in a folder.",
        // Used Resources: Section 1
        resourceTitleOne: "Resource #1",
        resourceOnePar1:
          "The video above was the first tutorial I actually completed to get a hand of the basics of prototyping. I remember going through this video thinking that after this I will be able to create prototypes seamlessly, but like anything else in life that you are niave too... I was a bit disappointed in figuring out that there was more to it than that. To the right are some links to helpful tools I find life saving",
        video: "https://www.youtube-nocookie.com/embed/jwCmIBJ8Jtc",
        // Useful Links
        links: [
          {
            id: 1,
            src: "https://collectui.com/challenges/leaderboard",
            alt: "Collect UI Website Link",
            name: "Collect UI",
          },
          {
            id: 2,
            src: "https://principles.design/",
            alt: "Principle.design Website",
            name: "Design Principles",
          },
          {
            id: 3,
            src: "https://freebiefriday.xyz/",
            alt: "FreebieDriday.xyz Website",
            name: "FreebieDriday",
          },
          {
            id: 4,
            src: "https://mycolor.space/",
            alt: "mycolor.space Website",
            name: "Mycolor",
          },
        ],
      },
      {
        id: 1,
        // Project Thumbnail
        img: "https://ik.imagekit.io/invimgs0101/IV-CODE/HOME/mohammad-rahmani-8qEB0fTe9Vw-unsplash_XCGc9d3_r.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656026055480",
        // Carousel IMG's
        items: [
          {
            id: 1,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/IV-CODE/Live_-_Images/IVCODE_-_Laptop/localhost_8080__Laptop_with_HIDPI___6__WKyPN581H.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025043357",
            alt: "attribution here",
          },
          {
            id: 2,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/IV-CODE/Live_-_Images/IVCODE_-_Laptop/localhost_8080__Laptop_with_HIDPI___5__S03ErK-uK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025043227",
            alt: "attribution here",
          },
          {
            id: 3,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/STBS/live-images/STBS-Laptop/steeltech.io_Projects_Laptop_with_HIDPI__V3G68wNyL.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656024523959",
            alt: "attribution here",
          },
          {
            id: 4,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/STBS/live-images/STBS-Laptop/steeltech.io_ContactUs_Laptop_with_HIDPI__kxpLy7Gv4m.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656024523837",
            alt: "attribution here",
          },
          {
            id: 5,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/6A-Teams/Live_-_Images/6ATEAMS_-_Laptop/_C__Users_IV-PC_Documents_Downloads_Dev_20Basics_20Projects_00_20WEB_HtmlPage10.html_Surface_Pro_6__Cust____2__1j9BskuvX.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025206534",
            alt: "attribution here",
          },
        ],
        // Skill Name
        name: "Front-End Developer",
        // Skill Summary
        descOne:
          "Each path is different, but seeing common trends can help you discern your path. I hope you find something of use!",
        shortName: "Front-End",
        // Intro Top Section
        definition:
          "A front-end developer is a client side development who works to implement the user interface.",
        knownSkill:
          "HTML, CSS, JS, Vue Framework, Vuetify, Vue Router, and Vue X",
        whyInterest:
          "The interest originally came from the need for a website in the church I was in a few years back. The orginal spark though to code was back in middle school, and if you are interested in what particular class dig through the FAQ page.",
        // Documentation: Section 1
        projectTitleOne: "Steel Tech Business Systems & Components U.S.A",
        projectOneDesc:
          "I'll combine these two projects into one since much of what I learned prior to my portfolio page was from these two projects. All the skills that you see above derived from these projects, and set the baseplate for future projects. I would say they were the tutorials to the tutorials since shortly after I finished learning the double diamond process for UI/UX I started to actually create projects.",
        // Documentation: Section 2
        projectTitleTwo: "Portfolio Website aka iv-code",
        projectTwoDesc:
          "During the creation of both Steel Tech's & Components U.S.A's Website I was learning how to write cleaner code, responsive components, transitions, routing, state management, and much more. You could say it was like building a lego tower, becouse each lego block built ontop of the next. This was great to say the least, but since after business hours I was creating my portfolio website I kept remodeling my website since I wanted to add everything I learned to it! No worries I'm planning V2 later.",
        // Used Resources: Section 1
        resourceTitleOne: "Resource #1",
        resourceOnePar1:
          "I can't believe how much I've progressed from this video forward. Back when I start the first hour of this tutorial, which amounts to six hours of learning I was alomst entirely lost. Why? well I wasn't able to ask for help since the tutorial used single page logic for most of it's build instead of having spreading out it's state or routes using dependencies, but I didn't know how to use the dependencies yet. It was a circle of how can I replicated that or how did I make that work. If you plan on going through this video just know once you add dependencies to the mix alot is simplified.",
        video: "https://www.youtube-nocookie.com/embed/FXpIoQ_rT_c",
        // Useful Links
        links: [
          {
            id: 1,
            src: "https://animate.style/",
            alt: "Animate.css Website",
            name: "Animate.css",
          },
          {
            id: 2,
            src: "https://github.com/vycoder/vue-animate-onscroll",
            alt: "vycoder/vue-animate-onscroll",
            name: "vue-animate-onscroll",
          },
          {
            id: 3,
            src: "https://imgur.com/",
            alt: "Imgur.com Website",
            name: "Image Upload & Linking",
          },
          {
            id: 4,
            src: "https://markus.oberlehner.net/blog/vue-router-page-transitions/",
            alt: "Vue Router Page Transitions",
            name: "Page Transitions",
          },
        ],
      },
      {
        id: 2,
        // Project Thumbnail
        img: "https://ik.imagekit.io/invimgs0101/IV-CODE/HOME/ashkan-forouzani-ZJDqxRcv6J4-unsplash_nof9J4Dy2C.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656026051480",
        // Carousel IMG's
        items: [
          {
            id: 1,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/HOME/howard-bouchevereau-Db-tzBhd500-unsplash_onvTb2uvW.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656026051396",
          },
          {
            id: 2,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/HOME/PXL_20211026_160903830_42pQvGpbe.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656026573845",
          },
          {
            id: 3,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/HOME/PXL_20211026_164123047_gowuxb8oA.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656026573936",
          },
          {
            id: 4,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/HOME/ashkan-forouzani-ZJDqxRcv6J4-unsplash_nof9J4Dy2C.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656026051480",
          },
          {
            id: 5,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/HOME/hamid-sedaghat-ijb8-nejOsU-unsplash_xeIWo8s3H.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656026051141",
          },
        ],
        // Skill Name
        name: "IT Specialist",
        // Skill Summary
        descOne:
          "Information Technology is a category of work that varies per employer, so I would say learn the basics of IT duties.",
        shortName: "IT",
        // Intro Top Section
        definition:
          "The use of computers to create, process, store, retrieve, and exchange all kinds of electronic data and information.",
        knownSkill: "Help desk, Account Admin, Advanced PC Support, Alot More",
        whyInterest:
          "I've always been interested in tech, but the prices for trying out modern tech is over my spending limit. This is excluding the fact that there is alot more to learning a new gadget than just turning it off/on or changing settings. When you start to discover the possibilities of external & internal issues you really start to contemplate life. No, in all seriousness tech isn't stopping, and being the forerunner in new tech is exciting! to say the least.",
        // Documentation: Section 1
        projectTitleOne: "Help Desk",
        projectOneDesc:
          "It's great to start from zero, I mean looking back to see how many times I was wrong in what to do when solving a problem cracks me up. It's not that I didn't know how to solve the problem, but the same problem sometimes has very different solutions. I had never experienced so many problems with tech until I became IT. It's crazy to think that one guy has to solve so many tech issue, but it's true IT has to solve the problem it's our job.",
        // Documentation: Section 2
        projectTitleTwo: "Beware Printers",
        projectTwoDesc:
          "Yes I know that I'm dedicating one section  for printers, but it's a love/ hate relationship. I love them only, becouse they are one of the main reasons I have a job. Now onto the good stuff, if you still don't know of the many issues one printer can have, then you are in for a heck of ride. I think you aren't a true IT guy until you know how to solve possible printer issues eight different ways minimum.",
        // Used Resources: Section 1
        resourceTitleOne: "Resource #1",
        resourceOnePar1:
          "Ok, I'm guilty of consuming a little to mich Network Chuck, but in my defense I believe he is one of the reasons why I've managed to learn so much in so little time. I would challenge you to at least finish two of his tutorials, and you'll come out a better IT guy. If you haven't already go subscribe to his channel, and after that start your caffeine addiction if possible.",
        video: "https://www.youtube-nocookie.com/embed/noC8t8nwji4",
        // Useful Links
        links: [
          {
            id: 1,
            src: "https://youtu.be/wX75Z-4MEoM",
            alt: "Virtual Machines Video",
            name: "Virtual Machines",
          },
        ],
      },
    ],
    //Contact Page
    reviewsInfo: [
      //Reviews Carousel: Data
      {
        id: 1,
        company: "Seel Tech Buildings Systems",
        website: "https://steeltech.io/",
        style: "color: #ff6600",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing erat vitae neque id at placerat ut sed. Tortor dui facilisis ultrices turpis elementum aliquam. Cras egestas ac malesuada vestibulum, pretium tortor.",
        stars: 4,
        src: "https://ik.imagekit.io/invimgs0101/IV-CODE/logos/STBS-logo/Screenshot_2022-05-03_203403_FGmACR8VC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656026891883",
      },
      {
        id: 2,
        company: "Components U.S.A",
        website: "https://cusa.io/",
        style: "color: #ff6600",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing erat vitae neque id at placerat ut sed. Tortor dui facilisis ultrices turpis elementum aliquam. Cras egestas ac malesuada vestibulum, pretium tortor.",
        stars: 3,
        src: "https://ik.imagekit.io/invimgs0101/IV-CODE/logos/CUSA-logo/Components-logo-lrg.984febe8_uMkUUgUSu.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656026953379",
      },
      {
        id: 3,
        company: "IV-CODE",
        website: "www.iv-code.io",
        style: "color: #2196F3",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing erat vitae neque id at placerat ut sed. Tortor dui facilisis ultrices turpis elementum aliquam. Cras egestas ac malesuada vestibulum, pretium tortor.",
        stars: 4,
        src: "https://ik.imagekit.io/invimgs0101/IV-CODE/logos/ivcode-logo/Wolf_BLACK_U9jK_vyvA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656026848451",
      },
    ],
    //Projects Page
    projectsInfo: [
      // setup: category = Front-End, UI/UX, & Back-End id = project
      //UI-UX
      //Front-End
      {
        id: 0,
        type: "View Live",
        href: "https://steeltech.io/",
        category: "Front-End",
        // Company Name Here & short name (aka mobName)
        name: "Steel Tech Buildings Systems",
        mobName: "Steel Tech",
        // Images Used in Main Carousel
        items: [
          //1st IMG is Compnay Logo or urs
          {
            id: 1,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/logos/STBS-logo/Screenshot_2022-05-03_203403_FGmACR8VC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656026891883",
            alt: "STBS Logo",
            desc: "1",
          },
          {
            id: 2,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/STBS/live-images/STBS-Laptop/steeltech.io__Laptop_with_HIDPI__v4btimD3L.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656024522323",
            alt: "STBS HOME PG IMG 1",
            desc: "1",
          },
          {
            id: 3,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/STBS/live-images/STBS-Laptop/steeltech.io__Laptop_with_HIDPI___1__-s8SgGxI9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656024521510",
            alt: "STBS HOME PG IMG 2",
            desc: "1",
          },
          {
            id: 4,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/STBS/live-images/STBS-Laptop/steeltech.io__Laptop_with_HIDPI___4__22GI1W55T.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656024521845",
            alt: "STBS HOME PG IMG 3",
            desc: "1",
          },
          {
            id: 5,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/STBS/live-images/STBS-Laptop/steeltech.io_ContactUs_Laptop_with_HIDPI___3__UqNsl-w1Y.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656024522747",
            alt: "STBS FAQ PG",
            desc: "1",
          },
          {
            id: 6,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/STBS/live-images/STBS-Laptop/steeltech.io_ContactUs_Laptop_with_HIDPI__kxpLy7Gv4m.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656024523837",
            alt: "STBS Documentation PG",
            desc: "1",
          },
          {
            id: 7,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/STBS/live-images/STBS-Laptop/steeltech.io_Projects_Laptop_with_HIDPI__V3G68wNyL.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656024523959",
            alt: "STBS Projects PG",
            desc: "1",
          },
          {
            id: 8,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/STBS/live-images/STBS-Laptop/steeltech.io_ContactUs_Laptop_with_HIDPI___1__lCJ9ppctX.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656024523577",
            alt: "STBS Accreditions PG 1",
            desc: "1",
          },
          {
            id: 9,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/STBS/live-images/STBS-Laptop/steeltech.io_ContactUs_Laptop_with_HIDPI___2__DEm11PZmb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656024522793",
            alt: "STBS Accreditions PG 2",
            desc: "1",
          },
        ],
        // Views Tabs sm+ Images
        viewsSMPlusImg: [
          {
            id: 1,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/STBS/live-images/STBS-Mobile/steeltech.io__Iphone_12__Custom___V-vEbpyYI.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656024520223",
            width: "200",
          },
          {
            id: 2,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/STBS/live-images/STBS-Tablet/steeltech.io__iPad_Air__Custom___4Ipjk9Mgn.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656024518442",
            width: "400",
          },
          {
            id: 3,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/STBS/live-images/STBS-Laptop/steeltech.io__Laptop_with_HIDPI__v4btimD3L.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656024522323",
            width: "600",
          },
        ],
        // Views Tabs sm+ Images
        viewsSMPlusGif: [
          {
            id: 1,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/STBS/GIFS/stbs-mobile-ezgif.com-gif-maker_dQ-NUo1MH.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1656024565599",
            width: "200",
          },
          {
            id: 2,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/STBS/GIFS/stbs-tablet-ezgif.com-gif-maker_iY0St1goY.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1656024573513",
            width: "400",
          },
          {
            id: 3,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/STBS/GIFS/stbs-laptop-ezgif.com-gif-maker_j67dN3k3WK.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1656024574976",
            width: "600",
          },
        ],
        // Views Tabs xs Images
        viewsXS: [
          {
            id: 1,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/STBS/live-images/STBS-Mobile/steeltech.io__Iphone_12__Custom___V-vEbpyYI.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656024520223",
            width: "200",
          },
          {
            id: 2,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/STBS/live-images/STBS-Tablet/steeltech.io__iPad_Air__Custom___4Ipjk9Mgn.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656024518442",
            width: "275",
          },
          {
            id: 3,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/STBS/live-images/STBS-Laptop/steeltech.io__Laptop_with_HIDPI__v4btimD3L.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656024522323",
            width: "310",
          },
        ],
        // Chip Groups: Used Resources
        resourcesTags: [
          { id: 1, name: "Vue" },
          { id: 2, name: "Vuetify" },
          { id: 3, name: "Vue X" },
          { id: 4, name: "Vue Router" },
          { id: 5, name: "Javascript" },
          { id: 6, name: "CSS" },
          { id: 7, name: "HTML" },
        ],
        // Chip Groups: Used Tools
        toolsTags: [
          { id: 1, name: "VS Code" },
          { id: 2, name: "Responsibly App" },
          { id: 3, name: "Git Kraken" },
          { id: 4, name: "Vue Devtools" },
          { id: 5, name: "Github" },
        ],
        //Project Category Icon (Icon Representing Project in id: 2)
        icons: [
          { id: 1, name: "mdi-monitor-edit", color: "grey", size: "40" },
          { id: 2, name: "mdi-monitor-dashboard", color: "blue", size: "120" },
          { id: 3, name: "mdi-xml", color: "grey", size: "40" },
        ],

        // Copy Section
        par1: "This was the first project that included a team of highly motivated and advanced contributors. This project was revised a few times since a few departments alongside me kept improving our vision on how the website should be layed out. Considering how early on I was given this project I was definitely keeping the team a few steps back, but revision after revision I learned.",
        par2: "First project using a framework with multiple dependencies, and was the baseplate of multple iterations that build on each other.",
        par3: "First project to start to use more sophisticated wireframes & competitive analysis for basic project concepts.",
        par4: "In summary definitely a variety of tools, dependencies, articles, and code layouts were gained to everyone who participated.",
      },
      {
        id: 1,
        type: "View Repo",
        href: "https://vuetifyjs.com/en/components/buttons/#usage",
        category: "Front-End",
        // Company Name Here & short name (aka mobName)
        name: "Personal Portfolio Page",
        mobName: "Portoflio",
        // Images Used in Main Carousel
        items: [
          {
            id: 1,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/logos/ivcode-logo/Wolf_BLACK_U9jK_vyvA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656026848451",
            alt: "IVCODE Logo",
            desc: "1",
          },
          {
            id: 2,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/IV-CODE/Live_-_Images/IVCODE_-_Laptop/localhost_8080__Laptop_with_HIDPI___1__D55X1tRGF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025043011",
            alt: "Home PG IMG",
            desc: "1",
          },
          {
            id: 3,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/IV-CODE/Live_-_Images/IVCODE_-_Laptop/localhost_8080__Laptop_with_HIDPI___7__ffuetACZC7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025043304",
            alt: "Services PG IMG",
            desc: "1",
          },
          {
            id: 4,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/IV-CODE/Live_-_Images/IVCODE_-_Laptop/localhost_8080__Laptop_with_HIDPI___4__9kwyogWEb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025043124",
            alt: "Projects PG IMG",
            desc: "1",
          },
          {
            id: 5,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/IV-CODE/Live_-_Images/IVCODE_-_Laptop/localhost_8080__Laptop_with_HIDPI___8__XjewBG7KZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025043413",
            alt: "UI Serivce PG IMG",
            desc: "1",
          },
          {
            id: 6,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/IV-CODE/V3_-_UI/www.figma.com_file_NBUh9MHEMg7FWJHIzXjjAb_Portfolio-Page_node-id_0_3A1_Laptop_with_HIDPI___7__Zd2faMijJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656184901979",
            alt: "About Me Figma UI",
            desc: "1",
          },
          {
            id: 7,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/IV-CODE/V3_-_UI/www.figma.com_file_NBUh9MHEMg7FWJHIzXjjAb_Portfolio-Page_node-id_0_3A1_Laptop_with_HIDPI___11__1DUWiv0cym.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656184902685",
            alt: "Projects PG Figma UI",
            desc: "1",
          },
          {
            id: 8,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/IV-CODE/V3_-_UI/www.figma.com_file_NBUh9MHEMg7FWJHIzXjjAb_Portfolio-Page_node-id_0_3A1_Laptop_with_HIDPI__jAQl6tU4U.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656184902699",
            alt: "Services PG Figma UI",
            desc: "1",
          },
          {
            id: 9,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/IV-CODE/V3_-_UI/www.figma.com_file_NBUh9MHEMg7FWJHIzXjjAb_Portfolio-Page_node-id_0_3A1_Laptop_with_HIDPI___5__IXTQo7Osm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656184901821",
            alt: "Contact Me PG Figma UI",
            desc: "1",
          },
        ],
        // Views Tabs sm+ Images
        viewsSMPlusImg: [
          {
            id: 1,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/IV-CODE/Live_-_Images/IVCODE_-_MObile/localhost_8080__Iphone_12__Custom____2__-r71K3UG3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656024985415",
            width: "200",
          },
          {
            id: 2,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/IV-CODE/Live_-_Images/IVCODE_-_Tablet/localhost_8080__iPad_Air__Custom____2__DuPCC-PyA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025017380",
            width: "400",
          },
          {
            id: 3,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/IV-CODE/Live_-_Images/IVCODE_-_Laptop/localhost_8080__Laptop_with_HIDPI___2__Ur8TzsnEe.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025043104",
            width: "600",
          },
        ],
        viewsSMPlusGif: [
          {
            id: 1,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/IV-CODE/Gifs/ivcode-mobile-ezgif.com-gif-maker_JiRUsIa4t.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1656025085200",
            width: "200",
          },
          {
            id: 2,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/IV-CODE/Gifs/ivcode-tablet-ezgif.com-gif-maker_eWebz6-ky.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1656025089113",
            width: "400",
          },
          {
            id: 3,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/IV-CODE/Gifs/ivcode-laptop-ezgif.com-gif-maker_AwFP8lPnI.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1656025089411",
            width: "600",
          },
        ],
        // Views Tabs xs Images
        viewsXS: [
          {
            id: 1,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/IV-CODE/Live_-_Images/IVCODE_-_MObile/localhost_8080__Iphone_12__Custom____2__-r71K3UG3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656024985415",
            width: "200",
          },
          {
            id: 2,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/IV-CODE/Live_-_Images/IVCODE_-_Tablet/localhost_8080__iPad_Air__Custom____2__DuPCC-PyA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025017380",
            width: "275",
          },
          {
            id: 3,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/IV-CODE/Live_-_Images/IVCODE_-_Laptop/localhost_8080__Laptop_with_HIDPI___2__Ur8TzsnEe.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025043104",
            width: "310",
          },
        ],
        // Chip Groups: Used Resources
        resourcesTags: [
          { id: 1, name: "Vue" },
          { id: 2, name: "Vuetify" },
          { id: 3, name: "Vue X" },
          { id: 4, name: "Vue Router" },
          { id: 5, name: "Javascript" },
          { id: 6, name: "CSS" },
          { id: 7, name: "HTML" },
          { id: 7, name: "Firebase" },
        ],
        // Chip Groups: Used Tools
        toolsTags: [
          { id: 1, name: "Figma" },
          { id: 1, name: "VS Code" },
          { id: 2, name: "Responsibly App" },
          { id: 4, name: "Vue Devtools" },
          { id: 5, name: "Github" },
        ],
        //Project Category Icon (Icon Representing Project in id: 2)
        icons: [
          { id: 1, name: "mdi-monitor-edit", color: "grey", size: "40" },
          { id: 2, name: "mdi-monitor-dashboard", color: "blue", size: "120" },
          { id: 3, name: "mdi-xml", color: "grey", size: "40" },
        ],
        // Copy Section
        par1: "A while after creating Steel Tech's Website I wanted to create a single page portfolio as a way to document work. In this period I was barely starting to get the handle on concept designs pre-production. Just a note, I did three entire revsions since I kept learning new ways to create websites.",
        par2: "Another quick note, two thirds of the way completing this website I actually learned the double diamond process, which favors by far unique ui & ux. Regardless of this I held off on another revision since a two month project was now a six month project.",
        par3: "Throughout the course of this website there were many revsions using new concepts and more features. Each revision brought on new challenges, becouse of this I definitely learned more.",
        par4: "Another revision soon though... lol",
      },
      {
        id: 2,
        type: "Disabled",
        href: "",
        category: "Front-End",
        // Company Name Here & short name (aka mobName)
        name: "Pre-Framework",
        mobName: "Pre-Framework",
        // Images Used in Main Carousel
        items: [
          {
            id: 1,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/logos/ivcode-logo/Wolf_WHITE_TQ9YPD0KD.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656026848531",
            alt: "IVCODE ALT Logo",
            desc: "1",
          },
          {
            id: 2,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/6A-Teams/Live_-_Images/6ATEAMS_-_Laptop/_C__Users_IV-PC_Documents_Downloads_Dev_20Basics_20Projects_00_20WEB_HtmlPage10.html_Surface_Pro_6__Cust___sAx-lqtEH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025206782",
            alt: "6ATEAMS 1",
            desc: "1",
          },
          {
            id: 3,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/6A-Teams/Live_-_Images/6ATEAMS_-_Laptop/_C__Users_IV-PC_Documents_Downloads_Dev_20Basics_20Projects_00_20WEB_HtmlPage10.html_Surface_Pro_6__Cust____2__1j9BskuvX.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025206534",
            alt: "6ATEAMS 2",
            desc: "1",
          },
          {
            id: 4,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/6A-Teams/Live_-_Images/6ATEAMS_-_Laptop/_C__Users_IV-PC_Documents_Downloads_Dev_20Basics_20Projects_00_20WEB_HtmlPage10.html_Surface_Pro_6__Cust____3__n26ufxlKO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025206493",
            alt: "6ATEAMS 3",
            desc: "1",
          },
          {
            id: 5,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/6A-Teams/Live_-_Images/6ATEAMS_-_Laptop/_C__Users_IV-PC_Documents_Downloads_Dev_20Basics_20Projects_00_20WEB_HtmlPage10.html_Surface_Pro_6__Cust____6__567yChR0L.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025206534",
            alt: "6ATEAMS 4",
            desc: "1",
          },
          {
            id: 6,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/6A-Teams/Live_-_Images/6ATEAMS_-_Laptop/_C__Users_IV-PC_Documents_Downloads_Dev_20Basics_20Projects_00_20WEB_HtmlPage10.html_Surface_Pro_6__Cust____4__tbG8e9fKK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025202547",
            alt: "6ATEAMS 5",
            desc: "1",
          },
          {
            id: 7,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/6A-Teams/Live_-_Images/6ATEAMS_-_Laptop/_C__Users_IV-PC_Documents_Downloads_Dev_20Basics_20Projects_00_20WEB_HtmlPage10.html_Surface_Pro_6__Cust____5__4lqFG_6Fi.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025205920",
            alt: "6ATEAMS 6",
            desc: "1",
          },
          {
            id: 8,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/6A-Teams/Live_-_Images/6ATEAMS_-_Laptop/_C__Users_IV-PC_Documents_Downloads_Dev_20Basics_20Projects_00_20WEB_HtmlPage10.html_Surface_Pro_6__Cust____7__hnzHc5VkW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025205829",
            alt: "6ATEAMS 7",
            desc: "1",
          },
          {
            id: 9,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/6A-Teams/Live_-_Images/6ATEAMS_-_Mobile/_C__Users_IV-PC_Documents_Downloads_Dev_20Basics_20Projects_00_20WEB_HtmlPage10.html_Iphone_12__Custom___fpDDQzj-1G.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025301974",
            alt: "6ATEAMS 8",
            desc: "1",
          },
        ],
        // Views Tabs sm+ Images
        viewsSMPlusImg: [
          {
            id: 1,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/6A-Teams/Live_-_Images/6ATEAMS_-_Mobile/_C__Users_IV-PC_Documents_Downloads_Dev_20Basics_20Projects_00_20WEB_HtmlPage10.html_Iphone_12__Custom___fpDDQzj-1G.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025301974",
            width: "200",
          },
          {
            id: 2,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/6A-Teams/Live_-_Images/6ATEAMS_-_Tablet/_C__Users_IV-PC_Documents_Downloads_Dev_20Basics_20Projects_00_20WEB_HtmlPage10.html_iPad_Air__Custom___vgEhZUKel.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025268028",
            width: "400",
          },
          {
            id: 3,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/6A-Teams/Live_-_Images/6ATEAMS_-_Laptop/_C__Users_IV-PC_Documents_Downloads_Dev_20Basics_20Projects_00_20WEB_HtmlPage10.html_Surface_Pro_6__Cust___sAx-lqtEH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025206782",
            width: "600",
          },
        ],
        viewsSMPlusGif: [
          {
            id: 1,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/6A-Teams/Gifs/6ateams-mobile-ezgif.com-gif-maker_XVag2zr-s.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1656025344866",
            width: "200",
          },
          {
            id: 2,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/6A-Teams/Gifs/6ateams-mobile-ezgif.com-gif-maker_BLru6FCdb.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1656025404002",
            width: "400",
          },
          {
            id: 3,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/6A-Teams/Live_-_Images/6ATEAMS_-_Laptop/_C__Users_IV-PC_Documents_Downloads_Dev_20Basics_20Projects_00_20WEB_HtmlPage10.html_Surface_Pro_6__Cust___sAx-lqtEH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025206782",
            width: "600",
            //Note: !ACTIVE no GIF
          },
        ],
        // Views Tabs xs Images
        viewsXS: [
          {
            id: 1,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/6A-Teams/Live_-_Images/6ATEAMS_-_Mobile/_C__Users_IV-PC_Documents_Downloads_Dev_20Basics_20Projects_00_20WEB_HtmlPage10.html_Iphone_12__Custom___fpDDQzj-1G.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025301974",
            width: "200",
          },
          {
            id: 2,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/6A-Teams/Live_-_Images/6ATEAMS_-_Tablet/_C__Users_IV-PC_Documents_Downloads_Dev_20Basics_20Projects_00_20WEB_HtmlPage10.html_iPad_Air__Custom___vgEhZUKel.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025268028",
            width: "275",
          },
          {
            id: 3,
            src: "https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/6A-Teams/Live_-_Images/6ATEAMS_-_Laptop/_C__Users_IV-PC_Documents_Downloads_Dev_20Basics_20Projects_00_20WEB_HtmlPage10.html_Surface_Pro_6__Cust___sAx-lqtEH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025206782",
            width: "310",
          },
        ],
        // Chip Groups: Used Resources
        resourcesTags: [
          { id: 1, name: "Javascript" },
          { id: 2, name: "CSS" },
          { id: 3, name: "HTML" },
        ],
        // Chip Groups: Used Tools
        toolsTags: [
          { id: 1, name: "VS Code" },
          { id: 2, name: "Paint 3D" },
        ],
        //Project Category Icon (Icon Representing Project in id: 2)
        icons: [
          { id: 1, name: "mdi-monitor-edit", color: "grey", size: "40" },
          { id: 2, name: "mdi-monitor-dashboard", color: "blue", size: "120" },
          { id: 3, name: "mdi-xml", color: "grey", size: "40" },
        ],
        // Copy Section
        par1: 'This Project I named "6A-Teams Company" was a hypothetical tactical company that gives protection services. After many tutorials in css I remember wanting to build something tactical since at the time I was watching videos of airsoft.',
        par2: "I built this project mid 2021, so I don't remember what areas I progressed in. Looking through my code, this was one of the few projects where I decided to build something from scratch.",
        par3: "This project was also the first to have a responsive layout. By responsive I mean for the screen I had a surface pro 6, so everything I coded was using that screen instead of responsive tools like responsibly.",
        par4: "Overall I think for a hard coded website, which took me a month to build it was deffinetly a steeping stone.",
      },
      //Back-End
    ],
    //Services Page
    servicesInfo: [
      // UI/UX Serivce Card
      {
        id: 0,
        name: "UI/UX",
        icon: "mdi-monitor-edit",
        iconStyle: "white",
        service: "UI/UX",
        status: "VIEW",
        // Intro Top IMG
        src1: "https://i.imgur.com/JGGngqp.png",
        // Bottom IMG
        src2: "https://i.imgur.com/JGGngqp.png",
        //Bottom Summary Card
        sum1: "A UI/UX Professional ",
        sum2: "might just be what your team needs too ",
        sum3: " Organize an Informative & Unique Visual Concept",
        sum4: "of any given web or app based project. If you haven't found an answer already send me an email for more details.",
        //4 Selling Points Cards id 1-4
        cards: [
          {
            id: 1,
            icon: "mdi-map-marker-path",
            iconStyle: "white",
            title: "Recognized Process",
            caption: "Organized",
            style: "blue white--text rounded-xl pa-4",
            buttons: [
              {
                id: 1,
                style: "white--text px-3 rounded-pill",
                fact: "Linear Path",
              },
              {
                id: 2,
                style: "white--text px-3 rounded-pill",
                fact: "Stages",
              },
              {
                id: 3,
                style: "white--text px-3 rounded-pill",
                fact: "Identify Needs",
              },
            ],
          },
          {
            id: 2,
            icon: "mdi-clipboard-text-search-outline",
            iconStyle: "black",
            title: "Analytical Research",
            caption: "Informative",
            style: "white black--text rounded-xl pa-4",
            buttons: [
              {
                id: 1,
                style: "black--text px-3 rounded-pill",
                fact: "Logic & Reason",
              },
              {
                id: 2,
                style: "black--text px-3 rounded-pill",
                fact: "Problem Oriented",
              },
            ],
          },
          {
            id: 3,
            icon: "mdi-briefcase-edit-outline",
            iconStyle: "white",
            title: "Tailored Concepts ",
            caption: "Unique",
            style: "blue white--text rounded-xl pa-4",
            buttons: [
              {
                id: 1,
                style: "white--text px-3 rounded-pill",
                fact: "Prototypes",
              },
              {
                id: 2,
                style: "white--text px-3 rounded-pill",
                fact: "Time",
              },
              {
                id: 3,
                style: "white--text px-3 rounded-pill",
                fact: "Concept Exploration",
              },
            ],
          },
          {
            id: 4,
            icon: "mdi-gesture-tap",
            iconStyle: "black",
            title: "Interactive Final",
            caption: "Visualized",
            style: "white black--text rounded-xl pa-4",
            buttons: [
              {
                id: 1,
                style: "black--text px-3 rounded-pill",
                fact: "Usability Testing",
              },
              {
                id: 2,
                style: "black--text px-3 rounded-pill",
                fact: "High Fidelity Review",
              },
            ],
          },
        ],
      },
      // Front-End Dev Serivce Card
      {
        id: 1,
        name: "Front-End Developer",
        icon: "mdi-monitor-dashboard",
        iconStyle: "white",
        service: "Front-End-DEV",
        status: "VIEW",
        // Intro Top IMG
        src1: "https://i.imgur.com/FH0i4Tk.png",
        // Bottom IMG
        src2: "https://i.imgur.com/FH0i4Tk.png",
        //Bottom Summary Card
        sum1: "Front End Developers",
        sum2: " are the edge in creating new products that aren't yet used in the market.",
        sum3: " Compatibile, Optimized, Modern, and Tailored ",
        sum4: "web specialized projects could aid your business develop when competition is high in any given field. Feel free to ask me any question!",
        //4 Selling Points Cards id 1-4
        cards: [
          {
            id: 1,
            icon: "mdi-cellphone-link",
            iconStyle: "white",
            title: "Responsive Designs",
            caption: "Compatibility",
            style: "blue white--text rounded-xl pa-4",
            buttons: [
              {
                id: 1,
                style: "white--text px-3 rounded-pill",
                fact: "Mobile",
              },
              {
                id: 2,
                style: "white--text px-3 rounded-pill",
                fact: "Ipad",
              },
              {
                id: 3,
                style: "white--text px-3 rounded-pill",
                fact: "Laptop",
              },
              {
                id: 3,
                style: "white--text px-3 rounded-pill",
                fact: "Monitor",
              },
            ],
          },
          {
            id: 2,
            icon: "mdi-briefcase-search-outline",
            iconStyle: "black",
            title: "SEO",
            caption: "Optimized",
            style: "white black--text rounded-xl pa-4",
            buttons: [
              {
                id: 1,
                style: "black--text px-3 rounded-pill",
                fact: "Keyword Ranking",
              },
              {
                id: 2,
                style: "black--text px-3 rounded-pill",
                fact: "Load Speeds",
              },
            ],
          },
          {
            id: 3,
            icon: "mdi-chart-timeline-variant",
            iconStyle: "white",
            title: "Latest Features",
            caption: "Modern",
            style: "blue white--text rounded-xl pa-4",
            buttons: [
              {
                id: 1,
                style: "white--text px-3 rounded-pill",
                fact: "Competitive Edge",
              },
              {
                id: 2,
                style: "white--text px-3 rounded-pill",
                fact: "Resource Variety",
              },
            ],
          },
          {
            id: 4,
            icon: "mdi-briefcase-edit-outline",
            iconStyle: "black",
            title: "Custom",
            caption: "Tailored",
            style: "white black--text rounded-xl pa-4",
            buttons: [
              {
                id: 1,
                style: "black--text px-3 rounded-pill",
                fact: "Adaptible UI",
              },
              {
                id: 2,
                style: "black--text px-3 rounded-pill",
                fact: "Unrestricted",
              },
            ],
          },
        ],
      },
      // Back-End Dev Serivce Card
      {
        id: 2,
        name: "Back-End Developer",
        icon: "mdi-xml",
        service: "Back-End-Dev",
        status: "N/A",
      },
      // Photographer Serivce Card
      {
        id: 3,
        name: "Photographer",
        icon: "mdi-camera",
        service: "Photographer",
        status: "N/A",
      },
    ],
  },
  actions: {
    updateSidebar({ commit }, value) {
      commit("UPDATE_SIDEBAR", {
        value,
      });
    },
    activateRevInner({ commit }) {
      commit("ACTIVATE_REV_INNER", {});
    },
    activateRevInSidebar({ commit }) {
      commit("ACTIVATE_REV_IN_SIDEBAR", {});
    },
  },
  mutations: {
    UPDATE_SIDEBAR(state, { value }) {
      Vue.set(state, "reveal", value);
    },
    ACTIVATE_REV_INNER(state) {
      return (
        (state.hideMainMenu = !state.hideMainMenu),
        (state.revInner = !state.revInner)
      );
    },
    ACTIVATE_REV_IN_SIDEBAR(state) {
      return (
        (state.hidesideMenu = !state.hidesideMenu),
        (state.revSide = !state.revSide)
      );
    },
  },

  modules: {},
});
