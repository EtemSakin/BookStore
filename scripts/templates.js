function getBookCardsHtml(indexBook) {
  const book = books[indexBook];

  return `
    <article class="book-card">
      <h2>${escapeHtml(book.name)}</h2>

      <img
        src="${book.cover}"
        alt="Cover von ${escapeHtml(book.name)}"
        class="cover-img"
      >

      <div class="book-info-section info-text">
        <p class="book-info"><strong>Autor:</strong> ${escapeHtml(book.author)}</p>
        <p><strong>Erschien:</strong> ${book.publishedYear}</p>
        <p><strong>Genre:</strong> ${escapeHtml(book.genre)}</p>
      </div>

      <div class="like-and-price">
        <p class="price">${book.price.toFixed(2)}€</p>

        <div class="like-amount">
          <button
            id="likeButton-${indexBook}"
            class="like-button"
            type="button"
            aria-pressed="${book.liked}"
            aria-label="${book.liked ? "Gefällt mir entfernen" : "Gefällt mir"}"
            onclick="like(${indexBook})"
          >
            <img
              src="./assets/icons/heart.png"
              alt=""
              aria-hidden="true"
              class="${book.liked ? "liked" : ""}"
            />
          </button>
          <p aria-label="Anzahl Likes">${book.likes}</p>
        </div>
      </div>

      <div class="separator" role="separator"></div>

      <h3>Kommentare</h3>

      <div class="comments-container">
        ${getBooksCommentsHtml(indexBook)}
      </div>

      <div class="input-comment">
        <form onsubmit="addComment(event, ${indexBook})" id="commentForm-${indexBook}">
          <div class="input-group">
            <label for="userName-${indexBook}">Name:</label>
            <input
              type="text"
              id="userName-${indexBook}"
              name="name"
              placeholder="Dein Name..."
              required
            >
          </div>

          <div class="input-group">
            <label for="userComment-${indexBook}">Dein Kommentar:</label>
            <textarea
              id="userComment-${indexBook}"
              name="comment"
              rows="2"
              placeholder="Was sagst du zu diesem Buch?"
              required
            ></textarea>
          </div>

          <div class="send-comment-button-container">
            <button type="submit" class="send-comment-button" aria-label="Kommentar senden">
              <img src="./assets/icons/send.png" alt="" aria-hidden="true" class="send-icon">
            </button>
          </div>
        </form>
      </div>
    </article>
  `;
}

function getBooksCommentsHtml(indexBook) {
  const comments = books[indexBook].comments;

  if (!comments.length) {
    return `<p class="no-comments">Noch keine Kommentare vorhanden.</p>`;
  }

  let html = "";
  for (let i = 0; i < comments.length; i++) {
    html += `
      <div class="comment-box info-text">
        <p><strong>${escapeHtml(comments[i].name)}</strong>: ${escapeHtml(comments[i].comment)}</p>
      </div>
    `;
  }
  return html;
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
