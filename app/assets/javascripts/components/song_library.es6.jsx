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
      default:
        break;
    }

    return React.DOM.div({ className: 'song-library', id: 'song-library' },
      React.createElement(Tabs, {
        tabs: ['Search', 'Browse'],
        selectedPage: this.state.selectedPage,
        onChange: this.changePage.bind(this),
        className: 'tabs'
      }),
      content
    );
  }
}

SongLibrary.defaultProps = {
  timeOffset: 0
};

SongLibrary.propTypes = {
  timeOffset: React.PropTypes.number
};
