
import Card from './component/card';
const App = () => {
const jobOpenings = [
  {
   brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
   brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    name: "Amazon",
    datePosted: "2 weeks ago",
    post: "Software Development Engineer",
    tag: "Full Time",
    tag2: "Entry Level",
    pay: "$50/hr",
    location: "Hyderabad, India"
  },
  {
  brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    name: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Remote"
  },
  {
brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    name: "Apple",
    datePosted: "10 days ago",
    post: "iOS Developer",
    tag: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Mumbai, India"
  },
  {
 brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    name: "Netflix",
    datePosted: "3 weeks ago",
    post: "Backend Engineer",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Remote"
  },
  {
   brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    name: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Noida, India"
  },
  {
   brandLogo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg",
    name: "Adobe",
    datePosted: "6 days ago",
    post: "UI/UX Designer",
    tag: "Part Time",
    tag2: "Mid Level",
    pay: "$35/hr",
    location: "Bangalore, India"
  },
  {
   brandLogo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    name: "Uber",
    datePosted: "2 days ago",
    post: "Full Stack Developer",
    tag: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Gurgaon, India"
  },
  {
brandLogo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
    name: "Airbnb",
    datePosted: "1 month ago",
    post: "Backend Developer",
    tag: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Remote"
  },
  {
brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg",
    name: "Twitter (X)",
    datePosted: "8 days ago",
    post: "DevOps Engineer",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Remote"
  }
];
console.log(jobOpenings);
  return (
     <div className='parent'>
   {jobOpenings.map(function(elem){
   return <Card brandLogo={elem.brandLogo} name={elem.name} datePosted={elem.datePosted} post={elem.post} tag={elem.tag}  tag2={elem.tag2}  location={elem.location} />
 })}
  
    </div>
  ) 
} 
export default App 