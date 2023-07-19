import { Link } from 'react-router-dom';
import Select2 from 'react-select2-wrapper';
export default function Authors (props) {
  
  return(
    <main className="main">

    <div className="breadcrumb-area">
        <div className="container">
            <div className="breadcrumb-wrapper">
                <h1>Authors</h1>
                <div>
                    <ul className="breadcrumb">
                        <li className="breadcrumb__item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb__item breadcrumb__item--active">Authors</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>


    <div className="filter-area mt-70">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="main__filter">
                        <form action="#" className="main__filter-search">
                            <input type="text" placeholder="Search for a creator…"/>
                            <button type="button"><i className="far fa-search"></i></button>
                        </form>

                        <div className="main__filter-wrap">
                            <Select2
                                defaultValue={1} // or as string | array
                                data={[
                                { text: 'By Rating', id: 1 },
                                { text: 'By Views', id: 2 },
                                { text: 'By Popularity', id: 3 },
                                { text: 'By Top Seller', id: 4 },
                                ]}
                                options={{
                                    minimumResultsForSearch: Infinity
                                }}
                            />
                            <Select2
                                defaultValue={1} // or as string | array
                                data={[
                                { text: 'All Authors', id: 1 },
                                { text: 'Verified Only', id: 2 },
                                ]}
                                options={{
                                minimumResultsForSearch: Infinity
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="author-area">
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <div className="author">
                        <a href="/authors" className="author__cover author__cover--bg"
                            data-bg="assets/img/authors/1.jpg">
                        </a>
                        <div className="author__meta">
                            <a href="/authors" className="author__avatar author__avatar--verified">
                                <img src="assets/img/avatars/1.jpg" alt=""/>
                            </a>
                            <h3 className="author__name"><a href="/authors">Paul Archer</a></h3>
                            <h3 className="author__nickname"><a href="/authors">@archer100</a></h3>
                            <p className="author__text">There are many variations of passages available but the majority have suffered alteration in some form.</p>
                            <div className="author__wrap">
                                <div className="author__followers">
                                    <p>2.5k</p>
                                    <span>Followers</span>
                                </div>
                                <button className="author__follow" type="button">Follow</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <div className="author">
                        <a href="/authors" className="author__cover author__cover--bg"
                            data-bg="assets/img/authors/2.jpg">
                        </a>
                        <div className="author__meta">
                            <a href="/authors" className="author__avatar author__avatar--verified">
                                <img src="assets/img/avatars/2.jpg" alt=""/>
                            </a>
                            <h3 className="author__name"><a href="/authors">Kenneth Rose</a></h3>
                            <h3 className="author__nickname"><a href="/authors">@kenneth88</a></h3>
                            <p className="author__text">There are many variations of passages available but the majority have suffered alteration in some form.</p>
                            <div className="author__wrap">
                                <div className="author__followers">
                                    <p>5.5k</p>
                                    <span>Followers</span>
                                </div>
                                <button className="author__follow" type="button">Follow</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <div className="author">
                        <a href="/authors" className="author__cover author__cover--bg"
                            data-bg="assets/img/authors/3.jpg">
                        </a>
                        <div className="author__meta">
                            <a href="/authors" className="author__avatar author__avatar--verified">
                                <img src="assets/img/avatars/3.jpg" alt=""/>
                            </a>
                            <h3 className="author__name"><a href="/authors">Jason Bryant</a></h3>
                            <h3 className="author__nickname"><a href="/authors">@jason125</a></h3>
                            <p className="author__text">There are many variations of passages available but the majority have suffered alteration in some form.</p>
                            <div className="author__wrap">
                                <div className="author__followers">
                                    <p>1.2k</p>
                                    <span>Followers</span>
                                </div>
                                <button className="author__follow author__follow--true" type="button">Unfollow</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <div className="author">
                        <a href="/authors" className="author__cover author__cover--bg"
                            data-bg="assets/img/authors/4.jpg">
                        </a>
                        <div className="author__meta">
                            <a href="/authors" className="author__avatar author__avatar--verified">
                                <img src="assets/img/avatars/4.jpg" alt=""/>
                            </a>
                            <h3 className="author__name"><a href="/authors">Ann Banks</a></h3>
                            <h3 className="author__nickname"><a href="/authors">@banks520</a></h3>
                            <p className="author__text">There are many variations of passages available but the majority have suffered alteration in some form.</p>
                            <div className="author__wrap">
                                <div className="author__followers">
                                    <p>6.2k</p>
                                    <span>Followers</span>
                                </div>
                                <button className="author__follow" type="button">Follow</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <div className="author">
                        <a href="/authors" className="author__cover author__cover--bg"
                            data-bg="assets/img/authors/5.jpg">
                        </a>
                        <div className="author__meta">
                            <a href="/authors" className="author__avatar author__avatar--verified">
                                <img src="assets/img/avatars/5.jpg" alt=""/>
                            </a>
                            <h3 className="author__name"><a href="/authors">Nancy Martin</a></h3>
                            <h3 className="author__nickname"><a href="/authors">@martin12</a></h3>
                            <p className="author__text">There are many variations of passages available but the majority have suffered alteration in some form.</p>
                            <div className="author__wrap">
                                <div className="author__followers">
                                    <p>10.9k</p>
                                    <span>Followers</span>
                                </div>
                                <button className="author__follow" type="button">Follow</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <div className="author">
                        <a href="/authors" className="author__cover author__cover--bg"
                            data-bg="assets/img/authors/6.jpg">
                        </a>
                        <div className="author__meta">
                            <a href="/authors" className="author__avatar author__avatar--verified">
                                <img src="assets/img/avatars/6.jpg" alt=""/>
                            </a>
                            <h3 className="author__name"><a href="/authors">Harry Walker</a></h3>
                            <h3 className="author__nickname"><a href="/authors">@walker44</a></h3>
                            <p className="author__text">There are many variations of passages available but the majority have suffered alteration in some form.</p>
                            <div className="author__wrap">
                                <div className="author__followers">
                                    <p>3.7k</p>
                                    <span>Followers</span>
                                </div>
                                <button className="author__follow" type="button">Follow</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <div className="author">
                        <a href="/authors" className="author__cover author__cover--bg"
                            data-bg="assets/img/authors/7.jpg">
                        </a>
                        <div className="author__meta">
                            <a href="/authors" className="author__avatar">
                                <img src="assets/img/avatars/7.jpg" alt=""/>
                            </a>
                            <h3 className="author__name"><a href="/authors">Brad Sterling</a></h3>
                            <h3 className="author__nickname"><a href="/authors">@sterling119</a></h3>
                            <p className="author__text">There are many variations of passages available but the majority have suffered alteration in some form.</p>
                            <div className="author__wrap">
                                <div className="author__followers">
                                    <p>6.6k</p>
                                    <span>Followers</span>
                                </div>
                                <button className="author__follow" type="button">Follow</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <div className="author">
                        <a href="/authors" className="author__cover author__cover--bg"
                            data-bg="assets/img/authors/8.jpg">
                        </a>
                        <div className="author__meta">
                            <a href="/authors" className="author__avatar author__avatar--verified">
                                <img src="assets/img/avatars/8.jpg" alt=""/>
                            </a>
                            <h3 className="author__name"><a href="/authors">Debora Adams</a></h3>
                            <h3 className="author__nickname"><a href="/authors">@debora</a></h3>
                            <p className="author__text">There are many variations of passages available but the majority have suffered alteration in some form.</p>
                            <div className="author__wrap">
                                <div className="author__followers">
                                    <p>1.6k</p>
                                    <span>Followers</span>
                                </div>
                                <button className="author__follow" type="button">Follow</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row row--grid">
                    <div className="col-12">
                        <div className="paginator">
                            <ul className="paginator__list">
                                <li>
                                    <a href="#"><i className="far fa-arrow-left"></i></a>
                                </li>
                                <li className="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li>
                                    <a href="#"><i className="far fa-arrow-right"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</main>
  )
}