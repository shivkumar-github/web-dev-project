document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('myForm');
    
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
    
            const formData = new FormData(form);
            const data = {
                inputData: formData.get('inputData')
            };
    
            try {
                const response = await fetch('/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                if (response.ok) {
                    console.log('Data submitted successfully!');
                } else {
                    console.error('Failed to submit data.');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });
    });
    