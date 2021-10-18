function requestUserRepos(url) {
  // Create new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // GitHub endpoint, dynamically passing in specified username
  // const url = `https://api.github.com/users/${username}/repos/AssignmentMaker`;
  //   const url = `https://api.github.com/repos/SouvikDas-git/AssignmentMaker`;
  console.log(url);
  // Open a new connection, using a GET request via URL endpoint
  // Providing 3 arguments (GET/POST, The URL, Async True/False)
  xhr.open("GET", url, true);

  // When request is received
  // Process it here
  xhr.onload = function () {
    // Parse API data into JSON
    const data = JSON.parse(this.response);
    // const data = this.response;

    console.log(data);
    // Get the div with id of of userRepos
    let projects = document.getElementById("projects-body");

    // Create variable that will create li's to be added to ul
    let div = document.createElement("div");
    // div.style.cssText = "max-width: 480px;";
    div.setAttribute(
      "class",
      "d-inline-block shadow p-3 mb-5 me-3 text-dark bg-body rounded"
    );
    // div.classList.add(`d-inline-block shadow p-3 mb-5 text-dark bg-body rounded`);

    // Create the html markup for each div
    div.innerHTML = `
        <div>
            <i class='bx bx-book-alt'></i>
            <span class="fs-5" style="font-weight: 600;"> ${data.name} </span>
        </div>
        <p id="repoDes" class="pt-2">
            ${data.description}
        </p>
        <div>
            <i class="bx bx-link" style="vertical-align: middle"></i>
            <a href="${data.html_url}" target="_blank" rel="noopener noreferrer">${data.html_url}</a>
        </div>

        <div class="p-2">
            <div class="d-inline-block me-3">
                <i class="bx bxs-circle" style="vertical-align: middle; color: #fc0"></i>
                <span style="vertical-align: middle">${data.language}</span>
            </div>
            <div class="d-inline-block me-3">
                <i class="bx bx-git-repo-forked" style="vertical-align: middle"></i>
                <span style="vertical-align: middle">${data.forks}</span>
            </div>
            <div class="d-inline-block me-3">
                <i class="bx bx-star" style="vertical-align: middle"></i>
                <span style="vertical-align: middle">${data.stargazers_count}</span>
            </div>
            <div class="d-sm-inline-block float-end">
                <span style="vertical-align: middle">${data.size}&nbsp;KB</span>
            </div>
        </div>
    `;

    // Append each div to the project

    projects.appendChild(div);
    // }
  };

  // Send the request to the server
  xhr.send();
}
