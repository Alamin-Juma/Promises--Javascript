// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.
//lets rewrite the callbck hell using a promise

//callback can lead into something called callback hells
//the netflix problem
//we need to get the timestampt of our recently watched video
//login into netflix
//get all recently watched videos of the user
// get the specific video that you need
//get the timestamp of the video

//login function
function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("we have logged into Netflix");
            resolve({ userEmail: email });
          }, 3000);
    })
  }
  
  //get all recently watched videos
  function recentlyWatchedVideo({ userEmail: userEmail }) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("we have all the recently watched video");
            resolve({
              userEmail,
              videos: ["star wars", "The Mando", "The Lord of The Rings"],
            });
          }, 3000);
    })
  }
  //we are getting the name of a video
  function getDetailsOfOneVideo(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("we are getting the details of one video");
            resolve({ video: video, name: 'The Mando'});
          }, 3000);
    })
  }
  
  //get the timestamp of a one video
  function getTimeStamp(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("we are getting the details of one video");
            resolve({ video: video, stoppingTime: '00:24:45'});
          }, 3000);
    })
  }
  
  
  function renderVideo(video, timestamp) {
    console.log(`Rendering ${video} from timestamp ${timestamp}`)
  }

  loginUser("job@gmail.com", "kjvhjsdvhj")
    .then((user) => {
        return recentlyWatchedVideo(user)
    })
    .then((videos) => {
        //videos: {uer, [videos]}
        //              videos: ["star wars", "The Mando", "The Lord of The Rings"],
        //indexOf(searchElement)
        //console.log(videos) {userEmail: 'job@gmail.com',videos: [ 'star wars', 'The Mando', 'The Lord of The Rings' ]}
        const searchElement = 'The Mando'
        const videoIndex = videos.videos.indexOf(searchElement)
        console.log(videoIndex)
        //what if the video is not availabe
        if(videoIndex != -1) {
            return getDetailsOfOneVideo(videos[videoIndex])
        } else {
            throw new Error("video was not found")
        }
    })
    .then((video) => {
        return getTimeStamp(video)
    })
    .then((video, timestamp) => {
        return renderVideo(video, timestamp)
    })
    .catch((err) => {
        console.log("Error:", err)
    })