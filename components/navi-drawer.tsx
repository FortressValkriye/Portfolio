import styles from "~/styles/NaviLayout.module.scss";
import Link from "next/link";
import { Component } from "react";
import SettingsPopup from "./settings-popup";
interface NaviDrawerProps {}

interface NaviDrawerState {
  opened: boolean;
  isJustOpened: boolean;
  isSettingsPopupOpened: boolean;
}

export default class NaviDrawer extends Component<
  NaviDrawerProps,
  NaviDrawerState
> {
  constructor(props) {
    super(props);

    this.state = {
      opened: false,
      isJustOpened: false,
      isSettingsPopupOpened: false,
    };

    /*

      ES6 React.Component doesn't auto bind methods to itself. 
      You need to bind them yourself in constructor. 

      Source: https://stackoverflow.com/a/33973758
    
    */

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  close() {
    document.getElementById(styles["navi-drawer-container"]).style.width =
      "0rem";
    setTimeout(
      () => this.setState({ opened: false, isJustOpened: false }),
      300
    );
  }

  open() {
    this.setState({ opened: true });

    setTimeout(() => this.setState({ isJustOpened: true }), 0);
  }

  render() {
    return (
      <div>
        {this.state.isSettingsPopupOpened ? (
          <SettingsPopup
            onClose={() => this.setState({ isSettingsPopupOpened: false })}
          />
        ) : null}

        <div
          onClick={!this.state.opened ? this.open : null}
          className={`${styles["menu-button"]} material-icons`}
        >
          menu
        </div>

        {this.state.opened ? (
          <div>
            <div
              onClick={this.close}
              className={`${styles["navi-focus-box"]}`}
            ></div>
            <div
              id={styles["navi-drawer-container"]}
              className={this.state.isJustOpened ? styles["just-opened"] : null}
            >
              <div className={styles["navi-drawer"]}>
                <div className={`${styles["icon-list"]} ${styles["content"]}`}>
                  <div
                    className={`material-icons ${styles["settings-button"]}`}
                    onClick={() =>
                      this.setState({ isSettingsPopupOpened: true })
                    }
                  >
                    settings
                  </div>
                </div>
                <div></div>
                <div
                  className={`${styles["content-list"]} ${styles["content"]}`}
                >
                  <Link href="/">Home</Link>
                  <Link href="/newsletter">Newsletter</Link>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
