fetch("https://portfolio-website-jn0s.onrender.com/projects")
  .then(res => res.json())
  .then(data => {
    console.log(data); // 👈 ADD THIS

    const container = document.getElementById("projects");
    container.innerHTML = "";

    data.forEach(p => {
      const div = document.createElement("div");
      div.style.background = "white";   // 👈 ADD THIS
      div.style.color = "black";        // 👈 ADD THIS
      div.style.padding = "10px";
      div.style.margin = "10px";

      div.innerHTML = `
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <p><b>${p.tech}</b></p>
        <a href="${p.github}" target="_blank">GitHub</a>
      `;

      container.appendChild(div);
    });
  });