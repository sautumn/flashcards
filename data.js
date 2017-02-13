module.exports = [
  {
    question: 'What are the four types of instantiation patterns in JavaScript?',
    answer: 'Functional, Function-shared, Prototypal, and Psuedoclassical. ES6 has introduced Classes as well.',
    source_title: 'Instantiation Patterns In JavaScript - Call Me Nick',
    source: 'http://callmenick.com/post/instantiation-patterns-in-javascript'
  },
  {
    question: 'Whats an angular directive and why should you implement one?',
    answer: 'Angular directives are JavaScript functions that manipulate and add behaviors to HTML DOM elements. A main advantage of the directive, in addition to being intuitive-looking as its declarative aspect resides inline in your markup, is that it is a reusable component.',
    source_title: 'Angular directives quick overview · tim-hr/stuff Wiki',
    source: 'https://github.com/tim-hr/stuff/wiki/Angular-directives-quick-overview',
  },
  {
    question: 'What are the major differences between React and Angular?',
    answer: 'Angular is full MVC framework that uses DOM directives, factories, and filters. More powerful than React due to its full MVC archictecture, but suffers a performance hit.<br>React is faster, newer, uses the virtual DOM and JSX. Very lightweight but you have to provide your own controller and model. Redux can be used as the model and regular JS as the controller.',
    source_title: 'Basic-Differences-Between-AngularJS-and-React-484781-2.jpg (2000×2829)',
    source: 'http://i1-news.softpedia-static.com/images/news2/Basic-Differences-Between-AngularJS-and-React-484781-2.jpg',
  },
  {
    question: 'Describe some strategies for handling high traffic. What is likely to fail? How can you design your system to prevent those failures?',
    answer: 'Spin up a virtual cluster of web servers utilizing child processes on each instance to take advantage of multithreading.<br>Funnel all traffic through a load balancer<br>Check requests to load balancer against a rate limiter service to ensure the request is allowed and avoid DDOS attacks.<br>Load balancer spreads traffic amongst several distinct web servers (all comprised of virtual clusters).<br>Host static assets on a CDN to decrease load on server.<br>Cache most-requested data to avoid excessive database reads.<br>Add database write operations to a queue to prevent overloading and data loss in the event of a db failure.<br>Shard databases.<br>Mirror shards to boost fault/failure tolerance and allow concurrent reads across shards.',
    source_title: 'false',
    source: 'false',
  },
  {
    question: 'What happens when you type gmail.com into the browser? Outline the "life of a request" from beginning to end.',
    answer: '<ul><li>DNS lookup on the URL, now you have an IP address.</li><li>Use the IP address + the port number (which is explicitly or implicitly described in the URL) to connect to the server via TCP/IP.</li><li>Google is obviously a huge site with many servers, so some kind of load-balancing is involved to route the request to a specific available server.</li><li>Use the TCP stream thus opened up to start sending text to the server.</li><li>Send an HTTP request (which is just text) to tell the server which path, host, and "verb" (GET, POST, etc) you are requesting.</li><li>The HTTP request also contains a variety of other important headers which tell the server who you are and more about what you want.</li><li>The server process the text of the HTTP request into a request object in memory.</li><li>The server probably has some kind of an MVC framework; it processes the request through that.</li><li>The resulting bundle of HTML, inline JavaScript, inline CSS, and possibly inlined binary data, is packaged up into an HTTP response.</li><li>The HTTP response is shipped back through the TCP stream.</li><li>The browser begins parsing the big wad of text in the HTTP response.</li><li>As HTML, JavaScript, CSS are parsed, more HTTP requests are sent out to fetch more assets for the page.</li><li>The browser executes script and renders the results of all its parsing to the viewport.</li></ul>',
    source_title: 'Outline for "What happens when you type http: www.gmail.com into your browser location bar?" · tim-hr/stuff Wiki',
    source: 'https://github.com/tim-hr/stuff/wiki/Outline-for-%22What-happens-when-you-type-http:--www.gmail.com-into-your-browser-location-bar%3F%22',
  },
  {
    question: 'What does it mean to scale an architecture horizontally, instead of vertically?',
    answer: 'Horizontal scaling divides the load amongst many similar resources (can be done infinitely, with little incremental cost). Vertical scaling increases the power of a single resource (can be done only to a finite limit, and often at greater cost).',
    source_title: 'false',
    source: 'false',
  },
  {
    question: 'What is Webpack? What is Babel?',
    answer: 'Webpack is a module bundler which takes modules with dependencies and generates static assets by bundling them together based on some configuration.<br> Babel translates ES6 and JSX into a format that is supported by the browser.<br>Webpack uses loaders to translate files and often times Webpack will be used inconjunction with Babel to translate files for use in the browser.',
    source_title: 'Setting Up a React.js Environment Using Npm, Babel 6 and Webpack | Codementor',
    source: 'https://www.codementor.io/tamizhvendan/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr',
  },
];
