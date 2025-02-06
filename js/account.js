
document.addEventListener('DOMContentLoaded', function() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = users[users.length - 1];

    if (currentUser) {
        document.getElementById('userName').textContent = `${currentUser.firstname} ${currentUser.lasttname}`;
        document.getElementById('userEmail').textContent = currentUser.email;
        document.getElementById('userPhone').textContent = currentUser.telephone;

        const imageInput = document.getElementById('imageInput');
        const profileImage = document.getElementById('profileImage');

        imageInput.onchange = function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    
                    profileImage.src = e.target.result;
                    
                    
                    currentUser.profileImage = e.target.result;
                    users[users.length - 1] = currentUser;
                    localStorage.setItem("users", JSON.stringify(users));
                }
                reader.readAsDataURL(file);
            }
        }

        // عرض الصورة المحفوظة
        if (currentUser.profileImage) {
            profileImage.src = currentUser.profileImage;
        }
    }
});
