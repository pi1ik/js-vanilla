const courses = [
  {
    title: "The Ultimate Google Ads Training Course",
    price: 100,
    category: "marketing",
    author: "Jerome Bell",
    img: "img/1.jpg",
  },
  {
    title: "Product Management Fundamentals",
    price: 480,
    category: "management",
    author: "Marvin McKinney",
    img: "img/2.jpg",
  },
  {
    title: "HR Management and Analytics",
    price: 200,
    category: "hr",
    author: "Leslie Alexander",
    img: "img/3.jpg",
  },
  {
    title: "Brand Management & PR Communications",
    price: 530,
    category: "marketing",
    author: "Kristin Watson",
    img: "img/4.jpg",
  },
  {
    title: "Graphic Design Basic",
    price: 500,
    category: "design",
    author: "Guy Hawkins",
    img: "img/5.jpg",
  },
  {
    title: "Business Development Management",
    price: 400,
    category: "management",
    author: "Dianne Russell",
    img: "img/6.jpg",
  },
  {
    title: "Highload Software Architecture",
    price: 600,
    category: "dev",
    author: "Brooklyn Simmons",
    img: "img/7.jpg",
  },
  {
    title: "Human Resources – Selection and Recruitment",
    price: 150,
    category: "hr",
    author: "Kathryn Murphy",
    img: "img/8.jpg",
  },
  {
    title: "User Experience. Human-centered Design",
    price: 240,
    category: "design",
    author: "Cody Fisher",
    img: "img/9.jpg",
  },
  {
    title: "The Ultimate Google Ads Training Course",
    price: 100,
    category: "marketing",
    author: "Jerome Bell",
    img: "img/1.jpg",
  },
  {
    title: "Product Management Fundamentals",
    price: 480,
    category: "management",
    author: "Marvin McKinney",
    img: "img/2.jpg",
  },
  {
    title: "HR Management and Analytics",
    price: 200,
    category: "hr",
    author: "Leslie Alexander",
    img: "img/3.jpg",
  },
  {
    title: "Brand Management & PR Communications",
    price: 530,
    category: "marketing",
    author: "Kristin Watson",
    img: "img/4.jpg",
  },
  {
    title: "Graphic Design Basic",
    price: 500,
    category: "design",
    author: "Guy Hawkins",
    img: "img/5.jpg",
  },
  {
    title: "Business Development Management",
    price: 400,
    category: "management",
    author: "Dianne Russell",
    img: "img/6.jpg",
  },
  {
    title: "Highload Software Architecture",
    price: 600,
    category: "dev",
    author: "Brooklyn Simmons",
    img: "img/7.jpg",
  },
  {
    title: "Human Resources – Selection and Recruitment",
    price: 150,
    category: "hr",
    author: "Kathryn Murphy",
    img: "img/8.jpg",
  },
  {
    title: "User Experience. Human-centered Design",
    price: 240,
    category: "design",
    author: "Cody Fisher",
    img: "img/9.jpg",
  },
];

const grid = document.getElementById("coursesGrid");
const filterButtons = document.querySelectorAll(".filter__btn");
const searchInput = document.getElementById("searchInput");
const loadMoreBtn = document.querySelector(".courses__load-more");

let visibleCount = 9;
let currentCourses = [...courses];

function renderCourses() {
  grid.innerHTML = currentCourses
    .slice(0, visibleCount)
    .map(
      (course) => `
      <article class="card" data-category="${course.category}">
        <img class="card__img" src="${course.img}" alt="${course.title}" />
        <div class="card__content">
          <span class="card__tag card__tag_${course.category}">${course.category}</span>
          <h3 class="card__title">${course.title}</h3>
          <p class="card__price">$${course.price} <span class="card__author">| by ${course.author}</span></p>
        </div>
      </article>
    `
    )
    .join("");

  if (visibleCount >= currentCourses.length) {
    loadMoreBtn.style.display = "none";
  } else {
    loadMoreBtn.style.display = "flex";
  }
}

loadMoreBtn.addEventListener("click", () => {
  visibleCount += 9;
  renderCourses();
});

renderCourses(courses);

filterButtons.forEach((btn) => {
  const category = btn.dataset.filter;
  const label = btn.querySelector(".filter__btn__label");
  const filteredCourses = courses.filter((c) => c.category === category);
  label.textContent =
    category === "all" ? courses.length : filteredCourses.length;
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("filter__btn_active"));
    btn.classList.add("filter__btn_active");
    currentCourses = category === "all" ? courses : filteredCourses;

    visibleCount = 9;
    renderCourses();
    console.log(btnLabelText);
  });
});

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  currentCourses = courses.filter((c) => c.title.toLowerCase().includes(value));
  visibleCount = 9;
  renderCourses();
});

renderCourses();
