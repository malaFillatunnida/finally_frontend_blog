import React from "react";
import { Image } from "react-bootstrap";

const Home = () => {
  return (
    //Awal Home
    <div className="header">
      {/* Desktop */}
      <div className="container">
        <div className="d-none d-md-block">
          <div className="row mt-4 mb-5">
            <div className="col-md-6">
              <div className="d-flex h-100">
                <div className="justify-content-center align-self-center">
                  <h3>
                    <b>
                      BERMINAT MENCIPTAKAN ZERO TECHNOLOGY GAP EKOSISTEM DIGITAL
                    </b>
                  </h3>
                  <p>
                    G2Academy memberdayakan transformasi digital dengan
                    mengembangkan talenta teknologi kelas dunia di semua
                    tingkatan, elemen, dan sektor industri. Didorong oleh visi
                    ini, kami mengangkat calon profesional dengan memajukan
                    pendidikan teknologi, mengintegrasikan saluran bakat, dan
                    memfasilitasi proyek perusahaan.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <Image
                src="https://www.g2academy.co/img/hero.4e7737ff.png"
                width="100%"
              />
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="d-sm-block d-md-none">
          <div className="row mt-4">
            <div className="col-md-6 mb-3">
              <Image
                src="https://www.g2academy.co/img/hero.4e7737ff.png"
                width="100%"
              />
            </div>
            <div className="col-md-6">
              <div className="d-flex h-100">
                <div className="justify-content-center align-self-center">
                  <h3>
                    <b>
                      BERMINAT MENCIPTAKAN ZERO TECHNOLOGY GAP EKOSISTEM DIGITAL
                    </b>
                  </h3>
                  <p>
                    G2Academy memberdayakan transformasi digital dengan
                    mengembangkan talenta teknologi kelas dunia di semua
                    tingkatan, elemen, dan sektor industri. Didorong oleh visi
                    ini, kami mengangkat calon profesional dengan memajukan
                    pendidikan teknologi, mengintegrasikan saluran bakat, dan
                    memfasilitasi proyek perusahaan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
