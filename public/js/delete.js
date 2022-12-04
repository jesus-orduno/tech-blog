const deleteFormHandler = async (event) => {
  event.preventDefault();

  const post_id = document.querySelector("#post-title").getAttribute("post-id");

  if (post_id) {
    const response = await fetch("/api/posts/" + post_id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector("#delete-form").addEventListener("submit", deleteFormHandler);