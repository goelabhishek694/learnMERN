let backBtn = document.querySelector(".back");
backBtn.addEventListener("click", () => {
  location.assign("./index.html");
});
setTimeout(() => {
  if (db) {
    let imageDBTRansaction = db.transaction("image", "readonly");
    let imageStore = imageDBTRansaction.objectStore("image");
    let imageRequest = imageStore.getAll();
    imageRequest.onsuccess = () => {
      let imageResult = imageRequest.result;
      let galleryCont = document.querySelector(".gallery-cont");
      imageResult.forEach((imageObj) => {
        let imageElem = document.createElement("div");
        imageElem.setAttribute("class", "media-cont");
        imageElem.setAttribute("id", imageObj.id);

        let url = imageObj.url;
        

        imageElem.innerHTML = `
            <div class="media">
            <img src="${url}"/>
            </div>
            <div class="delete action-btn">DELETE</div>
            <div class="download action-btn">DOWNLOAD</div>
        `;

        galleryCont.appendChild(imageElem);

        let deleteBtn = imageElem.querySelector(".delete");
        deleteBtn.addEventListener("click", deleteListener);

        let downloadBtn = imageElem.querySelector(".download");
        downloadBtn.addEventListener("click", downloadListener);

      });
    };

    let videoDBTRansaction = db.transaction("video", "readonly");
    let videoStore = videoDBTRansaction.objectStore("video");
    let videoRequest = videoStore.getAll();
    videoRequest.onsuccess = () => {
      let videoResult = videoRequest.result;
      let galleryCont = document.querySelector(".gallery-cont");

      // for (let i = 0; i < videoResult.length; i++) {
      //     let videoObj = videoResult[i];
      // }

      videoResult.forEach((videoObj) => {
        let videoElem = document.createElement("div");
        videoElem.setAttribute("class", "media-cont");
        videoElem.setAttribute("id", videoObj.id);
        let url = URL.createObjectURL(videoObj.blobData);

        videoElem.innerHTML = `
            <div class="media">
              <video autoplay loop src="${url}"></video>
            </div>
            <div class="delete action-btn">DELETE</div>
            <div class="download action-btn">DOWNLOAD</div>
        `;

        galleryCont.appendChild(videoElem);

        let deleteBtn = videoElem.querySelector(".delete");
        deleteBtn.addEventListener("click", deleteListener);

        let downloadBtn = videoElem.querySelector(".download");
        downloadBtn.addEventListener("click", downloadListener);
      });
    };
  }
}, 100);

function deleteListener(e) {
  console.log("hello");
  let id = e.target.parentElement.getAttribute("id");
  let type = id.split("-")[0];
  console.log(type);
  if (type == "vid") {
    //remove from database
    let videoDBTransacrtion = db.transaction("video", "readwrite");
    let videoStore = videoDBTransacrtion.objectStore("video");
    videoStore.delete(id);
  } else if (type == "img") {
    //remove from database
    let imageDBTransacrtion = db.transaction("image", "readwrite");
    let imageStore = imageDBTransacrtion.objectStore("image");
    imageStore.delete(id);
  }
  //remove from ui
  e.target.parentElement.remove();
}

function downloadListener(e) {
  let id = e.target.parentElement.getAttribute("id");
  let type = id.split("-")[0];
  if (type == "vid") {
    let videoDBTransacrtion = db.transaction("video", "readonly");
    let videoStore = videoDBTransacrtion.objectStore("video");
    let videoRequest = videoStore.get(id);
    videoRequest.onsuccess = () => {
      let videoResult = videoRequest.result;
      let url = URL.createObjectURL(videoResult.blobData);

      let a = document.createElement("a");
      a.href = url;
      a.download = "video.mp4";
      a.click();

    }
  }

  if (type == "img") {
    let imageDBTransacrtion = db.transaction("image", "readonly");
    let imageStore = imageDBTransacrtion.objectStore("image");
    let imageRequest = imageStore.get(id);
    imageRequest.onsuccess = () => {
      let imageResult = imageRequest.result;
      let imageURL = imageResult.url;

      let a = document.createElement("a");
      a.href = imageURL;
      a.download = "pic.png";
      a.click();
    };
  }
}

