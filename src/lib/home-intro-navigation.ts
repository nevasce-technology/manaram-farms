/** True only on a full document load that lands directly on Home. Resets on refresh. */
let loadedDirectlyOnHome = window.location.pathname === "/";

/** Set when client-side routing navigates to Home after the initial page load. */
let routedToHome = false;

export function shouldPlayHomeIntro(): boolean {
  return loadedDirectlyOnHome && !routedToHome;
}

export function markRoutedToHome(): void {
  routedToHome = true;
}
