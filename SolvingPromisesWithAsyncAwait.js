//we can solve promises with asycn await, but
//the problem is that the cose with be executed sequentially
//each program will have to await for the previous to complete
function loginUser(email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("we have logged in");
        resolve({ userEmail: email });
      }, 3000);
    });
  }
   
  function recentlWatchedVideos(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("we have the data of all videos");
        resolve(["star wars", "The Mando", "Prison Break"]);
      }, 3000);
    });
  }
   
  function getVideoDetails(video) {
    if (!video || video.length === 0) {
      return Promise.reject(new Error("No videos found"));
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("we are getting the details of one videos");
        resolve({ video: video, name: "The Mando" });
      }, 3000);
    });
  }
   
  function getStoppingTime(video) {
    if (!video) {
      return Promise.reject(new Error("No video details found"));
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("get stopping time for", video.name); // Print video name before resolving
        resolve({ video: video.name, stopping: "00:25:30" });
      }, 3000);
    });
  }
   
   
  function renderVideo(video, timeStamp) {
    console.log(`Rendering ${video} from timeStampt ${timeStamp}`);
  }

 async function playBackVideo() {
    try {
        //lets loggin in
        const user = await loginUser("job@gmail.com", "kjbfdkvhjcxvhjx")
        console.log("Logged into Netflix", user) //Logged into Netflix { userEmail: 'job@gmail.com' }

        //lets get all videos recently watced
        const watchedVideos = await recentlWatchedVideos(user)
        console.log("we have all recently watched videos", watchedVideos) //we have all recently watched videos [ 'star wars', 'The Mando', 'Prison Break' ]

        //let get the details of one video
        const videoIndex = 1
        const selectedVideo = watchedVideos[videoIndex]
        console.log(selectedVideo) //The Mando

        //get the details of your selected video
        const selectedVideoDetails = await getVideoDetails(selectedVideo)
        console.log("data of recently watched vidoe: ", selectedVideoDetails)

        //get he stoping of the video
        const stoppingTime = await  getStoppingTime(selectedVideoDetails)
        console.log(`The stoping of: ${stoppingTime.video} is ${stoppingTime.stopping},` )

        //lets render the video
        renderVideo(selectedVideoDetails,stoppingTime )
    } catch (error) {
        
    }
 }
 playBackVideo()