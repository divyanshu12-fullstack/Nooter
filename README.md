# Data Science Club - Technical Team Project

### This GitHub Repo contains the solution for the task  4 only The Backend note Api
- The Website is MERN stack based i.e Express as server, React in frontend and MongoDB as Database
- Here Chakara-UI has been used for a responsive(Servicable) UI.
- At first I was thinking to build a Complete website where integration of backend and frontend could have been more proper
- But after encountering some constant faild deployment on Render, My plans were hindered

- Here the contains the seperate running backend and frontend services,
- this makes them to be started seperately

### After download the Nooter App on your machine follow - 

## - In Backend - in the powershell put ->  cd .\backend\
- Once in Backend -> npm install -> npm run dev
- Backend runs on the server ->  http://localhost:5001/api/notes/
- Use PostMan to Seperately test Each http method,  to test get simply use this http://localhost:5001/api/notes/
- To test POST, PUT -> go to Body ->  raw and follow this format ->(POST can have either title or/and content)
{
    "title": "test",
    "content": "content2"
}
- Note to Test Delete and Post the base URL most follow /id of a note

## - For Frontend -> cd .\frontend\  -> npm install -> npm run dev
- Frontend runs on  http://localhost:5173/
###- Note: This frontend is made to compliment the backend, not the main highlight of the work
Once both backend and frontend are up and running use  http://localhost:5173/ to test my site
#### Thanks for reading this far
