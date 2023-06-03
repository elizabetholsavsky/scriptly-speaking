const showUpdateForm = (event) => {
    event.preventDefault();

    const originalTitle = document.getElementById(`title-text`).textContent;
    const originalText = document.getElementById(`body-text`).textContent.trim();
    const updateCard = document.getElementById(`card`);

    updateCard.innerHTML = `
        <form #update-post-form">
            <label for="title">Title</label> <br>
            <input type="text" id="new-post-title" value=${originalTitle}> <br>

            <label for="body">Body</label> <br>
            <textarea id="new-post-body">${originalText}</textarea> <br>

            <div class="btn-container">
                <button type="submit" class="submit-btn">Update</button>
            </div>
        </form>
    `;

    document.querySelector('#update-post-form').addEventListener('submit', newPost);
}

document.getElementById('update-btn').addEventListener('click', showUpdateForm);