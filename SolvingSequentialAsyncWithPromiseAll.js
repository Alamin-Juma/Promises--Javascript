//chaining multi-processes
//concurrent execution ....Promise.all()
 
//refactor this code with async/await
//sequantial async await
 
//the 3 states of promises
//pending..initial state(no fullfillment/no rejection)
//fulfiled: success
//rejected: failure(return errors)
function loginUser(email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("we have logged in");
        resolve({ userEmail: email });
      }, 3000);
    });
  }
   
  //get the videos of the users
  function recentlWatchedVideos(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("we have the data of all videos");
        resolve(["star wars", "The Mando", "Prison Break"]);
      }, 3000);
    });
  }
   
  function getVideoDetails(video) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("we are getting the details of one videos");
        resolve({ video: video, name: "The Mando" });
      }, 3000);
    });
  }
   
  //get the timestamp stamp of the video
  function getRecentTimestamp(videos) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Got recent timestamp");
        resolve({
          videos,
          recentVideo: "The Mando",
          timestamp: "00:25:30",
        });
      }, 1000);
    });
  }
  function getStoppingTime(video) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Got stopping time");
        resolve({
          video,
          stoppingTime: "00:20:00",
        });
      }, 500);
    });
  }
   
  function renderVideo(video, timeStamp) {
    console.log(`Rendering ${video} from timeStampt ${timeStamp}`);
  }

  
 async function playBackVideoWithPromiseAllz() {
    try {
        //lets loggin in
        const user = await loginUser("job@gmail.com", "kjbfdkvhjcxvhjx")
        console.log("Logged into Netflix", user) //Logged into Netflix { userEmail: 'job@gmail.com' }

        //lets get all videos recently watced
        const watchedVideos = await recentlWatchedVideos(user)
        console.log("we have all recently watched videos", watchedVideos) //we have all recently watched videos [ 'star wars', 'The Mando', 'Prison Break' ]

        //promise .all Creates a Promise that is resolved with an array of results when
        // all of the provided Promises resolve, or rejected when any Promise is rejected.
        const[recentlyTimeStampedData, stoppingTimeData] = watchedVideos.map((video) => {
            return Promise.all([
                getRecentTimestamp(watchedVideos.videos),
                getStoppingTime(watchedVideos[0])
            ])
        })

        //get the timestamp and video
        const {recentVideo, timeStamp} = recentlyTimeStampedData;
        const {stoppingTime} = stoppingTimeData
        console.log(`the time stamp of ${recentVideo} is ${stoppingTime}`)
    } catch (error) {
        console.log("Error: ", error)
    }
 }
 playBackVideoWithPromiseAllz()