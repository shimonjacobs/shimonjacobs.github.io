
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.zoom-link').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const url = this.href;
        this.classList.add('zoom-out');
        setTimeout(() => {
          window.location.href = url;
        }, 300); // match the CSS duration
      });
    });
  });

