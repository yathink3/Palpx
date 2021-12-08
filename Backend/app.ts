import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/home', (request: Request, response: Response) => {
  console.log(request.url);
  response.json({ message: `Welcome to the home page!` });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

// {
//     "src": "./Frontend/package.json",
//     "use": "@vercel/static"
//   }
