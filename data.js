module.exports = [
  {
    num: 1,
    question: 'Whats an angular directive and why should you implement one?',
    answer: 'Angular directives are JavaScript functions that manipulate and add behaviors to HTML DOM elements. A main advantage of the directive, in addition to being intuitive-looking as its declarative aspect resides inline in your markup, is that it is a reusable component.',
    sourcetitle: 'Angular directives quick overview · tim-hr/stuff Wiki',
    sourceurl: 'https://github.com/tim-hr/stuff/wiki/Angular-directives-quick-overview',
    tag: 'Angular',
  },
  {
    num: 2,
    question: 'What are the major differences between React and Angular?',
    answer: 'Angular is full MVC framework that uses DOM directives, factories, and filters. More powerful than React due to its full MVC archictecture, but suffers a performance hit.<br><br>React is faster, newer, uses the virtual DOM and JSX. Very lightweight but you have to provide your own controller and model. Redux can be used as the model and regular JS as the controller.',
    sourcetitle: 'Basic-Differences-Between-AngularJS-and-React-484781-2.jpg (2000×2829)',
    sourceurl: 'http://i1-news.softpedia-static.com/images/news2/Basic-Differences-Between-AngularJS-and-React-484781-2.jpg',
    tag: 'Frameworks',
  },
  {
    num: 3,
    question: 'What is Webpack? What is Babel?',
    answer: 'Webpack is a module bundler which takes modules with dependencies and generates static assets by bundling them together based on some configuration.<br><br> Babel translates ES6 and JSX into a format that is supported by the browser.<br><br>Webpack uses loaders to translate files and often times Webpack will be used inconjunction with Babel to translate files for use in the browser.',
    sourcetitle: 'Setting Up a React.js Environment Using Npm, Babel 6 and Webpack | Codementor',
    sourceurl: 'https://www.codementor.io/tamizhvendan/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr',
    tag: 'React',
  },
  {
    num: 4,
    question: 'What does <!doctype html> do?',
    answer: 'DOCTYPEs are required for legacy reasons. When omitted, browsers tend to use a different rendering mode that is incompatible with some specifications. Including the DOCTYPE in a document ensures that the browser makes a best-effort attempt at following the relevant specifications.',
    sourcetitle: 'What does <!doctype html> do? - stackoverflow',
    sourceurl: 'http://stackoverflow.com/questions/7695044/what-does-doctype-html-do',
    tag: 'HTML',
  },
  {
    num: 5,
    question: 'What\'s the difference between HTML and XHTML?',
    answer: 'HTML5 has two parsing modes or syntaxes: HTML and XML. The difference depends on whether the document is served with a Content-type: text/html header or a Content-type: application/xml+xhtml header.<br><br>xHTML is the XML version of HTML. Stricter than HTML. Elements and attributes must be in lower case, end tags are required for all elements, attribute values must always be quoted, among other rules.',
    sourcetitle: 'XHTML vs HTML',
    sourceurl: 'http://www.tutorialspoint.com/xhtml/xhtml_vs_html.htm',
    tag: 'HTML',
  },
  {
    num: 6,
    question: 'What is progressive enhancement?',
    answer: 'Starting with a baseline of usable functionality, then increasing the richness of the user experience step by step by testing for support for enhancements before applying them.',
    sourcetitle: 'Graceful degradation versus progressive enhancement - W3C Wiki',
    sourceurl: 'https://www.w3.org/wiki/Graceful_degradation_versus_progressive_enhancement',
    tag: 'General',
  },
  {
    num: 7,
    question: 'What is graceful degradation?',
    answer: 'The practice of building your web functionality so that it provides a certain level of user experience in more modern browsers, but it will also degrade gracefully to a lower level of user in experience in older browsers. This lower level is not as nice to use for your site visitors, but it does still provide them with the basic functionality that they came to your site to use; things do not break for them.',
    sourcetitle: 'What is "Graceful Degradation" in Web Design?',
    sourceurl: 'http://webdesign.about.com/od/webdesignglossary/g/graceful-degradation.htm',
    tag: 'General',
  },
  {
    num: 8,
    question: 'What is BEM?',
    answer: 'The Block, Element, Modifier methodology (commonly referred to as BEM) is a popular naming convention for classes in HTML and CSS. Developed by the team at Yandex, its goal is to help developers better understand the relationship between the HTML and CSS in a given project.',
    sourcetitle: 'BEM 101',
    sourceurl: 'https://css-tricks.com/bem-101/',
    tag: 'CSS',
  },
  {
    num: 9,
    question: 'What does CORS stand for and what issue does it address?',
    answer: 'Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources (e.g. fonts, JavaScript, etc.) on a web page to be requested from another domain outside the domain from which the resource originated. <br><br>CORS defines a way in which a browser and server can interact to safely determine whether or not to allow the cross-origin request. It allows for more freedom and functionality than purely same-origin requests, but is more secure than simply allowing all cross-origin requests. It is a recommended standard of the W3C.',
    sourcetitle: 'Cross-origin resource sharing - Wikipedia',
    sourceurl: 'https://en.m.wikipedia.org/wiki/Cross-origin_resource_sharing',
    tag: 'General',
  },
  {
    num: 10,
    question: 'What\'s the difference between full standards mode, almost standards mode and quirks mode?',
    answer: 'They are modes used by browser rendering engines. In the standards mode, the engine will render a page as HTML and CSS specifications specify. The quirks mode is to render legacy pages written before these standards are fixed. The legacy pages contain non-standard behaviours emulated in old browsers such as Internet Explorer 5 or Navigator 4.',
    sourcetitle: 'Quirks mode - Wikipedia',
    sourceurl: 'https://en.wikipedia.org/wiki/Quirks_mode',
    tag: 'HTML',
  },
  {
    num: 11,
    question: 'What is progressive rendering?',
    answer: '',
    sourcetitle: 'Progressive Image Rendering',
    sourceurl: 'https://blog.codinghorror.com/progressive-image-rendering/',
    tag: 'General',
  },
  {
    num: 12,
    question: 'What is a closure?',
    answer: 'Closures are functions that refer to independent (free) variables (variables that are used locally, but defined in an enclosing scope). In other words, these functions "remember" the environment in which they were created. Allows use to emulate private methods which aren\'t avaliable in JavaScript.',
    sourcetitle: 'Closures - JavaScript | MDN',
    sourceurl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures',
    tag: 'JavaScript',
  },
  {
    num: 13,
    question: 'What\'s a typical use case for anonymous functions?',
    answer: 'The most typical use for anonymous functions in JS is to pass them as arguments to other functions (setTimeout, or as callbacks). You can also use them to create closures (IIFE\'s). ',
    sourcetitle: 'What\'s a typical use case for anonymous functions in JavaScript? - Quora',
    sourceurl: 'https://www.quora.com/Whats-a-typical-use-case-for-anonymous-functions-in-JavaScript',
    tag: 'JavaScript',
  },
  {
    num: 14,
    question: 'When would you use document.write()?',
    answer: 'Probably never. Using document.write will overwrite all the HTML on a page. The only seem appropriate usage for document.write() is when working third parties like Google Analytics and such for including their scripts. This is because document.write() is mostly available in any browser. Since third party companies have no control over the user’s browser dependencies (ex. jQuery), document.write() can be used as a fallback or a default method.',
    sourcetitle: 'JS Interview Question: When would you use document.write()? – Medium',
    sourceurl: 'https://medium.com/@rlynjb/js-interview-question-when-would-you-use-document-write-ccc199137715#.hkym7abs2',
    tag: 'JavaScript',
  },
  {
    num: 15,
    question: 'What\'s the difference between a variable that is: null, undefined or undeclared?',
    answer: 'In JavaScript, undefined means a variable has been declared but has not yet been assigned a value. Null is an assignment value. It can be assigned to a variable as a representation of no value. A variable is undeclared when it does not use the var/let/const keyword. It gets created on the global object (that is, the window), thus it operates in a different space as the declared variables.',
    sourcetitle: 'Lucy | JS: null, undefined, and undeclared',
    sourceurl: 'http://lucybain.com/blog/2014/null-undefined-undeclared/',
    tag: 'JavaScript',
  },
  {
    num: 16,
    question: 'What is progressive rendering?',
    answer: '',
    sourcetitle: 'Progressive Image Rendering',
    sourceurl: 'https://blog.codinghorror.com/progressive-image-rendering/',
    tag: 'General',
  },
  {
    num: 17,
    question: 'What is event delegation?',
    answer: 'Event delegation allows you to avoid adding event listeners to specific nodes;  instead, the event listener is added to one parent.  That event listener analyzes bubbled events to find a match on child elements.',
    sourcetitle: 'Event Delegation',
    sourceurl: 'https://davidwalsh.name/event-delegate',
    tag: 'JavaScript',
  },
  {
    num: 18,
    question: 'What is \'this\' in JavaScript?',
    answer: 'In the global execution context (outside of any function), this refers to the global object, whether in strict mode or not.<br>Inside a function, the value of this depends on how the function is called. If the code is not in strict mode and the value of this is not set by the call, this will default to the global object. In strict mode, however, the value of this remains at whatever it was set to when entering the execution context.<br>Arrow functions use the outer scope this value.<br>When a function is called as a method of an object, its this is set to the object the method is called on.',
    sourcetitle: 'this - JavaScript | MDN',
    sourceurl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this',
    tag: 'JavaScript',
  },
  {
    num: 19,
    question: 'What is prototypal inheritance?',
    answer: 'In JavaScript, all functions are also objects, which means that they can have properties. And as it so happens, they all have a property called `prototype`, which is also an object. Any time you create a function, it will automatically have a property called prototype, which will be initialized to an empty object. JavaScript uses an inheritance model called “differential inheritance”. What that means is that methods aren’t copied from parent to child. Instead, children have an “invisible link” back to their parent object. You can use Object.create or the new keyword to create new objects from constructors that will automatically inherit the prototypal methods that were set on their parent. Because JavaScript will look up the prototype when trying to access properties on an object, you can alter your classes at runtime.',
    sourcetitle: 'Prototypal Inheritance in JavaScript – Medium',
    sourceurl: 'https://medium.com/@kevincennis/prototypal-inheritance-781bccc97edb#.iub53yww9',
    tag: 'JavaScript',
  },
  {
    num: 20,
    question: 'What do you think of AMD vs CommonJS?',
    answer: 'In general, AMD is preferred where async loading is common (i.e. the browser). Server-side, CommonJS/Node.js style "require" is the norm. ',
    sourcetitle: 'JavaScript Module Systems Showdown: CommonJS vs AMD vs ES2015',
    sourceurl: 'https://auth0.com/blog/javascript-module-systems-showdown/',
    tag: 'JavaScript',
  },
  {
    num: 21,
    question: 'Explain why the following doesn\'t work as an IIFE: function foo(){ }();.',
    answer: 'Because foo isn’t being called. This is a function definition, it defines foo. But it’s not a function expression - that is, it’s not understood by the JS parser to actually call a function. In order to prep the parser that we\'re actually dealing with a function expression we have to wrap things up in ().',
    sourcetitle: 'Lucy | JS Immediately Invoked Function Expressions',
    sourceurl: 'http://lucybain.com/blog/2014/immediately-invoked-function-expression/',
    tag: 'JavaScript',
  },
  {
    num: 16,
    question: 'What is progressive rendering?',
    answer: '',
    sourcetitle: 'Progressive Image Rendering',
    sourceurl: 'https://blog.codinghorror.com/progressive-image-rendering/',
    tag: 'General',
  },
  {
    num: 16,
    question: 'What is progressive rendering?',
    answer: '',
    sourcetitle: 'Progressive Image Rendering',
    sourceurl: 'https://blog.codinghorror.com/progressive-image-rendering/',
    tag: 'General',
  },
  {
    num: 16,
    question: 'What is progressive rendering?',
    answer: '',
    sourcetitle: 'Progressive Image Rendering',
    sourceurl: 'https://blog.codinghorror.com/progressive-image-rendering/',
    tag: 'General',
  }
];
