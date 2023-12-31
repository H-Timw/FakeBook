/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
export default function Post({post}) {
  return (
    <div className="bg-white p-4 rounded shadow mt-3">
            {/* author */}
            <div className="d-flex justify-content-between">
              {/* avatar */}
              <div className="d-flex">
                <img
                  src={post.user.profilePicture} //${avt}
                  alt="avatar"
                  className="rounded-circle me-2"
                  style={{ width: 38, height: 38, objectFit: "cover" }}
                />
                <div>
                  <p className="m-0 fw-bold" style={{textTransform:'capitalize'}}>{post.user.username.split(".").join(" ")}</p>
                  <span className="text-muted fs-7">{post.createdAt}</span>
                </div>
              </div>
              {/* edit */}
              <i
                className="fas fa-ellipsis-h"
                type="button"
                id="post1Menu"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              {/* edit menu */}
              <ul
                className="dropdown-menu border-0 shadow"
                aria-labelledby="post1Menu"
              >
                <li className="d-flex align-items-center">
                  <a
                    className="
                  dropdown-item
                  d-flex
                  justify-content-around
                  align-items-center
                  fs-7
                "
                    href="#"
                  >
                    Edit Post
                  </a>
                </li>
                <li className="d-flex align-items-center">
                  <a
                    className="
                  dropdown-item
                  d-flex
                  justify-content-around
                  align-items-center
                  fs-7
                "
                    href="#"
                  >
                    Delete Post
                  </a>
                </li>
              </ul>
            </div>
            {/* post content */}
            <div className="mt-3">
              {/* content */}
              <div>
                <p>
                  {post.content}
                </p>
                <img
                  src={post.postImage}
                  alt="post image"
                  className="img-fluid rounded"
                />
              </div>
              {/* likes & comments */}
              <div className="post__comment mt-3 position-relative">
                {/* likes */}
                <div
                  className="
                d-flex
                align-items-center
                top-0
                start-0
                position-absolute
              "
                  style={{ height: 50, zIndex: 5 }}
                >
                  <div className="me-2">
                    <i className="text-primary fas fa-thumbs-up" />
                    <i className="text-danger fab fa-gratipay" />
                    <i className="text-warning fas fa-grin-squint" />
                  </div>
                  <p className="m-0 text-muted fs-7">Phu, Tuan, and 3 others</p>
                </div>
                {/* comments start*/}
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item border-0">
                    {/* comment collapse */}
                    <h2 className="accordion-header" id="headingTwo">
                      <div
                        className="
                      accordion-button
                      collapsed
                      pointer
                      d-flex
                      justify-content-end
                    "
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsePost1"
                        aria-expanded="false"
                        aria-controls="collapsePost1"
                      >
                        <p className="m-0">2 Comments</p>
                      </div>
                    </h2>
                    <hr />
                    {/* comment & like bar */}
                    <div className="d-flex justify-content-around">
                      <div
                        className="
                      dropdown-item
                      rounded
                      d-flex
                      justify-content-center
                      align-items-center
                      pointer
                      text-muted
                      p-1
                    "
                      >
                        <i className="fas fa-thumbs-up me-3" />
                        <p className="m-0">Like</p>
                      </div>
                      <div
                        className="
                      dropdown-item
                      rounded
                      d-flex
                      justify-content-center
                      align-items-center
                      pointer
                      text-muted
                      p-1
                    "
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsePost1"
                        aria-expanded="false"
                        aria-controls="collapsePost1"
                      >
                        <i className="fas fa-comment-alt me-3" />
                        <p className="m-0">Comment</p>
                      </div>
                    </div>
                    {/* comment expand */}
                    <div
                      id="collapsePost1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <hr />
                      <div className="accordion-body">
                        {/* comment 1 */}
                        <div className="d-flex align-items-center my-1">
                          {/* avatar */}
                          <img
                            src="https://source.unsplash.com/collection/happy-people"
                            alt="avatar"
                            className="rounded-circle me-2"
                            style={{
                              width: 38,
                              height: 38,
                              objectFit: "cover"
                            }}
                          />
                          {/* comment text */}
                          <div className="p-3 rounded comment__input w-100">
                            {/* comment menu of author */}
                            <div className="d-flex justify-content-end">
                              {/* icon */}
                              <i
                                className="fas fa-ellipsis-h text-blue pointer"
                                id="post1CommentMenuButton"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              />
                              {/* menu */}
                              <ul
                                className="dropdown-menu border-0 shadow"
                                aria-labelledby="post1CommentMenuButton"
                              >
                                <li className="d-flex align-items-center">
                                  <a
                                    className="
                                  dropdown-item
                                  d-flex
                                  justify-content-around
                                  align-items-center
                                  fs-7
                                "
                                    href="#"
                                  >
                                    Edit Comment
                                  </a>
                                </li>
                                <li className="d-flex align-items-center">
                                  <a
                                    className="
                                  dropdown-item
                                  d-flex
                                  justify-content-around
                                  align-items-center
                                  fs-7
                                "
                                    href="#"
                                  >
                                    Delete Comment
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fw-bold m-0">John</p>
                            <p className="m-0 fs-7 bg-gray p-2 rounded">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                          </div>
                        </div>
                        {/* comment 2 */}
                        <div className="d-flex align-items-center my-1">
                          {/* avatar */}
                          <img
                            src="https://source.unsplash.com/random/2"
                            alt="avatar"
                            className="rounded-circle me-2"
                            style={{
                              width: 38,
                              height: 38,
                              objectFit: "cover"
                            }}
                          />
                          {/* comment text */}
                          <div className="p-3 rounded comment__input w-100">
                            <p className="fw-bold m-0">Jerry</p>
                            <p className="m-0 fs-7 bg-gray p-2 rounded">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                          </div>
                        </div>
                        {/* create comment */}
                        <form className="d-flex my-1">
                          {/* avatar */}
                          <div>
                            <img
                              src="https://source.unsplash.com/collection/happy-people"
                              alt="avatar"
                              className="rounded-circle me-2"
                              style={{
                                width: 38,
                                height: 38,
                                objectFit: "cover"
                              }}
                            />
                          </div>
                          {/* input */}
                          <input
                            type="text"
                            className="form-control border-0 rounded-pill bg-gray"
                            placeholder="Write a comment"
                          />
                        </form>
                        {/* end */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* end */}
              </div>
            </div>
          </div>
  )
}
