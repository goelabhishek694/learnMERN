

let imageDBTRansaction = db.transaction("image", 'readonly');
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
            <div>
            <img src="${url}"/>
            </div>
            <div class="delete">DELETE</div>
            <div class="download">DOWNLOAD</div>
        `;

        galleryCont.appendChild(imageElem);
    })

}
