# Serverless College Search

College Search is a NextJS application that includes a search bar that fetches colleges by name, and displays the resulting colleges using Google maps.

I decided to utilize Typescript to help avoid errors, and to make my code as explicit as possible. For styling I used Material UI to quickly add a responsive layout, and to match the styling of Google Maps.

I also wanted to utililze the performance improvements from deploying a NextJS application to AWS Cloudfront. To help with the deployment process, I decided to host this application on AWS Amplify.

## Prior to Starting the App

In order to properly run this application locally, you must add your API Keys for Google Maps and Data.Gov to a .env file, using the variables defined in the .env.example as a reference.
