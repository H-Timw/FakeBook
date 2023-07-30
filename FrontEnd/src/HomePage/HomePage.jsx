/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Propose from "./HomePageSearch/Propose"
import Post from "./Post/Post"
import CreatePost from "./CreatePost/CreatePost";
import './HomePage.css'

export default function HomePage({isLogin,userLogin}){
  const [posts, getPosts] = useState(null);
  const [users, getUsers] = useState(null);
  useEffect(()=>{
    fetch('http://localhost:8080/users')
    .then( res =>  res.json())
    .then( data => getUsers(data))
    .catch( err => console.error(err));
    fetch('http://localhost:8080/posts')
    .then( res =>  res.json())
    .then( data => getPosts(data))
    .catch( err => console.error(err));
  },[])

  return(
    <div className="bg-gray postion-relative">
  {/* ================= Appbar ================= */}
  <div
    className="bg-white d-flex align-items-center fixed-top shadow"
    style={{ minHeight: 56, zIndex: 5 }}
  >
    <div className="container-fluid">
      <div className="row align-items-center">
        {/* search */}
        <div className="col d-flex align-items-center">
          {/* logo */}
          <i
            className="fab fa-facebook text-primary"
            style={{ fontSize: "3rem" }}
          />
          {/* search bar */}
          <div className="input-group ms-2" type="button">
            {/* mobile */}
            <span
              className="input-group-prepend d-lg-none"
              id="searchMenu"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-auto-close="outside"
            >
              <div
                className="input-group-text bg-gray border-0 rounded-circle"
                style={{ minHeight: 40 }}
              >
                <i className="fas fa-search text-muted" />
              </div>
            </span>
            {/* desktop */}
            <span
              className="input-group-prepend d-none d-lg-block"
              id="searchMenu"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-auto-close="outside"
            >
              <div
                className="input-group-text bg-gray border-0 rounded-pill"
                style={{ minHeight: 40, minWidth: 230 }}
              >
                <i className="fas fa-search me-2 text-muted" />
                <p className="m-0 fs-7 text-muted">Search Flexbook</p>
              </div>
            </span>
            {/* search menu */}
            <ul
              className="dropdown-menu overflow-auto border-0 shadow p-3"
              aria-labelledby="searchMenu"
              style={{ width: "20em", maxHeight: 600 }}
            >
              {/* search input */}
              <li>
                <input
                  type="text"
                  className="rounded-pill border-0 bg-gray dropdown-item"
                  placeholder="Search Flexbook..."
                  autoFocus
                />
              </li>
            <Propose/>
            </ul>
          </div>
        </div>
        {/* nav */}
        <div className="col d-none d-xl-flex justify-content-center">
          {/* home */}
          <div className="mx-4 nav__btn nav__btn-active">
            <button type="button" className="btn px-4">
              <i className="fas fa-home text-muted fs-4" />
            </button>
          </div>
          {/* market */}
          <div className="mx-4 nav__btn">
            <button type="button" className="btn px-4">
              <i className="fas fa-store text-muted fs-4" />
            </button>
          </div>
          {/* group */}
          <div className="mx-4 nav__btn">
            <button type="button" className="btn px-4">
              <i
                type="button"
                className="position-relative fas fa-users text-muted fs-4"
              >
                <span
                  className="
                position-absolute
                top-0
                start-100
                translate-middle
                badge
                rounded-pill
                bg-danger
              "
                  style={{ fontSize: "0.5rem" }}
                >
                  1
                  <span className="visually-hidden" />
                </span>
              </i>
            </button>
          </div>
          {/* gaming */}
          <div className="mx-4 nav__btn">
            <button type="button" className="btn px-4">
              <i className="fas fa-gamepad text-muted fs-4" />
            </button>
          </div>
        </div>
        {/* menus */}
        <div className="col d-flex align-items-center justify-content-end">
          {/* avatar */}
          <div className="align-items-center justify-content-center d-none d-xl-flex">
            <img
              src={userLogin.profilePicture}
              className="rounded-circle me-2"
              alt="avatar"
              style={{ width: 38, height: 38, objectFit: "cover" }}
            />
            <p className="m-0"style={{textTransform:'capitalize'}}>{userLogin.username.split(".")[0]}</p>
          </div>
          {/* main menu */}
          <div
            className="
          rounded-circle
          p-1
          bg-gray
          d-flex
          align-items-center
          justify-content-center
          mx-2
        "
            style={{ width: 38, height: 38 }}
            type="button"
            id="mainMenu"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-auto-close="outside"
          >
            <i className="fas fa-ellipsis-h" />
          </div>
          {/* main menu dd */}
          <ul
            className="dropdown-menu border-0 shadow p-3 overflow-auto"
            aria-labelledby="mainMenu"
            style={{ width: "23em", maxHeight: 600 }}
          >
            {/* menu */}
            <div>
              {/* header */}
              <li className="p-1 mx-2">
                <h2>Menu</h2>
              </li>
              {/* search */}
              <li className="p-1">
                <div
                  className="input-group-text bg-gray border-0 rounded-pill"
                  style={{ minHeight: 40, minWidth: 230 }}
                >
                  <i className="fas fa-search me-2 text-muted" />
                  <input
                    type="text"
                    className="form-control rounded-pill border-0 bg-gray"
                    placeholder="Search Menu"
                  />
                </div>
              </li>
              {/* social items */}
              <h4 className="m-2">Social</h4>
              {/* s1 */}
              <li className="my-2 p-1">
                <a
                  href="#"
                  className="
                text-decoration-none text-dark
                d-flex
                align-items-center
                justify-content-between
              "
                >
                  <div className="p-2">
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Y7r38CcFEw5.png"
                      alt="icon from fb"
                      className="rounded-circle"
                      style={{ width: 48, height: 48, objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <p className="m-0">Campus</p>
                    <span className="fs-7 text-muted">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Odio, commodi.
                    </span>
                  </div>
                </a>
              </li>
              {/* s2 */}
              <li className="my-2 p-1">
                <a
                  href="#"
                  className="
                text-decoration-none text-dark
                d-flex
                align-items-center
                justify-content-between
              "
                >
                  <div className="p-2">
                    <i className="icons event-icon"></i>
                  </div>
                  <div>
                    <p className="m-0">Events</p>
                    <span className="fs-7 text-muted">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Odio, commodi.
                    </span>
                  </div>
                </a>
              </li>
              {/* s3 */}
              <li className="my-2 p-1">
                <a
                  href="#"
                  className="
                text-decoration-none text-dark
                d-flex
                align-items-center
                justify-content-between
              "
                >
                  <div className="p-2">
                    <i className="icons friend-icon"></i>
                  </div>
                  <div>
                    <p className="m-0">Friends</p>
                    <span className="fs-7 text-muted">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Odio, commodi.
                    </span>
                  </div>
                </a>
              </li>
              {/* s4 */}
              <li className="my-2 p-1">
                <a
                  href="#"
                  className="
                text-decoration-none text-dark
                d-flex
                align-items-center
                justify-content-between
              "
                >
                  <div className="p-2">
                    <i className="icons group-icon"></i>
                  </div>
                  <div>
                    <p className="m-0">Groups</p>
                    <span className="fs-7 text-muted">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Odio, commodi.
                    </span>
                  </div>
                </a>
              </li>
              {/* s5 */}
              <li className="my-2 p-1">
                <a
                  href="#"
                  className="
                text-decoration-none text-dark
                d-flex
                align-items-center
                justify-content-between
              "
                >
                  <div className="p-2">
                    <i className="icons newfeed-icon"></i>
                  </div>
                  <div>
                    <p className="m-0">News Feed</p>
                    <span className="fs-7 text-muted">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Odio, commodi.
                    </span>
                  </div>
                </a>
              </li>
              {/* s6 */}
              <li className="my-2 p-1">
                <a
                  href="#"
                  className="
                text-decoration-none text-dark
                d-flex
                align-items-center
                justify-content-between
              "
                >
                  <div className="p-2">
                    <i className="icons page-icon"></i>
                  </div>
                  <div>
                    <p className="m-0">Pages</p>
                    <span className="fs-7 text-muted">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Odio, commodi.
                    </span>
                  </div>
                </a>
              </li>
              <hr />
              {/* ent items */}
              <h4 className="m-2">Entertainment</h4>
              {/* e1 */}
              <li className="my-2 p-1">
                <a
                  href="#"
                  className="
                text-decoration-none text-dark
                d-flex
                align-items-center
                justify-content-between
              "
                >
                  <div className="p-2">
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Y7r38CcFEw5.png"
                      alt="icon from fb"
                      className="rounded-circle"
                      style={{ width: 48, height: 48, objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <p className="m-0">Campus</p>
                    <span className="fs-7 text-muted">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Odio, commodi.
                    </span>
                  </div>
                </a>
              </li>
              {/* e2 */}
              <li className="my-2 p-1">
                <a
                  href="#"
                  className="
                text-decoration-none text-dark
                d-flex
                align-items-center
                justify-content-between
              "
                >
                  <div className="p-2">
                  <i className="icons event-icon"></i>
                  </div>
                  <div>
                    <p className="m-0">Events</p>
                    <span className="fs-7 text-muted">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Odio, commodi.
                    </span>
                  </div>
                </a>
              </li>
              {/* e3 */}
              <li className="my-2 p-1">
                <a
                  href="#"
                  className="
                text-decoration-none text-dark
                d-flex
                align-items-center
                justify-content-between
              "
                >
                  <div className="p-2">
                    <i className="icons friend-icon"></i>
                  </div>
                  <div>
                    <p className="m-0">Friends</p>
                    <span className="fs-7 text-muted">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Odio, commodi.
                    </span>
                  </div>
                </a>
              </li>
            </div>
            <hr />
            {/* create story */}
            <div>
              {/* header */}
              <li className="p-1 mx-2">
                <h2>Create</h2>
              </li>
              {/* c-1 */}
              <li className="my-2 p-1">
                <a
                  href="#"
                  className="
                text-decoration-none text-dark
                d-flex
                align-items-center
              "
                >
                  <div
                    className="
                  rounded-circle
                  bg-gray
                  p-1
                  d-flex
                  align-items-center
                  justify-content-center
                  me-3
                "
                    style={{ width: 38, height: 38 }}
                  >
                    <i className="fas fa-edit" />
                  </div>
                  <div>
                    <p className="m-0">Post</p>
                  </div>
                </a>
              </li>
              {/* c-2 */}
              <li className="my-2 p-1">
                <a
                  href="#"
                  className="
                text-decoration-none text-dark
                d-flex
                align-items-center
              "
                >
                  <div
                    className="
                  rounded-circle
                  bg-gray
                  p-1
                  d-flex
                  align-items-center
                  justify-content-center
                  me-3
                "
                    style={{ width: 38, height: 38 }}
                  >
                    <i className="fas fa-book-open" />
                  </div>
                  <div>
                    <p className="m-0">Story</p>
                  </div>
                </a>
              </li>
              {/* c-3 */}
              <li className="my-2 p-1">
                <a
                  href="#"
                  className="
                text-decoration-none text-dark
                d-flex
                align-items-center
              "
                >
                  <div
                    className="
                  rounded-circle
                  bg-gray
                  p-1
                  d-flex
                  align-items-center
                  justify-content-center
                  me-3
                "
                    style={{ width: 38, height: 38 }}
                  >
                    <i className="fas fa-video" />
                  </div>
                  <div>
                    <p className="m-0">Video</p>
                  </div>
                </a>
              </li>
              <hr />
              {/* c-4 */}
              <li className="my-2 p-1">
                <a
                  href="#"
                  className="
                text-decoration-none text-dark
                d-flex
                align-items-center
              "
                >
                  <div
                    className="
                  rounded-circle
                  bg-gray
                  p-1
                  d-flex
                  align-items-center
                  justify-content-center
                  me-3
                "
                    style={{ width: 38, height: 38 }}
                  >
                    <i className="fas fa-flag" />
                  </div>
                  <div>
                    <p className="m-0">Page</p>
                  </div>
                </a>
              </li>
              {/* c-5 */}
              <li className="my-2 p-1">
                <a
                  href="#"
                  className="
                text-decoration-none text-dark
                d-flex
                align-items-center
              "
                >
                  <div
                    className="
                  rounded-circle
                  bg-gray
                  p-1
                  d-flex
                  align-items-center
                  justify-content-center
                  me-3
                "
                    style={{ width: 38, height: 38 }}
                  >
                    <i className="fas fa-bullhorn" />
                  </div>
                  <div>
                    <p className="m-0">Add</p>
                  </div>
                </a>
              </li>
              {/* c-6 */}
              <li className="my-2 p-1">
                <a
                  href="#"
                  className="
                text-decoration-none text-dark
                d-flex
                align-items-center
              "
                >
                  <div
                    className="
                  rounded-circle
                  bg-gray
                  p-1
                  d-flex
                  align-items-center
                  justify-content-center
                  me-3
                "
                    style={{ width: 38, height: 38 }}
                  >
                    <i className="fas fa-users" />
                  </div>
                  <div>
                    <p className="m-0">Group</p>
                  </div>
                </a>
              </li>
              {/* c-7*/}
              <li className="my-2 p-1">
                <a
                  href="#"
                  className="
                text-decoration-none text-dark
                d-flex
                align-items-center
              "
                >
                  <div
                    className="
                  rounded-circle
                  bg-gray
                  p-1
                  d-flex
                  align-items-center
                  justify-content-center
                  me-3
                "
                    style={{ width: 38, height: 38 }}
                  >
                    <i className="fas fa-book" />
                  </div>
                  <div>
                    <p className="m-0">Event</p>
                  </div>
                </a>
              </li>
              {/* c-8 */}
              <li className="my-2 p-1">
                <a
                  href="#"
                  className="
                text-decoration-none text-dark
                d-flex
                align-items-center
              "
                >
                  <div
                    className="
                  rounded-circle
                  bg-gray
                  p-1
                  d-flex
                  align-items-center
                  justify-content-center
                  me-3
                "
                    style={{ width: 38, height: 38 }}
                  >
                    <i className="fas fa-shopping-basket" />
                  </div>
                  <div>
                    <p className="m-0">Marketplace Listing</p>
                  </div>
                </a>
              </li>
              {/* c-9 */}
              <li className="my-2 p-1">
                <a
                  href="#"
                  className="
                text-decoration-none text-dark
                d-flex
                align-items-center
              "
                >
                  <div
                    className="
                  rounded-circle
                  bg-gray
                  p-1
                  d-flex
                  align-items-center
                  justify-content-center
                  me-3
                "
                    style={{ width: 38, height: 38 }}
                  >
                    <i className="fas fa-suitcase" />
                  </div>
                  <div>
                    <p className="m-0">Job</p>
                  </div>
                </a>
              </li>
            </div>
          </ul>
          {/* chat */}
          <div
            className="
          rounded-circle
          p-1
          bg-gray
          d-flex
          align-items-center
          justify-content-center
          mx-2
        "
            style={{ width: 38, height: 38 }}
            type="button"
            id="chatMenu"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-auto-close="outside"
          >
            <i className="fas fa-comment" />
          </div>
          {/* chat  dd */}
          <ul
            className="dropdown-menu border-0 shadow p-3 overflow-auto"
            aria-labelledby="chatMenu"
            style={{ width: "23em", maxHeight: 600 }}
          >
            {/* header */}
            <li className="p-1">
              <div className="d-flex justify-content-between">
                <h2>Message</h2>
                <div>
                  {/* setting */}
                  <i
                    className="fas fa-ellipsis-h text-muted mx-2"
                    type="button"
                    data-bs-toggle="dropdown"
                  />
                  {/* setting dd */}
                  <ul
                    className="dropdown-menu shadow"
                    style={{ width: "18em" }}
                  >
                    {/* title */}
                    <div className="p-2">
                      <h5>Chat Settings</h5>
                      <span className="text-muted fs-7">
                        Customize your Messenger experience.
                      </span>
                    </div>
                    <hr />
                    {/* incoming sound */}
                    <li>
                      <div
                        className="
                      dropdown-item
                      d-flex
                      align-items-center
                      justify-content-between
                    "
                      >
                        {/* icon */}
                        <div className="d-flex align-items-center">
                          <i className="fas fa-phone-alt me-3" />
                          <p className="m-0">Incoming call sounds</p>
                        </div>
                        {/* toggle */}
                        <div className="form-check form-switch m-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckChecked"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckChecked"
                          />
                        </div>
                      </div>
                    </li>
                    {/* message sound */}
                    <li>
                      <div
                        className="
                      dropdown-item
                      d-flex
                      align-items-center
                      justify-content-between
                    "
                      >
                        {/* icon */}
                        <div className="d-flex align-items-center">
                          <i className="fas fa-volume-off me-4 fs-4" />
                          <p className="m-0">Message sounds</p>
                        </div>
                        {/* toggle */}
                        <div className="form-check form-switch m-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckChecked"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckChecked"
                          />
                        </div>
                      </div>
                    </li>
                    {/* popup message */}
                    <li>
                      <div
                        className="
                      dropdown-item
                      d-flex
                      align-items-center
                      justify-content-between
                    "
                      >
                        {/* icon */}
                        <div className="d-flex align-items-center">
                          <i className="fas fa-spinner me-3" />
                          <p className="m-0">Pop-up new messages</p>
                        </div>
                        {/* toggle */}
                        <div className="form-check form-switch m-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckChecked"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckChecked"
                          />
                        </div>
                      </div>
                      <span className="ms-5 text-muted fs-7">
                        Automatically open new messages.
                      </span>
                    </li>
                    <hr className="m-0" />
                    {/* item 1 */}
                    <li>
                      <div
                        className="
                      dropdown-item
                      d-flex
                      align-items-center
                      justify-content-between
                    "
                      >
                        {/* icon */}
                        <div className="d-flex align-items-center">
                          <i className="fas fa-toggle-off me-3" />
                          <p className="m-0">Turn Off Active Status</p>
                        </div>
                      </div>
                    </li>
                    {/* item 2 */}
                    <li>
                      <div
                        className="
                      dropdown-item
                      d-flex
                      align-items-center
                      justify-content-between
                    "
                      >
                        {/* icon */}
                        <div className="d-flex align-items-center">
                          <i className="far fa-comment-alt me-3" />
                          <p className="m-0">Message Request</p>
                        </div>
                      </div>
                    </li>
                    {/* item 3 */}
                    <li>
                      <div
                        className="
                      dropdown-item
                      d-flex
                      align-items-center
                      justify-content-between
                    "
                      >
                        {/* icon */}
                        <div className="d-flex align-items-center">
                          <i className="fas fa-share-square me-3" />
                          <p className="m-0">Message delivery settings</p>
                        </div>
                      </div>
                    </li>
                    {/* item 4 */}
                    <li>
                      <div
                        className="
                      dropdown-item
                      d-flex
                      align-items-center
                      justify-content-between
                    "
                      >
                        {/* icon */}
                        <div className="d-flex align-items-center">
                          <i className="fas fa-shield-alt me-3" />
                          <p className="m-0">Block settings</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <i
                    className="fas fa-expand-arrows-alt text-muted mx-2"
                    type="button"
                  />
                  {/* new message */}
                  <i
                    className="fas fa-edit text-muted mx-2"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#newChat"
                  />
                </div>
              </div>
            </li>
            {/* search */}

            {/* avatart of friend */}
            <li className="p-1">
              <div
                className="input-group-text bg-gray border-0 rounded-pill"
                style={{ minHeight: 40, minWidth: 230 }}
              >
                <i className="fas fa-search me-2 text-muted" />
                <input
                  type="text"
                  className="form-control rounded-pill border-0 bg-gray"
                  placeholder="Search Messenger"
                />
              </div>
            </li>
            {/* message 1 */}
            <li
              className="my-2 p-1"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat1"
            >
              <div className="d-flex align-items-center justify-content-between">
                {/* big avatar */}
                <div className="d-flex align-items-center justify-content-evenly">
                  <div className="p-2">
                    <img
                      src="https://source.unsplash.com/random/1"
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: 58, height: 58, objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <p className="fs-7 m-0">Mike</p>
                    <span className="fs-7 text-muted">Lorem ipsum • 7d</span>
                  </div>
                </div>
                {/* small avatar */}
                <div className="p-2">
                  <img
                    src="https://source.unsplash.com/random/1"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: 15, height: 15, objectFit: "cover" }}
                  />
                </div>
              </div>
            </li>
            {/* message 2 */}
            <li
              className="my-2 p-1"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat2"
            >
              <div className="d-flex align-items-center justify-content-between">
                {/* big avatar */}
                <div className="d-flex align-items-center justify-content-evenly">
                  <div className="p-2">
                    <img
                      src="https://source.unsplash.com/random/2"
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: 58, height: 58, objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <p className="fs-7 m-0">
                      Tuan
                      <span className="fs-7 text-muted">Lorem ipsum • 7d</span>
                    </p>
                  </div>
                </div>
                {/* small avatar */}
                <div className="p-2">
                  <img
                    src="https://source.unsplash.com/random/2"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: 15, height: 15, objectFit: "cover" }}
                  />
                </div>
              </div>
            </li>
            {/* message 3 */}
            <li
              className="my-2 p-1"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat3"
            >
              <div className="d-flex align-items-center justify-content-between">
                {/* big avatar */}
                <div className="d-flex align-items-center justify-content-evenly">
                  <div className="p-2">
                    <img
                      src="https://source.unsplash.com/random/3"
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: 58, height: 58, objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <p className="fs-7 m-0">Jerry</p>
                    <span className="fs-7 text-muted">Lorem ipsum • 7d</span>
                  </div>
                </div>
                {/* small avatar */}
                <div className="p-2">
                  <img
                    src="https://source.unsplash.com/random/3"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: 15, height: 15, objectFit: "cover" }}
                  />
                </div>
              </div>
            </li>
            {/* message 4 */}
            <li
              className="my-2 p-1"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat4"
            >
              <div className="d-flex align-items-center justify-content-between">
                {/* big avatar */}
                <div className="d-flex align-items-center justify-content-evenly">
                  <div className="p-2">
                    <img
                      src="https://source.unsplash.com/random/4"
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: 58, height: 58, objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <p className="fs-7 m-0">Tony</p>
                    <span className="fs-7 text-muted">Lorem ipsum • 7d</span>
                  </div>
                </div>
                {/* small avatar */}
                <div className="p-2">
                  <img
                    src="https://source.unsplash.com/random/4"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: 15, height: 15, objectFit: "cover" }}
                  />
                </div>
              </div>
            </li>
            {/* message 5 */}
            <li
              className="my-2 p-1"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat5"
            >
              <div className="d-flex align-items-center justify-content-between">
                {/* big avatar */}
                <div className="d-flex align-items-center justify-content-evenly">
                  <div className="p-2">
                    <img
                      src="https://source.unsplash.com/random/5"
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: 58, height: 58, objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <p className="fs-7 m-0">Phu</p>
                    <span className="fs-7 text-muted">Lorem ipsum • 7d</span>
                  </div>
                </div>
                {/* small avatar */}
                <div className="p-2">
                  <img
                    src="https://source.unsplash.com/random/5"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: 15, height: 15, objectFit: "cover" }}
                  />
                </div>
              </div>
            </li>
            <hr className="m-0" />
            <a href="#" className="text-decoration-none">
              <p className="fw-bold text-center pt-3 m-0">
                See All in Messenger
              </p>
            </a>
          </ul>
          {/* notifications */}
          <div
            className="
          rounded-circle
          p-1
          bg-gray
          d-flex
          align-items-center
          justify-content-center
          mx-2
        "
            style={{ width: 38, height: 38 }}
            type="button"
            id="notMenu"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-auto-close="outside"
          >
            <i className="fas fa-bell" />
          </div>
          {/* notifications dd */}
          <ul
            className="dropdown-menu border-0 shadow p-3"
            aria-labelledby="notMenu"
            style={{ width: "23em", maxHeight: 600, overflowY: "auto" }}
          >
            {/* header */}
            <li className="p-1">
              <div className="d-flex justify-content-between">
                <h2>Notifications</h2>
                <div>
                  <i
                    className="
                  fas
                  fa-ellipsis-h
                  pointer
                  p-2
                  rounded-circle
                  bg-gray
                "
                    type="button"
                    data-bs-toggle="dropdown"
                  />
                  <ul className="dropdown-menu">
                    <li
                      className="dropdown-item d-flex align-items-center"
                      type="button"
                    >
                      <i className="fas fa-check me-3 text-muted" />
                      <p className="m-0">Mark all as read</p>
                    </li>
                    <li
                      className="dropdown-item d-flex align-items-center"
                      type="button"
                    >
                      <i className="fas fa-cog me-3 text-muted" />
                      <p className="m-0">Privacy Checkup</p>
                    </li>
                    <li
                      className="dropdown-item d-flex align-items-center"
                      type="button"
                    >
                      <i className="fas fa-desktop me-3 text-muted" />
                      <p className="m-0">Privacy Shortcuts</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-flex" type="button">
                <p className="rounded-pill bg-gray p-2">All</p>
                <p className="ms-3 rounded-pill bg-primary p-2 text-white">
                  Unread
                </p>
              </div>
            </li>
            {/* news */}
            <div className="d-flex justify-content-between mx-2">
              <h5>New</h5>
              <a href="#" className="text-decoration-none">
                See All
              </a>
            </div>
            {/* news 1 */}
            <li className="my-2 p-1">
              <a
                href="#"
                className="
              d-flex
              align-items-center
              justify-content-evenly
              text-decoration-none text-dark
            "
              >
                <div className="d-flex align-items-center justify-content-evenly">
                  <div className="p-2">
                    <img
                      src="https://source.unsplash.com/random/1"
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: 58, height: 58, objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <p className="fs-7 m-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Harum unde amet at nulla quae porro.
                    </p>
                    <span className="fs-7 text-primary">about an hour ago</span>
                  </div>
                </div>
                <i className="fas fa-circle fs-7 text-primary" />
              </a>
            </li>
            {/* news 2 */}
            <li className="my-2 p-1">
              <a
                href="#"
                className="
              d-flex
              align-items-center
              justify-content-evenly
              text-decoration-none text-dark
            "
              >
                <div className="d-flex align-items-center justify-content-evenly">
                  <div className="p-2">
                    <img
                      src="https://source.unsplash.com/random/2"
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: 58, height: 58, objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <p className="fs-7 m-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Harum unde amet at nulla quae porro.
                    </p>
                    <span className="fs-7 text-primary">about an hour ago</span>
                  </div>
                </div>
                <i className="fas fa-circle fs-7 text-primary" />
              </a>
            </li>
            {/* news 3 */}
            <li className="my-2 p-1">
              <a
                href="#"
                className="
              d-flex
              align-items-center
              justify-content-evenly
              text-decoration-none text-dark
            "
              >
                <div className="d-flex align-items-center justify-content-evenly">
                  <div className="p-2">
                    <img
                      src="https://source.unsplash.com/random/3"
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: 58, height: 58, objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <p className="fs-7 m-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Harum unde amet at nulla quae porro.
                    </p>
                    <span className="fs-7 text-primary">about an hour ago</span>
                  </div>
                </div>
                <i className="fas fa-circle fs-7 text-primary" />
              </a>
            </li>
            {/* news 4 */}
            <li className="my-2 p-1">
              <a
                href="#"
                className="
              d-flex
              align-items-center
              justify-content-evenly
              text-decoration-none text-dark
            "
              >
                <div className="d-flex align-items-center justify-content-evenly">
                  <div className="p-2">
                    <img
                      src="https://source.unsplash.com/random/4"
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: 58, height: 58, objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <p className="fs-7 m-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Harum unde amet at nulla quae porro.
                    </p>
                    <span className="fs-7 text-primary">about an hour ago</span>
                  </div>
                </div>
                <i className="fas fa-circle fs-7 text-primary" />
              </a>
            </li>
            {/* news 5 */}
            <li className="my-2 p-1">
              <a
                href="#"
                className="
              d-flex
              align-items-center
              justify-content-evenly
              text-decoration-none text-dark
            "
              >
                <div className="d-flex align-items-center justify-content-evenly">
                  <div className="p-2">
                    <img
                      src="https://source.unsplash.com/random/5"
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: 58, height: 58, objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <p className="fs-7 m-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Harum unde amet at nulla quae porro.
                    </p>
                    <span className="fs-7 text-primary">about an hour ago</span>
                  </div>
                </div>
                <i className="fas fa-circle fs-7 text-primary" />
              </a>
            </li>
          </ul>
          {/* secondary menu */}
          <div
            className="
          rounded-circle
          p-1
          bg-gray
          d-flex
          align-items-center
          justify-content-center
          mx-2
        "
            style={{ width: 38, height: 38 }}
            type="button"
            id="secondMenu"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-auto-close="outside"
          >
            <i className="fas fa-caret-down" />
          </div>
          {/* secondary menu dd */}
          <ul
            className="dropdown-menu border-0 shadow p-3"
            aria-labelledby="secondMenu"
            style={{ width: "23em" }}
          >
            {/* avatar */}
            <li className="dropdown-item p-1 rounded d-flex" type="button">
              <img
                src={userLogin.profilePicture}
                alt="avatar"
                className="rounded-circle me-2"
                style={{ width: 45, height: 45, objectFit: "cover" }}
              />
              <div>
                <p className="m-0"style={{textTransform:'capitalize'}}>{userLogin.username.split(".")[0]}</p>
                <p className="m-0 text-muted">See your profile</p>
              </div>
            </li>
            <hr />
            {/* feedback */}
            <li
              className="dropdown-item p-1 rounded d-flex align-items-center"
              type="button"
            >
              <i className="fas fa-exclamation-circle bg-gray p-2 rounded-circle" />
              <div className="ms-3">
                <p className="m-0">Give Feedback</p>
                <p className="m-0 text-muted fs-7">
                  Help us improve the new Flexbook.
                </p>
              </div>
            </li>
            <hr />
            {/* options */}
            {/* 1 */}
            <li className="dropdown-item p-1 my-3 rounded" type="button">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <div className="d-flex" data-bs-toggle="dropdown">
                    <i className="fas fa-cog bg-gray p-2 rounded-circle" />
                    <div
                      className="
                    ms-3
                    d-flex
                    justify-content-between
                    align-items-center
                    w-100
                  "
                    >
                      <p className="m-0">Settings &amp; Privacy</p>
                      <i className="fas fa-chevron-right" />
                    </div>
                  </div>
                  {/* nested menu */}
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div
                          className="
                        rounded-circle
                        p-1
                        bg-gray
                        d-flex
                        align-items-center
                        justify-content-center
                        me-2
                      "
                          style={{ width: 38, height: 38 }}
                        >
                          <i className="fas fa-cog" />
                        </div>
                        <p className="m-0">Settings</p>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div
                          className="
                        rounded-circle
                        p-1
                        bg-gray
                        d-flex
                        align-items-center
                        justify-content-center
                        me-2
                      "
                          style={{ width: 38, height: 38 }}
                        >
                          <i className="fas fa-lock" />
                        </div>
                        <p className="m-0">Privacy Checkup</p>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div
                          className="
                        rounded-circle
                        p-1
                        bg-gray
                        d-flex
                        align-items-center
                        justify-content-center
                        me-2
                      "
                          style={{ width: 38, height: 38 }}
                        >
                          <i className="fas fa-unlock-alt" />
                        </div>
                        <p className="m-0">Privacy Shortcuts</p>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div
                          className="
                        rounded-circle
                        p-1
                        bg-gray
                        d-flex
                        align-items-center
                        justify-content-center
                        me-2
                      "
                          style={{ width: 38, height: 38 }}
                        >
                          <i className="fas fa-list" />
                        </div>
                        <p className="m-0">Activity Log</p>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div
                          className="
                        rounded-circle
                        p-1
                        bg-gray
                        d-flex
                        align-items-center
                        justify-content-center
                        me-2
                      "
                          style={{ width: 38, height: 38 }}
                        >
                          <i className="fas fa-newspaper" />
                        </div>
                        <p className="m-0">News Feed Preferences</p>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div
                          className="
                        rounded-circle
                        p-1
                        bg-gray
                        d-flex
                        align-items-center
                        justify-content-center
                        me-2
                      "
                          style={{ width: 38, height: 38 }}
                        >
                          <i className="fas fa-globe" />
                        </div>
                        <p className="m-0">Language</p>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            {/* 2 */}
            <li className="dropdown-item p-1 my-3 rounded" type="button">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <div className="d-flex" data-bs-toggle="dropdown">
                    <i
                      className="
                    fas
                    fa-question-circle
                    bg-gray
                    p-2
                    rounded-circle
                  "
                    />
                    <div
                      className="
                    ms-3
                    d-flex
                    justify-content-between
                    align-items-center
                    w-100
                  "
                    >
                      <p className="m-0">Help &amp; Support</p>
                      <i className="fas fa-chevron-right" />
                    </div>
                  </div>
                  {/* nested menu */}
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div
                          className="
                        rounded-circle
                        p-1
                        bg-gray
                        d-flex
                        align-items-center
                        justify-content-center
                        me-2
                      "
                          style={{ width: 38, height: 38 }}
                        >
                          <i className="fas fa-cog" />
                        </div>
                        <p className="m-0">Settings</p>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div
                          className="
                        rounded-circle
                        p-1
                        bg-gray
                        d-flex
                        align-items-center
                        justify-content-center
                        me-2
                      "
                          style={{ width: 38, height: 38 }}
                        >
                          <i className="fas fa-lock" />
                        </div>
                        <p className="m-0">Privacy Checkup</p>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div
                          className="
                        rounded-circle
                        p-1
                        bg-gray
                        d-flex
                        align-items-center
                        justify-content-center
                        me-2
                      "
                          style={{ width: 38, height: 38 }}
                        >
                          <i className="fas fa-unlock-alt" />
                        </div>
                        <p className="m-0">Privacy Shortcuts</p>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div
                          className="
                        rounded-circle
                        p-1
                        bg-gray
                        d-flex
                        align-items-center
                        justify-content-center
                        me-2
                      "
                          style={{ width: 38, height: 38 }}
                        >
                          <i className="fas fa-list" />
                        </div>
                        <p className="m-0">Activity Log</p>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div
                          className="
                        rounded-circle
                        p-1
                        bg-gray
                        d-flex
                        align-items-center
                        justify-content-center
                        me-2
                      "
                          style={{ width: 38, height: 38 }}
                        >
                          <i className="fas fa-newspaper" />
                        </div>
                        <p className="m-0">News Feed Preferences</p>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div
                          className="
                        rounded-circle
                        p-1
                        bg-gray
                        d-flex
                        align-items-center
                        justify-content-center
                        me-2
                      "
                          style={{ width: 38, height: 38 }}
                        >
                          <i className="fas fa-globe" />
                        </div>
                        <p className="m-0">Language</p>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            {/* 3 */}
            <li className="dropdown-item p-1 my-3 rounded" type="button">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <div className="d-flex" data-bs-toggle="dropdown">
                    <i className="fas fa-moon bg-gray p-2 rounded-circle" />
                    <div
                      className="
                    ms-3
                    d-flex
                    justify-content-between
                    align-items-center
                    w-100
                  "
                    >
                      <p className="m-0">Display &amp; Accessibility</p>
                      <i className="fas fa-chevron-right" />
                    </div>
                  </div>
                  {/* nested menu */}
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div
                          className="
                        rounded-circle
                        p-1
                        bg-gray
                        d-flex
                        align-items-center
                        justify-content-center
                        me-2
                      "
                          style={{ width: 38, height: 38 }}
                        >
                          <i className="fas fa-cog" />
                        </div>
                        <p className="m-0">Settings</p>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div
                          className="
                        rounded-circle
                        p-1
                        bg-gray
                        d-flex
                        align-items-center
                        justify-content-center
                        me-2
                      "
                          style={{ width: 38, height: 38 }}
                        >
                          <i className="fas fa-lock" />
                        </div>
                        <p className="m-0">Privacy Checkup</p>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div
                          className="
                        rounded-circle
                        p-1
                        bg-gray
                        d-flex
                        align-items-center
                        justify-content-center
                        me-2
                      "
                          style={{ width: 38, height: 38 }}
                        >
                          <i className="fas fa-unlock-alt" />
                        </div>
                        <p className="m-0">Privacy Shortcuts</p>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div
                          className="
                        rounded-circle
                        p-1
                        bg-gray
                        d-flex
                        align-items-center
                        justify-content-center
                        me-2
                      "
                          style={{ width: 38, height: 38 }}
                        >
                          <i className="fas fa-list" />
                        </div>
                        <p className="m-0">Activity Log</p>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div
                          className="
                        rounded-circle
                        p-1
                        bg-gray
                        d-flex
                        align-items-center
                        justify-content-center
                        me-2
                      "
                          style={{ width: 38, height: 38 }}
                        >
                          <i className="fas fa-newspaper" />
                        </div>
                        <p className="m-0">News Feed Preferences</p>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div
                          className="
                        rounded-circle
                        p-1
                        bg-gray
                        d-flex
                        align-items-center
                        justify-content-center
                        me-2
                      "
                          style={{ width: 38, height: 38 }}
                        >
                          <i className="fas fa-globe" />
                        </div>
                        <p className="m-0">Language</p>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            {/* 4 */}
            <li className="dropdown-item p-1 my-3 rounded" type="button">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    onClick={()=>isLogin(false)}
                    className="d-flex text-decoration-none text-dark"
                  >
                    <i className="fas fa-cog bg-gray p-2 rounded-circle" />
                    <div
                      className="
                    ms-3
                    d-flex
                    justify-content-between
                    align-items-center
                    w-100
                  "
                    >
                      <p className="m-0">Log Out</p>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          {/* end */}
        </div>
      </div>
    </div>
  </div>
  {/* =============== New Chat Mobile =============== */}
  <div
    className="modal fade"
    id="newChat"
    tabIndex={-1}
    aria-labelledby="newChatLabel"
    aria-hidden="true"
    data-bs-backdrop="false"
  >
    <div
      className="
    modal-dialog modal-sm
    position-absolute
    bottom-0
    end-0
    w-75
    shadow
  "
      style={{ transform: "translateX(-80px)" }}
    >
      <div className="modal-content border-0">
        {/* head */}
        <div className="modal-header align-items-start">
          <div>
            <h6 className="modal-title text-dark mb-2" id="newChat1Label">
              New Message
            </h6>
            <label className="text-dark">To:</label>
            <input type="text" className="border-0" />
          </div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        {/* body */}
        <div className="modal-body shadow m-0 chat-border">
          <p className="m-0 text-primary ms-4">Suggested</p>
        </div>
        {/* footer */}
        <div className="modal-footer border-0" style={{ minHeight: 300 }} />
      </div>
    </div>
  </div>
  {/* ================= Chat Modal Mobile ================= */}
  {/* chat 1 */}
  <div
    className="modal fade"
    id="singleChat1"
    tabIndex={-1}
    aria-labelledby="singleChat1Label"
    aria-hidden="true"
    data-bs-backdrop="false"
  >
    <div
      className="modal-dialog modal-sm position-absolute bottom-0 end-0 w-17"
      style={{ transform: "translateX(-80px)" }}
    >
      <div className="modal-content border-0 shadow">
        {/* head */}
        <div className="modal-header">
          <div
            className="dropdown-item d-flex rounded"
            type="button"
            data-bs-container="body"
            data-bs-toggle="popover"
            data-bs-placement="left"
            data-bs-content='
        <div>
          <div class="popover-body d-flex flex-column p-0">
            <div class="d-flex align-items-center dropdown-item p-2 rounded pointer">
              <i class="far fa-comment me-3 fs-4"></i>
              <p class="m-0">Open Messenger App</p>
            </div>
            <div class="d-flex align-items-center dropdown-item p-2 rounded pointer">
              <i class="far fa-user me-3 fs-4"></i>
              <p class="m-0">Open Messenger App</p>
            </div>
            <hr>
            <div class="d-flex align-items-center dropdown-item p-2 rounded pointer">
              <i class="fas fa-fill-drip me-3 fs-4"></i>
              <p class="m-0">Color</p>
            </div>
            <div class="d-flex align-items-center dropdown-item p-2 rounded pointer">
              <i class="far fa-smile-beam me-3 fs-4"></i>
              <p class="m-0">Emoji</p>
            </div>
            <div class="d-flex align-items-center dropdown-item p-2 rounded pointer">
              <i class="fas fa-pencil-alt me-3 fs-4"></i>
              <p class="m-0">Nicknames</p>
            </div>
          </div>
        </div>
        '
            data-bs-html="true"
          >
            {/* avatar */}
            <div className="position-relative">
              <img
                src="https://source.unsplash.com/random/1"
                alt="avatar"
                className="rounded-circle me-2"
                style={{ width: 38, height: 38, objectFit: "cover" }}
              />
              <span
                className="
              position-absolute
              bottom-0
              translate-middle
              p-1
              bg-success
              border border-light
              rounded-circle
            "
                style={{ left: "75%" }}
              >
                <span className="visually-hidden">New alerts</span>
              </span>
            </div>
            {/* name */}
            <div>
              <p className="m-0">
                Mike <i className="fas fa-angle-down" />
              </p>
              <span className="text-muted fs-7">Active Now</span>
            </div>
          </div>
          {/* close */}
          <i className="fas fa-video mx-2 text-muted pointer" />
          <i className="fas fa-phone-alt mx-2 text-muted pointer" />
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        {/* body */}
        <div
          className="modal-body p-0 overflow-auto"
          style={{ maxHeight: 300 }}
        >
          {/* message l */}
          <li className="list-group-item border-0 d-flex">
            {/* avatar */}
            <div>
              <img
                src="https://source.unsplash.com/random/1"
                alt="avatar"
                className="rounded-circle me-2"
                style={{ width: 28, height: 28, objectFit: "cover" }}
              />
            </div>
            {/* message */}
            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
          </li>
          {/* message r */}
          <li className="list-group-item border-0 d-flex justify-content-end">
            {/* message */}
            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
            {/* avatar */}
            <div>
              <img
                src="https://source.unsplash.com/collection/happy-people"
                alt="avatar"
                className="rounded-circle ms-2"
                style={{ width: 28, height: 28, objectFit: "cover" }}
              />
            </div>
          </li>
          {/* message l */}
          <li className="list-group-item border-0 d-flex">
            {/* avatar */}
            <div>
              <img
                src="https://source.unsplash.com/random/1"
                alt="avatar"
                className="rounded-circle me-2"
                style={{ width: 28, height: 28, objectFit: "cover" }}
              />
            </div>
            {/* message */}
            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
          </li>
          {/* message r */}
          <li className="list-group-item border-0 d-flex justify-content-end">
            {/* message */}
            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
            {/* avatar */}
            <div>
              <img
                src="https://source.unsplash.com/collection/happy-people"
                alt="avatar"
                className="rounded-circle ms-2"
                style={{ width: 28, height: 28, objectFit: "cover" }}
              />
            </div>
          </li>
          {/* message l */}
          <li className="list-group-item border-0 d-flex">
            {/* avatar */}
            <div>
              <img
                src="https://source.unsplash.com/random/1"
                alt="avatar"
                className="rounded-circle me-2"
                style={{ width: 28, height: 28, objectFit: "cover" }}
              />
            </div>
            {/* message */}
            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
          </li>
          {/* message r */}
          <li className="list-group-item border-0 d-flex justify-content-end">
            {/* message */}
            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
            {/* avatar */}
            <div>
              <img
                src="https://source.unsplash.com/collection/happy-people"
                alt="avatar"
                className="rounded-circle ms-2"
                style={{ width: 28, height: 28, objectFit: "cover" }}
              />
            </div>
          </li>
        </div>
        {/* message input */}
        <div className="modal-footer p-0 m-0 border-0">
          <div className="d-flex">
            <div className="d-flex align-items-center">
              <i className="fas fa-plus-circle mx-1 fs-5 text-muted pointer" />
              <i className="far fa-file-image mx-1 fs-5 text-muted pointer" />
              <i className="fas fa-portrait mx-1 fs-5 text-muted pointer" />
              <i className="fas fa-adjust mx-1 fs-5 text-muted pointer" />
            </div>
            <div>
              <input
                type="text"
                className="form-control rounded-pill border-0 bg-gray"
                placeholder="Aa"
              />
            </div>
            <div className="d-flex align-items-center mx-2">
              <i className="fas fa-thumbs-up fs-5 text-muted pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* chat 2 */}
  <div
    className="modal fade"
    id="singleChat2"
    tabIndex={-1}
    aria-labelledby="singleChat2Label"
    aria-hidden="true"
    data-bs-backdrop="false"
  >
    <div
      className="modal-dialog modal-sm position-absolute bottom-0 end-0 w-17"
      style={{ transform: "translateX(-80px)" }}
    >
      <div className="modal-content border-0 shadow">
        {/* head */}
        <div className="modal-header">
          <div
            className="dropdown-item d-flex rounded"
            type="button"
            data-bs-container="body"
            data-bs-toggle="popover"
            data-bs-placement="left"
            data-bs-content='
          <div>
            <div class="popover-body d-flex flex-column p-0">
              <div class="d-flex align-items-center dropdown-item p-2 rounded pointer">
                <i class="far fa-comment me-3 fs-4"></i>
                <p class="m-0">Open Messenger App</p>
              </div>
              <div class="d-flex align-items-center dropdown-item p-2 rounded pointer">
                <i class="far fa-user me-3 fs-4"></i>
                <p class="m-0">Open Messenger App</p>
              </div>
              <hr>
              <div class="d-flex align-items-center dropdown-item p-2 rounded pointer">
                <i class="fas fa-fill-drip me-3 fs-4"></i>
                <p class="m-0">Color</p>
              </div>
              <div class="d-flex align-items-center dropdown-item p-2 rounded pointer">
                <i class="far fa-smile-beam me-3 fs-4"></i>
                <p class="m-0">Emoji</p>
              </div>
              <div class="d-flex align-items-center dropdown-item p-2 rounded pointer">
                <i class="fas fa-pencil-alt me-3 fs-4"></i>
                <p class="m-0">Nicknames</p>
              </div>
            </div>
          </div>
          '
            data-bs-html="true"
          >
            {/* avatar */}
            <div className="position-relative">
              <img
                src="https://source.unsplash.com/random/2"
                alt="avatar"
                className="rounded-circle me-2"
                style={{ width: 38, height: 38, objectFit: "cover" }}
              />
              <span
                className="
              position-absolute
              bottom-0
              translate-middle
              p-1
              bg-success
              border border-light
              rounded-circle
            "
                style={{ left: "75%" }}
              >
                <span className="visually-hidden">New alerts</span>
              </span>
            </div>
            {/* name */}
            <div>
              <p className="m-0">
                Tuan <i className="fas fa-angle-down" />
              </p>
              <span className="text-muted fs-7">Active Now</span>
            </div>
          </div>
          {/* close */}
          <i className="fas fa-video mx-2 text-muted pointer" />
          <i className="fas fa-phone-alt mx-2 text-muted pointer" />
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        {/* body */}
        <div
          className="modal-body p-0 overflow-auto"
          style={{ maxHeight: 300 }}
        >
          {/* message l */}
          <li className="list-group-item border-0 d-flex">
            {/* avatar */}
            <div>
              <img
                src="https://source.unsplash.com/random/2"
                alt="avatar"
                className="rounded-circle me-2"
                style={{ width: 28, height: 28, objectFit: "cover" }}
              />
            </div>
            {/* message */}
            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
          </li>
          {/* message r */}
          <li className="list-group-item border-0 d-flex justify-content-end">
            {/* message */}
            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
            {/* avatar */}
            <div>
              <img
                src="https://source.unsplash.com/collection/happy-people"
                alt="avatar"
                className="rounded-circle ms-2"
                style={{ width: 28, height: 28, objectFit: "cover" }}
              />
            </div>
          </li>
          {/* message l */}
          <li className="list-group-item border-0 d-flex">
            {/* avatar */}
            <div>
              <img
                src="https://source.unsplash.com/random/2"
                alt="avatar"
                className="rounded-circle me-2"
                style={{ width: 28, height: 28, objectFit: "cover" }}
              />
            </div>
            {/* message */}
            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
          </li>
          {/* message r */}
          <li className="list-group-item border-0 d-flex justify-content-end">
            {/* message */}
            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
            {/* avatar */}
            <div>
              <img
                src="https://source.unsplash.com/collection/happy-people"
                alt="avatar"
                className="rounded-circle ms-2"
                style={{ width: 28, height: 28, objectFit: "cover" }}
              />
            </div>
          </li>
          {/* message l */}
          <li className="list-group-item border-0 d-flex">
            {/* avatar */}
            <div>
              <img
                src="https://source.unsplash.com/random/2"
                alt="avatar"
                className="rounded-circle me-2"
                style={{ width: 28, height: 28, objectFit: "cover" }}
              />
            </div>
            {/* message */}
            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
          </li>
          {/* message r */}
          <li className="list-group-item border-0 d-flex justify-content-end">
            {/* message */}
            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
            {/* avatar */}
            <div>
              <img
                src="https://source.unsplash.com/collection/happy-people"
                alt="avatar"
                className="rounded-circle ms-2"
                style={{ width: 28, height: 28, objectFit: "cover" }}
              />
            </div>
          </li>
        </div>
        {/* message input */}
        <div className="modal-footer p-0 m-0 border-0">
          <div className="d-flex">
            <div className="d-flex align-items-center">
              <i className="fas fa-plus-circle mx-1 fs-5 text-muted pointer" />
              <i className="far fa-file-image mx-1 fs-5 text-muted pointer" />
              <i className="fas fa-portrait mx-1 fs-5 text-muted pointer" />
              <i className="fas fa-adjust mx-1 fs-5 text-muted pointer" />
            </div>
            <div>
              <input
                type="text"
                className="form-control rounded-pill border-0 bg-gray"
                placeholder="Aa"
              />
            </div>
            <div className="d-flex align-items-center mx-2">
              <i className="fas fa-thumbs-up fs-5 text-muted pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* chat 3 */}
  <div
    className="modal fade"
    id="singleChat3"
    tabIndex={-1}
    aria-labelledby="singleChat3Label"
    aria-hidden="true"
    data-bs-backdrop="false"
  >
    <div
      className="modal-dialog modal-sm position-absolute bottom-0 end-0 w-17"
      style={{ transform: "translateX(-80px)" }}
    >
      <div className="modal-content border-0 shadow">
        {/* head */}
        <div className="modal-header">
          <div
            className="dropdown-item d-flex rounded"
            type="button"
            data-bs-container="body"
            data-bs-toggle="popover"
            data-bs-placement="left"
            data-bs-content='
              <div>
                <div class="popover-body d-flex flex-column p-0">
                  <div class="d-flex align-items-center dropdown-item p-2 rounded pointer">
                    <i class="far fa-comment me-3 fs-4"></i>
                    <p class="m-0">Open Messenger App</p>
                  </div>
                  <div class="d-flex align-items-center dropdown-item p-2 rounded pointer">
                    <i class="far fa-user me-3 fs-4"></i>
                    <p class="m-0">Open Messenger App</p>
                  </div>
                  <hr>
                  <div class="d-flex align-items-center dropdown-item p-2 rounded pointer">
                    <i class="fas fa-fill-drip me-3 fs-4"></i>
                    <p class="m-0">Color</p>
                  </div>
                  <div class="d-flex align-items-center dropdown-item p-2 rounded pointer">
                    <i class="far fa-smile-beam me-3 fs-4"></i>
                    <p class="m-0">Emoji</p>
                  </div>
                  <div class="d-flex align-items-center dropdown-item p-2 rounded pointer">
                    <i class="fas fa-pencil-alt me-3 fs-4"></i>
                    <p class="m-0">Nicknames</p>
                  </div>
                </div>
              </div>
              '
            data-bs-html="true"
          >
            {/* avatar */}
            <div className="position-relative">
              <img
                src="https://source.unsplash.com/random/2"
                alt="avatar"
                className="rounded-circle me-2"
                style={{ width: 38, height: 38, objectFit: "cover" }}
              />
              <span
                className="
              position-absolute
              bottom-0
              translate-middle
              p-1
              bg-success
              border border-light
              rounded-circle
            "
                style={{ left: "75%" }}
              >
                <span className="visually-hidden">New alerts</span>
              </span>
            </div>
            {/* name */}
            <div>
              <p className="m-0">
                Jerry <i className="fas fa-angle-down" />
              </p>
              <span className="text-muted fs-7">Active Now</span>
            </div>
          </div>
          {/* close */}
          <i className="fas fa-video mx-2 text-muted pointer" />
          <i className="fas fa-phone-alt mx-2 text-muted pointer" />
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        {/* body */}
        <div
          className="modal-body p-0 overflow-auto"
          style={{ maxHeight: 300 }}
        >
          {/* message l */}
          <li className="list-group-item border-0 d-flex">
            {/* avatar */}
            <div>
              <img
                src="https://source.unsplash.com/random/3"
                alt="avatar"
                className="rounded-circle me-2"
                style={{ width: 28, height: 28, objectFit: "cover" }}
              />
            </div>
            {/* message */}
            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
          </li>
          {/* message r */}
          <li className="list-group-item border-0 d-flex justify-content-end">
            {/* message */}
            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
            {/* avatar */}
            <div>
              <img
                src="https://source.unsplash.com/collection/happy-people"
                alt="avatar"
                className="rounded-circle ms-2"
                style={{ width: 28, height: 28, objectFit: "cover" }}
              />
            </div>
          </li>
          {/* message l */}
          <li className="list-group-item border-0 d-flex">
            {/* avatar */}
            <div>
              <img
                src="https://source.unsplash.com/random/3"
                alt="avatar"
                className="rounded-circle me-2"
                style={{ width: 28, height: 28, objectFit: "cover" }}
              />
            </div>
            {/* message */}
            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
          </li>
          {/* message r */}
          <li className="list-group-item border-0 d-flex justify-content-end">
            {/* message */}
            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
            {/* avatar */}
            <div>
              <img
                src="https://source.unsplash.com/collection/happy-people"
                alt="avatar"
                className="rounded-circle ms-2"
                style={{ width: 28, height: 28, objectFit: "cover" }}
              />
            </div>
          </li>
          {/* message l */}
          <li className="list-group-item border-0 d-flex">
            {/* avatar */}
            <div>
              <img
                src="https://source.unsplash.com/random/3"
                alt="avatar"
                className="rounded-circle me-2"
                style={{ width: 28, height: 28, objectFit: "cover" }}
              />
            </div>
            {/* message */}
            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
          </li>
          {/* message r */}
          <li className="list-group-item border-0 d-flex justify-content-end">
            {/* message */}
            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
            {/* avatar */}
            <div>
              <img
                src="https://source.unsplash.com/collection/happy-people"
                alt="avatar"
                className="rounded-circle ms-2"
                style={{ width: 28, height: 28, objectFit: "cover" }}
              />
            </div>
          </li>
        </div>
        {/* message input */}
        <div className="modal-footer p-0 m-0 border-0">
          <div className="d-flex">
            <div className="d-flex align-items-center">
              <i className="fas fa-plus-circle mx-1 fs-5 text-muted pointer" />
              <i className="far fa-file-image mx-1 fs-5 text-muted pointer" />
              <i className="fas fa-portrait mx-1 fs-5 text-muted pointer" />
              <i className="fas fa-adjust mx-1 fs-5 text-muted pointer" />
            </div>
            <div>
              <input
                type="text"
                className="form-control rounded-pill border-0 bg-gray"
                placeholder="Aa"
              />
            </div>
            <div className="d-flex align-items-center mx-2">
              <i className="fas fa-thumbs-up fs-5 text-muted pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* chat 4 */}
  <div
    className="modal fade"
    id="singleChat4"
    tabIndex={-1}
    aria-labelledby="singleChat4Label"
    aria-hidden="true"
    data-bs-backdrop="false"
  >
    <div
      className="modal-dialog modal-sm position-absolute bottom-0 end-0 w-17"
      style={{ transform: "translateX(-80px)" }}
    >
      <div className="modal-content border-0 shadow">
        {/* head */}
        <div className="modal-header">
          <div
            className="dropdown-item d-flex rounded"
            type="button"
            data-bs-container="body"
            data-bs-toggle="popover"
            data-bs-placement="left"
            data-bs-content='
                <div>
                  <div class="popover-body d-flex flex-column p-0">
                    <div class="d-flex align-items-center dropdown-item p-2 rounded pointer">
                      <i class="far fa-comment me-3 fs-4"></i>
                      <p class="m-0">Open Messenger App</p>
                    </div>
                    <div class="d-flex align-items-center dropdown-item p-2 rounded pointer">
                      <i class="far fa-user me-3 fs-4"></i>
                      <p class="m-0">Open Messenger App</p>
                    </div>
                    <hr>
                    <div class="d-flex align-items-center dropdown-item p-2 rounded pointer">
                      <i class="fas fa-fill-drip me-3 fs-4"></i>
                      <p class="m-0">Color</p>
                    </div>
                    <div class="d-flex align-items-center dropdown-item p-2 rounded pointer">
                      <i class="far fa-smile-beam me-3 fs-4"></i>
                      <p class="m-0">Emoji</p>
                    </div>
                    <div class="d-flex align-items-center dropdown-item p-2 rounded pointer">
                      <i class="fas fa-pencil-alt me-3 fs-4"></i>
                      <p class="m-0">Nicknames</p>
                    </div>
                  </div>
                </div>
                '
            data-bs-html="true"
          >
            {/* avatar */}
            <div className="position-relative">
              <img
                src="https://source.unsplash.com/random/2"
                alt="avatar"
                className="rounded-circle me-2"
                style={{ width: 38, height: 38, objectFit: "cover" }}
              />
              <span
                className="
              position-absolute
              bottom-0
              translate-middle
              p-1
              bg-success
              border border-light
              rounded-circle
            "
                style={{ left: "75%" }}
              >
                <span className="visually-hidden">New alerts</span>
              </span>
            </div>
            {/* name */}
            <div>
              <p className="m-0">
                Tony <i className="fas fa-angle-down" />
              </p>
              <span className="text-muted fs-7">Active Now</span>
            </div>
          </div>
          {/* close */}
          <i className="fas fa-video mx-2 text-muted pointer" />
          <i className="fas fa-phone-alt mx-2 text-muted pointer" />
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        {/* body */}
        <div
          className="modal-body p-0 overflow-auto"
          style={{ maxHeight: 300 }}
        >
          {/* message l */}
          <li className="list-group-item border-0 d-flex">
            {/* avatar */}
            <div>
              <img
                src="https://source.unsplash.com/random/4"
                alt="avatar"
                className="rounded-circle me-2"
                style={{ width: 28, height: 28, objectFit: "cover" }}
              />
            </div>
            {/* message */}
            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
          </li>
          {/* message r */}
          <li className="list-group-item border-0 d-flex justify-content-end">
            {/* message */}
            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
            {/* avatar */}
            <div>
              <img
                src="https://source.unsplash.com/collection/happy-people"
                alt="avatar"
                className="rounded-circle ms-2"
                style={{ width: 28, height: 28, objectFit: "cover" }}
              />
            </div>
          </li>
          {/* message l */}
          <li className="list-group-item border-0 d-flex">
            {/* avatar */}
            <div>
              <img
                src="https://source.unsplash.com/random/4"
                alt="avatar"
                className="rounded-circle me-2"
                style={{ width: 28, height: 28, objectFit: "cover" }}
              />
            </div>
            {/* message */}
            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
          </li>
          {/* message r */}
          <li className="list-group-item border-0 d-flex justify-content-end">
            {/* message */}
            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
            {/* avatar */}
            <div>
              <img
                src="https://source.unsplash.com/collection/happy-people"
                alt="avatar"
                className="rounded-circle ms-2"
                style={{ width: 28, height: 28, objectFit: "cover" }}
              />
            </div>
          </li>
          {/* message l */}
          <li className="list-group-item border-0 d-flex">
            {/* avatar */}
            <div>
              <img
                src="https://source.unsplash.com/random/4"
                alt="avatar"
                className="rounded-circle me-2"
                style={{ width: 28, height: 28, objectFit: "cover" }}
              />
            </div>
            {/* message */}
            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
          </li>
          {/* message r */}
          <li className="list-group-item border-0 d-flex justify-content-end">
            {/* message */}
            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
            {/* avatar */}
            <div>
              <img
                src="https://source.unsplash.com/collection/happy-people"
                alt="avatar"
                className="rounded-circle ms-2"
                style={{ width: 28, height: 28, objectFit: "cover" }}
              />
            </div>
          </li>
        </div>
        {/* message input */}
        <div className="modal-footer p-0 m-0 border-0">
          <div className="d-flex">
            <div className="d-flex align-items-center">
              <i className="fas fa-plus-circle mx-1 fs-5 text-muted pointer" />
              <i className="far fa-file-image mx-1 fs-5 text-muted pointer" />
              <i className="fas fa-portrait mx-1 fs-5 text-muted pointer" />
              <i className="fas fa-adjust mx-1 fs-5 text-muted pointer" />
            </div>
            <div>
              <input
                type="text"
                className="form-control rounded-pill border-0 bg-gray"
                placeholder="Aa"
              />
            </div>
            <div className="d-flex align-items-center mx-2">
              <i className="fas fa-thumbs-up fs-5 text-muted pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* chat 5 */}
  <div
    className="modal fade"
    id="singleChat5"
    tabIndex={-1}
    aria-labelledby="singleChat5Label"
    aria-hidden="true"
    data-bs-backdrop="false"
  >
    <div
      className="modal-dialog modal-sm position-absolute bottom-0 end-0 w-17"
      style={{ transform: "translateX(-80px)" }}
    >
      <div className="modal-content border-0 shadow">
        {/* head */}
        <div className="modal-header">
          <div
            className="dropdown-item d-flex rounded"
            type="button"
            data-bs-container="body"
            data-bs-toggle="popover"
            data-bs-placement="left"
            data-bs-content='
                    <div>
                      <div class="popover-body d-flex flex-column p-0">
                        <div class="d-flex align-items-center dropdown-item p-2 rounded pointer">
                          <i class="far fa-comment me-3 fs-4"></i>
                          <p class="m-0">Open Messenger App</p>
                        </div>
                        <div class="d-flex align-items-center dropdown-item p-2 rounded pointer">
                          <i class="far fa-user me-3 fs-4"></i>
                          <p class="m-0">Open Messenger App</p>
                        </div>
                        <hr>
                        <div class="d-flex align-items-center dropdown-item p-2 rounded pointer">
                          <i class="fas fa-fill-drip me-3 fs-4"></i>
                          <p class="m-0">Color</p>
                        </div>
                        <div class="d-flex align-items-center dropdown-item p-2 rounded pointer">
                          <i class="far fa-smile-beam me-3 fs-4"></i>
                          <p class="m-0">Emoji</p>
                        </div>
                        <div class="d-flex align-items-center dropdown-item p-2 rounded pointer">
                          <i class="fas fa-pencil-alt me-3 fs-4"></i>
                          <p class="m-0">Nicknames</p>
                        </div>
                      </div>
                    </div>
                    '
            data-bs-html="true"
          >
            {/* avatar */}
            <div className="position-relative">
              <img
                src="https://source.unsplash.com/random/2"
                alt="avatar"
                className="rounded-circle me-2"
                style={{ width: 38, height: 38, objectFit: "cover" }}
              />
              <span
                className="
              position-absolute
              bottom-0
              translate-middle
              p-1
              bg-success
              border border-light
              rounded-circle
            "
                style={{ left: "75%" }}
              >
                <span className="visually-hidden">New alerts</span>
              </span>
            </div>
            {/* name */}
            <div>
              <p className="m-0">
                Phu <i className="fas fa-angle-down" />
              </p>
              <span className="text-muted fs-7">Active Now</span>
            </div>
          </div>
          {/* close */}
          <i className="fas fa-video mx-2 text-muted pointer" />
          <i className="fas fa-phone-alt mx-2 text-muted pointer" />
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        {/* body */}
        <div
          className="modal-body p-0 overflow-auto"
          style={{ maxHeight: 300 }}
        >
          {/* message l */}
          <li className="list-group-item border-0 d-flex">
            {/* avatar */}
            <div>
              <img
                src="https://source.unsplash.com/random/5"
                alt="avatar"
                className="rounded-circle me-2"
                style={{ width: 28, height: 28, objectFit: "cover" }}
              />
            </div>
            {/* message */}
            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
          </li>
          {/* message r */}
          <li className="list-group-item border-0 d-flex justify-content-end">
            {/* message */}
            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
            {/* avatar */}
            <div>
              <img
                src="https://source.unsplash.com/collection/happy-people"
                alt="avatar"
                className="rounded-circle ms-2"
                style={{ width: 28, height: 28, objectFit: "cover" }}
              />
            </div>
          </li>
          {/* message l */}
          <li className="list-group-item border-0 d-flex">
            {/* avatar */}
            <div>
              <img
                src="https://source.unsplash.com/random/5"
                alt="avatar"
                className="rounded-circle me-2"
                style={{ width: 28, height: 28, objectFit: "cover" }}
              />
            </div>
            {/* message */}
            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
          </li>
          {/* message r */}
          <li className="list-group-item border-0 d-flex justify-content-end">
            {/* message */}
            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
            {/* avatar */}
            <div>
              <img
                src="https://source.unsplash.com/collection/happy-people"
                alt="avatar"
                className="rounded-circle ms-2"
                style={{ width: 28, height: 28, objectFit: "cover" }}
              />
            </div>
          </li>
          {/* message l */}
          <li className="list-group-item border-0 d-flex">
            {/* avatar */}
            <div>
              <img
                src="https://source.unsplash.com/random/5"
                alt="avatar"
                className="rounded-circle me-2"
                style={{ width: 28, height: 28, objectFit: "cover" }}
              />
            </div>
            {/* message */}
            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
          </li>
          {/* message r */}
          <li className="list-group-item border-0 d-flex justify-content-end">
            {/* message */}
            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
            {/* avatar */}
            <div>
              <img
                src="https://source.unsplash.com/collection/happy-people"
                alt="avatar"
                className="rounded-circle ms-2"
                style={{ width: 28, height: 28, objectFit: "cover" }}
              />
            </div>
          </li>
        </div>
        {/* message input */}
        <div className="modal-footer p-0 m-0 border-0">
          <div className="d-flex">
            <div className="d-flex align-items-center">
              <i className="fas fa-plus-circle mx-1 fs-5 text-muted pointer" />
              <i className="far fa-file-image mx-1 fs-5 text-muted pointer" />
              <i className="fas fa-portrait mx-1 fs-5 text-muted pointer" />
              <i className="fas fa-adjust mx-1 fs-5 text-muted pointer" />
            </div>
            <div>
              <input
                type="text"
                className="form-control rounded-pill border-0 bg-gray"
                placeholder="Aa"
              />
            </div>
            <div className="d-flex align-items-center mx-2">
              <i className="fas fa-thumbs-up fs-5 text-muted pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ================= Main ================= */}
  <div className="container-fluid">
    <div className="row justify-content-evenly">
      {/* ================= Sidebar ================= */}
      <div className="col-12 col-lg-3">
        <div
          className="d-none d-xxl-block h-100 fixed-top overflow-hidden scrollbar"
          style={{ maxWidth: 360, width: "100%", zIndex: 4 }}
        >
          <ul
            className="navbar-nav mt-4 ms-3 d-flex flex-column pb-5 mb-5"
            style={{ paddingTop: 56 }}
          >
            {/* top */}
            {/* avatar */}
            <li className="dropdown-item p-1 rounded">
              <a
                href="#"
                className="
              d-flex
              align-items-center
              text-decoration-none text-dark
            "
              >
                <div className="p-2">
                  <img
                    src={userLogin.profilePicture}
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{ width: 38, height: 38, objectFit: "cover" }}
                  />
                </div>
                <div>
                  <p className="m-0"style={{textTransform:'capitalize'}}>{userLogin.username.split(".")[0]}</p>
                </div>
              </a>
            </li>
            {/* top 1 */}
            <li className="dropdown-item p-1 rounded">
              <a
                href="#"
                className="
              d-flex
              align-items-center
              text-decoration-none text-dark
            "
              >
                <div className="p-2">
                  <i className="icons friend-icon"></i>
                </div>
                <div>
                  <p className="m-0">Friends</p>
                </div>
              </a>
            </li>
            {/* top 2 */}
            <li className="dropdown-item p-1 rounded">
              <a
                href="#"
                className="
              d-flex
              align-items-center
              text-decoration-none text-dark
            "
              >
                <div className="p-2">
                  <i className="icons group-icon"></i>
                </div>
                <div>
                  <p className="m-0">Groups</p>
                  <i
                    className="fas fa-circle text-primary"
                    style={{ fontSize: "0.5rem !important" }}
                  />
                  <span className="fs-7 text-primary"> 1 new</span>
                </div>
              </a>
            </li>
            {/* top 3 */}
            <li className="dropdown-item p-1">
              <a
                href="#"
                className="
              d-flex
              align-items-center
              justify-content-between
              text-decoration-none text-dark
            "
              >
                <div className="d-flex align-items-center justify-content-evenly">
                  <div className="p-2">
                    <i className="icons page-icon"></i>
                  </div>
                  <div>
                    <p className="m-0">Pages</p>
                  </div>
                </div>
              </a>
            </li>
            {/* top 4 */}
            <li className="dropdown-item p-1">
              <a
                href="#"
                className="
              d-flex
              align-items-center
              justify-content-between
              text-decoration-none text-dark
            "
              >
                <div className="d-flex align-items-center justify-content-evenly">
                  <div className="p-2">
                  <i className="icons marketplace-icon"></i>
                  </div>
                  <div>
                    <p className="m-0">Marketplace</p>
                  </div>
                </div>
              </a>
            </li>
            {/* top 5 */}
            <li className="dropdown-item p-1">
              <a
                href="#"
                className="
              d-flex
              align-items-center
              justify-content-between
              text-decoration-none text-dark
            "
              >
                <div className="d-flex align-items-center justify-content-evenly">
                  <div className="p-2">
                  <i className="icons watch-icon"></i>
                  </div>
                  <div>
                    <p className="m-0">Watch</p>
                    <i
                      className="fas fa-circle text-primary"
                      style={{ fontSize: "0.5rem !important" }}
                    />
                    <span className="fs-7 text-primary"> 9+ new videos</span>
                  </div>
                </div>
              </a>
            </li>
            {/* see more */}
            <li className="p-1" type="button">
              <div id="accordionFlushExample">
                <div>
                  {/* see more button */}
                  <div
                    className="d-flex align-items-center"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <div className="p-2">
                      <i
                        className="fas fa-chevron-down rounded-circle p-2"
                        style={{ backgroundColor: "#d5d5d5 !important" }}
                      />
                    </div>
                    <div>
                      <p className="m-0">See More</p>
                    </div>
                  </div>
                  {/* content */}
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div>
                      {/* item 1 */}
                      <div
                        className="
                      d-flex
                      align-items-center
                      dropdown-item
                      p-0
                      m-0
                    "
                      >
                        <div className="p-2">
                          <img
                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Y7r38CcFEw5.png"
                            alt="from fb"
                            className="rounded-circle"
                            style={{
                              width: 38,
                              height: 38,
                              objectFit: "cover"
                            }}
                          />
                        </div>
                        <div>
                          <p className="m-0">Campus</p>
                        </div>
                      </div>
                      {/* item 2 */}
                      <div
                        className="
                      d-flex
                      align-items-center
                      dropdown-item
                      p-0
                      m-0
                    "
                      >
                        <div className="p-2">
                          <i className="icons event-icon"></i>
                        </div>
                        <div>
                          <p className="m-0">Events</p>
                        </div>
                      </div>
                      {/* item 3 */}
                      <div
                        className="
                      d-flex
                      align-items-center
                      dropdown-item
                      p-0
                      m-0
                    "
                      >
                        <div className="p-2">
                          <i className="icons newfeed-icon"></i>
                        </div>
                        <div>
                          <p className="m-0">Newsfeed</p>
                        </div>
                      </div>
                      {/* end */}
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <hr className="m-0" />
            {/* shortcuts */}
            {/* heading */}
            <div
              className="
            d-flex
            justify-content-between
            align-items-center
            mt-2
            text-muted
            edit-heading
          "
            >
              <h4 className="m-0 pointer">Your Shorcuts</h4>
              <p
                className="m-0 text-primary me-3 pointer edit-button"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#shortCutModal"
              >
                Edit
              </p>
              {/* modal */}
              <div
                className="modal fade"
                id="shortCutModal"
                tabIndex={-1}
                aria-labelledby="shortCutModalLabel"
                aria-hidden="true"
                data-bs-backdrop="false"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    {/* head */}
                    <div className="modal-header align-items-center">
                      <h5
                        className="text-dark text-center w-100 m-0"
                        id="exampleModalLabel"
                      >
                        Edit Your ShortCuts
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    {/* body */}
                    <div className="modal-body">
                      <p className="text-muted">
                        Shortcuts provide quick access to what you do most on
                        Facebook. Your Shortcuts are sorted automatically, but
                        you can pin something so it's always shown at the top or
                        hide it from the list.
                      </p>
                      {/* Search */}
                      <div className="p-1">
                        <div
                          className="
                        input-group-text
                        bg-gray
                        border-0
                        rounded-pill
                      "
                          style={{ minHeight: 40, minWidth: 230 }}
                        >
                          <i className="fas fa-search me-2 text-muted" />
                          <input
                            type="text"
                            className="form-control rounded-pill border-0 bg-gray"
                            placeholder="Search your Pages, groups, games, and events"
                          />
                        </div>
                      </div>
                      {/* short-1 */}
                      <li className="my-1 p-1">
                        <div
                          className="
                        d-flex
                        align-items-center
                        justify-content-between
                        text-decoration-none text-dark
                      "
                        >
                          <div
                            className="
                          d-flex
                          align-items-center
                          justify-content-evenly
                        "
                          >
                            <div className="p-2">
                              <img
                                src="https://source.unsplash.com/random/1"
                                alt="from fb"
                                className="
                              rounded
                              border border-1 border-secondary
                            "
                                style={{
                                  width: 38,
                                  height: 38,
                                  objectFit: "cover"
                                }}
                              />
                            </div>
                            <div>
                              <p className="m-0">Lorem Ipsum</p>
                            </div>
                          </div>
                          <select
                            className="form-select w-50 border-0 bg-gray"
                            aria-label="Default select example"
                          >
                            <option selected="" value={1}>
                              Short Automatically
                            </option>
                            <option value={2}>Pin To Top</option>
                            <option value={3}>Hide</option>
                          </select>
                        </div>
                      </li>
                      {/* short-2 */}
                      <li className="my-1 p-1">
                        <div
                          className="
                        d-flex
                        align-items-center
                        justify-content-between
                        text-decoration-none text-dark
                      "
                        >
                          <div
                            className="
                          d-flex
                          align-items-center
                          justify-content-evenly
                        "
                          >
                            <div className="p-2">
                              <img
                                src="https://source.unsplash.com/random/2"
                                alt="from fb"
                                className="
                              rounded
                              border border-1 border-secondary
                            "
                                style={{
                                  width: 38,
                                  height: 38,
                                  objectFit: "cover"
                                }}
                              />
                            </div>
                            <div>
                              <p className="m-0">Lorem Ipsum</p>
                            </div>
                          </div>
                          <select
                            className="form-select w-50 border-0 bg-gray"
                            aria-label="Default select example"
                          >
                            <option selected="" value={1}>
                              Short Automatically
                            </option>
                            <option value={2}>Pin To Top</option>
                            <option value={3}>Hide</option>
                          </select>
                        </div>
                      </li>
                      {/* short-3 */}
                      <li className="my-1 p-1">
                        <div
                          className="
                        d-flex
                        align-items-center
                        justify-content-between
                        text-decoration-none text-dark
                      "
                        >
                          <div
                            className="
                          d-flex
                          align-items-center
                          justify-content-evenly
                        "
                          >
                            <div className="p-2">
                              <img
                                src="https://source.unsplash.com/random/3"
                                alt="from fb"
                                className="
                              rounded
                              border border-1 border-secondary
                            "
                                style={{
                                  width: 38,
                                  height: 38,
                                  objectFit: "cover"
                                }}
                              />
                            </div>
                            <div>
                              <p className="m-0">Lorem Ipsum</p>
                            </div>
                          </div>
                          <select
                            className="form-select w-50 border-0 bg-gray"
                            aria-label="Default select example"
                          >
                            <option selected="" value={1}>
                              Short Automatically
                            </option>
                            <option value={2}>Pin To Top</option>
                            <option value={3}>Hide</option>
                          </select>
                        </div>
                      </li>
                      {/* end */}
                    </div>
                    {/* footer */}
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-light text-primary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* end */}
            </div>
            {/* short 1 */}
            <li className="dropdown-item p-1">
              <a
                href="#"
                className="
              d-flex
              align-items-center
              text-decoration-none text-dark
            "
              >
                <div className="p-2">
                  <img
                    src="https://source.unsplash.com/random/1"
                    alt="from fb"
                    className="rounded border border-1 border-secondary"
                    style={{ width: 38, height: 38, objectFit: "cover" }}
                  />
                </div>
                <div>
                  <p className="m-0">Lorem Ipsum</p>
                </div>
              </a>
            </li>
            {/* short-2 */}
            <li className="dropdown-item p-1">
              <a
                href=""
                className="
              d-flex
              align-items-center
              text-decoration-none text-dark
            "
              >
                <div className="p-2">
                  <img
                    src="https://source.unsplash.com/random/2"
                    alt="from fb"
                    className="rounded border border-1 border-secondary"
                    style={{ width: 38, height: 38, objectFit: "cover" }}
                  />
                </div>
                <div>
                  <p className="m-0">Lorem Ipsum</p>
                </div>
              </a>
            </li>
            {/* short-3 */}
            <li className="dropdown-item p-1">
              <a
                href=""
                className="
              d-flex
              align-items-center
              text-decoration-none text-dark
            "
              >
                <div className="p-2">
                  <img
                    src="https://source.unsplash.com/random/3"
                    alt="from fb"
                    className="rounded border border-1 border-secondary"
                    style={{ width: 38, height: 38, objectFit: "cover" }}
                  />
                </div>
                <div>
                  <p className="m-0">Lorem Ipsum</p>
                </div>
              </a>
            </li>
            {/* see more */}
            <li className="p-1" type="button">
              <div id="accordionFlushExample">
                <div>
                  {/* see more button */}
                  <div
                    className="d-flex align-items-center"
                    data-bs-toggle="collapse"
                    data-bs-target="#shortModal"
                    aria-expanded="false"
                    aria-controls="shortModal"
                  >
                    <div className="p-2">
                      <i
                        className="fas fa-chevron-down rounded-circle p-2"
                        style={{ backgroundColor: "#d5d5d5 !important" }}
                      />
                    </div>
                    <div>
                      <p className="m-0">See More</p>
                    </div>
                  </div>
                  {/* content */}
                  <div
                    id="shortModal"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div>
                      {/* item 1 */}
                      <div
                        className="
                      d-flex
                      align-items-center
                      dropdown-item
                      p-0
                      m-0
                    "
                      >
                        <div className="p-2">
                          <img
                            src="https://source.unsplash.com/random/4"
                            alt="from fb"
                            className="rounded border border-1 border-secondary"
                            style={{
                              width: 38,
                              height: 38,
                              objectFit: "cover"
                            }}
                          />
                        </div>
                        <div>
                          <p className="m-0">Campus</p>
                        </div>
                      </div>
                      {/* item 2 */}
                      <div
                        className="
                      d-flex
                      align-items-center
                      dropdown-item
                      p-0
                      m-0
                    "
                      >
                        <div className="p-2">
                          <img
                            src="https://source.unsplash.com/random/5"
                            alt="from fb"
                            className="rounded border border-1 border-secondary"
                            style={{
                              width: 38,
                              height: 38,
                              objectFit: "cover"
                            }}
                          />
                        </div>
                        <div>
                          <p className="m-0">Events</p>
                        </div>
                      </div>
                      {/* item 3 */}
                      <div
                        className="
                      d-flex
                      align-items-center
                      dropdown-item
                      p-0
                      m-0
                    "
                      >
                        <div className="p-2">
                        <i className="icons newfeed-icon"></i>
                        </div>
                        <div>
                          <p className="m-0">Newsfeed</p>
                        </div>
                      </div>
                      {/* end */}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          {/* terms */}
          <div className="p-2 mt-5">
            <p className="text-muted fs-7">
              Privacy • Terms • Advertising • Ad Choices • Cookies • Flexbook ©
              2021
            </p>
          </div>
        </div>
      </div>
      {/* ================= Timeline ================= */}
      <div className="col-12 col-lg-6 pb-5">
        <div
          className="d-flex flex-column justify-content-center w-100 mx-auto"
          style={{ paddingTop: 56, maxWidth: 680 }}
        >
          {/* stories */}
          <div className="mt-5 d-flex justify-content-between position-relative">
            {/* s 1 */}
            <div
              className="mx-1 bg-white rounded story"
              type="button"
              style={{ width: "6em", height: 190 }}
            >
              <img
                src={userLogin.profilePicture}
                className="card-img-top"
                alt="story posts"
                style={{ minHeight: 125, objectFit: "cover" }}
              />
              <div
                className="
              d-flex
              align-items-center
              justify-content-center
              position-relative
            "
                style={{ minHeight: 65 }}
              >
                <p className="mb-0 text-center fs-7 fw-bold">Create Story</p>
                <div className="position-absolute top-0 start-50 translate-middle">
                  <i
                    className="
                  fas
                  fa-plus-circle
                  fs-3
                  text-primary
                  bg-white
                  p-1
                  rounded-circle
                "
                  />
                </div>
              </div>
            </div>
            {/* s 2 */}
            <div
              className="rounded mx-1 story"
              type="button"
              style={{ width: "6em", height: 190 }}
            >
              <img
                src="https://source.unsplash.com/random/2"
                className="card-img-top rounded"
                alt="story posts"
                style={{ minHeight: 190, objectFit: "cover" }}
              />
            </div>
            {/* s 3 */}
            <div
              className="rounded mx-1 story"
              type="button"
              style={{ width: "6em", height: 190 }}
            >
              <img
                src="https://source.unsplash.com/random/3"
                className="card-img-top rounded"
                alt="story posts"
                style={{ minHeight: 190, objectFit: "cover" }}
              />
            </div>
            {/* s 4 */}
            <div
              className="rounded mx-1 story"
              type="button"
              style={{ width: "6em", height: 190 }}
            >
              <img
                src="https://source.unsplash.com/random/4"
                className="card-img-top rounded"
                alt="story posts"
                style={{ minHeight: 190, objectFit: "cover" }}
              />
            </div>
            {/* s 5 */}
            <div
              className="d-none d-lg-block rounded mx-1 story"
              type="button"
              style={{ width: "6em", height: 190 }}
            >
              <img
                src="https://source.unsplash.com/random/5"
                className="card-img-top rounded"
                alt="story posts"
                style={{ minHeight: 190, objectFit: "cover" }}
              />
            </div>
            {/* s 6 */}
            <div
              className="d-none d-lg-block rounded mx-1 story"
              type="button"
              style={{ width: "6em", height: 190 }}
            >
              <img
                src="https://source.unsplash.com/random/6"
                className="card-img-top rounded"
                alt="story posts"
                style={{ minHeight: 190, objectFit: "cover" }}
              />
            </div>
            {/* next icon */}
            <div
              className="
            position-absolute
            top-50
            start-100
            translate-middle
            pointer
            d-none d-lg-block
          "
            >
              <i
                className="
              fas
              fa-arrow-right
              p-3
              border
              text-muted
              bg-white
              rounded-circle
            "
              />
            </div>
          </div>
          {/* create post */}
          <CreatePost {...{userLogin,posts,getPosts}}/>
          {/* create room */}
          <div
            className="
          bg-white
          p-3
          mt-3
          rounded
          border
          shadow
          d-flex
          justify-content-between
          position-relative
        "
          >
            {/* btn */}
            <div>
              <button className="btn rounded-pill btn-info">
                <i className="fas fa-video me-3" />
                Create Room
              </button>
            </div>
            {/* slider mobile */}
            <div className="d-xxl-none">
              <img
                src="https://source.unsplash.com/random/1"
                alt="avatar"
                className="rounded-circle me-2"
                style={{ width: 38, height: 38, objectFit: "cover" }}
              />
              <img
                src="https://source.unsplash.com/random/2"
                alt="avatar"
                className="rounded-circle me-2"
                style={{ width: 38, height: 38, objectFit: "cover" }}
              />
              <img
                src="https://source.unsplash.com/random/3"
                alt="avatar"
                className="rounded-circle me-2"
                style={{ width: 38, height: 38, objectFit: "cover" }}
              />
              <img
                src="https://source.unsplash.com/random/4"
                alt="avatar"
                className="rounded-circle me-2"
                style={{ width: 38, height: 38, objectFit: "cover" }}
              />
            </div>
            {/* slider desktop */}
            <div className="d-none d-xxl-block" style={{ maxWidth: 450 }}>
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://source.unsplash.com/random/1"
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={{ width: 38, height: 38, objectFit: "cover" }}
                    />
                    <img
                      src="https://source.unsplash.com/random/2"
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={{ width: 38, height: 38, objectFit: "cover" }}
                    />
                    <img
                      src="https://source.unsplash.com/random/3"
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={{ width: 38, height: 38, objectFit: "cover" }}
                    />
                    <img
                      src="https://source.unsplash.com/random/4"
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={{ width: 38, height: 38, objectFit: "cover" }}
                    />
                    <img
                      src="https://source.unsplash.com/random/5"
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={{ width: 38, height: 38, objectFit: "cover" }}
                    />
                    <img
                      src="https://source.unsplash.com/random/6"
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={{ width: 38, height: 38, objectFit: "cover" }}
                    />
                    <img
                      src="https://source.unsplash.com/random/7"
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={{ width: 38, height: 38, objectFit: "cover" }}
                    />
                    <img
                      src="https://source.unsplash.com/random/8"
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={{ width: 38, height: 38, objectFit: "cover" }}
                    />
                    <img
                      src="https://source.unsplash.com/random/9"
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={{ width: 38, height: 38, objectFit: "cover" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://source.unsplash.com/random/1"
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={{ width: 38, height: 38, objectFit: "cover" }}
                    />
                    <img
                      src="https://source.unsplash.com/random/2"
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={{ width: 38, height: 38, objectFit: "cover" }}
                    />
                    <img
                      src="https://source.unsplash.com/random/3"
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={{ width: 38, height: 38, objectFit: "cover" }}
                    />
                    <img
                      src="https://source.unsplash.com/random/4"
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={{ width: 38, height: 38, objectFit: "cover" }}
                    />
                    <img
                      src="https://source.unsplash.com/random/5"
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={{ width: 38, height: 38, objectFit: "cover" }}
                    />
                    <img
                      src="https://source.unsplash.com/random/6"
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={{ width: 38, height: 38, objectFit: "cover" }}
                    />
                    <img
                      src="https://source.unsplash.com/random/7"
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={{ width: 38, height: 38, objectFit: "cover" }}
                    />
                    <img
                      src="https://source.unsplash.com/random/8"
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={{ width: 38, height: 38, objectFit: "cover" }}
                    />
                    <img
                      src="https://source.unsplash.com/random/9"
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={{ width: 38, height: 38, objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* slider btn */}
            <div
              className="
            position-absolute
            start-0
            top-50
            translate-middle
            d-none d-xxl-block
          "
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <div
                className="
              p-2
              bg-white
              border
              rounded-circle
              d-flex
              justify-content-center
              align-items-center
              pointer
              story
            "
                style={{ width: 30, height: 30 }}
              >
                <i className="fas fa-chevron-left text-muted" />
              </div>
            </div>
            <div
              className="
            position-absolute
            start-100
            top-50
            translate-middle
            d-none d-xxl-block
          "
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <div
                className="
              p-2
              bg-white
              border
              rounded-circle
              d-flex
              justify-content-center
              align-items-center
              pointer
              story
            "
                style={{ width: 30, height: 30 }}
              >
                <i className="fas fa-chevron-right text-muted" />
              </div>
            </div>
          </div>
          {/* posts */}
          {
            posts && users && posts.sort((a,b)=>{a.updatedAt - b.updatedAt}).map((post,index)=>{
              return (
                <Post key={index} {...{post}}/>
              )
            })
          }
        </div>
      </div>
      {/* ================= Chatbar ================= */}
      <div className="col-12 col-lg-3">
        <div
          className="
        d-none d-xxl-block
        h-100
        end-0
        overflow-hidden
        scrollbar
      "
          style={{
            maxWidth: 360,
            width: "100%",
            zIndex: 4,
            paddingTop: 56,
            left: "initial !important"
          }}
        >
          <div className="p-3 mt-4">
            {/* sponsors */}
            <h5 className="text-muted">Sponsored</h5>
            {/* s 1 */}
            <li className="dropdown-item my-2 d-flex justify-content-between">
              {/* img */}
              <a
                href="#"
                className="
              d-flex
              align-items-center
              text-decoration-none
              link-dark
            "
              >
                <img
                  src="https://source.unsplash.com/random/1"
                  alt="ads"
                  style={{ width: 100, height: 100, objectFit: "cover" }}
                  className="rounded me-3"
                />
                <div>
                  <p className="m-0">Lorem ipsum</p>
                  <span className="text-muted fs-7">loremipsum.com</span>
                </div>
              </a>
              {/* icon */}
              <div
                className="
              rounded-circle
              p-1
              bg-white
              d-flex
              align-items-center
              justify-content-center
              mx-2
              sponsor-icon
              nav-item
            "
                type="button"
                style={{ width: 38, height: 38 }}
              >
                <i
                  className="fas fa-ellipsis-h text-muted p-2"
                  data-bs-toggle="dropdown"
                />
                {/* menu */}
                <ul className="dropdown-menu">
                  {/* item 1 */}
                  <li className="dropdown-item">
                    <a
                      href="#"
                      className="
                    d-flex
                    align-items-center
                    text-decoration-none text-dark
                  "
                    >
                      <i className="far fa-window-close" />
                      <div className="ms-3">
                        <p className="m-0">Hide Ad</p>
                        <span className="text-muted fs-7">
                          Never see this add again.
                        </span>
                      </div>
                    </a>
                  </li>
                  {/* item 2 */}
                  <li className="dropdown-item">
                    <a
                      href="#"
                      className="
                    d-flex
                    align-items-center
                    text-decoration-none text-dark
                  "
                    >
                      <i className="fas fa-exclamation-triangle" />
                      <div className="ms-3">
                        <p className="m-0">Report Ad</p>
                        <span className="text-muted fs-7">
                          Tell us a problem with this add.
                        </span>
                      </div>
                    </a>
                  </li>
                  {/* item 3 */}
                  <li className="dropdown-item">
                    <a
                      href="#"
                      className="
                    d-flex
                    align-items-center
                    text-decoration-none text-dark
                  "
                    >
                      <i className="fas fa-info-circle" />
                      <div className="ms-3">
                        <p className="m-0">Why am I seeing this ad?</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            {/* s 2 */}
            <li className="dropdown-item my-2 d-flex justify-content-between">
              {/* img */}
              <a
                href="#"
                className="
              d-flex
              align-items-center
              text-decoration-none
              link-dark
            "
              >
                <img
                  src="https://source.unsplash.com/random/2"
                  alt="ads"
                  style={{ width: 100, height: 100, objectFit: "cover" }}
                  className="rounded me-3"
                />
                <div>
                  <p className="m-0">Lorem ipsum</p>
                  <span className="text-muted fs-7">loremipsum.com</span>
                </div>
              </a>
              {/* icon */}
              <div
                className="
              rounded-circle
              p-1
              bg-white
              d-flex
              align-items-center
              justify-content-center
              mx-2
              sponsor-icon
              nav-item
            "
                type="button"
                style={{ width: 38, height: 38 }}
              >
                <i
                  className="fas fa-ellipsis-h text-muted p-2"
                  data-bs-toggle="dropdown"
                />
                {/* menu */}
                <ul className="dropdown-menu">
                  {/* item 1 */}
                  <li className="dropdown-item">
                    <a
                      href="#"
                      className="
                    d-flex
                    align-items-center
                    text-decoration-none text-dark
                  "
                    >
                      <i className="far fa-window-close" />
                      <div className="ms-3">
                        <p className="m-0">Hide Ad</p>
                        <span className="text-muted fs-7">
                          Never see this add again.
                        </span>
                      </div>
                    </a>
                  </li>
                  {/* item 2 */}
                  <li className="dropdown-item">
                    <a
                      href="#"
                      className="
                    d-flex
                    align-items-center
                    text-decoration-none text-dark
                  "
                    >
                      <i className="fas fa-exclamation-triangle" />
                      <div className="ms-3">
                        <p className="m-0">Report Ad</p>
                        <span className="text-muted fs-7">
                          Tell us a problem with this add.
                        </span>
                      </div>
                    </a>
                  </li>
                  {/* item 3 */}
                  <li className="dropdown-item">
                    <a
                      href="#"
                      className="
                    d-flex
                    align-items-center
                    text-decoration-none text-dark
                  "
                    >
                      <i className="fas fa-info-circle" />
                      <div className="ms-3">
                        <p className="m-0">Why am I seeing this ad?</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            {/* contacts */}
            <hr className="m-0" />
            <div className="my-3 d-flex justify-content-between align-items-center">
              <p className="text-muted fs-5 m-0">Contacts</p>
              {/* icons */}
              <div className="text-muted">
                {/* video room */}
                <i
                  className="fas fa-video mx-2 pointer"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#videoRoomD"
                />
                {/* video room modal */}
                <div
                  className="modal fade"
                  id="videoRoomD"
                  tabIndex={-1}
                  aria-labelledby="videoRoomDLabel"
                  aria-hidden="true"
                  data-bs-backdrop="false"
                >
                  <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content bg-dark">
                      {/* header */}
                      <div className="modal-header border-0">
                        <button
                          type="button"
                          className="btn-close btn-close-white"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      {/* body */}
                      <div
                        className="
                      modal-body
                      d-flex
                      flex-column
                      align-items-center
                      justify-content-center
                    "
                        style={{ minHeight: 400 }}
                      >
                        <i className="fas fa-video fs-0" />
                        <h3 className="text-white">
                          Schedule A Room For Later
                        </h3>
                        <p className="text-white text-center w-50 mx-auto">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ut deserunt alias laudantium itaque eius enim
                          natus culpa eligendi consectetur maiores!
                        </p>
                        <button className="btn btn-lg btn-primary rounded-pill">
                          Schedule Room
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* new chat */}
                <i
                  className="fas fa-search mx-2 pointer"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#newChat"
                />
                {/* chat settings */}
                <i
                  className="fas fa-ellipsis-h pointer text-muted mx-2"
                  type="button"
                  data-bs-toggle="dropdown"
                />
                {/* chat setting dd */}
                <ul className="dropdown-menu shadow" style={{ width: "18em" }}>
                  {/* title */}
                  <div className="p-2">
                    <h5>Chat Settings</h5>
                    <span className="text-muted fs-7">
                      Customize your Messenger experience.
                    </span>
                  </div>
                  <hr />
                  {/* incoming sound */}
                  <li>
                    <div
                      className="
                    dropdown-item
                    d-flex
                    align-items-center
                    justify-content-between
                  "
                    >
                      {/* icon */}
                      <div className="d-flex align-items-center">
                        <i className="fas fa-phone-alt me-3" />
                        <p className="m-0">Incoming call sounds</p>
                      </div>
                      {/* toggle */}
                      <div className="form-check form-switch m-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        />
                      </div>
                    </div>
                  </li>
                  {/* message sound */}
                  <li>
                    <div
                      className="
                    dropdown-item
                    d-flex
                    align-items-center
                    justify-content-between
                  "
                    >
                      {/* icon */}
                      <div className="d-flex align-items-center">
                        <i className="fas fa-volume-off me-4 fs-4" />
                        <p className="m-0">Message sounds</p>
                      </div>
                      {/* toggle */}
                      <div className="form-check form-switch m-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        />
                      </div>
                    </div>
                  </li>
                  {/* popup message */}
                  <li>
                    <div
                      className="
                    dropdown-item
                    d-flex
                    align-items-center
                    justify-content-between
                  "
                    >
                      {/* icon */}
                      <div className="d-flex align-items-center">
                        <i className="fas fa-spinner me-3" />
                        <p className="m-0">Pop-up new messages</p>
                      </div>
                      {/* toggle */}
                      <div className="form-check form-switch m-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        />
                      </div>
                    </div>
                    <span className="ms-5 text-muted fs-7">
                      Automatically open new messages.
                    </span>
                  </li>
                  <hr className="m-0" />
                  {/* item 1 */}
                  <li>
                    <div
                      className="
                    dropdown-item
                    d-flex
                    align-items-center
                    justify-content-between
                  "
                    >
                      {/* icon */}
                      <div className="d-flex align-items-center">
                        <i className="fas fa-toggle-off me-3" />
                        <p className="m-0">Turn Off Active Status</p>
                      </div>
                    </div>
                  </li>
                  {/* item 2 */}
                  <li>
                    <div
                      className="
                    dropdown-item
                    d-flex
                    align-items-center
                    justify-content-between
                  "
                    >
                      {/* icon */}
                      <div className="d-flex align-items-center">
                        <i className="far fa-comment-alt me-3" />
                        <p className="m-0">Message Request</p>
                      </div>
                    </div>
                  </li>
                  {/* item 3 */}
                  <li>
                    <div
                      className="
                    dropdown-item
                    d-flex
                    align-items-center
                    justify-content-between
                  "
                    >
                      {/* icon */}
                      <div className="d-flex align-items-center">
                        <i className="fas fa-share-square me-3" />
                        <p className="m-0">Message delivery settings</p>
                      </div>
                    </div>
                  </li>
                  {/* item 4 */}
                  <li>
                    <div
                      className="
                    dropdown-item
                    d-flex
                    align-items-center
                    justify-content-between
                  "
                    >
                      {/* icon */}
                      <div className="d-flex align-items-center">
                        <i className="fas fa-shield-alt me-3" />
                        <p className="m-0">Block settings</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* friend 1 */}
            <li
              className="dropdown-item rounded my-2 px-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat1"
            >
              {/* avatar */}
              <div
                className="d-flex align-items-center mx-2 chat-avatar"
                data-bs-custom-class="chat-box"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                data-bs-content='
              <div>
                <div class="popover-body d-flex p-2">
                  <div>
                    <img src="https://source.unsplash.com/random/4" alt="avatar" class="pop-avatar"  />
                  </div>
                  <div >
                    <h5>Mike</h5>
                    <div class="d-flex">
                      <i class="fas fa-user-friends m-1 text-muted"></i>
                      <p>2 mutual friends: <span class="fw-bold">Jerry</span> and <span class="fw-bold">Phu</span></p>
                    </div>
                    <div class="d-flex">
                    <i class="fas fa-graduation-cap m-1 text-muted"></i>
                    <p>Studies at MIT</p>
                    </div>
                  </div>
                </div>
              </div>
            '
                data-bs-html="true"
              >
                <div className="position-relative">
                  <img
                    src="https://source.unsplash.com/random/4"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{ width: 38, height: 38, objectFit: "cover" }}
                  />
                  <span
                    className="
                  position-absolute
                  bottom-0
                  translate-middle
                  border border-light
                  rounded-circle
                  bg-success
                  p-1
                "
                    style={{ left: "75%" }}
                  >
                    <span className="visually-hidden" />
                  </span>
                </div>
                <p className="m-0">Mike</p>
              </div>
            </li>
            {/* friend 2 */}
            <li
              className="dropdown-item rounded my-2 px-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat2"
            >
              {/* avatar */}
              <div
                className="d-flex align-items-center mx-2 chat-avatar"
                data-bs-custom-class="chat-box"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                data-bs-content='
                    <div>
                      <div class="popover-body d-flex p-2">
                        <div>
                          <img src="https://source.unsplash.com/random/2" alt="avatar" class="pop-avatar"  />
                        </div>
                        <div >
                          <h5>Tuan</h5>
                          <div class="d-flex">
                            <i class="fas fa-user-friends m-1 text-muted"></i>
                            <p>2 mutual friends: <span class="fw-bold">Jerry</span> and <span class="fw-bold">Phu</span></p>
                          </div>
                          <div class="d-flex">
                          <i class="fas fa-graduation-cap m-1 text-muted"></i>
                          <p>Studies at MIT</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  '
                data-bs-html="true"
              >
                <div className="position-relative">
                  <img
                    src="https://source.unsplash.com/random/2"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{ width: 38, height: 38, objectFit: "cover" }}
                  />
                  <span
                    className="
                  position-absolute
                  bottom-0
                  translate-middle
                  border border-light
                  rounded-circle
                  bg-success
                  p-1
                "
                    style={{ left: "75%" }}
                  >
                    <span className="visually-hidden" />
                  </span>
                </div>
                <p className="m-0">Tuan</p>
              </div>
            </li>
            {/* friend 3 */}
            <li
              className="dropdown-item rounded my-2 px-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat3"
            >
              {/* avatar */}
              <div
                className="d-flex align-items-center mx-2 chat-avatar"
                data-bs-custom-class="chat-box"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                data-bs-content='
                        <div>
                          <div class="popover-body d-flex p-2">
                            <div>
                              <img src="https://source.unsplash.com/random/3" alt="avatar" class="pop-avatar"  />
                            </div>
                            <div >
                              <h5>Jerry</h5>
                              <div class="d-flex">
                                <i class="fas fa-user-friends m-1 text-muted"></i>
                                <p>2 mutual friends: <span class="fw-bold">Jerry</span> and <span class="fw-bold">Phu</span></p>
                              </div>
                              <div class="d-flex">
                              <i class="fas fa-graduation-cap m-1 text-muted"></i>
                              <p>Studies at MIT</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      '
                data-bs-html="true"
              >
                <div className="position-relative">
                  <img
                    src="https://source.unsplash.com/random/3"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{ width: 38, height: 38, objectFit: "cover" }}
                  />
                  <span
                    className="
                  position-absolute
                  bottom-0
                  translate-middle
                  border border-light
                  rounded-circle
                  bg-success
                  p-1
                "
                    style={{ left: "75%" }}
                  >
                    <span className="visually-hidden" />
                  </span>
                </div>
                <p className="m-0">Jerry</p>
              </div>
            </li>
            {/* friend 4 */}
            <li
              className="dropdown-item rounded my-2 px-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat4"
            >
              {/* avatar */}
              <div
                className="d-flex align-items-center mx-2 chat-avatar"
                data-bs-custom-class="chat-box"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                data-bs-content='
                    <div>
                      <div class="popover-body d-flex p-2">
                        <div>
                          <img src="https://source.unsplash.com/random/4" alt="avatar" class="pop-avatar"  />
                        </div>
                        <div >
                          <h5>Tony</h5>
                          <div class="d-flex">
                            <i class="fas fa-user-friends m-1 text-muted"></i>
                            <p>2 mutual friends: <span class="fw-bold">Jerry</span> and <span class="fw-bold">Phu</span></p>
                          </div>
                          <div class="d-flex">
                          <i class="fas fa-graduation-cap m-1 text-muted"></i>
                          <p>Studies at MIT</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  '
                data-bs-html="true"
              >
                <div className="position-relative">
                  <img
                    src="https://source.unsplash.com/random/4"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{ width: 38, height: 38, objectFit: "cover" }}
                  />
                  <span
                    className="
                  position-absolute
                  bottom-0
                  translate-middle
                  border border-light
                  rounded-circle
                  bg-success
                  p-1
                "
                    style={{ left: "75%" }}
                  >
                    <span className="visually-hidden" />
                  </span>
                </div>
                <p className="m-0">Tony</p>
              </div>
            </li>
            {/* friend 5 */}
            <li
              className="dropdown-item rounded my-2 px-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat5"
            >
              {/* avatar */}
              <div
                className="d-flex align-items-center mx-2 chat-avatar"
                data-bs-custom-class="chat-box"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                data-bs-content='
                <div>
                  <div class="popover-body d-flex p-2">
                    <div>
                      <img src="https://source.unsplash.com/random/5" alt="avatar" class="pop-avatar"  />
                    </div>
                    <div >
                      <h5>Phu</h5>
                      <div class="d-flex">
                        <i class="fas fa-user-friends m-1 text-muted"></i>
                        <p>2 mutual friends: <span class="fw-bold">Jerry</span> and <span class="fw-bold">Phu</span></p>
                      </div>
                      <div class="d-flex">
                      <i class="fas fa-graduation-cap m-1 text-muted"></i>
                      <p>Studies at MIT</p>
                      </div>
                    </div>
                  </div>
                </div>
              '
                data-bs-html="true"
              >
                <div className="position-relative">
                  <img
                    src="https://source.unsplash.com/random/5"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{ width: 38, height: 38, objectFit: "cover" }}
                  />
                  <span
                    className="
                  position-absolute
                  bottom-0
                  translate-middle
                  border border-light
                  rounded-circle
                  bg-success
                  p-1
                "
                    style={{ left: "75%" }}
                  >
                    <span className="visually-hidden" />
                  </span>
                </div>
                <p className="m-0">Phu</p>
              </div>
            </li>
            {/* friend 6 */}
            <li
              className="dropdown-item rounded my-2 px-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat1"
            >
              {/* avatar */}
              <div
                className="d-flex align-items-center mx-2 chat-avatar"
                data-bs-custom-class="chat-box"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                data-bs-content='
                            <div>
                              <div class="popover-body d-flex p-2">
                                <div>
                                  <img src="https://source.unsplash.com/random/4" alt="avatar" class="pop-avatar"  />
                                </div>
                                <div >
                                  <h5>Mike</h5>
                                  <div class="d-flex">
                                    <i class="fas fa-user-friends m-1 text-muted"></i>
                                    <p>2 mutual friends: <span class="fw-bold">Jerry</span> and <span class="fw-bold">Phu</span></p>
                                  </div>
                                  <div class="d-flex">
                                  <i class="fas fa-graduation-cap m-1 text-muted"></i>
                                  <p>Studies at MIT</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          '
                data-bs-html="true"
              >
                <div className="position-relative">
                  <img
                    src="https://source.unsplash.com/random/4"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{ width: 38, height: 38, objectFit: "cover" }}
                  />
                  <span
                    className="
                  position-absolute
                  bottom-0
                  translate-middle
                  border border-light
                  rounded-circle
                  bg-success
                  p-1
                "
                    style={{ left: "75%" }}
                  >
                    <span className="visually-hidden" />
                  </span>
                </div>
                <p className="m-0">Mike</p>
              </div>
            </li>
            {/* friend 7 */}
            <li
              className="dropdown-item rounded my-2 px-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat2"
            >
              {/* avatar */}
              <div
                className="d-flex align-items-center mx-2 chat-avatar"
                data-bs-custom-class="chat-box"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                data-bs-content='
                                  <div>
                                    <div class="popover-body d-flex p-2">
                                      <div>
                                        <img src="https://source.unsplash.com/random/2" alt="avatar" class="pop-avatar"  />
                                      </div>
                                      <div >
                                        <h5>Tuan</h5>
                                        <div class="d-flex">
                                          <i class="fas fa-user-friends m-1 text-muted"></i>
                                          <p>2 mutual friends: <span class="fw-bold">Jerry</span> and <span class="fw-bold">Phu</span></p>
                                        </div>
                                        <div class="d-flex">
                                        <i class="fas fa-graduation-cap m-1 text-muted"></i>
                                        <p>Studies at MIT</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                '
                data-bs-html="true"
              >
                <div className="position-relative">
                  <img
                    src="https://source.unsplash.com/random/2"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{ width: 38, height: 38, objectFit: "cover" }}
                  />
                  <span
                    className="
                  position-absolute
                  bottom-0
                  translate-middle
                  border border-light
                  rounded-circle
                  bg-success
                  p-1
                "
                    style={{ left: "75%" }}
                  >
                    <span className="visually-hidden" />
                  </span>
                </div>
                <p className="m-0">Tuan</p>
              </div>
            </li>
            {/* friend 8 */}
            <li
              className="dropdown-item rounded my-2 px-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat3"
            >
              {/* avatar */}
              <div
                className="d-flex align-items-center mx-2 chat-avatar"
                data-bs-custom-class="chat-box"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                data-bs-content='
                                      <div>
                                        <div class="popover-body d-flex p-2">
                                          <div>
                                            <img src="https://source.unsplash.com/random/3" alt="avatar" class="pop-avatar"  />
                                          </div>
                                          <div >
                                            <h5>Jerry</h5>
                                            <div class="d-flex">
                                              <i class="fas fa-user-friends m-1 text-muted"></i>
                                              <p>2 mutual friends: <span class="fw-bold">Jerry</span> and <span class="fw-bold">Phu</span></p>
                                            </div>
                                            <div class="d-flex">
                                            <i class="fas fa-graduation-cap m-1 text-muted"></i>
                                            <p>Studies at MIT</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    '
                data-bs-html="true"
              >
                <div className="position-relative">
                  <img
                    src="https://source.unsplash.com/random/3"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{ width: 38, height: 38, objectFit: "cover" }}
                  />
                  <span
                    className="
                  position-absolute
                  bottom-0
                  translate-middle
                  border border-light
                  rounded-circle
                  bg-success
                  p-1
                "
                    style={{ left: "75%" }}
                  >
                    <span className="visually-hidden" />
                  </span>
                </div>
                <p className="m-0">Jerry</p>
              </div>
            </li>
            {/* friend 9 */}
            <li
              className="dropdown-item rounded my-2 px-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat4"
            >
              {/* avatar */}
              <div
                className="d-flex align-items-center mx-2 chat-avatar"
                data-bs-custom-class="chat-box"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                data-bs-content='
                                  <div>
                                    <div class="popover-body d-flex p-2">
                                      <div>
                                        <img src="https://source.unsplash.com/random/4" alt="avatar" class="pop-avatar"  />
                                      </div>
                                      <div >
                                        <h5>Tony</h5>
                                        <div class="d-flex">
                                          <i class="fas fa-user-friends m-1 text-muted"></i>
                                          <p>2 mutual friends: <span class="fw-bold">Jerry</span> and <span class="fw-bold">Phu</span></p>
                                        </div>
                                        <div class="d-flex">
                                        <i class="fas fa-graduation-cap m-1 text-muted"></i>
                                        <p>Studies at MIT</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                '
                data-bs-html="true"
              >
                <div className="position-relative">
                  <img
                    src="https://source.unsplash.com/random/4"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{ width: 38, height: 38, objectFit: "cover" }}
                  />
                  <span
                    className="
                  position-absolute
                  bottom-0
                  translate-middle
                  border border-light
                  rounded-circle
                  bg-success
                  p-1
                "
                    style={{ left: "75%" }}
                  >
                    <span className="visually-hidden" />
                  </span>
                </div>
                <p className="m-0">Tony</p>
              </div>
            </li>
            {/* friend 10 */}
            <li
              className="dropdown-item rounded my-2 px-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat5"
            >
              {/* avatar */}
              <div
                className="d-flex align-items-center mx-2 chat-avatar"
                data-bs-custom-class="chat-box"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                data-bs-content='
                              <div>
                                <div class="popover-body d-flex p-2">
                                  <div>
                                    <img src="https://source.unsplash.com/random/5" alt="avatar" class="pop-avatar"  />
                                  </div>
                                  <div >
                                    <h5>Phu</h5>
                                    <div class="d-flex">
                                      <i class="fas fa-user-friends m-1 text-muted"></i>
                                      <p>2 mutual friends: <span class="fw-bold">Jerry</span> and <span class="fw-bold">Phu</span></p>
                                    </div>
                                    <div class="d-flex">
                                    <i class="fas fa-graduation-cap m-1 text-muted"></i>
                                    <p>Studies at MIT</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            '
                data-bs-html="true"
              >
                <div className="position-relative">
                  <img
                    src="https://source.unsplash.com/random/5"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{ width: 38, height: 38, objectFit: "cover" }}
                  />
                  <span
                    className="
                  position-absolute
                  bottom-0
                  translate-middle
                  border border-light
                  rounded-circle
                  bg-success
                  p-1
                "
                    style={{ left: "75%" }}
                  >
                    <span className="visually-hidden" />
                  </span>
                </div>
                <p className="m-0">Phu</p>
              </div>
            </li>
            {/* friend 11 */}
            <li
              className="dropdown-item rounded my-2 px-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat1"
            >
              {/* avatar */}
              <div
                className="d-flex align-items-center mx-2 chat-avatar"
                data-bs-custom-class="chat-box"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                data-bs-content='
              <div>
                <div class="popover-body d-flex p-2">
                  <div>
                    <img src="https://source.unsplash.com/random/4" alt="avatar" class="pop-avatar"  />
                  </div>
                  <div >
                    <h5>Mike</h5>
                    <div class="d-flex">
                      <i class="fas fa-user-friends m-1 text-muted"></i>
                      <p>2 mutual friends: <span class="fw-bold">Jerry</span> and <span class="fw-bold">Phu</span></p>
                    </div>
                    <div class="d-flex">
                    <i class="fas fa-graduation-cap m-1 text-muted"></i>
                    <p>Studies at MIT</p>
                    </div>
                  </div>
                </div>
              </div>
            '
                data-bs-html="true"
              >
                <div className="position-relative">
                  <img
                    src="https://source.unsplash.com/random/4"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{ width: 38, height: 38, objectFit: "cover" }}
                  />
                  <span
                    className="
                  position-absolute
                  bottom-0
                  translate-middle
                  border border-light
                  rounded-circle
                  bg-success
                  p-1
                "
                    style={{ left: "75%" }}
                  >
                    <span className="visually-hidden" />
                  </span>
                </div>
                <p className="m-0">Mike</p>
              </div>
            </li>
            {/* friend 12 */}
            <li
              className="dropdown-item rounded my-2 px-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat2"
            >
              {/* avatar */}
              <div
                className="d-flex align-items-center mx-2 chat-avatar"
                data-bs-custom-class="chat-box"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                data-bs-content='
                    <div>
                      <div class="popover-body d-flex p-2">
                        <div>
                          <img src="https://source.unsplash.com/random/2" alt="avatar" class="pop-avatar"  />
                        </div>
                        <div >
                          <h5>Tuan</h5>
                          <div class="d-flex">
                            <i class="fas fa-user-friends m-1 text-muted"></i>
                            <p>2 mutual friends: <span class="fw-bold">Jerry</span> and <span class="fw-bold">Phu</span></p>
                          </div>
                          <div class="d-flex">
                          <i class="fas fa-graduation-cap m-1 text-muted"></i>
                          <p>Studies at MIT</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  '
                data-bs-html="true"
              >
                <div className="position-relative">
                  <img
                    src="https://source.unsplash.com/random/2"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{ width: 38, height: 38, objectFit: "cover" }}
                  />
                  <span
                    className="
                  position-absolute
                  bottom-0
                  translate-middle
                  border border-light
                  rounded-circle
                  bg-success
                  p-1
                "
                    style={{ left: "75%" }}
                  >
                    <span className="visually-hidden" />
                  </span>
                </div>
                <p className="m-0">Tuan</p>
              </div>
            </li>
            {/* friend 13 */}
            <li
              className="dropdown-item rounded my-2 px-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat3"
            >
              {/* avatar */}
              <div
                className="d-flex align-items-center mx-2 chat-avatar"
                data-bs-custom-class="chat-box"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                data-bs-content='
                        <div>
                          <div class="popover-body d-flex p-2">
                            <div>
                              <img src="https://source.unsplash.com/random/3" alt="avatar" class="pop-avatar"  />
                            </div>
                            <div >
                              <h5>Jerry</h5>
                              <div class="d-flex">
                                <i class="fas fa-user-friends m-1 text-muted"></i>
                                <p>2 mutual friends: <span class="fw-bold">Jerry</span> and <span class="fw-bold">Phu</span></p>
                              </div>
                              <div class="d-flex">
                              <i class="fas fa-graduation-cap m-1 text-muted"></i>
                              <p>Studies at MIT</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      '
                data-bs-html="true"
              >
                <div className="position-relative">
                  <img
                    src="https://source.unsplash.com/random/3"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{ width: 38, height: 38, objectFit: "cover" }}
                  />
                  <span
                    className="
                  position-absolute
                  bottom-0
                  translate-middle
                  border border-light
                  rounded-circle
                  bg-success
                  p-1
                "
                    style={{ left: "75%" }}
                  >
                    <span className="visually-hidden" />
                  </span>
                </div>
                <p className="m-0">Jerry</p>
              </div>
            </li>
            {/* friend 14 */}
            <li
              className="dropdown-item rounded my-2 px-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat4"
            >
              {/* avatar */}
              <div
                className="d-flex align-items-center mx-2 chat-avatar"
                data-bs-custom-class="chat-box"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                data-bs-content='
                    <div>
                      <div class="popover-body d-flex p-2">
                        <div>
                          <img src="https://source.unsplash.com/random/4" alt="avatar" class="pop-avatar"  />
                        </div>
                        <div >
                          <h5>Tony</h5>
                          <div class="d-flex">
                            <i class="fas fa-user-friends m-1 text-muted"></i>
                            <p>2 mutual friends: <span class="fw-bold">Jerry</span> and <span class="fw-bold">Phu</span></p>
                          </div>
                          <div class="d-flex">
                          <i class="fas fa-graduation-cap m-1 text-muted"></i>
                          <p>Studies at MIT</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  '
                data-bs-html="true"
              >
                <div className="position-relative">
                  <img
                    src="https://source.unsplash.com/random/4"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{ width: 38, height: 38, objectFit: "cover" }}
                  />
                  <span
                    className="
                  position-absolute
                  bottom-0
                  translate-middle
                  border border-light
                  rounded-circle
                  bg-success
                  p-1
                "
                    style={{ left: "75%" }}
                  >
                    <span className="visually-hidden" />
                  </span>
                </div>
                <p className="m-0">Tony</p>
              </div>
            </li>
            {/* friend 15 */}
            <li
              className="dropdown-item rounded my-2 px-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#singleChat5"
            >
              {/* avatar */}
              <div
                className="d-flex align-items-center mx-2 chat-avatar"
                data-bs-custom-class="chat-box"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                data-bs-content='
                <div>
                  <div class="popover-body d-flex p-2">
                    <div>
                      <img src="https://source.unsplash.com/random/5" alt="avatar" class="pop-avatar"  />
                    </div>
                    <div >
                      <h5>Phu</h5>
                      <div class="d-flex">
                        <i class="fas fa-user-friends m-1 text-muted"></i>
                        <p>2 mutual friends: <span class="fw-bold">Jerry</span> and <span class="fw-bold">Phu</span></p>
                      </div>
                      <div class="d-flex">
                      <i class="fas fa-graduation-cap m-1 text-muted"></i>
                      <p>Studies at MIT</p>
                      </div>
                    </div>
                  </div>
                </div>
              '
                data-bs-html="true"
              >
                <div className="position-relative">
                  <img
                    src="https://source.unsplash.com/random/5"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={{ width: 38, height: 38, objectFit: "cover" }}
                  />
                  <span
                    className="
                  position-absolute
                  bottom-0
                  translate-middle
                  border border-light
                  rounded-circle
                  bg-success
                  p-1
                "
                    style={{ left: "75%" }}
                  >
                    <span className="visually-hidden" />
                  </span>
                </div>
                <p className="m-0">Phu</p>
              </div>
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ================= Chat Icon ================= */}
  <div
    className="fixed-bottom right-100 p-3"
    style={{ zIndex: 6, left: "initial" }}
    type="button"
    data-bs-toggle="modal"
    data-bs-target="#newChat"
  >
    <i className="fas fa-edit bg-white rounded-circle p-3 shadow" />
  </div>
</div>
      )
}
