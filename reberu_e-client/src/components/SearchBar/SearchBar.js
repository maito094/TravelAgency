export const  SearchBar = ()=>{
return(
    <div className="tm-section tm-bg-img" id="tm-section-1">
    <div className="tm-bg-white ie-container-width-fix-2">
      <div className="container ie-h-align-center-fix">
        <div className="row">
          <div className="col-xs-12 ml-auto mr-auto ie-container-width-fix">
            <form action="index.html" method="get" className="tm-search-form tm-section-pad-2">
              <div className="form-row tm-search-form-row">
                <div className="form-group tm-form-element tm-form-element-100">
                  <i className="fa fa-map-marker fa-2x tm-form-element-icon"></i>
                  <label htmlFor="city">City:</label>
                  <input name="city" type="text" className="form-control" id="inputCity" placeholder="Type your destination..." />
                </div>
                <div className="form-group tm-form-element tm-form-element-50">
                  <i className="fa fa-calendar fa-2x tm-form-element-icon"></i>
                  <label htmlFor="check-in">Check in:</label>
                  <input name="check-in" type="text" className="form-control" id="inputCheckIn" placeholder="Check In" />
                </div>
                <div className="form-group tm-form-element tm-form-element-50">
                  <i className="fa fa-calendar fa-2x tm-form-element-icon"></i>
                  <label htmlFor="check-out">Check out:</label>
                  <input name="check-out" type="text" className="form-control" id="inputCheckOut" placeholder="Check Out" />
                </div>
              </div>
              <div className="form-row tm-search-form-row">
                <div className="form-group tm-form-element tm-form-element-2">
                <label htmlFor="adult">Adults:</label>
                  <select name="adult" className="form-control tm-select" id="adult">
                    <option value="">Adult</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                  <i className="fa fa-2x fa-user tm-form-element-icon"></i>
                </div>
                <div className="form-group tm-form-element tm-form-element-2">
                <label htmlFor="children">Children:</label>
                  <select name="children" className="form-control tm-select" id="children">
                    <option value="">Children</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                  <i className="fa fa-user tm-form-element-icon tm-form-element-icon-small"></i>
                </div>
                <div className="form-group tm-form-element tm-form-element-2">
                <label htmlFor="room">Rooms:</label>
                  <select name="room" className="form-control tm-select" id="room">
                    <option value="">Room</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                  <i className="fa fa-2x fa-bed tm-form-element-icon"></i>
                </div>
                <div className="form-group tm-form-element tm-form-element-2">
                  <button type="submit" className="btn btn-primary tm-btn-search">
                    Check Availability
                  </button>
                </div>
              </div>
              <div className="form-row clearfix pl-2 pr-2 tm-fx-col-xs">
                <p className="tm-margin-b-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" className="ie-10-ml-auto ml-auto mt-1 tm-font-semibold tm-color-primary">
                  Need Help?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}