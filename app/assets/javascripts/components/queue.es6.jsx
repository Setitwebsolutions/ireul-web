class Queue extends React.Component {
  render() {
    let songQueue;

    if (typeof this.props.songs === 'undefined' || this.props.songs.length === 0) {
      songQueue = React.DOM.div(null, 'Empty!');
    } else {
      songQueue = React.createElement(SongList, {
        key: this.props.title,
        songs: this.props.songs,
        tabular: false
      });
    }

    return (
      <div className={this.props.className}>
        <div className="queue-title">{this.props.title}</div>
        {songQueue}
      </div>
    );
  }
}

Queue.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string,
  songs: React.PropTypes.arrayOf(React.PropTypes.object)
};
