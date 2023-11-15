import React, { Component } from "react";
import ArticleList from "./ArticleList";
import newsService from "../service/newsService";
import ErrorAlert from "../components/common/ErrorAlert/ErrorAlert";

export default class Test extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: "",
  };

  async retrieveArticles() {
    try {
      this.setState({ isLoading: true });
      const response = await newsService.retrieveArticles();
      this.setState({ articles: response });
    } catch (error) {
      switch (error.code) {
        case "ERR_BAD_REQUEST":
          this.setState({ error: "Nu a fost gasit rezultatul" });
          break;
        default:
          this.setState({ error: "A aparut o eroare." });
      }
    } finally {
      this.setState({ isLoading: false });
    }
  }

  async componentDidMount() {
    this.retrieveArticles();
  }

  render() {
    const { articles, error, isLoading } = this.state;

    if (isLoading) {
      return <p>Astept dupa rezultate...</p>;
    }

    return (
      <div>
        {error?.length > 0 && <ErrorAlert errors={error} />}
        <button onClick={() => this.retrieveArticles()}>Refresh</button>
        {articles.length > 0 ? <ArticleList articles={articles} /> : null}
      </div>
    );
  }
}
