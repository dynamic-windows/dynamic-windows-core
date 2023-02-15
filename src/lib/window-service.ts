import {Window} from "./window";

/**
 * Window Service provides functionality of creating window.
 * Return type should make possible to identify created instance of the window.
 */
export interface WindowService<T> {
    createWindow(window: typeof Window): T;
}