// Import stylesheets
import { GeneratePrimeOptionsArrayBuffer } from 'crypto';
//import './style.css';


const form: HTMLFormElement = document.querySelector('#defineform');


form.onsubmit = () => {
  const formData = new FormData(form);

  console.log(formData);
  const text = formData.get('defineword') as string;
  const kyle = GetWords(text);
  console.log(kyle);
  return false; // prevent reload
};

function fetchJSON(word: string) {
  fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
  .then(response => response.json())
  .then(data => {
      console.log(data);
      localStorage.setItem('definition', JSON.stringify(data));
  });
}

type Word = {
  word:string
};

type GetUser = {
  data:Word[];
};

  async function GetWords(text : string) {
    try {
      const response = await
      fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + text, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      if(!response.ok){
        throw new Error(`Error! status:
          ${response.status}`);
        }
        const result = (await response.json()) as 
        GetUser;

        console.log('result is:', JSON.stringify(result, null, 4));

        return result;
      }catch(error) {
        if(error instanceof Error){
          console.log('error message:',
          error.message);
          return error.message;
        } else {
          console.log('unexpected error:', error);
          return 'An unexpected error occurred';
        }
      }
      }
      //GetWords();

      

    
  