const courses = [
  {
    id: 1,
    title: "Securing React Apps with Auth0",
    slug: "react-auth0-authentication-security",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 2,
    title: "React: The Big Picture",
    slug: "react-big-picture",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 3,
    title: "Creating Reusable React Components",
    slug: "react-creating-reusable-components",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 4,
    title: "Building a JavaScript Development Environment",
    slug: "javascript-development-environment",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 5,
    title: "Building Applications with React and Redux",
    slug: "react-redux-react-router-es6",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 6,
    title: "Building Applications in React and Flux",
    slug: "react-flux-building-applications",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 7,
    title: "Clean Code: Writing Code for Humans",
    slug: "writing-clean-code-humans",
    authorId: 1,
    category: "Software Practices",
  },
  {
    id: 8,
    title: "Architecting Applications for the Real World",
    slug: "architecting-applications-dotnet",
    authorId: 1,
    category: "Software Architecture",
  },
  {
    id: 9,
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    slug: "career-reboot-for-developer-mind",
    authorId: 1,
    category: "Career",
  },
  {
    id: 10,
    title: "Web Component Fundamentals",
    slug: "web-components-shadow-dom",
    authorId: 1,
    category: "HTML5",
  },
];
const employees = [
  { id: 1, name: "Stella Payne Diaz", title: "CEO" },
  { id: 2, name: "Luke Warm", title: "VP Marketing/Sales", parent: 1 },
  { id: 3, name: "Meg Meehan Hoffa", title: "Sales", parent: 2 },
  { id: 4, name: "Peggy Flaming", title: "VP Engineering", parent: 1 },
  { id: 5, name: "Saul Wellingood", title: "Manufacturing", parent: 4 },
  { id: 6, name: "Al Ligori", title: "Marketing", parent: 2 },
  { id: 7, name: "Dot Stubadd", title: "Sales Rep", parent: 3 },
  { id: 8, name: "Les Ismore", title: "Project Mgr", parent: 5 },
  { id: 9, name: "April Lynn Parris", title: "Events Mgr", parent: 6 },
  { id: 10, name: "Xavier Breath", title: "Engineering", parent: 4 },
  { id: 11, name: "Anita Hammer", title: "Process", parent: 5 },
  { id: 12, name: "Billy Aiken", title: "Software", parent: 10 },
  { id: 13, name: "Stan Wellback", title: "Testing", parent: 10 },
  { id: 14, name: "Marge Innovera", title: "Hardware", parent: 10 },
  { id: 15, name: "Evan Elpus", title: "Quality", parent: 5 },
  { id: 16, name: "Lotta B. Essen", title: "Sales Rep", parent: 3 },
  {
    name: "Gurharmanjit Singh",
    title: "Process",
    parent: 13,
    id: 18,
  },
  {
    name: "John",
    title: "Sales Rep",
    parent: 14,
    id: 17,
  },
];

const authors = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" },
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors,
  employees,
};
