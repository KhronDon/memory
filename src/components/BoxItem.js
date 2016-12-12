import React, { Component } from 'react'
import styles from '../styles/BoxItem.sass'

const CARDBACK = 'https://hydra-media.cursecdn.com/hearthstone.gamepedia.com/thumb/4/4c/Card_back-Pandaria.png/200px-Card_back-Pandaria.png?version=21f7de7534dda27a0df0f9113b27ec68'

class BoxItem extends Component {

  static propTypes = {
    image: React.PropTypes.string,
    isUp: React.PropTypes.bool,
    handleClick: React.PropTypes.func
  }

  render () {
    return <td
      className={styles.root}
      onClick={() => this.props.handleClick()}
      style={{ backgroundImage: `url(${this.props.isUp ? this.props.image : CARDBACK})` }} >&nbsp;</td>
  }
}

export default BoxItem
