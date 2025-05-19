import './style.css';
import { createMarkdownRenderer, preprocessMarkdown, postProcessMathDisplay } from './markdown-renderer.js';

// Ensure CSS is loaded properly
function ensureStylesLoaded() {
  console.log("Checking if styles are loaded...");
  
  // Check if styles are applied (basic check)
  const testElement = document.createElement('div');
  testElement.style.display = 'none';
  testElement.className = 'check-styles-loaded';
  document.body.appendChild(testElement);
  
  const computedStyle = window.getComputedStyle(testElement);
  const stylesApplied = computedStyle.fontFamily.includes('Segoe UI');
  
  console.log("Styles applied check result:", stylesApplied);
  console.log("Computed font-family:", computedStyle.fontFamily);
  
  if (!stylesApplied) {
    console.warn('Styles may not be loading correctly, injecting fallback CSS');
    // Create a fallback style element with more comprehensive styles
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 1.6;
        color: #333;
        margin: 0 auto;
        padding: 10px;
        transition: background-color 0.3s, color 0.3s;
        overflow-x: hidden;
        background-color: #ffffff;
      }
      
      body.dark-theme {
        background-color: #222;
        color: #eee;
      }
      
      .container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
      }
      
      .toolbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
      }
      
      .theme-toggle {
        padding: 8px 16px;
        background: #f0f0f0;
        border: 1px solid #ddd;
        border-radius: 4px;
        cursor: pointer;
      }
      
      body.dark-theme .theme-toggle {
        background: #444;
        color: #fff;
        border-color: #555;
      }
      
      .tabs {
        display: flex;
        overflow-x: auto;
        gap: 4px;
        padding-bottom: 8px;
      }
      
      .tab {
        padding: 8px 16px;
        background: #f0f0f0;
        border: 1px solid #ddd;
        border-radius: 4px 4px 0 0;
        cursor: pointer;
      }
      
      .tab.active {
        background: #fff;
        border-bottom-color: #fff;
        font-weight: bold;
      }
      
      body.dark-theme .tab {
        background: #333;
        border-color: #444;
        color: #eee;
      }
      
      body.dark-theme .tab.active {
        background: #222;
        border-bottom-color: #222;
      }
      
      .content {
        padding: 16px;
        border: 1px solid #ddd;
        border-radius: 4px;
        background: #fff;
      }
      
      body.dark-theme .content {
        background: #222;
        border-color: #444;
      }
    `;
    document.head.appendChild(styleEl);
    console.log("Fallback CSS injected");
  } else {
    console.log("Main styles appear to be loaded correctly");
  }
  
  document.body.removeChild(testElement);
}

// Các phần tử DOM
const contentDiv = document.getElementById('markdown-content');
const loadingIndicator = document.getElementById('loadingIndicator');
const themeToggle = document.getElementById('themeToggle');
const tabs = document.querySelectorAll('.nav-link'); // Updated selector for Bootstrap
const tocButton = document.getElementById('tocButton');
const tocClose = document.getElementById('tocClose');
const toc = document.getElementById('toc');
const tocContent = document.getElementById('tocContent');

// Khởi tạo renderer markdown
const md = createMarkdownRenderer();

// Trạng thái hiện tại
let currentFile = 'AI1.MD';
let tocVisible = false;

// Xử lý toggle theme
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  themeToggle.textContent = document.body.classList.contains('dark-theme') 
    ? 'Chế độ sáng' 
    : 'Chế độ tối';
  themeToggle.classList.toggle('btn-outline-secondary');
  themeToggle.classList.toggle('btn-outline-light');
});

// Xử lý toggle mục lục
tocButton.addEventListener('click', () => {
  tocVisible = true;
  toc.classList.add('visible');
});

tocClose.addEventListener('click', () => {
  tocVisible = false;
  toc.classList.remove('visible');
});

// Đóng TOC khi nhấp bên ngoài
document.addEventListener('click', (e) => {
  if (tocVisible && !toc.contains(e.target) && e.target !== tocButton) {
    tocVisible = false;
    toc.classList.remove('visible');
  }
});

// Xử lý chuyển tab
tabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    const fileToLoad = tab.getAttribute('data-file');
    if (fileToLoad !== currentFile) {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.parentElement.classList.remove('active'); // For Bootstrap 5 nav-item
      });
      tab.classList.add('active');
      currentFile = fileToLoad;
      loadMarkdownFile(fileToLoad);
    }
  });
});

// Hàm tải và hiển thị file markdown
function loadMarkdownFile(filename) {
  loadingIndicator.style.display = 'block';
  
  // Thay đổi đường dẫn để sử dụng URL tương đối
  fetch(filename)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Không thể tải file: ${filename}`);
      }
      return response.text();
    })
    .then(content => {
      renderMarkdown(content);
    })
    .catch(error => {
      console.error('Lỗi:', error);
      contentDiv.innerHTML = `<p style="color: red;">Lỗi: ${error.message}</p>`;
      
      // Thử lại với đường dẫn khác nếu thất bại
      if (!filename.startsWith('public/')) {
        console.log('Thử lại với đường dẫn public/');
        loadMarkdownFile('public/' + filename);
      }
    })
    .finally(() => {
      loadingIndicator.style.display = 'none';
    });
}

