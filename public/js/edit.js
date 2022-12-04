const editFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-title").value.trim();
  const content = document.querySelector("#content").value.trim();
  const post_id = document.querySelector("#post-title").getAttribute("post-id");

  if (title && content && post_id) {
    const response = await fetch("/api/posts/" + post_id, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector("#edit-form").addEventListener("submit", editFormHandler);