import { Component, ViewContainerRef } from "@angular/core";
import { AbstractMenuPageComponent } from "../abstract-menu-page-component";
import { MenuComponent } from "../menu/menu.component";
import { Feedback } from "nativescript-feedback";
import { ToastService } from "./toast.service";
import { ToastHelper } from "./helpers/toast-helper";
import { FeedbackHelper } from "./helpers/feedback-helper";
import { FancyalertHelper } from "./helpers/fancyalert-helper";
import { ModalDialogService } from "nativescript-angular";
import { SnackbarHelper } from "./helpers/snackbar-helper";
import { LocalNotificationsHelper } from "./helpers/localnotifications-helper";
import { PluginInfo } from "../shared/plugin-info";
import { PluginInfoWrapper } from "../shared/plugin-info-wrapper";

@Component({
  selector: "Feedback",
  moduleId: module.id,
  templateUrl: "./feedback.component.html",
  styleUrls: ["feedback-common.css"]
})
export class FeedbackComponent extends AbstractMenuPageComponent {
  fancyAlertHelper: FancyalertHelper;
  feedbackHelper: FeedbackHelper;
  localNotificationsHelper: LocalNotificationsHelper;
  snackbarHelper: SnackbarHelper;
  toastHelper: ToastHelper;

  constructor(protected menuComponent: MenuComponent,
              protected vcRef: ViewContainerRef,
              protected modalService: ModalDialogService,
              private toastService: ToastService) {
    super(menuComponent, vcRef, modalService);

    this.fancyAlertHelper = new FancyalertHelper();
    this.feedbackHelper = new FeedbackHelper();
    this.localNotificationsHelper = new LocalNotificationsHelper();
    this.snackbarHelper = new SnackbarHelper();
    this.toastHelper = new ToastHelper(this.toastService);
  }

  protected getPluginInfo(): PluginInfoWrapper {
    return new PluginInfoWrapper(
        "Add some 💥 to your app by going beyond the default alert. So here's a couple of alternative ways to feed something back to your users.",
        Array.of(
            new PluginInfo(
                "nativescript-feedback",
                "Feedback",
                "https://github.com/EddyVerbruggen/nativescript-feedback",
                "Non-blocking textual feedback with custom icons and any colors you like."
            ),

            new PluginInfo(
                "nativescript-toast",
                "Toast",
                "https://github.com/TobiasHennig/nativescript-toast",
                "A more toned done way of providing non-blocking textual feedback."
            ),

            new PluginInfo(
                "nativescript-fancyalert",
                "FancyAlert",
                "https://github.com/NathanWalker/nativescript-fancyalert",
                "Want to get in your user's face? Throw an alert at them! Unlike the default alert this one is fully customizable."
            ),

            new PluginInfo(
                "nativescript-snackbar",
                "Snackbar",
                "https://github.com/bradmartin/nativescript-snackbar",
                "Use the Material Design Snackbar in your app. 🍭🍫"
            ),

            new PluginInfo(
                "nativescript-local-notifications",
                "Local Notifications",
                "https://github.com/EddyVerbruggen/nativescript-local-notifications",
                "Show notifications when your app is inactive 😴. Just like push notifications, but a few orders of magnitude easier to set up."
            )
        )
    );
  }

}