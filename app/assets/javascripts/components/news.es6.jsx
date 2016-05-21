class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
  }

  componentDidMount() {
    this.loadPage(1);
  }

  loadPage(page) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        const res = JSON.parse(xhr.responseText);
        this.setState({ articles: res.results });
      }
    };
    xhr.open('get', `articles.json?page=${page}`, true);
    xhr.setRequestHeader('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content);
    xhr.send();
  }

  formatArticle(data) {
    const timestamp = new Date(data.created_at)
      .toLocaleString(undefined, { timeZoneName: 'short' });

    return (
      <div className="news-article" key={`news-article-${data.id}`}>
        <h4 className="news-article-title">{data.title}</h4>
        <h6 className="news-article-created-at">{timestamp}</h6>
        <div className="news-article-content" dangerouslySetInnerHTML={{ __html: data.content }}></div>
        <div className="news-article-author">— {data.author}</div>
      </div>
    );
  }

  render() {
    const articles = this.state.articles.map(this.formatArticle);

    return (
      <div className="news-articles">
        {articles}
        <a href="news">All news</a>
      </div>
    );
  }
}
