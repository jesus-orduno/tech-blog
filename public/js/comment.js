const commentFormHandler = async (event) => {
  event.preventDefault();

  const comment_body = document.querySelector("#comment-body").value.trim();
  const post_id = document.querySelector(".post-title").getAttribute("post-id");

  if (comment_body && post_id) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment_body, post_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace('/post/' + post_id);
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector("#comment-form").addEventListener("submit", commentFormHandler);