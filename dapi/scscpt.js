document.addEventListener("DOMContentLoaded", function() {
            const passwordInput = document.querySelector('.password-input');
            const submitBtn = document.querySelector('.submit-btn');
            const errorMessage = document.querySelector('.error-message');

            // 正确密码
            const correctPassword = "dpznzjr"; // 替换为你的密码

            submitBtn.addEventListener('click', function() {
                const userInput = passwordInput.value.trim();

                if (userInput === correctPassword) {
                    // 密码正确，跳转到目标页面
                    window.location.href = "https://wumingdeczy.github.io/tale/dapi/fw.html";
                } else {
                    // 密码错误，显示错误提示
                    errorMessage.classList.add('visible');
                }
            });

            // 输入时隐藏错误提示
            passwordInput.addEventListener('input', function() {
                errorMessage.classList.remove('visible');
            });
        });
