import {Window} from "./window";

/**
 * Element that exists with element structure - it can have children and parent.
 * If element is root, method getParent() should return null;
 */
export interface Associated {

    /**
     * @return {Array} of children elements.
     */
    getChildren(): Window[];

    /**
     * Returns parent element.
     * @return {Window | null} if parent exists or if element is a root.
     */
    getParent(): Window | null;
}