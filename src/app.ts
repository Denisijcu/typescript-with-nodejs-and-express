import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

const add = (a: number, b: number): number => a + b;
let total = add(4,5);

app.get('/', (req, res) => {
  const s = `<div> 
                  <h1> Test : ${total}
    <h1>Cabecera</h1>
    <p>Title</p>
    <table>
      <th>Nombre</th>
      <th>Apellidos</th>
      <th>Phone</th>
      <tr>
         <td>Denis</td>
         <td>Sanchez</td>
         <td>302 227 2020</td>
      </tr>
      <tr>
      <td>Edith</td>
      <td>Flores</td>
      <td>302 227 2020</td>
   </tr>

    </table>
  
      
  
  </div>`;
  res.send(s);
});

app.listen(5000, () => console.log('SErver running'));
