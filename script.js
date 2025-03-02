// script.js
// script.js
document.addEventListener("DOMContentLoaded", function() {
    // 处理小标题
    const storyTitle = document.querySelector('.story-title');
    if (storyTitle) {
        const titleText = storyTitle.textContent; // 使用 textContent 避免 HTML 标签干扰
        storyTitle.innerHTML = ''; // 清空原有内容
        titleText.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.animationDelay = `${index * 0.03}s`; // 每个字符延迟 0.1 秒
            storyTitle.appendChild(span);
        });
    }

    // 处理正文
    const storyContent = document.querySelector('.story-content');
    if (storyContent) {
        const text = storyContent.textContent; // 使用 textContent 避免 HTML 标签干扰
        const lines = text.split('\n'); // 按换行符分割文本
        storyContent.innerHTML = ''; // 清空原有内容

        lines.forEach((line, index) => {
            if (line.trim() === '') {
                // 如果是空行，插入两个干净的 <br> 以增加段落间距
                const br1 = document.createElement('br');
                const br2 = document.createElement('br');
                storyContent.appendChild(br1);
                storyContent.appendChild(br2);
            } else {
                // 如果是非空行，包裹 <span> 并设置动画延迟
                const span = document.createElement('span');
                span.textContent = line;
                span.style.animationDelay = `${index * 0.1}s`; // 每行延迟 0.5 秒
                storyContent.appendChild(span);

                // 插入两个干净的 <br> 以增加段落间距
                const br1 = document.createElement('br');
                const br2 = document.createElement('br');
                storyContent.appendChild(br1);
                storyContent.appendChild(br2);
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // 导航栏悬浮效果
    const navItems = document.querySelectorAll('.cyber-nav li');
    
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // 下拉菜单延迟关闭
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        let timeout;
        
        dropdown.addEventListener('mouseenter', function() {
            clearTimeout(timeout);
            this.querySelector('.dropdown-content').style.opacity = '1';
        });
        
        dropdown.addEventListener('mouseleave', function() {
            const menu = this.querySelector('.dropdown-content');
            timeout = setTimeout(() => {
                menu.style.opacity = '0';
            }, 300);
        });
    });
});