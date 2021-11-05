import React from "react";

const Carousel = () => {
  console.log("Hey this is my componenet");
  return (
    <>
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        {/* <!-- Indicators --> */}
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        {/* <!-- Wrapper for slides --> */}
        <div class="carousel-inner">
          <div class="item active">
            <a
              href="https://open.spotify.com/album/7CjJb2mikwAWA1V6kewFBF?si=lJkA6v8ySwGIoZGz7rxuuw&dl_branch=1"
              target="_blank"
            >
              {" "}
              <img
                class="album"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/X100pre.jpg/220px-X100pre.jpg"
                alt="X 100pre"
              />
            </a>
            <div class="carousel-caption">
              <h3>X 100pre</h3>
              <p>
                Mi cancion favorito esta{" "}
                <a href="https://open.spotify.com/track/6it15CsDlkqB7N4lF0C1qM?si=6671ba08f64741fa">
                  "Caro"
                </a>
              </p>
            </div>
          </div>
          <div class="item">
            <a
              href="https://open.spotify.com/album/6ylFfzx32ICw4L1A7YWNLN?si=wl17XPhqQMmnqk5ChmwhfQ&dl_branch=1"
              target="_blank"
            >
              <img
                class="album"
                src="https://upload.wikimedia.org/wikipedia/en/7/7f/J_Balvin_and_Bad_Bunny_-_Oasis.png"
                alt="Oasis"
              />
            </a>
            <div class="carousel-caption">
              <h3>Oasis</h3>
              <p>
                Mi cancion favorito esta{" "}
                <a href="https://open.spotify.com/track/7hynhxDoDpgMIV12JuVtNa?si=53914bafd12c4ea7">
                  "UnPeso"
                </a>
              </p>
            </div>
          </div>
          <div class="item">
            <a
              href="https://open.spotify.com/album/5lJqux7orBlA1QzyiBGti1?si=QwdbVDZ1RBKC7m0YHWql8A&dl_branch=1"
              target="_blank"
            >
              {" "}
              <img
                class="album"
                src="data:image/jpeg;base64,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"
                alt="YHLQMDLG"
              />
            </a>
            <div class="carousel-caption">
              <h3>YHLQMDLG</h3>
              <p>
                Mi cancion favorito esta{" "}
                <a href="https://open.spotify.com/track/75pQqzwgCjUOSSy5CpmAjy?si=f578a19706aa4383">
                  "Pero Ya No"
                </a>
              </p>
            </div>
          </div>
          <div class="item">
            <a
              href="https://open.spotify.com/album/2d9BCZeAAhiZWPpbX9aPCW?si=HZ2QOgOxQx6cHBF7gYUmTw&dl_branch=1"
              target="_blank"
            >
              {" "}
              <img
                class="album"
                src="https://media.pitchfork.com/photos/5fc9015ac61c34a7841b1eb3/1:1/w_600/EL%20U%CC%81LTIMO%20TOUR%20DEL%20MUNDO_Bad%20Bunny%20.jpg"
                alt="El Último Tour del Mundo"
              />
            </a>
            <div class="carousel-caption">
              <h3>El Último Tour del Mundo</h3>
              <p>
                Mi cancion favorito esta{" "}
                <a href="https://open.spotify.com/track/2XIc1pqjXV3Cr2BQUGNBck?si=8256fdefd0744686">
                  "La Noche Anoche"
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
        {/* <!-- Left and right controls --> */}
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <script src="less.js" type="text/javascript"></script>
    </>
  );
};

export default Carousel;
