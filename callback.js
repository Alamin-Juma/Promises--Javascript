//an example of a callback
function add(a, b) {
  return a + b;
}

//lets create a function that contains a callback function
function addCallback(z, callbackFn) {
  return callbackFn(z, 6);
}

//call my functions
console.log(addCallback(10, add)); //16

//another example of callack
//() => ()

const arr = [1, 2, 3, 4, 5].map((num) => num * 2);
console.log(arr); //[ 2, 4, 6, 8, 10 ]

//callback can lead into something called callback hells
//the netflix problem
//we need to get the timestampt of our recently watched video
//login into netflix
//get all recently watched videos of the user
// get the specific video that you need
//get the timestamp of the video

//login function
function loginUser(email, password, callbackFn) {
  setTimeout(() => {
    console.log("we have logged into Netflix");
    callbackFn({ userEmail: email });
  }, 3000);
}

//get all recently watched videos
function recentlyWatchedVideo({ userEmail: userEmail }, callbackFn) {
  setTimeout(() => {
    console.log("we have all the recently watched video");
    callbackFn({
      userEmail,
      videos: ["star wars", "The Mando", "The Lord of The Rings"],
    });
  }, 3000);
}
//we are getting the name of a video
function getDetailsOfOneVideo(videos, callbackFn) {
  setTimeout(() => {
    console.log("we are getting the details of one video");
    callbackFn({ video: videos.videos[1]});
  }, 3000);
}

const user = loginUser("job@gmail", "hvfbjdfl", (user) => {
  console.log(user);

  //now we have access to backend due to authentication success
  //we can now get the data of all videos watched recently
  recentlyWatchedVideo(user, (videos) => {
    console.log(videos)
    //get the data of The Mand ....video {email, video = []}
    //console.log(videos.videos) //[ 'star wars', 'The Mando', 'The Lord of The Rings' ]
    //console.log(videos.videos[1])
    getDetailsOfOneVideo(videos,() => {
        console.log('This is the info of: ', videos.videos[1])
    } )
  });
});

/*we have logged into Netflix
{ userEmail: 'job@gmail' }
we have all the recently watched video
{
  userEmail: 'job@gmail',
  videos: [ 'star wars', 'The Mando', 'The Lord of The Rings' ]
}
we are getting the details of one video
This is the info of:  The Mando */