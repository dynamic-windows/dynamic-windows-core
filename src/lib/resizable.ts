/**
 * Element that can change its size.
 */
export interface Resizable {
    /**
     * @param w - new element width
     * @param h - new element height
     */
    resize(w: number, h: number): void;
}