const now = new Date(); // получает текущую дату

// --- Локали ---
const month = now.toLocaleString('default', { month: 'long' }); // 'январь' (название месяца)
const weekday = now.toLocaleString('default', { weekday: 'long' }); // 'суббота' (день недели)
const day = now.toLocaleString('default', { day: '2-digit' }); // 7 (число месяца от 01 до 31)
const year = now.toLocaleString('default', { year: 'numeric' }); // 1989 (год из 4 цифр)

// --- Текстовые поля календаря ---
document.querySelector('.calendar-month').textContent = month;
document.querySelector('.calendar-weekday').textContent = weekday;
document.querySelector('.calendar-day').textContent = day;
document.querySelector('.calendar-year').textContent = year;
document.querySelector('.calendar-message').textContent = '';
