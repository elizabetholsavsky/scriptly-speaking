const showCommentUpdateForm = (event) => {
    event.preventDefault();

    const originalCommentText = document.getElementById(`comment-text`).textContent.trim();
    const updateCard = document.getElementById(`comment-card`);
    const comment_id = event.target.dataset.id;

    updateCard.innerHTML = `
    <form id="comment-form">
        <div>
            <br>
            <label class="med-yellow-title" for="comment-update">Update comment</label> <br>
            <textarea id="comment-update" rows="3">${originalCommentText}</textarea>
            <div class="btn-container">
                <button type="submit" class="submit-btn" id="send-comment-btn">SUBMIT</button>
            </div> 
        </div>
    </form>
    `;

    const updateComment = async (event) => {
        event.preventDefault();
    
        const comment_text = document.getElementById('comment-update').value.trim();
    
        const response = await fetch(`/api/comment/${comment_id}`, {
            method: 'PUT',
            body: JSON.stringify({
                comment_text,
            }),
            headers: {
                'Content-Type': 'application/json',
                },
            });
    
            if (response.ok) {
                document.location.reload();
            } else {
                alert(response.statusText);
            }
        
    };
    
    document.getElementById('send-comment-btn').addEventListener('click', updateComment);

};

const commentUpdateBtn = document.querySelectorAll('#comment-update-btn');

for (let i = 0; i < commentUpdateBtn.length; i++) {
        commentUpdateBtn[i].addEventListener('click', showCommentUpdateForm);
};