// Tạo mục lục từ nội dung HTML đã render
function generateTableOfContents() {
  const headings = contentDiv.querySelectorAll('h1, h2, h3, h4, h5, h6');
  tocContent.innerHTML = '<h3>Mục lục</h3>';
  
  if (headings.length === 0) {
    tocContent.innerHTML += '<p>Không có tiêu đề nào.</p>';
    return;
  }
  
  const ul = document.createElement('ul');
  const stack = [{ level: 0, element: ul }];
  
  headings.forEach((heading, index) => {
    // Lấy cấp độ tiêu đề (1 cho h1, 2 cho h2, etc.)
    const level = parseInt(heading.tagName.charAt(1));
    
    // Tạo ID nếu chưa có
    if (!heading.id) {
      heading.id = 'heading-' + index;
    }
    
    // Tạo phần tử mục lục
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = heading.textContent;
    a.href = '#' + heading.id;
    a.addEventListener('click', (e) => {
      e.preventDefault();
      heading.scrollIntoView({ behavior: 'smooth' });
      // Đóng TOC sau khi nhấn vào liên kết trên thiết bị di động
      if (window.innerWidth <= 768) {
        tocVisible = false;
        toc.classList.remove('visible');
      }
    });
    li.appendChild(a);
    
    // Quản lý cấu trúc lồng nhau
    while (level <= stack[stack.length - 1].level) {
      stack.pop();
    }
    
    if (level > stack[stack.length - 1].level) {
      const newUl = document.createElement('ul');
      stack[stack.length - 1].element.appendChild(newUl);
      stack.push({ level: level, element: newUl });
    }
    
    stack[stack.length - 1].element.appendChild(li);
  });
  
  tocContent.appendChild(ul);
}

// Function để render markdown
function renderMarkdown(markdownContent) {
  // Tiền xử lý markdown
  markdownContent = preprocessMarkdown(markdownContent);
  
  // Render với markdown-it
  const htmlContent = md.render(markdownContent);
  
  // Hiển thị nội dung
  contentDiv.innerHTML = htmlContent;
  
  // Tạo mục lục
  generateTableOfContents();
  
  // Xử lý sau khi render xong các công thức
  postProcessMathDisplay(contentDiv);
  
  // Cuộn về đầu trang
  window.scrollTo(0, 0);
}

// Tự động tải file đầu tiên khi trang được tải
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM content loaded, ensuring styles...");
  ensureStylesLoaded();
  console.log("Loading initial markdown file...");
  loadMarkdownFile(currentFile);
});

// Add a window load event to double-check styles
window.addEventListener('load', () => {
  console.log("Window fully loaded, re-checking styles...");
  ensureStylesLoaded();
});