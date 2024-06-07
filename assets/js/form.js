document
  .getElementById("submit-Btn")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    //sets variables submitted by the user
    const username = document.getElementById("userName").value;
    const email = document.getElementById("userEmail").value;
    const userPost = document.getElementById("userPost").value;
    //   console.log(username);
    //   console.log(email);
    //   console.log(userPost);

    //object 
    const userPosted = {
      userName: username,
      email: email,
      userPost: userPost,
    };
    // console.log(userPosted);

    //   usersPostStored(userPosted);


    let userPosted = JSON.parse(userPosts);

    localStorage.setItem = ("userPosted", JSON.stringify(userPosts));
  });

// function usersPostStored(userPosted) {
//   const userPostArray = [];

//   userPostArray[postCounter].push(userPosted);
//   // console.log(`objects in userPostArray: ${userPostArray.length}`);
//   console.log(`objects in userPostArray: ${userPostArray}`);
//   // console.log(userPostArray[0]);
//   // console.log(userPostArray[1]);
//   // console.log(userPostArray.length)

//   const storeUserPostArray = JSON.stringify(userPostArray);
// //   localStorage.setItem = ("UserPost", storeUserPostArray);

//   postCounter++;
//   console.log(postCounter);
// }
