  function sanitizeInput() {
    const dirty = document.getElementById('user-input').value;
    const clean = DOMPurify.sanitize(dirty);

    document.getElementById('output').innerHTML = clean || 'All content was unsafe';
  }

  document.getElementById('submit-btn').addEventListener('click', sanitizeInput);
