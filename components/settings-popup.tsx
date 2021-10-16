import styles from "../styles/SettingsPopup.module.scss";

import { Component } from "react";

interface SettingsPopupProps {
    onClose: (component?) => void;
}
interface SettingsPopupState {
    theme: "dracula-night" | "dracula-light"; 
}

export default class SettingsPopup extends Component<SettingsPopupProps, SettingsPopupState> {
    constructor(props: SettingsPopupProps){
        super(props);
        this.onClose = props.onClose;
        this.state = { theme: "dracula-light" };
    };
    onClose: SettingsPopupProps["onClose"];

    render(){
        return (<div className={`${styles["settings-popup-background"]}`}
        onClick={() => this.onClose()}>
            <div className={`${styles["settings-popup"]}`}></div>
        </div>)
    }
}