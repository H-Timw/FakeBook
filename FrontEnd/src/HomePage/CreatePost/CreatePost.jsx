import { useState } from "react"

export default function CreatePost() {
  const [contentPost , setContentPost] = useState('');
  const createPost = async function() {
    await fetch("http://localhost:8080/create-post",{
      method: 'POST',
        body: JSON.stringify(
            {
                "content" : contentPost,
            }
        ),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then( res => res.json())
    .then(post => {
        console.log(post);
        }
    )
    .catch(err=> console.log(err));
  }
  return (
    <div className="bg-white p-3 mt-3 rounded border shadow">
    {/* avatar */}
    <div className="d-flex" type="button">
      <div className="p-1">
        <img
          src="https://source.unsplash.com/collection/happy-people"
          alt="avatar"
          className="rounded-circle me-2"
          style={{ width: 38, height: 38, objectFit: "cover" }}
        />
      </div>
      <input
        type="text"
        className="form-control rounded-pill border-0 bg-gray pointer"
        disabled=""
        placeholder="What's on your mind, John?"
        data-bs-toggle="modal"
        data-bs-target="#createModal"
      />
    </div>
    {/* create modal */}
    <div
      className="modal fade"
      id="createModal"
      tabIndex={-1}
      aria-labelledby="createModalLabel"
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
              Create Post
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
            <div className="my-1 p-1">
              <div className="d-flex flex-column">
                {/* name */}
                <div className="d-flex align-items-center">
                  <div className="p-2">
                    <img
                      src="https://source.unsplash.com/collection/happy-people"
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
                    <p className="m-0 fw-bold">John</p>
                    {/* mode of post public/private */}
                    <select
                      className="form-select border-0 bg-gray w-75 fs-7"
                      aria-label="Default select example"
                    >
                      <option selected="" value={1}>
                        Public
                      </option>
                      <option value={2}>Pin To Top</option>
                      <option value={3}>Hide</option>
                    </select>
                  </div>
                </div>
                {/* text */}
                <div>
                  <textarea
                    cols={30}
                    rows={5}
                    className="form-control border-0"
                    defaultValue={""}
                    onChange={(e)=>setContentPost(e.target.value)}
                  />
                </div>
                {/* emoji & back-ground */}
                <div
                  className="
                d-flex
                justify-content-between
                align-items-center
              "
                >
                  <img
                    src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png"
                    className="pointer"
                    alt="fb text"
                    style={{
                      width: 30,
                      height: 30,
                      objectFit: "cover"
                    }}
                  />
                  <i className="far fa-laugh-wink fs-5 text-muted pointer" />
                </div>
                {/* options */}
                <div
                  className="
                d-flex
                justify-content-between
                border border-1 border-light
                rounded
                p-3
                mt-3
              "
                >
                  <p className="m-0">Add to your post</p>
                  {/* icon */}
                  <div>
                    {/* image */}
                    <i
                      className="
                    fas
                    fa-images
                    fs-5
                    text-success
                    pointer
                    mx-1
                  "
                    />
                    {/* user-tag */}
                    <i
                      className="
                    fas
                    fa-user-check
                    fs-5
                    text-primary
                    pointer
                    mx-1
                  "
                    />
                    <i
                      className="
                    far
                    fa-smile
                    fs-5
                    text-warning
                    pointer
                    mx-1
                  "
                    />
                    <i
                      className="
                    fas
                    fa-map-marker-alt
                    fs-5
                    text-info
                    pointer
                    mx-1
                  "
                    />
                    <i
                      className="
                    fas
                    fa-microphone
                    fs-5
                    text-danger
                    pointer
                    mx-1
                  "
                    />
                    <i
                      className="
                    fas
                    fa-ellipsis-h
                    fs-5
                    text-muted
                    pointer
                    mx-1
                  "
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* end */}
          </div>
          {/* footer */}
          <div className="modal-footer">
            <button type="button" className="btn btn-primary w-100">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
    <hr />
    {/* actions */}
    <div className="d-flex flex-column flex-lg-row mt-3">
      {/* a 1 live-video */}
      <div
        className="
      dropdown-item
      rounded
      d-flex
      align-items-center
      justify-content-center
    "
        type="button"
      >
        <i className="fas fa-video me-2 text-danger" />
        <p className="m-0 text-muted">Live Video</p>
      </div>
      {/* a 2 photo-video */}
      <div
        className="
      dropdown-item
      rounded
      d-flex
      align-items-center
      justify-content-center
    "
        type="button"
      >
        <i className="fas fa-photo-video me-2 text-success" />
        <p className="m-0 text-muted">Photo/Video</p>
      </div>
      {/* a 3 feelling activity */}
      <div
        className="
      dropdown-item
      rounded
      d-flex
      align-items-center
      justify-content-center
    "
        type="button"
      >
        <i className="fas fa-smile me-2 text-warning" />
        <p className="m-0 text-muted">Feeling/Activity</p>
      </div>
    </div>
  </div>
  )
}
