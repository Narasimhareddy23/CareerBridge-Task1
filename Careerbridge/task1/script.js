luconst jobs = [
  { title: "Front-End Developer", company: "Tech Solutions Inc.", location: "Visakhapatanam, India" },
  { title: "Backend Engineer", company: "Innovatech Labs", location: "Bangalore, India" },
  { title: "UI/UX Designer", company: "Creative Minds", location: "Remote" },
  { title: "Data Analyst", company: "DataWorks", location: "Mumbai, India" }
];

function renderJobs() {
  const container = document.getElementById('jobCards');
  container.innerHTML = '';
  jobs.forEach(job => {
    const card = document.createElement('div');
    card.classList.add('job-card');
    card.innerHTML = `
      <div class="job-title">${job.title}</div>
      <div class="company">${job.company}</div>
      <div class="location">${job.location}</div>
    `;
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderJobs();

  document.getElementById('getStartedBtn').addEventListener('click', () => {
    alert('Get ready for Task 2 - Job Application Form coming soon!');
  });
});