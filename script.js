const htmlEditor = document.getElementById('html');
const cssEditor = document.getElementById('css');
const jsEditor = document.getElementById('js');
const output = document.getElementById('output');

function updatePreview() {
  try {
    const html = htmlEditor.value;
    const css = `<style>${cssEditor.value}</style>`;
    const js = `<script>${jsEditor.value}<\/script>`;
    const content = html + css + js;
    output.srcdoc = content;
  } catch (e) {
    // Basic error handling
    output.srcdoc = `<body style="color: red;"><h1>Error</h1><pre>${e.message}</pre></body>`;
  }
}

htmlEditor.addEventListener('input', updatePreview);
cssEditor.addEventListener('input', updatePreview);
jsEditor.addEventListener('input', updatePreview);

// Initial content
htmlEditor.value = "<h1>Hello!</h1>";
cssEditor.value = "h1 { color: blue; }";
jsEditor.value = "console.log('JS running!')";
updatePreview();
