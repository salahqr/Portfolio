const one = document.getElementsByClassName("one")[0];
const two = document.getElementsByClassName("two")[0];
const three = document.getElementsByClassName("three")[0];

const display = document.getElementById("projectDisplay");

function selectButton(selected) {
    one.classList.remove("cur");
    two.classList.remove("cur");
    three.classList.remove("cur");

    one.classList.add("rem");
    two.classList.add("rem");
    three.classList.add("rem");

    selected.classList.add("cur");
    selected.classList.remove("rem");
}

const content = {
    frontend: `
         <div class="panel" id="panel-frontend">
    <p class="panel-title blue"><span class="dot"></span>Frontend</p>
    <div class="cards">
      <div class="card blue">
        <h3>Frontend Mentor Solutions</h3>
        <p>Ongoing set of Frontend Mentor challenges — layout and responsive-design practice, one folder per challenge.</p>
        <a href="https://github.com/salahqr/frontend-mentor-challenges" target="_blank">View code →</a>
      </div>
    </div>
  </div>
    `,

    backend: `
        <div class="panel" id="panel-backend">
            <p class="panel-title red"><span class="dot"></span>Backend</p>
            <div class="cards">
      <div class="card red">
        <h3>Real-Time Distributed Analytics Pipeline</h3>
        <p>Kafka-based event pipeline processing 10,000+ events/min into ClickHouse, with Spring Boot APIs averaging under 120ms response time.</p>
        <a href="https://github.com/salahqr/Real-Time-Distributed-Analytics-Dashboard-Project" target="_blank">View code →</a>
      </div>

      <div class="card red">
        <h3>Python Code Security Analyzer</h3>
        <p>CLI static analysis tool that flags SQL injection, XSS risks, and hardcoded secrets, with structured JSON output.</p>
        <a href="https://github.com/salahqr/Python-Code-Security-Analyzer" target="_blank">View code →</a>
      </div>
           <div class="card red">
        <h3>E-commerce Backend API</h3>
        <p>Express + TypeScript API with 40+ REST endpoints, JWT auth with RBAC, Redis caching, and Stripe payments.</p>
        <a href="https://github.com/salahqr/ecommerce-express-api" target="_blank">View code →</a>
      </div>
    </div>
  </div>
    `,
    fullstack: `
        <div class="panel" id="panel-fullstack">
            <p class="panel-title green"><span class="dot"></span>Full-stack</p>
            <div class="cards">
            <div class="card green">
                <h3>Task Manager</h3>
                <p>FastAPI backend paired with a React frontend, structured as separate backend/frontend folders.</p>
                <a href="https://github.com/salahqr/Task-manger" target="_blank">View code →</a>
            </div>
            </div>
        </div>
    `
};

function showProject(key) {
    display.innerHTML = content[key];

    const panel = display.querySelector(".panel");
    panel.classList.add("open");
}

one.addEventListener("click", function () {
    selectButton(one);
    showProject("frontend");
});

two.addEventListener("click", function () {
    selectButton(two);
    showProject("backend");
});

three.addEventListener("click", function () {
    selectButton(three);
    showProject("fullstack");
});

selectButton(two);
showProject("backend");

// ====================
// Resume Modal
// ====================

const resumeBtn = document.getElementById("resumeBtn");
const modal = document.getElementById("resumeModal");
const closeBtn = document.getElementById("closeBtn");

resumeBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
