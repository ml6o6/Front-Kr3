// Отправка формы и переключение темы

function submitForm() {
  const form = document.getElementById("feedbackForm");
  if (!form) return;

  const formData = new FormData(form);

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const data = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    category: formData.get("category"),
    message: formData.get("message"),
  };

  console.log("Данные формы:", data);

  alert(
    "Спасибо! Ваше обращение отправлено. Мы свяжемся с вами в ближайшее время."
  );

  const contactModal = document.getElementById("contactModal");
  if (contactModal) contactModal.close();

  form.reset();
}

document.addEventListener("DOMContentLoaded", () => {
  const contactModal = document.getElementById("contactModal");
  if (contactModal) {
    contactModal.addEventListener("click", function (event) {
      if (event.target === this) this.close();
    });
  }

  const feedbackForm = document.getElementById("feedbackForm");
  if (feedbackForm) {
    feedbackForm.addEventListener("keypress", function (event) {
      if (event.key === "Enter" && event.target.type !== "textarea") {
        event.preventDefault();
      }
    });

    feedbackForm.addEventListener("submit", function (e) {
      e.preventDefault();
      submitForm();
    });
  }

  const toggleButton = document.getElementById("theme-toggle");
  if (toggleButton) {
    const body = document.body;

    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-theme");
      toggleButton.textContent = "Светлая тема";
    } else {
      toggleButton.textContent = "Тёмная тема";
    }

    toggleButton.addEventListener("click", () => {
      body.classList.toggle("dark-theme");

      if (body.classList.contains("dark-theme")) {
        toggleButton.textContent = "Светлая тема";
        localStorage.setItem("theme", "dark");
      } else {
        toggleButton.textContent = "Тёмная тема";
        localStorage.setItem("theme", "light");
      }
    });
  }
});
