fetch('header.html')
  .then(res => res.text())
  .then(data => {
      document.getElementById('header').innerHTML = data;

      // update judul otomatis tanpa class
      const siteTitle = document.querySelector('#header h1');
      if (siteTitle) {
          siteTitle.textContent = document.title; // ambil dari <title> <head>
      }
  })
  .catch(() => console.error('Header failed to load'));

fetch('footer.html')
  .then(res => res.text())
  .then(data => document.getElementById('footer').innerHTML = data)
  .catch(() => console.error('Footer failed to load'));

document.querySelectorAll("table tr").forEach((row, i, rows) => {
  row.addEventListener("mouseenter", () => {
    row.classList.add("sync-hover");

    const prev = rows[i - 1];
    if (prev && prev.querySelector("td[rowspan]")) {
      prev.classList.add("sync-hover");
    }
  });

  row.addEventListener("mouseleave", () => {
    row.classList.remove("sync-hover");

    const prev = rows[i - 1];
    if (prev) prev.classList.remove("sync-hover");
  });
});
