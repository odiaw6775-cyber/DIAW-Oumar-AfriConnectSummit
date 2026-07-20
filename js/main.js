document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme") || "dark";

    if (currentTheme === "light") {
        document.documentElement.setAttribute("data-theme", "light");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
    }
    updateThemeIcon(currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const isLight = document.documentElement.getAttribute("data-theme") === "light";
            let newTheme = isLight ? "dark" : "light";
            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        if (!themeToggle) return;
        const icon = themeToggle.querySelector("i");
        if (theme === "dark") {
            icon.className = "bi bi-sun-fill";
        } else {
            icon.className = "bi bi-moon-fill";
        }
    }

    const hamburger = document.getElementById("hamburger-menu");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("open");
            hamburger.setAttribute("aria-expanded", isOpen);
            const icon = hamburger.querySelector("i");
            icon.className = isOpen ? "bi bi-x-lg" : "bi bi-list";
        });
    }

    const header = document.querySelector(".main-header");
    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 80) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }

    const scrollBtn = document.getElementById("scroll-top");
    if (scrollBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                scrollBtn.classList.add("visible");
                scrollBtn.style.display = "flex";
            } else {
                scrollBtn.classList.remove("visible");
                scrollBtn.style.display = "none";
            }
        });

        scrollBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    const yearSpans = document.querySelectorAll("#current-year");
    const currentYear = new Date().getFullYear();
    yearSpans.forEach(span => span.textContent = currentYear);

    const targetDate = new Date("2026-10-29T00:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            const wrapper = document.querySelector(".countdown-wrapper");
            if (wrapper) {
                wrapper.innerHTML = "<p style='font-size:2rem;'>🎉 L'événement a commencé !</p>";
            }
            return;
        }

        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");

        if (daysEl) daysEl.textContent = String(d).padStart(2, "0");
        if (hoursEl) hoursEl.textContent = String(h).padStart(2, "0");
        if (minutesEl) minutesEl.textContent = String(m).padStart(2, "0");
        if (secondsEl) secondsEl.textContent = String(s).padStart(2, "0");
    }

    if (document.getElementById("countdown")) {
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }

    const stats = document.querySelectorAll(".stat-number");
    if (stats.length > 0) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.getAttribute("data-target"), 10);
                    let count = 0;
                    const speed = Math.ceil(target / 60);

                    const counter = setInterval(() => {
                        count += speed;
                        if (count >= target) {
                            entry.target.textContent = target;
                            clearInterval(counter);
                        } else {
                            entry.target.textContent = count;
                        }
                    }, 25);

                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        stats.forEach(stat => statsObserver.observe(stat));
    }

    const fadeElements = document.querySelectorAll(".fade-in-scroll");
    if (fadeElements.length > 0) {
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        fadeElements.forEach(el => {
            el.style.opacity = "0";
            el.style.transform = "translateY(30px)";
            el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
            fadeObserver.observe(el);
        });
    }

    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabPanes = document.querySelectorAll(".tab-pane");

    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener("click", () => {
                const targetDay = button.getAttribute("data-day");

                tabButtons.forEach(btn => btn.classList.remove("active"));
                tabPanes.forEach(pane => pane.classList.remove("active"));

                button.classList.add("active");
                const activePane = document.getElementById(targetDay);
                if (activePane) activePane.classList.add("active");
            });
        });
    }

    const filterButtons = document.querySelectorAll(".filter-btn");
    const speakerCards = document.querySelectorAll(".speaker-card-full");

    if (filterButtons.length > 0 && speakerCards.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                const filter = btn.getAttribute("data-filter");

                filterButtons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                speakerCards.forEach(card => {
                    if (filter === "all" || card.getAttribute("data-category") === filter) {
                        card.style.display = "block";
                    } else {
                        card.style.display = "none";
                    }
                });
            });
        });
    }

    const form = document.getElementById("registration-form");

    if (form) {
        const fullname = document.getElementById("fullname");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const ticketType = document.getElementById("ticket-type");
        const country = document.getElementById("country");
        const motivation = document.getElementById("motivation");
        const successMessage = document.getElementById("form-success-message");

        const fields = [fullname, email, phone, ticketType, country, motivation];
        fields.forEach(field => {
            if (field) {
                field.addEventListener("input", () => {
                    localStorage.setItem(`registration_${field.id}`, field.value);
                });
                const saved = localStorage.getItem(`registration_${field.id}`);
                if (saved) field.value = saved;
            }
        });

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let isValid = true;

            document.querySelectorAll(".error-msg").forEach(el => el.textContent = "");
            document.querySelectorAll(".form-group input, .form-group select, .form-group textarea").forEach(el => {
                el.style.borderColor = "";
            });
            if (successMessage) successMessage.style.display = "none";

            if (!fullname.value.trim()) {
                document.getElementById("error-fullname").textContent = "Le nom complet est obligatoire.";
                fullname.style.borderColor = "var(--error-color)";
                isValid = false;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim()) {
                document.getElementById("error-email").textContent = "L'adresse email est obligatoire.";
                email.style.borderColor = "var(--error-color)";
                isValid = false;
            } else if (!emailRegex.test(email.value.trim())) {
                document.getElementById("error-email").textContent = "Veuillez entrer une adresse email valide.";
                email.style.borderColor = "var(--error-color)";
                isValid = false;
            }

            const phoneRegex = /^[0-9+\s]{8,15}$/;
            if (!phone.value.trim()) {
                document.getElementById("error-phone").textContent = "Le numéro de téléphone est obligatoire.";
                phone.style.borderColor = "var(--error-color)";
                isValid = false;
            } else if (!phoneRegex.test(phone.value.trim())) {
                document.getElementById("error-phone").textContent = "Le numéro doit contenir au moins 8 chiffres.";
                phone.style.borderColor = "var(--error-color)";
                isValid = false;
            }

            if (!ticketType.value) {
                document.getElementById("error-ticket-type").textContent = "Veuillez sélectionner un type de billet.";
                ticketType.style.borderColor = "var(--error-color)";
                isValid = false;
            }

            if (!country.value) {
                document.getElementById("error-country").textContent = "Veuillez sélectionner votre pays.";
                country.style.borderColor = "var(--error-color)";
                isValid = false;
            }

            if (!motivation.value.trim() || motivation.value.trim().length < 20) {
                document.getElementById("error-motivation").textContent = "Votre message doit contenir au moins 20 caractères.";
                motivation.style.borderColor = "var(--error-color)";
                isValid = false;
            }

            if (isValid) {
                if (successMessage) {
                    successMessage.style.display = "block";
                    successMessage.scrollIntoView({ behavior: "smooth", block: "center" });
                }

                form.reset();

                fields.forEach(field => {
                    if (field) localStorage.removeItem(`registration_${field.id}`);
                });
            }
        });
    }
});