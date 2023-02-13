function Header() {
    return (
  <>
    {/* BEGIN HEADER */}
    <div className="page-header">
    {/* BEGIN HEADER TOP */}
    <div className="page-header-top">
      <div className="container">
        {/* BEGIN LOGO */}
        <div className="page-logo">
          <a href="index.html">
            <img
              src="assets/admin/layout3/img/logo-default.png"
              alt="logo"
              className="logo-default"
            />
          </a>
        </div>
        {/* END LOGO */}
        {/* BEGIN RESPONSIVE MENU TOGGLER */}
        <a href="javascript:;" className="menu-toggler" />
        {/* END RESPONSIVE MENU TOGGLER */}
        {/* BEGIN TOP NAVIGATION MENU */}
        <div className="top-menu">
          <ul className="nav navbar-nav pull-right">
            {/* BEGIN NOTIFICATION DROPDOWN */}
            <li
              className="dropdown dropdown-extended dropdown-dark dropdown-notification"
              id="header_notification_bar"
            >
              <a
                href="javascript:;"
                className="dropdown-toggle"
                data-toggle="dropdown"
                data-hover="dropdown"
                data-close-others="true"
              >
                <i className="icon-bell" />
                <span className="badge badge-default">7</span>
              </a>
              <ul className="dropdown-menu">
                <li className="external">
                  <h3>
                    You have <strong>12 pending</strong> tasks
                  </h3>
                  <a href="javascript:;">view all</a>
                </li>
                <li>
                  <ul
                    className="dropdown-menu-list scroller"
                    style={{ height: 250 }}
                    data-handle-color="#637283"
                  >
                    <li>
                      <a href="javascript:;">
                        <span className="time">just now</span>
                        <span className="details">
                          <span className="label label-sm label-icon label-success">
                            <i className="fa fa-plus" />
                          </span>
                          New user registered.{" "}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <span className="time">3 mins</span>
                        <span className="details">
                          <span className="label label-sm label-icon label-danger">
                            <i className="fa fa-bolt" />
                          </span>
                          Server #12 overloaded.{" "}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <span className="time">10 mins</span>
                        <span className="details">
                          <span className="label label-sm label-icon label-warning">
                            <i className="fa fa-bell-o" />
                          </span>
                          Server #2 not responding.{" "}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <span className="time">14 hrs</span>
                        <span className="details">
                          <span className="label label-sm label-icon label-info">
                            <i className="fa fa-bullhorn" />
                          </span>
                          Application error.{" "}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <span className="time">2 days</span>
                        <span className="details">
                          <span className="label label-sm label-icon label-danger">
                            <i className="fa fa-bolt" />
                          </span>
                          Database overloaded 68%.{" "}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <span className="time">3 days</span>
                        <span className="details">
                          <span className="label label-sm label-icon label-danger">
                            <i className="fa fa-bolt" />
                          </span>
                          A user IP blocked.{" "}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <span className="time">4 days</span>
                        <span className="details">
                          <span className="label label-sm label-icon label-warning">
                            <i className="fa fa-bell-o" />
                          </span>
                          Storage Server #4 not responding dfdfdfd.{" "}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <span className="time">5 days</span>
                        <span className="details">
                          <span className="label label-sm label-icon label-info">
                            <i className="fa fa-bullhorn" />
                          </span>
                          System Error.{" "}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <span className="time">9 days</span>
                        <span className="details">
                          <span className="label label-sm label-icon label-danger">
                            <i className="fa fa-bolt" />
                          </span>
                          Storage server failed.{" "}
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            {/* END NOTIFICATION DROPDOWN */}
            {/* BEGIN TODO DROPDOWN */}
            <li
              className="dropdown dropdown-extended dropdown-dark dropdown-tasks"
              id="header_task_bar"
            >
              <a
                href="javascript:;"
                className="dropdown-toggle"
                data-toggle="dropdown"
                data-hover="dropdown"
                data-close-others="true"
              >
                <i className="icon-calendar" />
                <span className="badge badge-default">3</span>
              </a>
              <ul className="dropdown-menu extended tasks">
                <li className="external">
                  <h3>
                    You have <strong>12 pending</strong> tasks
                  </h3>
                  <a href="javascript:;">view all</a>
                </li>
                <li>
                  <ul
                    className="dropdown-menu-list scroller"
                    style={{ height: 275 }}
                    data-handle-color="#637283"
                  >
                    <li>
                      <a href="javascript:;">
                        <span className="task">
                          <span className="desc">New release v1.2 </span>
                          <span className="percent">30%</span>
                        </span>
                        <span className="progress">
                          <span
                            style={{ width: "40%" }}
                            className="progress-bar progress-bar-success"
                            aria-valuenow={40}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span className="sr-only">40% Complete</span>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <span className="task">
                          <span className="desc">Application deployment</span>
                          <span className="percent">65%</span>
                        </span>
                        <span className="progress">
                          <span
                            style={{ width: "65%" }}
                            className="progress-bar progress-bar-danger"
                            aria-valuenow={65}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span className="sr-only">65% Complete</span>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <span className="task">
                          <span className="desc">Mobile app release</span>
                          <span className="percent">98%</span>
                        </span>
                        <span className="progress">
                          <span
                            style={{ width: "98%" }}
                            className="progress-bar progress-bar-success"
                            aria-valuenow={98}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span className="sr-only">98% Complete</span>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <span className="task">
                          <span className="desc">Database migration</span>
                          <span className="percent">10%</span>
                        </span>
                        <span className="progress">
                          <span
                            style={{ width: "10%" }}
                            className="progress-bar progress-bar-warning"
                            aria-valuenow={10}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span className="sr-only">10% Complete</span>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <span className="task">
                          <span className="desc">Web server upgrade</span>
                          <span className="percent">58%</span>
                        </span>
                        <span className="progress">
                          <span
                            style={{ width: "58%" }}
                            className="progress-bar progress-bar-info"
                            aria-valuenow={58}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span className="sr-only">58% Complete</span>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <span className="task">
                          <span className="desc">Mobile development</span>
                          <span className="percent">85%</span>
                        </span>
                        <span className="progress">
                          <span
                            style={{ width: "85%" }}
                            className="progress-bar progress-bar-success"
                            aria-valuenow={85}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span className="sr-only">85% Complete</span>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <span className="task">
                          <span className="desc">New UI release</span>
                          <span className="percent">38%</span>
                        </span>
                        <span className="progress progress-striped">
                          <span
                            style={{ width: "38%" }}
                            className="progress-bar progress-bar-important"
                            aria-valuenow={18}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span className="sr-only">38% Complete</span>
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            {/* END TODO DROPDOWN */}
            <li className="droddown dropdown-separator">
              <span className="separator" />
            </li>
            {/* BEGIN INBOX DROPDOWN */}
            <li
              className="dropdown dropdown-extended dropdown-dark dropdown-inbox"
              id="header_inbox_bar"
            >
              <a
                href="javascript:;"
                className="dropdown-toggle"
                data-toggle="dropdown"
                data-hover="dropdown"
                data-close-others="true"
              >
                <span className="circle">3</span>
                <span className="corner" />
              </a>
              <ul className="dropdown-menu">
                <li className="external">
                  <h3>
                    You have <strong>7 New</strong> Messages
                  </h3>
                  <a href="javascript:;">view all</a>
                </li>
                <li>
                  <ul
                    className="dropdown-menu-list scroller"
                    style={{ height: 275 }}
                    data-handle-color="#637283"
                  >
                    <li>
                      <a href="inbox.html?a=view">
                        <span className="photo">
                          <img
                            src="assets/admin/layout3/img/avatar2.jpg"
                            className="img-circle"
                            alt=""
                          />
                        </span>
                        <span className="subject">
                          <span className="from">Lisa Wong </span>
                          <span className="time">Just Now </span>
                        </span>
                        <span className="message">
                          Vivamus sed auctor nibh congue nibh. auctor nibh
                          auctor nibh...{" "}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="inbox.html?a=view">
                        <span className="photo">
                          <img
                            src="assets/admin/layout3/img/avatar3.jpg"
                            className="img-circle"
                            alt=""
                          />
                        </span>
                        <span className="subject">
                          <span className="from">Richard Doe </span>
                          <span className="time">16 mins </span>
                        </span>
                        <span className="message">
                          Vivamus sed congue nibh auctor nibh congue nibh.
                          auctor nibh auctor nibh...{" "}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="inbox.html?a=view">
                        <span className="photo">
                          <img
                            src="assets/admin/layout3/img/avatar1.jpg"
                            className="img-circle"
                            alt=""
                          />
                        </span>
                        <span className="subject">
                          <span className="from">Bob Nilson </span>
                          <span className="time">2 hrs </span>
                        </span>
                        <span className="message">
                          Vivamus sed nibh auctor nibh congue nibh. auctor nibh
                          auctor nibh...{" "}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="inbox.html?a=view">
                        <span className="photo">
                          <img
                            src="assets/admin/layout3/img/avatar2.jpg"
                            className="img-circle"
                            alt=""
                          />
                        </span>
                        <span className="subject">
                          <span className="from">Lisa Wong </span>
                          <span className="time">40 mins </span>
                        </span>
                        <span className="message">
                          Vivamus sed auctor 40% nibh congue nibh...{" "}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="inbox.html?a=view">
                        <span className="photo">
                          <img
                            src="assets/admin/layout3/img/avatar3.jpg"
                            className="img-circle"
                            alt=""
                          />
                        </span>
                        <span className="subject">
                          <span className="from">Richard Doe </span>
                          <span className="time">46 mins </span>
                        </span>
                        <span className="message">
                          Vivamus sed congue nibh auctor nibh congue nibh.
                          auctor nibh auctor nibh...{" "}
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            {/* END INBOX DROPDOWN */}
            {/* BEGIN USER LOGIN DROPDOWN */}
            <li className="dropdown dropdown-user dropdown-dark">
              <a
                href="javascript:;"
                className="dropdown-toggle"
                data-toggle="dropdown"
                data-hover="dropdown"
                data-close-others="true"
              >
                <img
                  alt=""
                  className="img-circle"
                  src="assets/admin/layout3/img/avatar9.jpg"
                />
                <span className="username username-hide-mobile">Nick</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-default">
                <li>
                  <a href="extra_profile.html">
                    <i className="icon-user" /> My Profile{" "}
                  </a>
                </li>
                <li>
                  <a href="page_calendar.html">
                    <i className="icon-calendar" /> My Calendar{" "}
                  </a>
                </li>
                <li>
                  <a href="inbox.html">
                    <i className="icon-envelope-open" /> My Inbox{" "}
                    <span className="badge badge-danger">3 </span>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <i className="icon-rocket" /> My Tasks{" "}
                    <span className="badge badge-success">7 </span>
                  </a>
                </li>
                <li className="divider"></li>
                <li>
                  <a href="extra_lock.html">
                    <i className="icon-lock" /> Lock Screen{" "}
                  </a>
                </li>
                <li>
                  <a href="login.html">
                    <i className="icon-key" /> Log Out{" "}
                  </a>
                </li>
              </ul>
            </li>
            {/* END USER LOGIN DROPDOWN */}
          </ul>
        </div>
        {/* END TOP NAVIGATION MENU */}
      </div>
    </div>
    {/* END HEADER TOP */}
    {/* BEGIN HEADER MENU */}
    <div className="page-header-menu">
      <div className="container">
        {/* BEGIN HEADER SEARCH BOX */}
        <form className="search-form" action="extra_search.html" method="GET">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              name="query"
            />
            <span className="input-group-btn">
              <a href="javascript:;" className="btn submit">
                <i className="icon-magnifier" />
              </a>
            </span>
          </div>
        </form>
        {/* END HEADER SEARCH BOX */}
        {/* BEGIN MEGA MENU */}
        {/* DOC: Apply "hor-menu-light" class after the "hor-menu" class below to have a horizontal menu with white background */}
        {/* DOC: Remove data-hover="dropdown" and data-close-others="true" attributes below to disable the dropdown opening on mouse hover */}
        <div className="hor-menu ">
          <ul className="nav navbar-nav">
            <li>
              <a href="index.html">ANASAYFA</a>
            </li>
            <li className="menu-dropdown classic-menu-dropdown ">
              <a
                data-hover="megamenu-dropdown"
                data-close-others="true"
                data-toggle="dropdown"
                href="javascript:;"
              >
                TANIMLAR <i className="fa fa-angle-down" />
              </a>
              <ul className="dropdown-menu pull-left">
                <li className=" dropdown-submenu">
                  <a href=":;">
                    <i className="icon-user" />
                    Müşteri{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <a href="musteri_liste.html">Müşteri Listesi </a>
                    </li>
                    <li className=" ">
                      <a href="musteri_yeni.html">Yeni Kayıt </a>
                    </li>
                  </ul>
                </li>
                <li className=" dropdown-submenu">
                  <a href=":;">
                    <i className="icon-wallet" />
                    Ürün{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <a href="urun_liste.html">Ürün Listesi </a>
                    </li>
                    <li className=" ">
                      <a href="urun_yeni.html">Yeni Ürün</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-dropdown classic-menu-dropdown ">
              <a
                data-hover="megamenu-dropdown"
                data-close-others="true"
                data-toggle="dropdown"
                href="javascript:;"
              >
                OPERASYON <i className="fa fa-angle-down" />
              </a>
              <ul className="dropdown-menu pull-left">
                <li className=" dropdown-submenu">
                  <a href=":;">
                    <i className="icon-briefcase" />
                    Sipariş{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <a href="siparis_liste.html">Sipariş Listesi </a>
                    </li>
                    <li className=" ">
                      <a href="siparis_yeni.html">Yeni Sipariş </a>
                    </li>
                  </ul>
                </li>
                <li className=" dropdown-submenu">
                  <a href=":;">
                    <i className="icon-wallet" />
                    Tahsilat{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <a href="tahsilat_liste.html">Tahsilat Listesi </a>
                    </li>
                    <li className=" ">
                      <a href="tahsilat_yeni.html">Yeni Tahsilat</a>
                    </li>
                  </ul>
                </li>
                <li className=" dropdown-submenu">
                  <a href=":;">
                    <i className="icon-bar-chart" />
                    Ödeme{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <a href="odeme_liste.html">Ödeme Listesi </a>
                    </li>
                    <li className=" ">
                      <a href="odeme_yeni.html">Yeni Ödeme </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-dropdown classic-menu-dropdown ">
              <a
                data-hover="megamenu-dropdown"
                data-close-others="true"
                data-toggle="dropdown"
                href="javascript:;"
              >
                EKRAN İÇERİKLERİ <i className="fa fa-angle-down" />
              </a>
              <ul className="dropdown-menu pull-left">
                <li className=" dropdown-submenu">
                  <a href=":;">
                    <i className="icon-briefcase" />
                    Sipariş Durumu{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <a href="durum_liste.html">Liste </a>
                    </li>
                    <li className=" ">
                      <a href="durum_yeni.html">Yeni </a>
                    </li>
                  </ul>
                </li>
                <li className=" dropdown-submenu">
                  <a href=":;">
                    <i className="icon-pointer" />
                    Şehir{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <a href="sehir_liste.html">Liste </a>
                    </li>
                    <li className=" ">
                      <a href="sehir_yeni.html">Yeni </a>
                    </li>
                  </ul>
                </li>
                <li className=" dropdown-submenu">
                  <a href=":;">
                    <i className="icon-bar-chart" />
                    Tahsilat Tipi{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <a href="tahsilattipi_liste.html">Liste </a>
                    </li>
                    <li className=" ">
                      <a href="tahsilattipi_yeni.html">Yeni </a>
                    </li>
                  </ul>
                </li>
                <li className=" dropdown-submenu">
                  <a href=":;">
                    <i className="icon-pointer" />
                    Ürün Kategorisi{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <a href="kategori_liste.html">Liste </a>
                    </li>
                    <li className=" ">
                      <a href="kategori_yeni.html">Yeni </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* END MEGA MENU */}
      </div>
    </div>
    {/* END HEADER MENU */}
  </div>
  {/* END HEADER */}
  </>
  );
  }
  export default Header;