import styles from "~/styles/NaviLayout.module.scss";
import Link from "next/link";
import { Component } from "react";

interface NaviDrawerProps {}

interface NaviDrawerState {
  opened: boolean;
}

export default class NaviDrawer extends Component<
  NaviDrawerProps,
  NaviDrawerState
> {
  constructor(props) {
    super(props);

    this.state = { opened: false };

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
    setTimeout(() => this.setState({ opened: false }), 300);
  }

  open() {
    this.setState({ opened: true });
  }

  render() {
    return (
      <div>
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
            <div id={styles["navi-drawer-container"]}>
              <div className={styles["navi-drawer"]}>
              <div className={`${styles["icon-list"]} ${styles["content"]}`}>
                  <div className="material-icons">settings</div>
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
