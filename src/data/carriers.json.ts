export interface Template {
  link: string;
  date: string;
  role: string;
  name: string;
  location: string;

  salary: string;

};
const jobOne: Template = {
  link: "/carrier-info",
  name: "Lexington Themes",
  date: "01/03/2023",
  role: "Developer",
  location: "Yokohama",
  salary: "$440,000 - $680,000",

};
const jobTwo: Template = {
  link: "/carrier-info",
  name: "Unwrapped Design",
  date: "12/30/2023",
  role: "Rectangle designer",
  location: "Singapore or Remote",
  salary: "Good luck with that",

};
const jobThree: Template = {
  link: "/carrier-info",
  name: "Windstatic",
  date: "04/04/2023",
  role: "Components developer",
  location: "Remote",
  salary: "$1000 x Component",

};
export const byName = {
  jobOne,
  jobTwo,
  jobThree,
};
export const carriers = Object.values(byName);
