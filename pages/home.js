import React from 'react'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
        <title>SSR-React</title>
      </Head>

      <body>
        <div className="container-fluid bg-light">
          <div className="text-center">
            <h1 className="display-2" >ALLBIKES</h1>
            <img className="mt-3" src="./images/logo1.png" /> < br />
            <h1 className="display-4">Confira nossas bicicletas</h1>
          </div>
          <div className="row row-cols-4 row-cols-md-4 g-4 mt-5 mx-5 justify-content-center">
            <div className="col mt-5 mr-2">
              <div className="card">
                <img src="./images/bike1.jpg" className="card-img-top" alt="jóia" />
                <div className="card-body">
                  <h5 className="card-title">Bike Terra 24 marchas</h5>                  
                  <p className="card-text"> <b>R$ 1.999,99</b>  </p>
                </div>
              </div>
            </div>
            <div className="col mt-5 mr-2">
              <div className="card">
                <img src="./images/bike2.jpg" className="card-img-top" alt="jóia" />
                <div className="card-body">
                  <h5 className="card-title">Bike Terra c/ Amortecedor</h5>                 
                  <p className="card-text"> <b>R$ 1.599,97</b> </p>
                </div>
              </div>
            </div>
            <div className="col mt-5 mr-2">
              <div className="card">
                <img src="./images/Bike3.webp" className="card-img-top" alt="jóia" />
                <div className="card-body">
                  <h5 className="card-title">Bike infantil</h5>                  
                  <p className="card-text"> <b>R$ 129,99</b>  </p>
                </div>
              </div>
            </div>
            <div className="col mt-5 mr-2">
              <div className="card">
                <img src="./images/cronometro.jpg" className="card-img-top" alt="jóia" />
                <div className="card-body">
                  <h5 className="card-title">Cronometro + luz + buzina</h5>
                  <p className="card-text"> <b>R$ 90,99</b>  </p>
                </div>
              </div>
            </div>
            <div className="col mt-5 mr-2">
              <div className="card">
                <img src="./images/buzininha.jpg" className="card-img-top" alt="jóia" />
                <div className="card-body">
                  <h5 className="card-title">Buzina infantil</h5>
                  <p className="card-text"> <b>R$ 13,99</b>  </p>
                </div>
              </div>
            </div>
            <div className="col mt-5 mr-2">
              <div className="card">
                <img src="./images/buzina.webp" className="card-img-top" alt="jóia" />
                <div className="card-body">
                  <h5 className="card-title">Buzina ar</h5>
                  <p className="card-text"> <b>R$ 105,99</b> </p>
                </div>
              </div>
            </div>









          </div>
        </div>


      </body>
    </div>
  )
}
