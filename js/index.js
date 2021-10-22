let colorCode;

function reqListener() {
  // console.log(this.responseText);
  colorCode = JSON.parse(this.response);
  // console.log(JSON.parse(this.response));
  // console.log(JSON.parse(this.responseText));
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "colors.json");
oReq.send();

function requestUserRepos(url) {
  // Create new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // GitHub endpoint, dynamically passing in specified username
  // const url = `https://api.github.com/users/${username}/repos/AssignmentMaker`;
  //   const url = `https://api.github.com/repos/SouvikDas-git/AssignmentMaker`;
  //   console.log(url);
  // Open a new connection, using a GET request via URL endpoint
  // Providing 3 arguments (GET/POST, The URL, Async True/False)
  xhr.open("GET", url, true);
  // When request is received
  // Process it here
  xhr.onload = function () {
    // Parse API data into JSON
    const data = JSON.parse(this.response);
    // const data = this.response;

    // console.log(data);
    // Get the div with id of of userRepos
    let projects = document.getElementById("projects-body");

    // Create variable that will create li's to be added to ul
    let div = document.createElement("div");
    div.style.cssText =
      "max-width: 537px; position: relative; overflow: hidden;";
    div.setAttribute(
      "class",
      "d-inline-block shadow p-4 mb-5 mx-sm-2 text-dark bg-body rounded"
    );

    // Create the html markup for each div
    div.innerHTML = `
    <a href="${
      data.html_url
    }" target="_blank" rel="noopener noreferrer" title="Open in GitHub" class='bx bx-md bxl-github githublink2'></a>
        <div class="fs-4" style="font-weight: 600;">
            <i class='bx bx-book-alt' style="vertical-align: middle;"></i>
            <span style="vertical-align: middle;" title="repository name"> ${
              data.name
            } </span>
        </div>
        <p id="repoDes" class="my-3" style="color: #55595d; font-size:1.2rem;" title="Description">
            ${data.description}
        </p>
        <div>
            <i class="bx bx-link" style="vertical-align: middle"></i>
            <a href="${
              data.homepage
            }" target="_blank" rel="noopener noreferrer" title="deploy link">${
      data.homepage
    }</a>
        </div>

        <div class="my-2">
            <div class="d-inline-block me-3">
                <i class="bx bxs-circle" style="vertical-align: middle; color: ${eval(
                  "colorCode." + data.language + ".color"
                )}"></i>
                <span style="vertical-align: middle">${data.language}</span>
            </div>
            <div class="d-inline-block me-3">
                <i class="bx bx-git-repo-forked" style="vertical-align: middle"></i>
                <span style="vertical-align: middle;">${data.forks}</span>
            </div>
            <div class="d-inline-block me-3">
                <i class="bx bx-star" style="vertical-align: middle"></i>
                <span style="vertical-align: middle;">${
                  data.stargazers_count
                }</span>
            </div>
            <div class="d-sm-inline-block float-end">
                <span style="vertical-align: middle; color: #585858; font-size:0.8rem; letter-spacing:-0.9px;">${
                  data.size
                } KB</span>
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
