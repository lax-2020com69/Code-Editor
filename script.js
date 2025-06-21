const htmlEditor = document.getElementById('html');
const cssEditor = document.getElementById('css');
const jsEditor = document.getElementById('js');
const output = document.getElementById('output');

function updatePreview() {
  const html = htmlEditor.value || '';
  const css = `<style>${cssEditor.value || ''}</style>`;
  const js = jsEditor.value || '';

  // Wrap JavaScript in a window.onload to avoid CSP issues
  const content = `
    <!DOCTYPE html>
    <html>
      <head>${css}</head>
      <body>
        ${html}
        <script>
          window.onload = function() {
            try {
              ${js}
            } catch (e) {
              document.body.innerHTML += '<pre style="color:red;">' + e.message + '</pre>';
            }
          };
        <\/script>
      </body>
    </html>
  `;

  output.srcdoc = content;
}

htmlEditor.addEventListener('input', updatePreview);
cssEditor.addEventListener('input', updatePreview);
jsEditor.addEventListener('input', updatePreview);

// Initial content
htmlEditor.value = "<h1>Hello World</h1>";
cssEditor.value = "h1 { color: green; }";
jsEditor.value = "console.log('Safe JS loaded.');";
updatePreview();
