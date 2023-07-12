import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <h1>Meu Portfólio</h1>
      <p>Bem-vindo ao meu portfólio de desenvolvedor web!</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

window.addEventListener('scroll', () => {
const header = document.querySelector('header');
  if (window.scrollY > 0) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

const progressBars = document.querySelectorAll('.progress-bar');
progressBars.forEach((progressBar) => {
  const width = progressBar.getAttribute('data-width');
  progressBar.style.width = `${width}%`;
});

const courses = document.querySelectorAll('.course');
courses.forEach((course) => {
  course.addEventListener('mouseover', () => {
    course.style.transform = 'translateY(-5px)';
  });

  course.addEventListener('mouseout', () => {
    course.style.transform = 'translateY(0)';
  });
});

const projects = document.querySelectorAll('.project');
projects.forEach((project) => {
  project.addEventListener('mouseover', () => {
    project.style.transform = 'translateY(-5px)';
  });

  project.addEventListener('mouseout', () => {
    project.style.transform = 'translateY(0)';
  });
});

