# Personal Portfolio

## Project Description

Personal portfolio and place where I can share my work with the world. My original intention was to apply the learned from the React course, which I am currently studying, by starting with simple operations and improving them overtime.

##### Challenges i faced

I developed the so called `one page` application for a very first time. Beforehand i had experience with routing single page applications and multipage apps so i tried to implement the same principles in this one pager and they didn't work. It was research time ...

For a very first time i created a fully backendless website, the only challenge in this direction was figuring out how to implement the contact form feature in order for it to send emails.

For a very first time i had to implement css animations. The difficult part was figuring out how to invoke them multiple times upon scrolling to the target section viewport. The even more difficult part was to figure out why the animations break my navigation padding and positioning upon invoke, they also tilted the whole website so i had to figure out a way to calm their enthusiasm down. Getting enthusiastic also depended on the device you are viewing the website from and varried from width to width. 

###### Libraries i used

React

But why react? You are probably wondering. Why use a tank for a single bottle target? The answer is simple. Cuz i can. Jokes aside, i really can. And in order for me to say this `can` sentance confidently i had to actually PRACTICE React. This is exactly what i did in this project and apart from it being my portfolio witch is good to have if you are developer it was also target practice for me. Learning is one thing, implementing is another.

react-scroll

The key to one pagers is scroll upon navigation button click / change navigation active button style upon reaching a section viewport. React-scroll makes it easy, no need for extra javascript code, no need for any tracking and event listeners at all. Wrapping nav links in a single component and giving props to it to adjust its behaviour is all that is needed. 

react-animation-on-scroll

Like the react-scroll library all that you need to do is import a single component and wrap the sections you want to animate with it giving it className of the animation as prop. It will handle the animation triggering upon reaching the section viewport for you. Simple as that.

emailJS

Great and simple way to make contact forms work without the need of backend solution. 



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
