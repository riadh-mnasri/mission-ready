import { Injectable, inject, signal } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";

const CHECK_INTERVAL_MS = 60 * 60 * 1000;

@Injectable({ providedIn: "root" })
export class PwaUpdateService {
  private readonly swUpdate = inject(SwUpdate);

  readonly updateAvailable = signal(false);

  constructor() {
    if (!this.swUpdate.isEnabled) return;

    this.swUpdate.versionUpdates.subscribe((event) => {
      if (event.type === "VERSION_READY") {
        this.updateAvailable.set(true);
      }
    });

    setInterval(() => this.swUpdate.checkForUpdate(), CHECK_INTERVAL_MS);
  }

  reload(): void {
    this.swUpdate.activateUpdate().finally(() => document.location.reload());
  }
}
