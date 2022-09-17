import React from 'react'
// import vid1 from "../assets/vid.mp4";
// import vid2 from "../assets/vid.mp4";
// import vid3 from "../assets/vid.mp4";
// import vid4 from "../assets/vid.mp4";

function InterOb() {
    const callback = (entries) => {
      entries.forEach((entry) => {
        let ele = entry.target.childNodes[0];
        
        console.log(ele);
        ele.play().then(() => {
          if (!ele.paused && !entry.isIntersecting) {
            console.log("123", entry.isIntersecting);
            ele.pause();
          }
        });
      });
    };
    let options = {
      // root: document.querySelector("#scrollArea"),
      // rootMargin: "0px",
      threshold: 0.6,
    };

    let observer = new IntersectionObserver(callback, options);
    useEffect(() => {
      const elements = document.querySelectorAll(".videos");
      elements.forEach((element) => {
        observer.observe(element);
      });
    }, []);
  return (
    <div className="video-container">
      <div className="videos">
        <video src="https://firebasestorage.googleapis.com/v0/b/reels-839c5.appspot.com/o/posts%2Fa7cfed8e-8193-430d-909a-e10e64de47a8%2Fstream%20(2).mp4?alt=media&token=85920cf2-9f35-4bb6-8b12-f628d418e93b" />
        
      </div>
      {/* <div className="videos">
        <video src={vid2} />
      </div>
      <div className="videos">
        <video src={vid3} />
      </div>
      <div className="videos">
        <video src={vid4} />
      </div> */}
    </div>
  );
}

export default InterOb