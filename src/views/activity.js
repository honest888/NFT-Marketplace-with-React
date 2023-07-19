export default function Activity() {
  return (
    <>
      <main className="main">

        <div className="breadcrumb-area" style={{backgroundImage: "url(assets/img/bg/page-title.jpg);"}}>
            <div className="container">
                <div className="breadcrumb-wrapper">
                    <h1>Activity</h1>
                    <div>
                        <ul className="breadcrumb">
                            <li className="breadcrumb__item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb__item breadcrumb__item--active">Activity</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


        <div className="activity-area pt-70">
            <div className="container">
                <div className="row row--grid">

        <div className="col-12 col-xl-3">
          <div className="filter-wrap">
                        <button className="filter-wrap__btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFilter" aria-expanded="false" aria-controls="collapseFilter">Open filter</button>
            <div className="collapse filter-wrap__content" id="collapseFilter">
              <div className="filter filter--sticky">
                <h4 className="filter__title">Filters <button type="button">Clear all</button></h4>

                <div className="filter__group">
                  <ul className="filter__checkboxes">
                    <li>
                      <input id="type5" type="checkbox" name="type5" checked=""/>
                      <label for="type5">Listings</label>
                    </li>
                    <li>
                      <input id="type6" type="checkbox" name="type6"/>
                      <label for="type6">Purchases</label>
                    </li>
                    <li>
                      <input id="type7" type="checkbox" name="type7" checked=""/>
                      <label for="type7">Sales</label>
                    </li>
                    <li>
                      <input id="type8" type="checkbox" name="type8"/>
                      <label for="type8">Transfers</label>
                    </li>
                    <li>
                      <input id="type9" type="checkbox" name="type9"/>
                      <label for="type9">Bids</label>
                    </li>
                    <li>
                      <input id="type10" type="checkbox" name="type10" checked=""/>
                      <label for="type10">Likes</label>
                    </li>
                    <li>
                      <input id="type11" type="checkbox" name="type11"/>
                      <label for="type11">Followings</label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="col-12 col-xl-9">
          <div className="row row--grid">
            <div className="col-12 col-lg-6">
              <div className="activity">
                <a href="item.html" className="activity__cover">
                  <img src="assets/img/items/1.jpg" alt=""/>
                </a>
                <div className="activity__content">
                  <h3 className="activity__title"><a href="item.html">Awesome Color Drop</a></h3>
                  <p className="activity__text">listed by <a href="author.html">@morgan28</a> <br/>for <b>0.560 CSCT</b></p>
                  <span className="activity__time">10 minutes ago</span>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="activity">
                <a href="item.html" className="activity__cover">
                  <img src="assets/img/items/2.jpg" alt=""/>
                </a>
                <div className="activity__content">
                  <h3 className="activity__title"><a href="item.html">Beautiful Leaf In The Wall</a></h3>
                  <p className="activity__text">5 editions listed by <a href="author.html">@nessler520</a> <br/>for <b>0.120 CSCT</b> each</p>
                  <span className="activity__time">15 minutes ago</span>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="activity">
                <a href="item.html" className="activity__cover">
                  <img src="assets/img/items/3.jpg" alt=""/>
                </a>
                <div className="activity__content">
                  <h3 className="activity__title"><a href="item.html">Blue Planet Revolution</a></h3>
                  <p className="activity__text">purchased by <a href="author.html">@kimberly28</a> <b>3f34gdg4d...we45</b> for <b>0.324 CSCT</b> from <a href="author.html">@tiigula</a></p>
                  <span className="activity__time">20 minutes ago</span>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="activity">
                <a href="item.html" className="activity__cover">
                  <img src="assets/img/items/4.jpg" alt=""/>
                </a>
                <div className="activity__content">
                  <h3 className="activity__title"><a href="item.html">Let's Go The Navy Blue Galaxies</a></h3>
                  <p className="activity__text">transferred from <a href="author.html">@humphrey124</a> <br/>to <a href="author.html">@miloza</a></p>
                  <span className="activity__time">25 minutes ago</span>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="activity">
                <a href="item.html" className="activity__cover">
                  <img src="assets/img/items/5.jpg" alt=""/>
                </a>
                <div className="activity__content">
                  <h3 className="activity__title"><a href="item.html">Beautiful Leaf In The Wall</a></h3>
                  <p className="activity__text"><a href="author.html">@nessler520</a> offered <b>0.480 WCSCT</b></p>
                  <span className="activity__time">30 minutes ago</span>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="activity">
                <a href="item.html" className="activity__cover">
                  <img src="assets/img/items/6.jpg" alt=""/>
                </a>
                <div className="activity__content">
                  <h3 className="activity__title"><a href="item.html">Let's Go The Navy Blue Galaxies</a></h3>
                  <p className="activity__text">liked by <a href="author.html">@humphrey124</a></p>
                  <span className="activity__time">35 minutes ago</span>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="activity">
                <a href="item.html" className="activity__cover">
                  <img src="assets/img/items/7.jpg" alt=""/>
                </a>
                <div className="activity__content">
                  <h3 className="activity__title"><a href="item.html">3D CSCTereum In Diamond</a></h3>
                  <p className="activity__text">started following <a href="author.html">@sheilagne22</a></p>
                  <span className="activity__time">2 hours ago</span>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="activity">
                <a href="item.html" className="activity__cover">
                  <img src="assets/img/items/8.jpg" alt=""/>
                </a>
                <div className="activity__content">
                  <h3 className="activity__title"><a href="item.html">Fantacy Of Water Drop</a></h3>
                  <p className="activity__text">started following <a href="author.html">@kimberly120</a></p>
                  <span className="activity__time">10 hours ago</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row row--grid">
            <div className="col-12">
              <button className="main__load" type="button">Load more</button>
            </div>
          </div>
        </div>
          </div>
      </div>
  </div>

        </main>
    </>
  )
}