class IrcWrapper extends React.Component {
  componentDidMount() {
    // Reparenting iframes with appendChild() causes a reload, which kills the IRC connection
    // Instead, create the iframe outside the component and then
    // position: absolute it
    // To change chatroom provider, just change the iframe source and required props.
    const wrapper = document.getElementById('irc-wrapper-container') || document.createElement('div');
    const { channel, server, nickPrefix } = this.props;
    const target = this.refs.targetAnchor;

    if (!window.ircWrapper) { window.ircWrapper = {}; }
    if (!window.ircWrapper.rendered) {
      wrapper.id = 'irc-wrapper-container';
      wrapper.style.visibility = 'hidden';
      wrapper.style.backgroundColor = '#181818';
      document.body.appendChild(wrapper);

      ReactDOM.render(<iframe
        id="irc-iframe"
        src={`https://kiwiirc.com/client/${server}/?nick=${nickPrefix}|?&theme=cli${channel}`}
        style={{
          border: 0,
          width: target.clientWidth,
          height: target.clientHeight,
          top: target.offsetTop,
          left: target.offsetLeft,
          position: 'absolute'
        }}
      />, wrapper);
      window.ircWrapper.rendered = true;
    }
    document.getElementById('irc-iframe').style.visibility = 'visible';

    window.addEventListener('resize', _.throttle(this.setWrapperPosition.bind(this), 50));
    this.setWrapperPosition();
  }

  componentWillUnmount() {
    const iframe = document.getElementById('irc-iframe');
    iframe.style.visibility = 'hidden';
    iframe.style.height = '0px';
  }

  setWrapperPosition() {
    const wrapper = document.getElementById('irc-iframe');
    const anchor = this.refs.targetAnchor;

    wrapper.style.top = `${anchor.offsetTop}px`;
    wrapper.style.left = `${anchor.offsetLeft}px`;
    wrapper.style.width = `${anchor.clientWidth}px`;
    wrapper.style.height = `${anchor.clientHeight}px`;
  }


  render() {
    return (
      <div
        className="irc-wrapper"
        ref="targetAnchor"
        style={{ width: '100%', height: '500px' }}
      >
      </div>
    );
  }
}

IrcWrapper.propTypes = {
  channel: React.PropTypes.string,
  server: React.PropTypes.string,
  nickPrefix: React.PropTypes.string
};
