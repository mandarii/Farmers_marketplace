document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                }),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Registration successful:', result);
                // Redirect or display a success message
            } else {
                console.error('Registration failed:', response.statusText);
                // Display an error message
            }
        } catch (error) {
            console.error('Error during registration:', error);
            // Display an error message
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault(); // Prevent the default form submission
  
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      try {
        const response = await fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
  
        if (response.ok) {
          const result = await response.json();
          console.log('Login successful:', result);
          // Redirect or display a success message
        } else {
          console.error('Login failed:', response.statusText);
          // Display an error message
        }
      } catch (error) {
        console.error('Error during login:', error);
        // Display an error message
      }
    });
  });
  


document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm');

    productForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const type = document.getElementById('type').value;
        const quantity = document.getElementById('quantity').value;
        const price = document.getElementById('price').value;

        try {
            const response = await fetch('/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, type, quantity, price })
            });

            if (response.ok) {
                alert('Product added successfully!');
                window.location.reload();
            } else {
                alert('Failed to add product');
            }
        } catch (err) {
            console.error('Error:', err);
        }
    });
});
