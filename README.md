## Task 1
Replicate the design and display of the job listings on NodeFlair Jobs
(www.nodeflair.com/jobs) to the best of your ability.
Screenshots of the site have been attached below for your reference, but do
refer and play around with the actual website for more understanding of its
interactions and responsiveness.


![image](https://user-images.githubusercontent.com/90945854/195039366-8ec9be34-120e-4cab-84dc-a7d00cc32fe8.png)




## Demo

[Live Demo](https://job-listing-page-chi.vercel.app/)


## Languages & Tools

### HTML

### CSS
  * TailwindCSS for inline-styling

### UI Tools
  * NextJS for building reusable components and introducing state to the app <br />

  
## Approach
 
I decided to create a reusable card component for the job listings. The information of every job is stored in a separate array in the constants folder. By mapping through the array of job information, a card component is created showcasing different jobs. The cards are then arranged in an aligned manner using flex-grid. The website is responsive to the screen-width and the card components are interactive when hovered. <br />

## Things to work on

1. Learn to use a web-scrapper to get job informations instead of hard-coding the array of information.
2. Add more functionality to the website (e.g. card components routes to more information about the job when clicked)

## Screenshots

Here are some screenshots of the website:
### Desktop View <br /> ![image](https://user-images.githubusercontent.com/90945854/195041335-7e7f372e-3d15-4e81-8f1f-79e7a943d44b.png)
### Phone View (Portrait) <br />![image](https://user-images.githubusercontent.com/90945854/195041596-4a0b7dc8-e236-4f52-adb7-75e59634fb0d.png)
### Phone View (Landscape) <br />![image](https://user-images.githubusercontent.com/90945854/195041772-dbe07534-ae9a-4a24-acfa-3bd4c2a253c3.png)
