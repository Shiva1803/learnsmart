document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('interests-form');
    const recommendationsSection = document.getElementById('recommendations');
    const coursesList = document.getElementById('courses-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const interests = [
            document.getElementById('interest1').value,
            document.getElementById('interest2').value,
            document.getElementById('interest3').value
        ];
        
        const recommendations = generateRecommendations(interests);
        displayRecommendations(recommendations);
    });

    function generateRecommendations(interests) {
        // This is a mock function. In a real application, you'd likely call an API or use a more sophisticated algorithm.
        const courses = [
            { title: "Introduction to Web Development", description: "Learn HTML, CSS, and JavaScript basics at youtube.com" },
            { title: "Data Science Fundamentals", description: "Explore data analysis and machine learning concepts." },
            { title: "Mobile App Development", description: "Build iOS and Android apps using React Native." },
            { title: "Digital Marketing Essentials", description: "Master SEO, social media, and content marketing." },
            { title: "Graphic Design for Beginners", description: "Learn design principles and tools like Photoshop." },
            { title: "Business Management 101", description: "Understand key business concepts and strategies." },
            { title: "Creative Writing Workshop", description: "Develop your storytelling and narrative skills." },
            { title: "Introduction to Psychology", description: "Explore the human mind and behavior." },
            { title: "Financial Planning and Investment", description: "Learn to manage personal finances and invest wisely." }
        ];

        // Simple recommendation logic based on keyword matching
        return courses.filter(course => 
            interests.some(interest => 
                course.title.toLowerCase().includes(interest.toLowerCase()) || 
                course.description.toLowerCase().includes(interest.toLowerCase())
            )
        );
    }

    function displayRecommendations(recommendations) {
        coursesList.innerHTML = '';
        if (recommendations.length === 0) {
            coursesList.innerHTML = '<p>No courses found matching your interests. Try different keywords!</p>';
        } else {
            recommendations.forEach(course => {
                const courseElement = document.createElement('div');
                courseElement.classList.add('course-card');
                courseElement.innerHTML = `
                    <div class="course-title">${course.title}</div>
                    <div class="course-description">${course.description}</div>
                `;
                coursesList.appendChild(courseElement);
            });
        }
        recommendationsSection.classList.remove('hidden');
    }
});
