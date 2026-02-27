// 1) User ma'lumotlari
function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId % 2 === 0) resolve({ id: userId, name: `User ${userId}` });
      else reject(new Error("User topilmadi (toq ID)"));
    }, 800);
  });
}

// 2) User postlari
function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 101, title: `Post 1 of user ${userId}` },
        { id: 102, title: `Post 2 of user ${userId}` },
      ]);
    }, 800);
  });
}

// 3) Birinchi post commentlari
function fetchComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: `Comment A for post ${postId}` },
        { id: 2, text: `Comment B for post ${postId}` },
      ]);
    }, 800);
  });
}

async function getUserDataFlow(userId) {
  try {
    const user = await fetchUser(userId);          // 1-qadam
    const posts = await fetchPosts(user.id);       // 2-qadam

    if (!posts.length) {
      throw new Error("Postlar yo'q");
    }

    const firstPost = posts[0];
    const comments = await fetchComments(firstPost.id); // 3-qadam

    return { user, posts, firstPost, comments };
  } catch (err) {
    // xohlasangiz shu yerda log qilasiz
    // console.log("Error:", err.message);
    throw err;
  }
}

// Test:
getUserDataFlow(2)
  .then((data) => console.log("✅ Success:", data))
  .catch((err) => console.log("❌ Error:", err.message));

getUserDataFlow(3)
  .then((data) => console.log("✅ Success:", data))
  .catch((err) => console.log("❌ Error:", err.message));

