import { Color } from "./color";
import { MessageElement } from "./messageElement";
import { ProfileReactProps } from "./reactProps";
import { CHECKED_DATA_ATTRIBUTE } from "../pageScript/settings";

class ProfileChecker {
    private readonly userName: Element;

    constructor(userNameElement: Element) {
        this.userName = userNameElement;
    }

    run() {
        this.userName.setAttribute(CHECKED_DATA_ATTRIBUTE, "true");
        const reactProps = new ProfileReactProps(this.userName).get();
        const isUserPossiblySensitive = Boolean(reactProps.user.possibly_sensitive);
        if (!isUserPossiblySensitive) return;

        const color = new Color().textColor;

        const messageElement = new MessageElement("account", color, "accountShadowbanned");
        const userDescription = document.querySelector("[data-testid='UserDescription']");
        if (!userDescription) throw new Error("Failed to get user description of profile");
        userDescription.insertAdjacentElement("afterend", messageElement.element);
    }
}

export { ProfileChecker };
