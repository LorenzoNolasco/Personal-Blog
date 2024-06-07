document
  .getElementById("submit-Btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    //sets variables submitted by the user
    const username = document.getElementById("userName").value;
    const title = document.getElementById("userTitle").value;
    const userPost = document.getElementById("userPost").value;
    // console.log(username);
    // console.log(title);
    // console.log(userPost);

    //object
    const userPosted = {
      userName: username,
      title: title,
      userPost: userPost,
    };

    //checks local storage:
    let allUserData = JSON.parse(localStorage.getItem("allUserItems")) || [];
    allUserData.push(userPosted);
    console.log(userPosted);

    //stores
    const userPosts = JSON.stringify(allUserData);
    localStorage.setItem("allUserItems", userPosts);

    window.location.replace("blog.html");
  });

document.getElementById("blog-Btn").addEventListener("click", function (event) {
  window.location.replace("blog.html");
});
