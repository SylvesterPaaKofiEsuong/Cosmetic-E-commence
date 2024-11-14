document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('.register-form');
    
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(registerForm);
        const password = formData.get('password');
        const confirmPassword = formData.get('confirm_password');
        
        // Validation checks
        if (!validateForm(formData)) {
            return;
        }
        
        if (password !== confirmPassword) {
            showNotification('Passwords do not match', 'error');
            return;
        }
        
        try {
            const response = await fetch('register_process.php', {
                method: 'POST',
                body: formData
            });
            
            const data = await response.json();
            
            if (data.success) {
                showNotification('Registration successful!', 'success');
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 1500);
            } else {
                showNotification(data.message, 'error');
            }
        } catch (error) {
            showNotification('An error occurred. Please try again.', 'error');
        }
    });
    
    // Password strength indicator
    const passwordInput = document.querySelector('input[name="password"]');
    passwordInput.addEventListener('input', () => {
        updatePasswordStrength(passwordInput.value);
    });
});

function validateForm(formData) {
    const fullname = formData.get('fullname');
    const email = formData.get('email');
    const password = formData.get('password');
    
    if (fullname.length < 2) {
        showNotification('Please enter a valid name', 'error');
        return false;
    }
    
    if (!validateEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return false;
    }
    
    if (password.length < 8) {
        showNotification('Password must be at least 8 characters', 'error');
        return false;
    }
    
    return true;
}

function updatePasswordStrength(password) {
    const strength = calculatePasswordStrength(password);
    const strengthIndicator = document.querySelector('.password-strength');
    
    strengthIndicator.className = `password-strength strength-${strength}`;
    strengthIndicator.textContent = `Password Strength: ${strength}`;
}

function calculatePasswordStrength(password) {
    let score = 0;
    
    if (password.length >= 8) score++;
    if (password.match(/[A-Z]/)) score++;
    if (password.match(/[0-9]/)) score++;
    if (password.match(/[^A-Za-z0-9]/)) score++;
    
    switch (score) {
        case 0: return 'weak';
        case 2: return 'medium';
        case 3: return 'strong';
        case 4: return 'very strong';
        default: return 'weak';
    }
}
