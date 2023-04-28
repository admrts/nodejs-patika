const posts = [
  { title: "post1", body: "body1" },
  { title: "post2", body: "body2" },
  { title: "post3", body: "body3" },
];

const postList = () => {
  posts.map((post) => {
    console.log(`Post Title: ${post.title} || Post Body: ${post.body}`);
  });
};

const createPost = (newPost) => {
  return (promise = new Promise((resolve, reject) => {
    posts.push(newPost);
    resolve(posts);
    reject("Bağlantı Hatası");
  }));
};

async function infoPosts() {
  try {
    await createPost({ title: "post7", body: "body7" });
    postList();
  } catch (e) {
    console.log(e);
  }
}

infoPosts();
