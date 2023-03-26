import {Article} from '../../Common/Article'


const propsTest = {
  dest:"http://localhost:3030/data/topic",
  title:"Nunc in felis aliquet metus luctus iaculis",
  img:"img/img-01.jpg",
  content:"Aliquam ac lacus volutpat, dictum risus at, scelerisque nulla. Nullam sollicitudin at augue venenatis eleifend. Nulla ligula ligula, egestas sit amet viverra id, iaculis sit amet ligula.",
  _id:'1'
}

export const  Portfolio = () =>{

    return(
        <div className="tm-section tm-section-pad tm-bg-gray" id="tm-section-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
              <div className="tm-article-carousel">
                <Article {...propsTest}/>
                <Article {...propsTest}/>
                <Article {...propsTest}/>
                <Article {...propsTest}/>
                <Article {...propsTest}/>
                <Article {...propsTest}/>
             
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 tm-recommended-container">
              <div className="tm-bg-white">
                <div className="tm-bg-primary tm-sidebar-pad">
                  <h3 className="tm-color-white tm-sidebar-title">Recommended Places</h3>
                  <p className="tm-color-white tm-margin-b-0 tm-font-light">Enamel pin cliche tilde, kitsch and VHS thundercats</p>
                </div>
                <div className="tm-sidebar-pad-2">
                  <a href="#" className="media tm-media tm-recommended-item">
                    <img src="img/tn-img-01.jpg" alt="" />
                    <div className="media-body tm-media-body tm-bg-gray">
                      <h4 className="text-uppercase tm-font-semibold tm-sidebar-item-title">Europe</h4>
                    </div>
                  </a>
                  <a href="#" className="media tm-media tm-recommended-item">
                    <img src="img/tn-img-02.jpg" alt="" />
                    <div className="media-body tm-media-body tm-bg-gray">
                      <h4 className="text-uppercase tm-font-semibold tm-sidebar-item-title">Asia</h4>
                    </div>
                  </a>
                  <a href="#" className="media tm-media tm-recommended-item">
                    <img src="img/tn-img-03.jpg" alt="" />
                    <div className="media-body tm-media-body tm-bg-gray">
                      <h4 className="text-uppercase tm-font-semibold tm-sidebar-item-title">Africa</h4>
                    </div>
                  </a>
                  <a href="#" className="media tm-media tm-recommended-item">
                    <img src="img/tn-img-04.jpg" alt="" />
                    <div className="media-body tm-media-body tm-bg-gray">
                      <h4 className="text-uppercase tm-font-semibold tm-sidebar-item-title">North America</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}