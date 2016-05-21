class SongLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedPage: 'Search' };
    this.initialLoad = true; // Used to disable search box focus on initial load
  }

  componentDidMount() {
    this.initialLoad = false;
  }

  changePage(id) {
    this.setState({ selectedPage: id });
  }

  render() {
    let content;

    switch (this.state.selectedPage) {
      case 'Search':
        content = React.createElement(SongSearcher, {
          timeOffset: this.props.timeOffset,
          initialLoad: this.initialLoad
        });
        break;
      case 'Browse':
        content = React.createElement(SongBrowser, {
          timeOffset: this.props.timeOffset
        });
        break;
      case 'Chat':
        content = React.createElement(IrcWrapper, {
          server: this.props.chat.server,
          channel: this.props.chat.channel,
          nickPrefix: this.props.chat.nick_prefix
        });
        break;
      case 'News':
        content = React.createElement(News);
        break;
      default:
        break;
    }

    return React.DOM.div({ className: 'song-library', id: 'song-library' },
      React.createElement(Tabs, {
        tabs: ['Search', 'Browse', 'Chat', 'News'],
        selectedPage: this.state.selectedPage,
        onChange: this.changePage.bind(this),
        className: 'tabs'
      }),
      content
    );
  }
}

SongLibrary.defaultProps = {
  timeOffset: 0,
  chat: {}
};

SongLibrary.propTypes = {
  timeOffset: React.PropTypes.number,
  chat: React.PropTypes.object
};
