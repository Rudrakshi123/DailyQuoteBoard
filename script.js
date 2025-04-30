
  
    const quoteList = document.getElementById("quote-list");

    function loadQuotes() {
      const quotes = JSON.parse(localStorage.getItem("quotes") || "[]");
      quoteList.innerHTML = "";
      quotes.forEach((quote, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <p><strong>"${quote.content}"</strong></p>
          <p>- ${quote.author}</p>
          <button class="like-btn" onclick="likeQuote(${index})">❤️ ${quote.likes}</button>
        `;
        quoteList.appendChild(card);
      });
    }

    function postQuote() {
      const author = document.getElementById("author").value.trim();
      const content = document.getElementById("content").value.trim();
      if (!author || !content) return;

      const newQuote = { author, content, likes: 0 };
      const quotes = JSON.parse(localStorage.getItem("quotes") || "[]");
      quotes.unshift(newQuote);
      localStorage.setItem("quotes", JSON.stringify(quotes));

      document.getElementById("author").value = "";
      document.getElementById("content").value = "";
      loadQuotes();
    }

    function likeQuote(index) {
      const quotes = JSON.parse(localStorage.getItem("quotes") || "[]");
      quotes[index].likes++;
      localStorage.setItem("quotes", JSON.stringify(quotes));
      loadQuotes();
    }

    window.onload = loadQuotes;
  