import React from 'react';
import Head from 'next/head';
import "@/components/Css/Erro.css"
const NotFoundPage = () => {
   return (
     <>
       <Head>
         <meta charset="utf-8" />
         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <title>Erro 404</title>
       </Head>
       <div id="notfound">
         <div className="notfound">
           <div className="notfound-404">
             <h1>404</h1>
             <h2>pagina não existe</h2>
           </div>
           <a href="/">Home</a>
         </div>
       </div>
     </> 
   );
 };
 
 export default NotFoundPage;