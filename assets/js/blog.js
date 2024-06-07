document.getElementById("back-Btn").addEventListener("click", function (event) {
  event.preventDefault();

  //   document.getElementById("demo").innerHTML = obj.name;

  window.location.replace("index.html");
});

let allUserData = JSON.parse(localStorage.getItem("allUserItems")) || [];
//   console.log(allUserData)
allUserData.forEach((eachPost) => {
  //   console.log(eachPost);
  //   console.log(eachPost.userName);


  //shows all posts with username, title, and post
  let displayUsername = document.createElement("h1");
  let displayTitle = document.createElement("h2");
  let displayPost = document.createElement("p");
  displayUsername.textContent = eachPost.userName;
  displayTitle.textContent = eachPost.title;
  displayPost.textContent = eachPost.userPost;
  document.getElementById("displayUsersPosts").appendChild(displayUsername);
  document.getElementById("displayUsersPosts").appendChild(displayTitle);
  document.getElementById("displayUsersPosts").appendChild(displayPost);
});


